var express = require('express');
import {cuentaModel} from '../models/cuenta';
export const cuentaRouter = express.Router();

cuentaRouter.get('/cuenta', async (req, res) => {
  console.log("Hello World from /cuenta");
  const filter = req.body.userProfile?{userProfile: req.body.userProfile.toString()}:{};
  try {
    const cuentasMatch = await cuentaModel.find(filter);
    if (cuentasMatch.length !== 0) {
      return res.json(cuentasMatch);
    }
    return res.status(404).send('No se encontró.');
  } catch (error) {
    return res.status(500).send();
  }
});
  
cuentaRouter.post('/cuenta', async (req, res) => {
  console.log("Post to /Cuentas");
  const cuenta = new cuentaModel(req.body);
  try {
    await cuenta.save();
    res.status(201).json(cuenta);
  } catch (error) {
    res.status(400).send(error);
  }
});
