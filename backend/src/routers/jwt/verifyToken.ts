require('dotenv').config();
const jwtToken = require('jsonwebtoken');
const config = require('../jwt/config');

export const verifyToken = (req, res, next) => {
  const token = req.header('token');
  // Validamos si no hay token
  if (!token) return res.status(401).json({error: 'Acceso denegado'});
  try {
    // Cambiar por la misma variable de entorno que en el login
    // const secret: string = config.JWTsecret;
    const secret = "Cambiar por variable";
    // Verificamos el token usando la dependencia de jwt y el método .verify
    const verified = jwtToken.verify(token, secret);
    // si el token es correcto nos devolvera los datos que pusimos en el token
    req.user = verified;
    console.log(req.user);
    // next() indica que el req paso la prueba y continue su camino
    next();
  } catch (error) {
    res.status(400).json({error: 'Token no valido, acceso denegado'});
  }
};

module.exports = verifyToken;