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
  image: File[];
  notes: string;
}

export interface State {
  currentCatch: CatchData;
  catchesDatabase: CatchData[];
}

export interface Neighborhood {
  name: string;
  fishability: number;
  picture: string;
  info: InfoType;
}

export interface FlorianopolisRegion {
  name: string;
  neighborhoods: Neighborhood[];
}

export interface InfoType {
  "Geographic Characteristics": string;
  "Fish Species": string;
  "Fishing Equipment": string;
  Baits: string;
  "Tips and Tricks": string;
  "Different Fishing Techniques": string;
}
