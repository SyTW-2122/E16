var mongoose = require('mongoose');
/**
 * Clase Punto submarinismo.
 * Contiene todos los datos de un Punto de Submarinismo.
 * @param pointName Nombre del Punto de Inmersión.
 * @param location Dirección de la localización
 * @param pointDescription Descripción del Punto de Inmersión
 * @param dificulty Nivel de dificultad del Punto de Inmersión.
 * @param priceEstimation Array de dos elementos donde se especifica el intervalo de precio de la inmersión.
 */
 export class PuntoSubmarinismo {
  private pointName: string;
  private location: string;
  private pointDescription: string;
  private dificulty: string;
  private priceEstimation: number[] = [];
  constructor(private nombrePunto: string, private localizacion: string, private descripcion: string,
    private dificultad: string, private precioEstimacion: number[]) {
    this.pointName = nombrePunto;
    this.location = localizacion;
    this.pointDescription = descripcion;
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
  getPointLocation() {
    return this.location;
  }

  /**
   * Getter de la descripción de la zona.
   */
  getPointDescription() {
    return this.pointDescription;
  }

  /**
   * Getter de la dificultad de la zona.
   */
  getPointDificulty() {
    return this.dificulty;
  }

  /**
   * Getter de la estimación de precio.
   * @return Devuelve el intervalo del precio en formato string.
   */
  getPriceEstimationString() {
    let estimation: string = '[' + this.priceEstimation[0] + 
      ' ~ ' + this.priceEstimation[1] + ']'; 
    return estimation;
  }

  /**
   * Getter de la estimación de precio.
   * @return Devuelve el intervalo del precio en formato Array de dos valores enteros.
   */
   getPriceEstimationArray() {
    return this.priceEstimation;
  }
}

export const puntoSubSchema = new mongoose.Schema({
  pointName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: Number,
    required: true,
    trim: true,
  },
  pointDescription: {
    type: String,
    required: true,
    trim: true,
  },
  dificulty: {
    type: String,
    required: true,
    trim: true,
  },
  priceEstimation: {
    type: Number,
    required: true,
    trim: true,
  }
});

export const puntoSubModel = mongoose.model('puntoSubModel', puntoSubSchema);
