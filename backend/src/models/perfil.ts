const mongoose = require('mongoose');
/*
*   Primera versión Clase Perfil de usuario
*/
export type typeOfLicence = 'A' | 'B' | 'C';

export class Perfil {
  /**
   * Constructor de la clase Perfil. Contiene todos los datos públicos de la cuenta de usuario.
   * @param username Nombre de usuario
   * @param age Edad del usuario
   * @param license Tipo de licencia del usuario
   * @param aboutMe Descripción personalizada del perfil de usuario
   */
  public _username: string = "";
  public _age: string;
  public _license: typeOfLicence; /** Crear una estructura para las licencias */
  public _description: string = '';
  constructor(username: string, license: typeOfLicence,
    age: string, description: string) {
    this._username = username;
    this._age = age;
    this._license = license;
    this._description = description;
  }

  /**
   * Getter de la edad del usuario.
   */
  getAge() {
    return this._age;
  }

  /**
   * Getter de la licencia de submarinismo del usuario.
   */
  getLicense() {
    return this._license;
  }

  /**
   * Getter del texto personal del usuario.
   */
  getAboutMe() {
    return this._description;
  }
}

export const perfilSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: String,
    required: true,
    trim: true,
  },
  license: {
    type: String,
    required: true,
    trim: true,
    enum: ['A', 'B', 'C'],
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

export const perfilModel = mongoose.model('Perfiles', perfilSchema);
