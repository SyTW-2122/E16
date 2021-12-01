import { Perfil } from "./perfil"
/**
 * 
 */
export class Cuenta {
  private UserProfile: Perfil;
  private name: string;
  private surname: string;
  private age: number;
  private address: string;
  
  constructor(perfilUsuario: Perfil, nombre: string, apellidos: string,
    edad: number, dirección: string) {
    this.UserProfile = perfilUsuario;
    this.name = nombre;
    this.surname = apellidos;
    this.age = edad;
    this.address = dirección;
  }

  getUsername() {
    return this.UserProfile.getUsername();
  }
  
  getEmail() {
    return this.UserProfile.getEmail();
  }

  getLicense() {
    return this.UserProfile.getLicense();
  }

  getAboutMe() {
    return this.UserProfile.getAboutMe();
  }

  passwordValidation(password: string) {
    return this.UserProfile.validatePassword(password);
  }
}
