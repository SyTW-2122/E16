/* eslint-disable new-cap */
/*
- Router() que nos permite crear rutas. Este lo almacenamos en una constante para utilizarla luego.

- Ruta de tipo POST pasamos como parametro el nombre de la ruta seguido de la función que ejecutara.
La funcion que se le pasa tiene dos parametros req y res

- Para probar nuestra ruta POST tomará el response res utilizará .json para crear un json y enviarlo de vuelta al usuario con el mensaje
*/

export const registerRouter = require('express').Router();
// const cuentaModel = require('../models/cuenta');
import {cuentaModel} from "../models/cuenta";
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Esquema de registro con las valisdaciones de joi
const schemaRegister = Joi.object({
  nickname: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});

registerRouter.post('/login', async (req, res) => {
  // Validaciones de login
  const {error} = schemaLogin.validate(req.body);
  if (error) return res.status(400).json({error: error.details[0].message});

  // Validacion de existencia
  const cuenta = await cuentaModel.findOne({email: req.body.email});
  if (!cuenta) return res.status(400).json({error: 'Cuenta no encontrada'});

  // Validacion de password en la base de datos
  const validPassword = await bcrypt.compare(req.body.password, cuenta.password);
  if (!validPassword) return res.status(400).json({error: 'Constraseña invalida'});

  // Creando token
  const token = jwt.sign({
    name: cuenta.userProfile,
    email: cuenta.email,
    id: cuenta._id,
  }, "palabra");

  // Colocando el token en el header y el cuerpo de la respuesta
  res.header('auth-token', token).json({
    error: null,
    data: {token},
    message: 'Bienvenido',
  });

  res.json({
    error: null,
    data: 'Bienvenido',
  });
});

registerRouter.options('/registro', async (req, res) => {
  console.log('aaaaaaaaaaa');
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
});

registerRouter.post('/registro', async (req, res) => {
  console.log('bbbbbbbb');
  // Dentro del método que invoca POST
  // Usaremos la propiedad error del objeto que nos entrega schemaRegister.validate()
  const {error} = schemaRegister.validate(req.body);

  // Si este error existe, aqui se termina la ejecución devolviendonos el error
  if (error) {
    return res.status(400).json(
        {error: error.details[0].message},
    );
  }

  const isNicknameExist = await cuentaModel.findOne({nickname: req.body.userProfile});
  if (isNicknameExist) {
    return res.status(400).json(
        {error: 'Nombre de usuario ya registrado'},
    );
  }

  const isEmailExist = await cuentaModel.findOne({email: req.body.email});
  if (isEmailExist) {
    return res.status(400).json(
        {error: 'Email ya registrado'},
    );
  }

  const salt = await bcrypt.genSalt(10); // Nº aleatorio para encriptar
  const encriptedPassword = await bcrypt.hash(req.body.password, salt);

  const cuentaNueva = new cuentaModel({
    nickname: req.body.nickname,
    email: req.body.email,
    password: encriptedPassword,
  });

  try {
    const savedAccount = await cuentaNueva.save();
    res.json({
      error: null,
      data: savedAccount,
    });
  } catch (error) {
    res.status(400).json({error});
  }
});

// module.exports = registerRouter;