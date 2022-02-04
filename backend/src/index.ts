const express = require('express');
import './db/mongoose';
const morgan = require('morgan');

import {cuentaRouter} from './routers/cuentaRouter';
import {localizacionRouter} from './routers/localizacionRouter';
import {perfilRouter} from './routers/perfilRouter';
import {puntoSubRouter} from './routers/puntoSubRouter';
import {zonaRouter} from './routers/zonaRouter';
import {registerRouter} from './routers/registro.routes';

const cors = require('cors'); // Dependencia
const dashboardRoutes = require('./routers/dashboard');
const verifyToken = require('./routers/verifyToken');

// Creamos la variable de configuración
const corsOptions = {
  // Aqui debemos reemplazar el * por el dominio de nuestro front
  origin: 'http://localhost:4200/',
  // Es necesario para navegadores antiguos o algunos SmartTVs
  optionsSuccessStatus: 200,
};

const app = express();
app.use(morgan('dev')); // comunica mejor los fallos
app.use(express.json());
app.use(cuentaRouter);
app.use(localizacionRouter);
app.use(perfilRouter);
app.use(puntoSubRouter);
app.use(zonaRouter);

app.use('/api/dashboard', verifyToken, dashboardRoutes);
app.use(registerRouter);
app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
