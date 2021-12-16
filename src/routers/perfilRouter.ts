var express = require('express');
import {perfilModel} from '../models/perfil';
export const perfilRouter = express.Router();

/**
 * Todo el código del manejo de las peticiones para Perfil.
 */

// para consultar
perfilRouter.get('/perfil', async (req, res) => {
  //const filter = req.body.nombreAlimento?{nombreAlimento: req.body.nombreAlimento.toString()}:{};
  const filter = req.body.username?{username: req.body.username.toString()}:{};
  try {
    const perfilesMatch = await perfilModel.find(filter);
    if (perfilesMatch.length !== 0) {
      return res.send(perfilesMatch);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

/* // Getters adicionales
perfilRouter.get('/perfil/:id', async (req, res) => {
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

// para crearlos, post o put
perfilRouter.post('/perfil', async (req, res) => {
  const perfil = new perfilModel(req.body);
  try {
    await perfil.save();
    res.status(201).send(perfil);
  } catch (error) {
    res.status(400).send(error);
  }
});
