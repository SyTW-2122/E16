import { PuntoSubmarinismo } from "./puntoSub";

/**
 * Interfaz genérica para poder tener un método de busca
 * el cual recibe una variable de tipo genérico que se
 * especifica en función del tipo a buscar.
 */
interface searchEngine<T> {
  finderOfPoints(searchVariable: T) : PuntoSubmarinismo[];
}

/**
 * Clase Zona. Recibe una implementación de la interfaz genérica searchEngine.
 */
 export class Zona<T> implements searchEngine<T> {
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
   * Busca el string recibido en los Nombres de los Puntos de Inmersión.
   * Devuelve todos los objetos que lo contienen.
   */
  searchByPointName(searchVariable: string) {
    const matchedArray: PuntoSubmarinismo[] = [];
    this.pointsArray.forEach((element) => {
      if (element.getPointName().search(searchVariable) > -1) {
        matchedArray.push(element);
      }
    });
    return matchedArray;
  }

  /**
   * Busca el string recibido en la Localización de los Puntos de Inmersión.
   * Devuelve todos los objetos que lo contienen.
   */
  searchByPointLocation(searchVariable: string) {
    const matchedArray: PuntoSubmarinismo[] = [];
    this.pointsArray.forEach((element) => {
      if (element.getPointLocation().search(searchVariable) > -1) {
        matchedArray.push(element);
      }
    });
    return matchedArray;
  }

  /**
   * Busca el string recibido en la Descripción de los Puntos de Inmersión.
   * Devuelve todos los objetos que lo contienen.
   */
  searchByPointDescription(searchVariable: string) {
    const matchedArray: PuntoSubmarinismo[] = [];
    this.pointsArray.forEach((element) => {
      if (element.getPointDescription().search(searchVariable) > -1) {
        matchedArray.push(element);
      }
    });
    return matchedArray;
  }

  /**
   * Busca el string recibido en la Dificultad de los Puntos de Inmersión.
   * Devuelve todos los objetos que lo contienen.
   * Posible mejora: crear un tipado de Dificultad.
   */
  searchByDificulty(searchVariable: string) {
    const matchedArray: PuntoSubmarinismo[] = [];
    this.pointsArray.forEach((element) => {
      if (element.getPointDificulty().search(searchVariable) > -1) {
        matchedArray.push(element);
      }
    });
    return matchedArray;
  }

  /**
   * Comprueba el valor numérico (precio) recibido en el Intervalo de Precio de los Puntos de Inmersión.
   * Devuelve todos los objetos que lo contienen.
   */
  searchByPrice(searchVariable: number) {
    const matchedArray: PuntoSubmarinismo[] = [];
    this.pointsArray.forEach((element) => {
      if (element.getPriceEstimationArray()[0] <= searchVariable &&
          searchVariable <= element.getPriceEstimationArray()[1]) {
        matchedArray.push(element);
      }
    });
    return matchedArray;
  }

  /**
   * Buscador genérico que busca en todos los atributos de los objetos PuntoSubmarinismo.
   * Realiza la búsqueda en todos los atributos y devuelve todos los objetos que tienen alguna
   * coincidencia.
   */
   finderOfPoints(searchVariable: T): PuntoSubmarinismo[] {
    const matchedResults: PuntoSubmarinismo[] = [];
    if (typeof searchVariable == 'number') {
      return this.searchByPrice(searchVariable);
    } else if (typeof searchVariable == 'string') {
      matchedResults.push(...this.searchByPointName(searchVariable));
      matchedResults.push(...this.searchByPointLocation(searchVariable));
      matchedResults.push(...this.searchByPointDescription(searchVariable));
      matchedResults.push(...this.searchByDificulty(searchVariable));
    } else {
      return matchedResults;
    }
    return matchedResults;
  }
 }

export const zonaSchema = new mongoose.Schema({
  zoneName: {
    type: String,
    required: true,
    trim: true,
  },
  zoneDescription: {
    type: String,
    required: true,
    trim: true,
  },
  pointsArray: {
    type: [PuntoSubmarinismo],
    required: true,
    trim: true,
  }
});

export const zonaModel = mongoose.model('zonaModel', zonaSchema);