/*
- Router() que nos permite crear rutas. Este lo almacenamos en una constante para utilizarla luego.

- Ruta de tipo POST pasamos como parametro el nombre de la ruta seguido de la función que ejecutara.
La funcion que se le pasa tiene dos parametros req y res

- Para probar nuestra ruta POST tomará el response res utilizará .json para crear un json y enviarlo de vuelta al usuario con el mensaje
*/

const router = require('express').Router()
const Cuenta = require('../models/cuenta')
const Joi = require('@hapi/joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Declaramos constantes del rango de los ID
const MAX_ID = 10000;
const MIN_ID = 1

// Esquema de registro con las valisdaciones de joi
const schemaRegister = Joi.object({
  nickname: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})

router.post('/login', async (req, res) => {
  // Validaciones de login
  const { error } = schemaLogin.validate(req.body)
  if(error) return res.status(400).json({error: error.details[0].message})
  
  // Validaciond e existencia
  const cuenta = await Cuenta.findOne({email: req.body.email})
  if(!cuenta) return res.status(400).json({error: 'Cuenta no encontrada'})

  // Validacion de password en la base de datos
  const validPassword = await bcrypt.compare(req.body.password, cuenta.password)
  if(!validPassword) return res.status(400).json({error: 'Constraseña invalida'})

  res.json({
    error: null,
    data: 'Bienvenido'
  })
  // Creando token
  const token = jwt.sign({
    name: cuenta.userProfile,
    email: cuenta.email,
    id: cuenta.userID
}, "palabra")

// Colocando el token en el header y el cuerpo de la respuesta
res.header('auth-token', token).json({
  error: null,
  data: { token },
  message: 'Bienvenido'
  })
})


router.post('/registro', async (req, res) => {
  // Dentro del método que invoca POST 
  // Usaremos la propiedad error del objeto que nos entrega schemaRegister.validate()
  const { error } = schemaRegister.validate(req.body)

  // Si este error existe, aqui se termina la ejecución devolviendonos el error
  if (error) {
    return res.status(400).json(
      { error: error.details[0].message }
    )
  }
  
  const isUserProfileExist = await Cuenta.findOne({ userProfile: req.body.userProfile});
  if (isUserProfileExist) {
    return res.status(400).json(
      {error: 'Nombre de usuario ya registrado'}
    )
  }

  const isEmailExist = await Cuenta.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(400).json(
      {error: 'Email ya registrado'}
    )
  }

  const salt = await bcrypt.genSalt(10)   //Nº aleatorio para encriptar
  const encriptedPassword = await bcrypt.hash(req.body.password, salt)

  let randomID =  Math.random() * (MAX_ID - MIN_ID) + MIN_ID;
  let isRandomIDExist = await Cuenta.findOne({ userID: req.body.userID });
  while (isRandomIDExist) {
    randomID =  Math.random() * (MAX_ID - MIN_ID) + MIN_ID;
    isRandomIDExist = await Cuenta.findOne({ userID: req.body.userID });
  }

  const cuentaNueva = new Cuenta({
    userProfile: req.body.nickname,
    userID: randomID,
    email: req.body.email,
    password: encriptedPassword
  });

  try {
    const savedAccount = await cuentaNueva.save()
    res.json({
      error: null,
      data: savedAccount
    })
  } catch (error) {
    res.status(400).json({error})
  }
})

module.exports = router