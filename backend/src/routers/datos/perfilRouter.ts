let express = require('express');
import {perfilModel} from '../../models/perfil';
import {cuentaModel} from "../../models/cuenta";
export const perfilRouter = express.Router();

perfilRouter.get('/Perfil', async (req, res) => {
  const filter = req.body.username?{username: req.body.username.toString()}:{};
  try {
    const perfilesMatch = await perfilModel.find(filter);
    if (perfilesMatch.length !== 0) {
      return res.json(perfilesMatch);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/*
perfilRouter.get('/Perfil/:id', async (req, res) => {
  try {
    const perfilMatches = await perfilModel.findById(req.params.id);
    if (!perfilMatches) {
      return res.status(404).send();
    }
    return res.json(perfilMatches);
  } catch (error) {
    return res.status(500).send();
  }
});
*/

perfilRouter.post('/Perfil', async (req, res) => {
  const {error} = cuentaModel.validate(req.body);
  if (error) return res.status(402).json({error: error.details[0].message});
  const perfil = new perfilModel({
    // userID: req.body.userID,
    username: req.body.username, // cambiar a ID más adelante
    age: req.body.age,
    license: req.body.license,
    description: req.body.description,
  });
  const filter = req.body.username?{username: req.body.username}:{};
  const perfilEncontrado = await cuentaModel.find(filter);
  if (!perfilEncontrado) return res.status(404).json({error: 'Cuenta no encontrada'});
  try {
    await perfil.save();
    await cuentaModel.update({_id: perfilEncontrado._id},
        {$set: {profileID: perfil._id}});
    res.status(201).json(perfil);
  } catch (error) {
    res.status(400).send(error);
  }
});
