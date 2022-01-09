var express = require('express');
import './db/mongoose';
var morgan = require('morgan');

import {cuentaRouter} from './routers/cuentaRouter';
import {localizacionRouter} from './routers/localizacionRouter';
import {perfilRouter} from './routers/perfilRouter';
import {puntoSubRouter} from './routers/puntoSubRouter';
import {zonaRouter} from './routers/zonaRouter';

const app = express();
app.use(morgan('dev'));   // comunica mejor los fallos
app.use(express.json());
app.use(cuentaRouter);
app.use(localizacionRouter);
app.use(perfilRouter);
app.use(puntoSubRouter);
app.use(zonaRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
