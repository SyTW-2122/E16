let express = require('express');
import {perfilModel} from '../../models/perfil';
import {cuentaModel} from "../../models/cuenta";
export const perfilRouter = express.Router();
export const publicPerfilRouter = express.Router();

// NOTA: Este get pertenece a publicPerfilRouter!!!!
// NO USA EL MIDDLEWARE de Verify Token
publicPerfilRouter.get('/perfil', async (req, res) => {
  // Lo recibe por el header (u otro sitio) porque no usa el verifyToken
  const usernameFilter = req.header('username');
  if (!usernameFilter) return res.status(401).json({error: 'No se ha obtenido el username del header'});

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

// NOTA: Los métodos post y patch pertenecen a perfilRouter!!
perfilRouter.post('/', async (req, res) => {
  const usernameFilter = res.locals.username;
  if (!usernameFilter) return res.status(401).json({error: 'No se ha obtenido el username de locals'});

  const {error} = cuentaModel.validate(req.body);
  if (error) return res.status(402).json({error: error.details[0].message});

  const perfil = new perfilModel({
    username: usernameFilter,
    age: req.body.age,
    license: req.body.license,
    description: req.body.description,
  });

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

perfilRouter.patch('/', async (req, res) => {
  console.log('PATCH: res.locals.username -> ' + res.locals.username);
  // const usernameFilter = res.locals.username;
  // console.log(usernameFilter);
  // if (!usernameFilter) return res.status(404).json({error: 'No se ha obtenido el username de locals'});

  /*
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
  */
});
