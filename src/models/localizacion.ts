import { Zona } from "./zona";

/**
 * Interfaz auxiliar para crear un tipado genérico en la clase
 * sin la necesidad de forzarla a nada más.
 */
interface auxiliar<T> {}

/**
 * 
 */
export class Localizacion<T> implements auxiliar<T> {
  private locationName: string;
  private locationDescription: string;
  private arrayZone: Zona<T>[] = [];
  constructor(private nombreLocalizacion: string, private descripcionLocalizacion: string,
    private arrayZonas: Zona<T>[]) {
    this.locationName = nombreLocalizacion;
    this.locationDescription = descripcionLocalizacion;
    this.arrayZone = arrayZonas;
  }

  getLocationName() {
    return this.locationName;
  }

  getLocationDescription() {
    return this.locationDescription;
  }

  getZone(position: number) {
    return this.arrayZone[position];
  }
}

export const localizacionSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
    trim: true,
  },
  locationDescription: {
    type: Number,
    required: true,
    trim: true,
  },
  arrayZone: {
    type: [Zona],
    required: true,
    trim: true,
  }
});

export const localizacionModel = mongoose.model('localizacionModel', localizacionSchema);