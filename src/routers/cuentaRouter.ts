var express = require('express');
import {cuentaModel} from '../models/cuenta';
export const cuentaRouter = express.Router();

// Todo el código del manejo de las peticiones para Perfil.

// para consultar
cuentaRouter.get('/Cuenta', async (req, res) => {
  //const filter = req.body.nombreAlimento?{nombreAlimento: req.body.nombreAlimento.toString()}:{};
  const filter = req.body.userProfile?{userProfile: req.body.userProfile.toString()}:{};
  try {
    const cuentasMatch = await cuentaModel.find(filter);
    if (cuentasMatch.length !== 0) {
      return res.send(cuentasMatch);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

cuentaRouter.post('/Cuenta', async (req, res) => {
  console.log('Post cuenta');
  const cuenta = new cuentaModel(req.body);
  try {
    await cuenta.save();
    res.status(201).send(cuenta);
  } catch (error) {
    res.status(400).send(error);
  }
});
