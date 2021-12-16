var mongoose = require('mongoose');
/* 
*   Primera versión Clase Perfil de usuario
*/
type typeOfLicence = 'A' | 'B' | 'C';

export class Perfil {
  /**
   * Constructor de la clase Perfil. Contiene todos los datos públicos de la cuenta de usuario.
   * @param username Nombre de usuario
   * @param age Edad del usuario
   * @param license Tipo de licencia del usuario
   * @param aboutMe Descripción personalizada del perfil de usuario
   */
  private username: string = '';
  private age: number;
  private license: typeOfLicence; /** Crear una estructura para las licencias */
  private aboutMe: string = '';
  constructor(private nombreUsuario: string, private licencia: typeOfLicence, 
    private edad: number, private descripción: string) {
      this.username = nombreUsuario;
      this.age = edad;
      this.license = licencia;
      this.aboutMe = descripción;
  }

  /**
   * Getter del Nombre de usuario.
   */
  getUsername() {
    return this.username;
  }

  /**
   * Getter de la edad del usuario.
   */
  getAge() {
    return this.age;
  }

  /**
   * Getter de la licencia de submarinismo del usuario.
   */
  getLicense() {
    return this.license;
  }

  /**
   * Getter del texto personal del usuario.
   */
  getAboutMe() {
    return this.aboutMe;
  }
}

export const perfilSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  license: {
    type: String,
    required: true,
    trim: true,
    enum: ['A', 'B', 'C']
  },
  aboutMe: {
    type: String,
    required: true,
    trim: true,
  }
});
