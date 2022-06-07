let mongoose = require('mongoose');

// DATOS PRIVADOS DEL USUARIO
export const cuentaSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: false,
    trim: true,
  },
  surname: {
    type: String,
    required: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: false,
    trim: true,
  },
  profileID: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Perfiles',
    required: false,
    trim: true,
  },
});

export const cuentaModel = mongoose.model('Cuentas', cuentaSchema);
