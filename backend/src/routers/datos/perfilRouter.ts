let express = require('express');
import {perfilModel} from '../../models/perfil';
import {cuentaModel} from "../../models/cuenta";
export const perfilRouter = express.Router();

// NOTA: Este get debe ser utilizable por todo el mundo, es decir:
// NO USA EL MIDDLEWARE de Verify Token
perfilRouter.get('/perfil', async (req, res) => {
  const usernameFilter = req.get('username');
  if (!usernameFilter) return res.status(401).json({error: 'No se indica el usuario en el header.'});

  try {
    const perfilesMatch = await perfilModel.find({username: usernameFilter});
    if (perfilesMatch.length !== 0) {
      // find() devuelve un array de 1 elemento, así que solo devolvemos ese
      return res.json(perfilesMatch[0]);
    }
    return res.status(402).send();
  } catch (error) {
    return res.status(500).send();
  }
});

// NOTA: Estas peticiones de post y patch solo deberían poder ser usadas por usuario con cuenta.
// Es decir: tiene que pasar por el Middleware de Verify Token.
// SOLUCIÓN: Separar las peticiones en dos routers diferentes. TO DO!!
perfilRouter.post('/perfil', async (req, res) => {
  const {error} = cuentaModel.validate(req.body);
  if (error) return res.status(402).json({error: error.details[0].message});

  const perfil = new perfilModel({
    username: req.body.username,
    age: req.body.age,
    license: req.body.license,
    description: req.body.description,
  });

  const usernameFilter = req.get('username');
  if (!usernameFilter) return res.status(401).json({error: 'No se indica el usuario en el header.'});

  const aux = await cuentaModel.find({username: usernameFilter});
  // find() devuelve un array de 1 elemento, así que solo usamos ese
  const cuentaEncontrada = aux[0];
  if (!cuentaEncontrada) return res.status(403).json({error: 'Cuenta no encontrada'});

  try {
    await perfil.save();
    await cuentaModel.update({_id: cuentaEncontrada._id},
        {$set: {profileID: perfil._id}});
    res.status(201).json(perfil);
  } catch (error) {
    res.status(400).send(error);
  }
});

perfilRouter.patch('/perfil', async (req, res) => {
  const usernameFilter = req.get('username');
  if (!usernameFilter) return res.status(404).json({error: 'No se indica el usuario en el header.'});

  const aux = await perfilModel.find({username: usernameFilter});
  // find() devuelve un array de 1 elemento, así que solo usamos ese
  const perfilEncontrado = aux[0];
  if (!perfilEncontrado) return res.status(403).json({error: 'Cuenta no encontrada'});

  try {
    await perfilModel.updateOne({_id: perfilEncontrado._id},
        {$set: {
          username: req.body.username || perfilEncontrado.username,
          age: req.body.age || perfilEncontrado.age,
          license: req.body.license || perfilEncontrado.license,
          description: req.body.description || perfilEncontrado.description,
        }});
  } catch (error) {

  }
});
