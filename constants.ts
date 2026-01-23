
import { GeoLocation } from './types';

export const ALL_LOCATIONS: GeoLocation[] = [
  { id: 1, question: "Самое большое и глубокое море у берегов России", answer: "Берингово море", lat: 58.0, lng: 175.0, toleranceKm: 1200 },
  { id: 2, question: "Самое мелководное море на Земле", answer: "Азовское море", lat: 46.0, lng: 37.0, toleranceKm: 300 },
  { id: 3, question: "Самое холодное море", answer: "Восточно – Сибирское море", lat: 72.0, lng: 163.0, toleranceKm: 1000 },
  { id: 4, question: "Самое чистое море", answer: "Чукотское море", lat: 70.0, lng: -175.0, toleranceKm: 900 },
  { id: 5, question: "Самое пресное море", answer: "Балтийское море", lat: 57.0, lng: 20.0, toleranceKm: 700 },
  { id: 6, question: "Самый длинный пролив", answer: "Татарский пролив", lat: 50.0, lng: 141.0, toleranceKm: 300 },
  { id: 7, question: "Самый широкий пролив", answer: "Берингов пролив", lat: 66.0, lng: -169.0, toleranceKm: 300 },
  { id: 8, question: "Самый большой остров", answer: "Сахалин", lat: 51.0, lng: 143.0, toleranceKm: 500 },
  { id: 9, question: "Самый большой полуостров", answer: "Таймыр", lat: 74.0, lng: 100.0, toleranceKm: 600 },
  { id: 10, question: "Самые высокие приливы", answer: "Пенжинская губа", lat: 62.0, lng: 163.0, toleranceKm: 250 },
  { id: 11, question: "Самая большая равнина", answer: "Западно – Сибирская равнина", lat: 62.0, lng: 75.0, toleranceKm: 1500 },
  { id: 12, question: "Самая длинная горная система", answer: "Урал", lat: 60.0, lng: 60.0, toleranceKm: 600, polyPoints: [[68, 66], [64, 59], [60, 59], [56, 58], [52, 57]] },
  { id: 13, question: "Самая высокая вершина", answer: "г. Эльбрус", lat: 43.35, lng: 42.44, toleranceKm: 150 },
  { id: 14, question: "Самая низкая отметка", answer: "Прикаспийская низменность", lat: 47.0, lng: 48.0, toleranceKm: 500 },
  { id: 15, question: "Самое глубокое озеро в мире", answer: "Байкал", lat: 53.5, lng: 108.0, toleranceKm: 200 },
  { id: 16, question: "Самая длинная река", answer: "Лена", lat: 65.0, lng: 124.0, toleranceKm: 500, polyPoints: [[53, 105], [58, 110], [60, 115], [63, 125], [66, 124], [72, 126]] },
  { id: 17, question: "Самая длинная река Европы", answer: "Волга", lat: 50.0, lng: 46.0, toleranceKm: 500, polyPoints: [[57, 33], [56, 40], [56, 49], [53, 50], [48, 44], [46, 48]] },
  { id: 18, question: "Самая полноводная река", answer: "Енисей", lat: 65.0, lng: 90.0, toleranceKm: 500, polyPoints: [[51, 95], [55, 92], [60, 90], [68, 86], [71, 83]] },
  { id: 19, question: "Самый высокий водопад", answer: "Илья Муромец", lat: 44.9, lng: 147.6, toleranceKm: 150 },
  { id: 20, question: "Самая низкая температура воздуха", answer: "Оймякон", lat: 63.5, lng: 142.8, toleranceKm: 150 },
  { id: 21, question: "Самая высокая температура", answer: "полупустыни Прикаспия", lat: 47.5, lng: 47.0, toleranceKm: 450 },
  { id: 22, question: "Центр России", answer: "озеро Виви", lat: 66.4, lng: 94.4, toleranceKm: 150 },
  { id: 23, question: "Самая северная островная точка России", answer: "мыс Флигели", lat: 81.85, lng: 59.1, toleranceKm: 150 },
  { id: 24, question: "Самая северная материковая точка России", answer: "мыс Челюскин", lat: 77.7, lng: 104.3, toleranceKm: 150 },
  { id: 25, question: "Самая южная точка России", answer: "гора Базардюзю", lat: 41.2, lng: 47.8, toleranceKm: 150 },
  { id: 26, question: "Самая западная точка России", answer: "Балтийская коса", lat: 54.4, lng: 19.8, toleranceKm: 150 },
  { id: 27, question: "Самая восточная материковая точка России", answer: "мыс Дежнёва", lat: 66.1, lng: -169.7, toleranceKm: 150 }
];

export const MAP_CENTER: [number, number] = [62, 100];
export const INITIAL_ZOOM = 3;
export const QUESTIONS_COUNT = 10;
