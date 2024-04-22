/**
 * A Star Wars film
 */
export interface Film {
  /**
   * The starship resources featured within this film.
   */
  starships: number[];
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The planet resources featured within this film.
   */
  planets: number[];
  /**
   * The producer(s) of this film.
   */
  producer: string;
  /**
   * The title of this film.
   */
  title: string;
  /**
   * The url of this resource
   */
  url: string;
  /**
   * The release date at original creator country.
   */
  releaseDate: string;
  /**
   * The vehicle resources featured within this film.
   */
  vehicles: number[];
  /**
   * The episode number of this film.
   */
  episodeId: number;
  /**
   * The director of this film.
   */
  director: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * The opening crawl text at the beginning of this film.
   */
  openingCrawl: string;
  /**
   * The people resources featured within this film.
   */
  characters: number[];
  /**
   * The species resources featured within this film.
   */
  species: string[];
}
