var express = require('express');
import './db/mongoose';

import {perfilRouter} from './routers/perfilRouter';
//import {platoRouter} from './routers/platosRouter';
//import {menuRouter} from './routers/menusRouter';

const app = express();
app.use(express.json());
app.use(perfilRouter);
//app.use(platoRouter);
//app.use(menuRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});