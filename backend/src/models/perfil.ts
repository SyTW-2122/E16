const mongoose = require('mongoose');

// DATOS PÚBLICOS DEL USUARIO
export const perfilSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: String,
    required: false,
    trim: true,
  },
  license: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
});

export const perfilModel = mongoose.model('Perfiles', perfilSchema);
