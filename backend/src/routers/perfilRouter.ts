let express = require('express');
import {perfilModel} from '../models/perfil';
import {cuentaModel} from "../models/cuenta";
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

perfilRouter.post('/Perfil', async (req, res) => {
  const perfil = new perfilModel({
    userID: req.body.userID,
    age: req.body.age,
    license: req.body.license,
    aboutMe: req.body.aboutMe,
  });
  const finderID = await cuentaModel.findById(req.body.userID);
  try {
    await perfil.save();
    await cuentaModel.update({_id: finderID}, {$set: {profileID: perfil._id}});
    res.status(201).json(perfil);
  } catch (error) {
    res.status(400).send(error);
  }
});
