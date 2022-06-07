let express = require('express');
import {cuentaModel} from '../../models/cuenta';
export const cuentaRouter = express.Router();

// NO ES LOGIN NI REGISTRO.
// ÚNICAMENTE PARA RECUPERAR Y EXPONER LOS DATOS DE UNA CUENTA.
cuentaRouter.get('/', async (req, res) => {
  const usernameFilter = req.body.username?{username: req.body.username}:{};
  try {
    const cuentasMatch = await cuentaModel.find(usernameFilter);
    if (cuentasMatch.length !== 0) {
      return res.json(cuentasMatch);
    }
    return res.status(404).send('No se encontró.');
  } catch (error) {
    return res.status(500).send();
  }
});

cuentaRouter.patch('/', async (req, res) => {
  const filterID = req.body._id?{_id: req.body._id}:{};
  const cuentaEncontrada = await cuentaModel.findById(filterID);
  if (!cuentaEncontrada) return res.status(404).json({error: 'No se encontró la cuenta'});

  let newNickname = "";
  if (typeof req.body.username != undefined) {
    newNickname = req.body.username;
  } else {
    newNickname = cuentaEncontrada.username;
  }

  let newName = "";
  if (typeof req.body.name != undefined) {
    newName = req.body.name;
  } else {
    newName = cuentaEncontrada.name;
  }

  let newSurname = "";
  if (typeof req.body.surname != undefined) {
    newSurname = req.body.surname;
  } else {
    newSurname = cuentaEncontrada.surname;
  }

  let newAddress = "";
  if (typeof req.body.address != undefined) {
    newAddress = req.body.address;
  } else {
    newAddress = cuentaEncontrada.address;
  }

  try {
    await cuentaModel.updateOne({_id: filterID},
        {$set: {
          username: newNickname,
          name: newName,
          surname: newSurname,
          address: newAddress,
        }});
    res.status(201).json(200);
  } catch (error) {
    res.status(400).send(error);
  }
});
