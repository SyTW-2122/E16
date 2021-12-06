import { PuntoSubmarinismo } from "./puntoSub";
/**
 * Clase Zona
 */
 export class Zona {
   /**
    * Constructor de la clase Zona. Contiene todos los datos públicos de las zonas y
    * sus puntos de inmersión.
    * @param zoneName Nombre de la Zona
    * @param zoneDescription Texto descriptivo de la Zona
    * @param pointsArray Vector de objetos PuntoSubmarinismo, que son los puntos
    *                    de inmersión de la Zona
    */
  private zoneName: string;
  private zoneDescription: string;
  private pointsArray: PuntoSubmarinismo[] = [];
  constructor(private nombreZona: string, private descripcion: string) {
    this.zoneName = nombreZona;
    this.zoneDescription = descripcion;
  }

  /**
   * Getter del Nombre de la Zona.
   */
  getZoneName() {
    return this.zoneName;
  }

  /**
   * Getter de la Descripción de la Zona.
   */
  getZoneDescription() {
    return this.zoneDescription;
  }

  /**
   * En la página web se crearía un formulario para introducir los datos del nuevo
   * punto de submarinismo. Todos esos datos deberían formatearse en un objeto PuntoSubmarinismo
   * y ese objeto es el que se introduce en este método.
   * 
   * Añade un nuevo PuntoSubmarinismo a los puntos de inmersión de la zona.
   */
  addPointToArray(newPoint: PuntoSubmarinismo) {
    this.pointsArray.push(newPoint);
  }

  /**
   * Getter del objeto PuntoSubmarinismo deseado.
   */
  getPoint(position: number) {
    return this.pointsArray[position];
  }

  /**
   * TODO: Complete finder of Points (Óscar Pozo)
   */
  finderOfPoints(matchString: string) {
    this.pointsArray.forEach(element => {
      if (element.getPointName() === matchString) {

      }
    });
  }
}
