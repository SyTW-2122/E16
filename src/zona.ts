import { PuntoSubmarinismo } from "./puntoSub";
/**
 * Clase Zona
 */
 export class Zona {
  private zoneName: string;
  private description: string;
  private pointsArray: PuntoSubmarinismo[] = [];
  constructor(private nombreZona: string, private descripcion: string,
    private arrayDePuntos: PuntoSubmarinismo[]) {
    this.zoneName = nombreZona;
    this.description = descripcion;
    this.pointsArray = arrayDePuntos;
  }
}
