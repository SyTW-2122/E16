var express = require('express');
import {puntoSubModel} from '../models/puntoSub';
export const puntoSubRouter = express.Router();

puntoSubRouter.get('/puntoSub', async (req, res) => {
  //const filter = req.body.nombreAlimento?{nombreAlimento: req.body.nombreAlimento.toString()}:{};
  const pointNameFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  //const locationFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  //const pointDescriptionFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  //const dificultyFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  //const priceEstimationFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  try {
    const puntoSubMatch = await puntoSubModel.find(pointNameFilter);
    //puntoSubRouter << await puntoSubModel.find(locationFilter);
    //puntoSubRouter << await puntoSubModel.find(pointDescriptionFilter);
    //puntoSubRouter << await puntoSubModel.find(dificultyFilter);
    //puntoSubRouter << await puntoSubModel.find(priceEstimationFilter);
    if (puntoSubMatch.length !== 0) {
      return res.json(puntoSubMatch);
    }
    return res.status(404).send('No se encontraron coincidencias de Puntos de Submarinismo.');
  } catch (error) {
    return res.status(500).send(error);
  }
});

puntoSubRouter.post('/puntoSub', async (req, res) => {
  console.log('Post puntoSub');
  const puntoSub = new puntoSubModel(req.body);
  try {
    await puntoSub.save();
    res.status(201).json(puntoSub);
  } catch (error) {
    res.status(400).send(error);
  }
});