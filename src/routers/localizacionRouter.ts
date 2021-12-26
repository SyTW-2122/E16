var express = require('express');
import {localizacionModel} from '../models/localizacion';
export const localizacionRouter = express.Router();

// Todo el código del manejo de las peticiones para localizacion.

// para consultar
localizacionRouter.get('/Localizacion', async (req, res) => {
  //const filter = req.body.nombreAlimento?{nombreAlimento: req.body.nombreAlimento.toString()}:{};
  const filter = req.body.locationName?{locationName: req.body.locationName.toString()}:{};
  try {
    const localizacionMatch = await localizacionModel.find(filter);
    if (localizacionMatch.length !== 0) {
      return res.send(localizacionMatch);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

localizacionRouter.post('/Localizacion', async (req, res) => {
  console.log('Post localizacion');
  const localizacion = new localizacionModel(req.body);
  try {
    await localizacion.save();
    res.status(201).send(localizacion);
  } catch (error) {
    res.status(400).send(error);
  }
});
