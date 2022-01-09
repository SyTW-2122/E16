var express = require('express');
import {localizacionModel} from '../models/localizacion';
export const localizacionRouter = express.Router();

localizacionRouter.get('/Localizacion', async (req, res) => {
  const filter = req.body.locationName?{locationName: req.body.locationName.toString()}:{};
  try {
    const localizacionMatch = await localizacionModel.find(filter);
    if (localizacionMatch.length !== 0) {
      return res.json(localizacionMatch);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

localizacionRouter.post('/Localizacion', async (req, res) => {
  const localizacion = new localizacionModel(req.body);
  try {
    await localizacion.save();
    res.status(201).json(localizacion);
  } catch (error) {
    res.status(400).send(error);
  }
});
