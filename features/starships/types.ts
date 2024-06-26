/**
 * A Starship
 */
export interface Starship {
  id: number;
  /**
   * The number of non-essential people this starship can transport.
   */
  passengers: string;
  /**
   * An array of People URL Resources that this starship has been piloted by.
   */
  pilots: string[];
  /**
   * The name of this starship. The common name, such as Death Star.
   */
  name: string;
  /**
   * The class of this starships hyperdrive.
   */
  hyperdriveRating: string;
  /**
   * The hypermedia URL of this resource.
   */
  url: string;
  /**
   * The maximum number of kilograms that this starship can transport.
   */
  cargoCapacity: string;
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
   */
  consumables: string;
  /**
   * The maximum speed of this starship in atmosphere. n/a if this starship is incapable of atmosphering flight.
   */
  maxAtmospheringSpeed: string;
  /**
   * The number of personnel needed to run or pilot this starship.
   */
  crew: string;
  /**
   * The length of this starship in meters.
   */
  length: string;
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour. A Megalight is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
   */
  MGLT: string;
  /**
   * The class of this starship, such as Starfighter or Deep Space Mobile Battlestation.
   */
  starshipClass: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * An array of Film URL Resources that this starship has appeared in.
   */
  films: number[];
  /**
   * The model or official name of this starship. Such as T-65 X-wing or DS-1 Orbital Battle Station.
   */
  model: string;
  /**
   * The cost of this starship new, in galactic credits.
   */
  costInCredits: string;
  /**
   * The manufacturer of this starship. Comma seperated if more than one.
   */
  manufacturer: string;
}
