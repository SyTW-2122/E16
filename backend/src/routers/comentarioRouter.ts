let express = require('express');
import {comentarioModel} from '../models/comentario';
import {cuentaModel} from "../models/cuenta";
export const comentarioRouter = express.Router();

comentarioRouter.get('/comentario', async (req, res) => {
  const comentario = await comentarioModel.findOne({_id: req.body._id});
  if (!comentario) return res.status(404).json({error: 'Comentario no encontrado'});
  res.json(comentario);
});

comentarioRouter.post('/comentario', async (req, res) => {
  const {error} = comentarioRouter.validate(req.body);
  if (error) return res.status(401).json({error: error.details[0].message});
  // mejorarlo a que busque por id
  // const cuenta = await cuentaModel.findOne({_id: req.body._id});
  const cuenta = await cuentaModel.findOne({username: req.body.username});
  if (!cuenta) return res.status(404).json({error: 'Nombre de usuario no existe'});
  const comentarioNuevo = new comentarioModel({
    postedBy: cuenta._id,
    comment: req.body.comentario,
  });

  try {
    await comentarioNuevo.save();
    res.json(comentarioNuevo);
  } catch (error) {
    res.status(402).json({error});
  }
});
