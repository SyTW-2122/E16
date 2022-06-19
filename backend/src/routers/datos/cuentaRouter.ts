let express = require('express');
import {cuentaModel} from '../../models/cuenta';
export const cuentaRouter = express.Router();

// NO ES LOGIN NI REGISTRO. ÚNICAMENTE PARA RECUPERAR Y EXPONER LOS DATOS DE UNA CUENTA.

cuentaRouter.get('/', async (req, res) => {
  const usernameFilter = req.get('username');
  if (!usernameFilter) return res.status(401).json({error: 'No se indica el usuario en el header.'});

  try {
    const cuentasMatch = await cuentaModel.find({username: usernameFilter});
    if (cuentasMatch.length !== 0) {
      // find() devuelve un array de 1 elemento, así que solo devolvemos ese
      return res.json(cuentasMatch[0]);
    }
    return res.status(404).send('No se encontró.');
  } catch (error) {
    return res.status(500).send();
  }
});

cuentaRouter.patch('/', async (req, res) => {
  const usernameFilter = req.get('username');
  if (!usernameFilter) return res.status(404).json({error: 'No se indica el usuario en el header.'});

  const aux = await cuentaModel.find({username: usernameFilter});
  // find() devuelve un array de 1 elemento, así que solo usamos ese
  const cuentaEncontrada = aux[0];
  if (!cuentaEncontrada) return res.status(403).json({error: 'Cuenta no encontrada'});

  try {
    await cuentaModel.updateOne({_id: cuentaEncontrada._id},
        {$set: {
          username: req.body.username || cuentaEncontrada.username,
          name: req.body.name || cuentaEncontrada.name,
          surname: req.body.surname || cuentaEncontrada.surname,
          address: req.body.address || cuentaEncontrada.address,
        }});
    res.status(200).json(200);
  } catch (error) {
    res.status(500).send({error: "Fallo al actualizar datos."});
  }
});

cuentaRouter.delete('/', async (req, res) => {
  const usernameFilter = req.get('username');
  if (!usernameFilter) return res.status(404).json({error: 'No se indica el usuario en el header.'});

  const aux = await cuentaModel.find({username: usernameFilter});
  // find() devuelve un array de 1 elemento, así que solo usamos ese
  const cuentaEncontrada = aux[0];
  if (!cuentaEncontrada) return res.status(403).json({error: 'Cuenta no encontrada'});

  try {
    await cuentaModel.deleteOne({_id: cuentaEncontrada._id});
  } catch (error) {
    res.status(500).send({error: "Fallo al borrar datos."});
  }
});
