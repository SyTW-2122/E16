require('dotenv').config();
const jwtToken = require('jsonwebtoken');

export const verifyToken = (req, res, next) => {
  const token = req.header('token');
  if (!token) return res.status(401).json({error: 'No tienes token.'});

  try {
    const secret = process.env.JWT_SECRET;
    const verified = jwtToken.verify(token, secret);
    req.user = verified;
    res.locals.username = req.user.username;
    res.locals.id = req.user.id;
    res.locals.password = req.user.password;
    next();
  } catch (error) {
    res.status(402).json({error: 'Token de acceso no válido.'});
  }
};

module.exports = verifyToken;