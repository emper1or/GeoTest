
export interface Coordinate {
  lat: number;
  lng: number;
}

export type GeoCategory = 
  | 'ISLANDS' 
  | 'PENINSULAS' 
  | 'STRAITS' 
  | 'GULFS' 
  | 'SEAS' 
  | 'LAKES' 
  | 'RIVERS' 
  | 'PLAINS' 
  | 'HIGHLANDS' 
  | 'MOUNTAINS'
  | 'RECORDS'
  | 'EXTREME_POINTS';

export interface GeoLocation {
  id: number;
  block: 1 | 2; // 1: General Geography, 2: Records & Extremes
  question: string;
  answer: string;
  lat: number;
  lng: number;
  toleranceKm: number;
  category: GeoCategory;
  polyPoints?: [number, number][]; 
}

export type QuizMode = 'TEST' | 'TRAINING';
export type QuizState = 'START' | 'EXAM_SELECT' | 'TRAINING_SELECT' | 'PLAYING' | 'FEEDBACK' | 'FINISHED';

export interface UserAnswer {
  question: GeoLocation;
  clickedLat: number;
  clickedLng: number;
  distance: number;
  isCorrect: boolean;
}

export interface ExamMap {
  id: number;
  title: string;
  description: string;
  color: string;
}
