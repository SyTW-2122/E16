import { PuntoSubmarinismo } from "./puntoSub";
/**
 * Clase Zona
 */
 export class Zona {
  private zoneName: string;
  private zoneDescription: string;
  private pointsArray: PuntoSubmarinismo[] = [];
  constructor(private nombreZona: string, private descripcion: string) {
    this.zoneName = nombreZona;
    this.zoneDescription = descripcion;
  }

  getZoneName() {
    return this.zoneName;
  }

  getZoneDescription() {
    return this.zoneDescription;
  }

  /**
   * En la página web se crearía un formulario para introducir los datos del nuevo
   * punto de submarinismo. Todos esos datos deberían formatearse en un objeto PuntoSubmarinismo
   * y ese objeto es el que se introduce en este método.
   */
  addPointToArray(newPoint: PuntoSubmarinismo) {
    this.pointsArray.push(newPoint);
  }

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
