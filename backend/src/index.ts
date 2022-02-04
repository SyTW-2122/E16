var express = require('express');
import './db/mongoose';
var morgan = require('morgan');

import {cuentaRouter} from './routers/cuentaRouter';
import {localizacionRouter} from './routers/localizacionRouter';
import {perfilRouter} from './routers/perfilRouter';
import {puntoSubRouter} from './routers/puntoSubRouter';
import {zonaRouter} from './routers/zonaRouter';

const cors = require('cors'); // Dependencia
const dashboardRoutes = require('./routers/dashboard')
const verifyToken = require('./routers/varifyToken')

// Creamos la variable de configuración
var corsOptions = {
  origin: 'http://localhost:4200/', // Aqui debemos reemplazar el * por el dominio de nuestro front
  optionsSuccessStatus: 200 // Es necesario para navegadores antiguos o algunos SmartTVs
}

const app = express();
app.use(morgan('dev'));   // comunica mejor los fallos
app.use(express.json());
app.use(cuentaRouter);
app.use(localizacionRouter);
app.use(perfilRouter);
app.use(puntoSubRouter);
app.use(zonaRouter);

app.use('/api/dashboard', verifyToken, dashboardRoutes);
app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
