//import * as express from 'express';
var express = require('express');
// import {perfilModel} from '../models/..';
export const perfilRouter = express.Router();

/**
 * Todo el código del manejo de las peticiones para Perfil.
 */

// para consultar
/*
perfilRouter.get('/ingredients', async (req, res) => {
  const filter = req.body.nombreAlimento?{nombreAlimento: req.body.nombreAlimento.toString()}:{};
  try {
    const alimentos10 = await perfilModel.find(filter);
    if (alimentos10.length !== 0) {
      return res.send(alimentos10);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

perfilRouter.get('/ingredients/:id', async (req, res) => {
  try {
    const alimentos = await perfilModel.findById(req.params.id);
    if (!alimentos) {
      return res.status(404).send();
    }
    return res.send(alimentos);
  } catch (error) {
    return res.status(500).send();
  }
});
*/
