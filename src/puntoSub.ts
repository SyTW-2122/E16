/**
 * Clase Punto submarinismo
 */
 export class PuntoSubmarinismo {
  private pointName: string;
  private location: string;
  private description: string;
  private dificulty: string;
  private priceEstimation: number[] = [];
  constructor(private nombrePunto: string, private localizacion: string, private descripcion: string,
    private dificultad: string, private precioEstimacion: number[]) {
    this.pointName = nombrePunto;
    this.location = localizacion;
    this.description = descripcion;
    this.dificulty =  dificultad;
    this.priceEstimation = precioEstimacion;
  }
}
