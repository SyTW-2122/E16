/* eslint-disable new-cap */
/*
- Router() que nos permite crear rutas. Este lo almacenamos en una constante para utilizarla luego.

- Ruta de tipo POST pasamos como parametro el nombre de la ruta seguido de la función que ejecutara.
La funcion que se le pasa tiene dos parametros req y res

- Para probar nuestra ruta POST tomará el response res utilizará .json para crear un json y enviarlo de vuelta al usuario con el mensaje
*/
require('dotenv').config();
export const registerRouter = require('express').Router();
import {cuentaModel} from "../../models/cuenta";

const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Esquema de registro con las valisdaciones de joi
const schemaRegister = Joi.object({
  username: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});

const schemaLoginEmail = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});

const schemaLoginUser = Joi.object({
  email: Joi.string().min(6).max(255).required(),
  password: Joi.string().min(6).max(1024).required(),
});

registerRouter.post('/login', async (req, res) => {
  // Validaciones de login
  const {emailError} = schemaLoginEmail.validate(req.body);
  const {usernameError} = schemaLoginUser.validate(req.body);
  if (emailError && usernameError) {
    return res.status(402).json({error: emailError.details[0].message,
      error2: usernameError.details[0].message});
  }

  // Validacion de existencia
  const cuenta = await cuentaModel.findOne({email: req.body.email}) ||
      await cuentaModel.findOne({username: req.body.email});
  if (!cuenta) return res.status(404).json({error: 'Cuenta no encontrada'});

  // Validacion de password en la base de datos
  const validPassword = await bcrypt.compare(req.body.password, cuenta.password);
  if (!validPassword) return res.status(403).json({error: 'Constraseña invalida'});
  
  try {
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({
      username: cuenta.username,
      email: cuenta.email,
      id: cuenta._id,
    }, secret);

    res.json({
      error: null,
      data: {token},
      username: cuenta.username,
      message: 'Bienvenido',
    });
    return res.status(200).send();
  } catch (error) {
    return res.status(501).send('Error al generar el token');
  }
});

registerRouter.post('/registro', async (req, res) => {
  // Usaremos la propiedad error del objeto que nos entrega schemaRegister.validate()
  const {error} = schemaRegister.validate(req.body);

  // Si este error existe, aqui se termina la ejecución devolviendonos el error
  if (error) return res.status(400).json({error: error.details[0].message});

  const isUsernameExist = await cuentaModel.findOne({username: req.body.username});
  if (isUsernameExist) return res.status(401).json({error: 'Nombre de usuario ya registrado'});

  const isEmailExist = await cuentaModel.findOne({email: req.body.email});
  if (isEmailExist) return res.status(402).json({error: 'Email ya registrado'});

  const salt = await bcrypt.genSalt(10); // Nº aleatorio para encriptar
  const encriptedPassword = await bcrypt.hash(req.body.password, salt);

  const cuentaNueva = new cuentaModel({
    username: req.body.username,
    email: req.body.email,
    password: encriptedPassword,
  });

  try {
    const savedAccount = await cuentaNueva.save();
    return res.status(200).json({
      error: null,
      data: savedAccount,
    });
  } catch (error) {
    return res.status(403).json("Fallo al salvar la cuenta.");
  }
});