var express = require('express');
import {zonaModel} from '../models/zona';
export const zonaRouter = express.Router();

// Todo el código del manejo de las peticiones para zona.

// zonaRouter.get();

// para consultar
zonaRouter.get('/Zona', async (req, res) => {
  //const filter = req.body.nombreAlimento?{nombreAlimento: req.body.nombreAlimento.toString()}:{};
  const filter = req.body.zoneName?{zoneName: req.body.zoneName.toString()}:{};
  try {
    const zonaMatch = await zonaModel.find(filter);
    if (zonaMatch.length !== 0) {
      return res.send(zonaMatch);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

zonaRouter.post('/Zona', async (req, res) => {
  console.log('Post zona');
  const zona = new zonaModel(req.body);
  try {
    await zona.save();
    res.status(201).send(zona);
  } catch (error) {
    res.status(400).send(error);
  }
});