let mongoose = require('mongoose');
import {Perfil} from "./perfil";

/**
 * Clase Cuenta que contiene los datos personales del
 */
export class Cuenta {
  private username: Perfil;
  private name: string;
  private surname: string;
  private email: string; /** Se puede crear un struct para correo */
  private password: string;
  private address: string;

  constructor(private perfilUsuario: Perfil, private nombre: string,
    private apellidos: string, private correo: string,
    private contraseña: string, private dirección: string) {
    this.username = perfilUsuario;
    this.name = nombre;
    this.surname = apellidos;
    this.email = correo;
    this.password = contraseña;
    this.address = dirección;
  }
}

export const cuentaSchema = new mongoose.Schema({
  username: {
    type: String, // OBJECT ID. HAY QUE CAMBIARLO por el ID del Perfil
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
