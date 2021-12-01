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

  getUsername() {
    return this.username;
  }

  getAge() {
    return this.age;
  }

  getLicense() {
    return this.license;
  }

  getAboutMe() {
    return this.aboutMe;
  }
}