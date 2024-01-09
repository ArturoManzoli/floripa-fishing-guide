export interface CatchData {
  species: string;
  weight: string;
  location: string;
  bait: string;
  equipment: string;
  date: string;
  time: string;
  weather: string;
  windDirection: string;
  windSpeed: string;
  tide: string;
  moon: string;
  image: string[];
  notes: string;
}

export interface State {
  currentCatch: CatchData;
  catchesDatabase: CatchData[];
}

export interface FlorianopolisRegion {
  region: Region;
}

export interface Region {
  name: string;
  neighborhoods: Neighborhood[];
}

export interface Neighborhood {
  name: string;
  fishability?: number;
}
