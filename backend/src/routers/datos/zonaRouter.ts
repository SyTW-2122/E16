let express = require('express');
import {zonaModel} from '../../models/zona';
export const zonaRouter = express.Router();

zonaRouter.get('/zona', async (req, res) => {
  const filter = req.body.zoneName?{zoneName: req.body.zoneName.toString()}:{};
  try {
    const zonaMatch = await zonaModel.find(filter);
    if (zonaMatch.length !== 0) {
      return res.json(zonaMatch);
    }
    return res.status(404).send('No se encontró ninguna zona.');
  } catch (error) {
    return res.status(500).send();
  }
});

zonaRouter.post('/zona', async (req, res) => {
  const zona = new zonaModel(req.body);
  try {
    await zona.save();
    res.status(201).json(zona);
  } catch (error) {
    res.status(400).send(error);
  }
});