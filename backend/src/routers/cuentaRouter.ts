let express = require('express');
import {cuentaModel} from '../models/cuenta';
export const cuentaRouter = express.Router();

cuentaRouter.get('/cuenta', async (req, res) => {
  // const filterID = req.body._id?{_id: req.body._id}:{};
  const nicknameFilter = req.body.nickname?{nickname: req.body.nickname}:{};
  try {
    const cuentasMatch = await cuentaModel.find(nicknameFilter);
    if (cuentasMatch.length !== 0) {
      return res.json(cuentasMatch);
    }
    return res.status(404).send('No se encontró.');
  } catch (error) {
    return res.status(500).send();
  }
});


// Método a mejorar, pues crea una cuenta nueva con los mismo parámetros,
// elimina la anterior y guarda la cuenta nueva.
cuentaRouter.patch('/cuenta', async (req, res) => {
  // const filterID = req.body._id?{_id: req.body._id}:{};
  const nicknameFilter = req.body.nickname?{nickname: req.body.nickname}:{};
  const cuentaEncontrada = await cuentaModel.findOne(nicknameFilter);
  if (!cuentaEncontrada) return res.status(401).json({error: 'No se encontró la cuenta'});

  let newNickname = cuentaEncontrada.nickname;
  if (typeof req.body.nickname != undefined) {
    newNickname = req.body.nickname;
  }

  let newName = "";
  if (typeof req.body.name != undefined) {
    newName = req.body.name;
  }

  let newSurname = "";
  if (typeof req.body.surname != undefined) {
    newSurname = req.body.surname;
  }

  let newAddress = "";
  if (typeof req.body.address != undefined) {
    newAddress = req.body.address;
  }

  const cuentaNueva = new cuentaModel({
    _id: cuentaEncontrada._id,
    nickname: newNickname,
    name: newName,
    surname: newSurname,
    email: cuentaEncontrada.email,
    password: cuentaEncontrada.password,
    address: newAddress,
  });

  try {
    await cuentaModel.deleteOne({"_id": cuentaEncontrada._id});
    await cuentaNueva.save();
    res.status(201).json(cuentaNueva);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Intento de actualizar datos usando el updateOne()
/*
cuentaRouter.patch('/cuenta', async (req, res) => {
  const filterID = req.body._id?{_id: req.body._id}:{};
  const cuentaEncontrada = await cuentaModel.findOne(filterID);
  if (!cuentaEncontrada) return res.status(401).json({error: 'No se encontró la cuenta'});

  let newvalues = [];
  if (typeof req.body.nickname != undefined) {
    const newNickname = {$set: {nickname: req.body.nickname}};
    newvalues.push(newNickname);
  }

  if (typeof req.body.name != undefined) {
    const newName = {$set: {name: req.body.name}};
    newvalues.push(newName);
  }

  if (typeof req.body.surname != undefined) {
    const newSurname = {$set: {name: req.body.surname}};
    newvalues.push(newSurname);
  }

  if (typeof req.body.address != undefined) {
    const newAddress = {$set: {name: req.body.address}};
    newvalues.push(newAddress);
  }

  if (newvalues.length > 0) {
    try {
      cuentaModel.updateOne(filterID, newvalues, function(err, res) {});
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(400).send('No se han aportado nuevos datos');
  }
});
*/