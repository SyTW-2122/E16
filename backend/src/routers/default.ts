let express = require('express');

export const defaultRouter = express.Router();

// Router por defecto que recoge las peticiones no soportadas
defaultRouter.all('*', (_, res) => {
  res.status(501).send();
});
