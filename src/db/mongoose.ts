var mongoose = require('mongoose');

const mongodb_url = /*process.env.MONGODB_URL ||*/ 'mongodb://127.0.0.1:27017/Diving-App';

mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,     // no soportada
  //useFindAndModify: false,  // no soportada
}).then(() => {
  console.log('Connection to MongoDB server established');
}).catch(() => {
  console.log('Unnable to connect to MongoDB server');
});

mongoose.connection.on('error', err => {
  console.log(err);
});
