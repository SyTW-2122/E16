/* 
*   Primera versión Clase Perfil de usuario
*/
type typeOfLicence = 'A' | 'B' | 'C';

/**
 * Verificador de formato de un email
 * @param email
 * @return
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

export class Perfil {
  /**
   * Constructor de la clase Perfil. Contiene todos los datos de la cuenta de usuario.
   * @param username Nombre de usuario
   * @param email Correo electrónico de usuario
   * @param password Contraseña (encriptada) del usuario
   * @param license Tipo de licencia del usuario
   */
  private username: string = '';
  private email: string = ''; /** Se puede crear un struct para correo */
  private password: string = '';
  private license: typeOfLicence; /** Crear una estructura para las licencias */
  constructor(private nombreUsuario: string, private correo: string, 
    private contraseña: string, private licencia: typeOfLicence) {
      if (validateEmail(correo)) {
        this.username = nombreUsuario;
        this.email = correo;
        this.password = contraseña;
        this.license = licencia;
      }
  }

  getUsername() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }

  validatePassword(contraseñaPrueba) {
    if (contraseñaPrueba == this.password) {
      return true;
    } else {
      return false;
    }
  }

  getLicense() {
    return this.license;
  }
}