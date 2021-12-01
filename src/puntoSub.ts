/**
 * Clase Punto submarinismo.
 * Contiene todos los datos de un Punto de Submarinismo.
 * @param pointName Nombre del Punto de Inmersión.
 * @param location Dirección de la localización
 * @param zoneDescription Descripción de la Zona
 * @param dificulty Nivel de dificultad de la zona
 * @param priceEstimation Array de dos elementos donde se especifica el intervalo de precio de la inmersión.
 */
 export class PuntoSubmarinismo {
  private pointName: string;
  private location: string;
  private zoneDescription: string;
  private dificulty: string;
  private priceEstimation: number[] = [];
  constructor(private nombrePunto: string, private localizacion: string, private descripcion: string,
    private dificultad: string, private precioEstimacion: number[]) {
    this.pointName = nombrePunto;
    this.location = localizacion;
    this.zoneDescription = descripcion;
    this.dificulty =  dificultad;
    this.priceEstimation = precioEstimacion;
  }

  /**
   * Getter del Nombre del Punto de Inmersión.
   */
  getPointName() {
    return this.pointName;
  }

  /**
   * Getter de la localización.
   */
  getLocation() {
    return this.location;
  }

  /**
   * Getter de la descripción de la zona.
   */
  getZoneDescription() {
    return this.zoneDescription;
  }

  /**
   * Getter de la dificultad de la zona.
   */
  getZoneDificulty() {
    return this.dificulty;
  }

  /**
   * Getter de la estimación de precio.
   * @return Devuelve el intervalo del precio en formato string.
   */
  getPriceEstimation() {
    let estimation: string = '[' + this.priceEstimation[0] + ' ~ ' + this.priceEstimation[1] + ']'; 
    return estimation;
  }
}
