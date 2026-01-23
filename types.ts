
export interface Coordinate {
  lat: number;
  lng: number;
}

export interface GeoLocation {
  id: number;
  question: string;
  answer: string;
  lat: number;
  lng: number;
  toleranceKm: number;
  polyPoints?: [number, number][]; // Array of [lat, lng] for rivers/ranges
}

export type QuizMode = 'TEST' | 'TRAINING';
export type QuizState = 'START' | 'PLAYING' | 'FEEDBACK' | 'FINISHED';

export interface UserAnswer {
  question: GeoLocation;
  clickedLat: number;
  clickedLng: number;
  distance: number;
  isCorrect: boolean;
}
