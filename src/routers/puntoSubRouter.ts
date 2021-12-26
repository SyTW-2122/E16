var express = require('express');
import {puntoSubModel} from '../models/puntoSub';
export const puntoSubRouter = express.Router();

// Todo el código del manejo de las peticiones para puntoSub.

puntoSubRouter.get('/puntoSub', async (req, res) => {
  //const filter = req.body.nombreAlimento?{nombreAlimento: req.body.nombreAlimento.toString()}:{};
  const pointNameFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  const locationFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  const pointDescriptionFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  const dificultyFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  const priceEstimationFilter = req.body.pointName?{pointName: req.body.pointName.toString()}:{};
  try {
    const puntoSubMatch = await puntoSubModel.find(pointNameFilter);
    puntoSubRouter << await puntoSubModel.find(locationFilter);
    puntoSubRouter << await puntoSubModel.find(pointDescriptionFilter);
    puntoSubRouter << await puntoSubModel.find(dificultyFilter);
    puntoSubRouter << await puntoSubModel.find(priceEstimationFilter);
    if (puntoSubMatch.length !== 0) {
      return res.send(puntoSubMatch);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

puntoSubRouter.post('/puntoSub', async (req, res) => {
  console.log('Post puntoSub');
  const puntoSub = new puntoSubModel(req.body);
  try {
    await puntoSub.save();
    res.status(201).send(puntoSub);
  } catch (error) {
    res.status(400).send(error);
  }
});