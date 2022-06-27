let mongoose = require('mongoose');

// eslint-disable-next-line camelcase
const mongodb_url = `mongodb+srv://diving-app:diving@cluster0.hcjkr.mongodb.net/Diving-App?retryWrites=true&w=majority`;

mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection to MongoDB server established');
}).catch(() => {
  console.log('Unnable to connect to MongoDB server');
});

mongoose.connection.on('error', (err: any) => {
  console.log(err);
});
