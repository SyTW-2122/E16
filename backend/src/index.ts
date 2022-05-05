const express = require('express');
import './db/mongoose';
const morgan = require('morgan');

import {cuentaRouter} from './routers/datos/cuentaRouter';
import {localizacionRouter} from './routers/datos/localizacionRouter';
import {perfilRouter} from './routers/datos/perfilRouter';
import {puntoSubRouter} from './routers/datos/puntoSubRouter';
import {zonaRouter} from './routers/datos/zonaRouter';
import {registerRouter} from './routers/datos/registro';

const cors = require('cors'); // Dependencia
const dashboardRoutes = require('./routers/dashboard');
const verifyToken = require('./routers/verifyToken');

// Creamos la variable de configuración
const corsOptions = {
  // Aqui debemos reemplazar el * por el dominio de nuestro front
  origin: '*',
  // Es necesario para navegadores antiguos o algunos SmartTVs
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(morgan('dev')); // comunica mejor los fallos
app.use(express.json());
app.use(cuentaRouter);
app.use(localizacionRouter);
app.use(perfilRouter);
app.use(puntoSubRouter);
app.use(zonaRouter);

app.use('/api/dashboard', verifyToken, dashboardRoutes);
// app.use('/cuenta', verifyToken, dashboardRoutes);
// app.use(verifyToken, dashboardRoutes);
app.use(registerRouter);

// Crear servidor htpp

// import http from "http";
// import socketio from "socket.io";
// import sockets from "./routers/chat/sockets";

// const server = http.createServer(app);
// const io = socketio(server);
// sockets(io);


const port = 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
