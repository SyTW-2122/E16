let express = require('express');
import {perfilModel} from '../models/perfil';
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
  const perfil = new perfilModel(req.body);
  try {
    await perfil.save();
    res.status(201).json(perfil);
  } catch (error) {
    res.status(400).send(error);
  }
});
