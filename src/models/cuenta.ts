var mongoose = require('mongoose');
import { Perfil } from "./perfil"

/**
 * Verificador de formato de un email.
 * @param email Email a validar
 * @return  Retorna...
 * ```
 * comentario
 * ```
 */
const validateEmail = (email) => {
  return String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

/**
 * Clase Cuenta que contiene los datos personales del 
 */
export class Cuenta {
  private userProfile: Perfil;
  private name: string;
  private surname: string;
  private email: string; /** Se puede crear un struct para correo */
  private password: string;
  private address: string;
  
  constructor(private perfilUsuario: Perfil, private nombre: string, 
    private apellidos: string, private correo: string,
    private contraseña: string, private dirección: string) {
    this.userProfile = perfilUsuario;
    this.name = nombre;
    this.surname = apellidos;
    this.email = correo;
    this.password = contraseña;
    this.address = dirección;
  }

  getUsername() {
    return this.userProfile.getUsername();
  }
  
  getEmail() {
    return this.email;
  }

  getLicense() {
    return this.userProfile.getLicense();
  }

  getAboutMe() {
    return this.userProfile.getAboutMe();
  }

  passwordValidation(contraseña: string) {
    if (contraseña == this.password) {
      return true;
    } else {
      return false;
    }
  }
}

export const cuentaSchema = new mongoose.Schema({
  userProfile: {
    type: String, //OBJECT ID. HAY QUE CAMBIARLO por el ID del Perfil
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  surname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  }
});

export const cuentaModel = mongoose.model('Cuentas', cuentaSchema);
