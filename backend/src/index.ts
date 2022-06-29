const express = require('express');
import './db/mongoose';
const morgan = require('morgan');

import {cuentaRouter} from './routers/datos/cuentaRouter';
import {localizacionRouter} from './routers/datos/localizacionRouter';
import {perfilRouter} from './routers/datos/perfilRouter';
import {publicPerfilRouter} from './routers/datos/perfilRouter';
import {puntoSubRouter} from './routers/datos/puntoSubRouter';
import {zonaRouter} from './routers/datos/zonaRouter';
import {registerRouter} from './routers/datos/registro';

const cors = require('cors');
const verifyToken = require('./routers/jwt/verifyToken');


const corsOptions = {
  
  origin: '*', // Aqui debemos reemplazar el * por el dominio de nuestro front
  optionsSuccessStatus: 200, // Es necesario para navegadores antiguos o algunos SmartTVs
};

const app = express();
app.use(cors(corsOptions));
app.use(morgan('dev')); // comunica mejor los fallos
app.use(express.json());
app.use(localizacionRouter);
app.use(puntoSubRouter);
app.use(zonaRouter);
app.use(registerRouter);

// NOTA:  Tenemos dos routers para perfil: uno público para el get
//        y uno con el middleware para post y patch.
app.use(publicPerfilRouter);
app.use('/perfil', verifyToken, perfilRouter);
app.use('/cuenta', verifyToken, cuentaRouter);

// Crear servidor htpp
const http = require('http');
import chatSockets from "./routers/chat/ChatSockets";
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
chatSockets(io);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
