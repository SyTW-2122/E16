let express = require('express');
import {cuentaModel} from '../models/cuenta';
export const cuentaRouter = express.Router();

cuentaRouter.get('/cuenta', async (req, res) => {
  const filterID = req.body._id?{_id: req.body._id}:{};
  try {
    const cuentasMatch = await cuentaModel.find(filterID);
    if (cuentasMatch.length !== 0) {
      return res.json(cuentasMatch);
    }
    return res.status(404).send('No se encontró.');
  } catch (error) {
    return res.status(500).send();
  }
});

cuentaRouter.patch('/cuenta', async (req, res) => {
  const filterID = req.body._id?{_id: req.body._id}:{};
  const cuentaEncontrada = await cuentaModel.findOne(filterID);
  if (!cuentaEncontrada) return res.status(401).json({error: 'No se encontró la cuenta'});

  let newNickname = cuentaEncontrada.nickname;
  if (req.body.nickname.length > 0) {
    newNickname = req.body.nickname;
  }
  const cuentaNueva = new cuentaModel({
    _id: cuentaEncontrada._id,
    nickname: newNickname,
    name: req.body.name,
    surname: req.body.surname,
    email: cuentaEncontrada.email,
    password: cuentaEncontrada.password,
    address: req.body.address,
  });
  try {
    await cuentaModel.deleteOne({"_id": cuentaEncontrada._id});
    await cuentaNueva.save();
    res.status(201).json(cuentaNueva);
  } catch (error) {
    res.status(400).send(error);
  }
});
