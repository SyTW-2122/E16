
require('dotenv').config();
const jwtToken = require('jsonwebtoken');

const fs = require('fs');
const path = require('path');
const filePath = path.join('/mnt/d/Universidad/STW/E16/backend/', 'secret.txt');

export const verifyToken = (req, res, next) => {
  const token = req.header('token');
  // Validamos si no hay token
  if (!token) return res.status(401).json({error: 'No tienes token.'});
  try {
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) throw err;
      const secret = data.toString();
      try {
        const verified = jwtToken.verify(token, secret);
        req.user = verified;
        res.locals.username = req.user.username;
        res.locals.id = req.user.id;
        console.log(req.user);
        next(); // next() indica que el req paso la prueba y continue su camino
      } catch (error) {
        res.status(402).json({error: 'Token de acceso no válido.'});
      }
    });
  } catch (error) {
    console.log(token);
    res.status(400).json({error: 'Fallo al leer el secreto del fichero.'});
  }
};

module.exports = verifyToken;