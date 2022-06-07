let express = require('express');
import {perfilModel} from '../../models/perfil';
import {cuentaModel} from "../../models/cuenta";
export const perfilRouter = express.Router();

perfilRouter.get('/', async (req, res) => {
  console.log(req.header('username'));
  const filter = req.header.username?{username: req.header.username.toString()}:{};
  // const filter = req.header.userID?{username: req.header.userID.toString()}:{};
  // const filter = req.header.email?{username: req.header.email.toString()}:{};
  const perfilEncontrado = await perfilModel.find(filter);
  if (!perfilEncontrado) return res.status(403).json({error: 'Cuenta no encontrada'});
  try {
    const perfilesMatch = await perfilModel.find(filter);
    if (perfilesMatch.length !== 0) {
      return res.json(perfilesMatch);
    }
    return res.status(402).send();
  } catch (error) {
    return res.status(500).send();
  }
});

perfilRouter.post('/', async (req, res) => {
  const {error} = cuentaModel.validate(req.body);
  if (error) return res.status(402).json({error: error.details[0].message});
  const perfil = new perfilModel({
    username: req.body.username,
    age: req.body.age,
    license: req.body.license,
    description: req.body.description,
  });
  const filter = req.header.username?{username: req.header.username}:{};
  // const filter = req.header.userID?{username: req.header.userID.toString()}:{};
  // const filter = req.header.email?{username: req.header.email.toString()}:{};
  const cuentaEncontrada = await cuentaModel.find(filter);
  if (!cuentaEncontrada) return res.status(403).json({error: 'Cuenta no encontrada'});
  try {
    await perfil.save();
    await cuentaModel.update({_id: cuentaEncontrada._id},
        {$set: {profileID: perfil._id}});
    res.status(201).json(perfil);
  } catch (error) {
    res.status(400).send(error);
  }
});

perfilRouter.patch('/', async (req, res) => {
  const filter = req.header.username?{username: req.header.username}:{};
  // const filter = req.header.userID?{username: req.header.userID.toString()}:{};
  // const filter = req.header.email?{username: req.header.email.toString()}:{};
  const perfilEncontrado = await perfilModel.find(filter);
  if (!perfilEncontrado) return res.status(403).json({error: 'Cuenta no encontrada'});

  let newNickname = "";
  if (typeof req.body.username != undefined) {
    newNickname = req.body.username;
  } else {
    newNickname = perfilEncontrado.username;
  }

  let newName = "";
  if (typeof req.body.name != undefined) {
    newName = req.body.name;
  } else {
    newName = perfilEncontrado.name;
  }

  let newSurname = "";
  if (typeof req.body.surname != undefined) {
    newSurname = req.body.surname;
  } else {
    newSurname = perfilEncontrado.surname;
  }

  let newAddress = "";
  if (typeof req.body.address != undefined) {
    newAddress = req.body.address;
  } else {
    newAddress = perfilEncontrado.address;
  }

  try {
    await perfilModel.updateOne({_id: perfilEncontrado._id},
        {$set: {
          username: newNickname,
          name: newName,
          surname: newSurname,
          address: newAddress,
        }});
  } catch (error) {

  }
});
