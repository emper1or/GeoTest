
import { GeoLocation, GeoCategory, ExamMap } from './types';

export const EXAM_MAPS: ExamMap[] = [
  { 
    id: 1, 
    title: 'Зачет №1: Общая география', 
    description: 'Моря, реки, озера, горы и полуострова России.',
    color: 'blue'
  },
  { 
    id: 2, 
    title: 'Зачет №2: Рекорды и Крайние точки', 
    description: 'Самые глубокие, длинные объекты и крайние мысы страны.',
    color: 'emerald'
  }
];

export const CATEGORY_LABELS: Record<GeoCategory, { label: string, icon: string }> = {
  ISLANDS: { label: 'Острова', icon: '🏝️' },
  PENINSULAS: { label: 'Полуострова', icon: '📍' },
  STRAITS: { label: 'Проливы', icon: '🚢' },
  GULFS: { label: 'Заливы', icon: '⚓' },
  SEAS: { label: 'Моря', icon: '🌊' },
  LAKES: { label: 'Озера', icon: '💧' },
  RIVERS: { label: 'Реки', icon: '〰️' },
  PLAINS: { label: 'Равнины', icon: '🗺️' },
  HIGHLANDS: { label: 'Возвышенности', icon: '📈' },
  MOUNTAINS: { label: 'Горы', icon: '🏔️' },
  RECORDS: { label: 'Рекорды', icon: '🏆' },
  EXTREME_POINTS: { label: 'Крайние точки', icon: '🚩' }
};

export const ALL_LOCATIONS: GeoLocation[] = [
  // --- БЛОК 1: ОБЩАЯ ГЕОГРАФИЯ ---
  { id: 101, block: 1, category: 'ISLANDS', question: "Остров Колгуев", answer: "Колгуев", lat: 69.1, lng: 49.2, toleranceKm: 150 },
  { id: 102, block: 1, category: 'ISLANDS', question: "Соловецкие острова", answer: "Соловецкие о-ва", lat: 65.0, lng: 35.7, toleranceKm: 100 },
  { id: 103, block: 1, category: 'ISLANDS', question: "Земля Франца-Иосифа", answer: "Земля Франца-Иосифа", lat: 80.7, lng: 54.8, toleranceKm: 300 },
  { id: 104, block: 1, category: 'ISLANDS', question: "Новая Земля", answer: "Новая Земля", lat: 74, lng: 56, toleranceKm: 400 },
  { id: 105, block: 1, category: 'ISLANDS', question: "Северная Земля", answer: "Северная Земля", lat: 79.5, lng: 97, toleranceKm: 300 },
  { id: 106, block: 1, category: 'ISLANDS', question: "Новосибирские острова", answer: "Новосибирские о-ва", lat: 75, lng: 142, toleranceKm: 300 },
  { id: 107, block: 1, category: 'ISLANDS', question: "Остров Врангеля", answer: "о. Врангеля", lat: 71.2, lng: 179.4, toleranceKm: 150 },
  { id: 108, block: 1, category: 'ISLANDS', question: "Командорские острова", answer: "Командорские о-ва", lat: 55, lng: 166, toleranceKm: 150 },
  { id: 109, block: 1, category: 'ISLANDS', question: "Курильские острова", answer: "Курильские о-ва", lat: 47, lng: 152, toleranceKm: 400, polyPoints: [[50.8, 156.5], [43.8, 146.7]] },
  { id: 110, block: 1, category: 'ISLANDS', question: "Остров Ратманова", answer: "Ратманова", lat: 65.78, lng: -169.05, toleranceKm: 80 },
  
  { id: 120, block: 1, category: 'PENINSULAS', question: "Кольский полуостров", answer: "Кольский п-ов", lat: 67.5, lng: 35, toleranceKm: 250 },
  { id: 121, block: 1, category: 'PENINSULAS', question: "Полуостров Канин", answer: "Канин", lat: 68, lng: 45, toleranceKm: 150 },
  { id: 122, block: 1, category: 'PENINSULAS', question: "Полуостров Ямал", answer: "Ямал", lat: 70.5, lng: 70, toleranceKm: 300 },
  { id: 123, block: 1, category: 'PENINSULAS', question: "Полуостров Таймыр", answer: "Таймыр", lat: 75, lng: 100, toleranceKm: 400 },
  { id: 124, block: 1, category: 'PENINSULAS', question: "Чукотский полуостров", answer: "Чукотка", lat: 66, lng: -172, toleranceKm: 300 },
  { id: 125, block: 1, category: 'PENINSULAS', question: "Полуостров Камчатка", answer: "Камчатка", lat: 56, lng: 159, toleranceKm: 400 },

  { id: 130, block: 1, category: 'STRAITS', question: "Пролив Маточкин Шар", answer: "Маточкин Шар", lat: 73.3, lng: 54.5, toleranceKm: 100 },
  { id: 131, block: 1, category: 'STRAITS', question: "Пролив Карские Ворота", answer: "Карские Ворота", lat: 70.5, lng: 58, toleranceKm: 100 },
  { id: 132, block: 1, category: 'STRAITS', question: "Югорский Шар", answer: "Югорский Шар", lat: 69.7, lng: 60.5, toleranceKm: 100 },
  { id: 133, block: 1, category: 'STRAITS', question: "Кунаширский пролив", answer: "Кунаширский пр.", lat: 44, lng: 145.5, toleranceKm: 80 },
  { id: 134, block: 1, category: 'STRAITS', question: "Пролив Измены", answer: "пр. Измены", lat: 43.7, lng: 145.4, toleranceKm: 50 },
  { id: 135, block: 1, category: 'STRAITS', question: "Пролив Лаперуза", answer: "пр. Лаперуза", lat: 45.7, lng: 142, toleranceKm: 100 },

  { id: 140, block: 1, category: 'GULFS', question: "Печорская губа", answer: "Печорская губа", lat: 68.3, lng: 54.5, toleranceKm: 150 },
  { id: 141, block: 1, category: 'GULFS', question: "Анадырский залив", answer: "Анадырский зал.", lat: 64, lng: 178, toleranceKm: 250 },
  { id: 142, block: 1, category: 'GULFS', question: "Залив Шелехова", answer: "зал. Шелехова", lat: 60, lng: 158, toleranceKm: 300 },
  { id: 143, block: 1, category: 'GULFS', question: "Залив Петра Великого", answer: "зал. Петра Великого", lat: 42.8, lng: 131.5, toleranceKm: 150 },
  { id: 144, block: 1, category: 'GULFS', question: "Бухта Золотой Рог", answer: "Золотой Рог", lat: 43.1, lng: 131.9, toleranceKm: 50 },

  { id: 150, block: 1, category: 'RIVERS', question: "Река Ока", answer: "Ока", lat: 54.5, lng: 39, toleranceKm: 200, polyPoints: [[52.9, 36.1], [56.1, 44]] },
  { id: 151, block: 1, category: 'RIVERS', question: "Река Кама", answer: "Кама", lat: 56, lng: 54, toleranceKm: 250, polyPoints: [[58, 53], [55, 49]] },
  { id: 152, block: 1, category: 'RIVERS', question: "Река Кубань", answer: "Кубань", lat: 45, lng: 39, toleranceKm: 150, polyPoints: [[43.5, 42.1], [45.2, 37.4]] },
  { id: 153, block: 1, category: 'RIVERS', question: "Река Терек", answer: "Терек", lat: 43.5, lng: 45, toleranceKm: 150, polyPoints: [[42.7, 44.5], [43.9, 47.6]] },

  { id: 160, block: 1, category: 'HIGHLANDS', question: "Валдайская возвышенность", answer: "Валдай", lat: 57.5, lng: 33.5, toleranceKm: 200 },
  { id: 161, block: 1, category: 'HIGHLANDS', question: "Смоленско-Московская возвышенность", answer: "Смол.-Моск. возв.", lat: 55.5, lng: 35.5, toleranceKm: 250 },
  { id: 162, block: 1, category: 'HIGHLANDS', question: "Приволжская возвышенность", answer: "Приволжская возв.", lat: 52, lng: 47.5, toleranceKm: 300 },
  { id: 163, block: 1, category: 'HIGHLANDS', question: "Тиманский кряж", answer: "Тиманский кряж", lat: 65, lng: 51, toleranceKm: 250 },
  { id: 164, block: 1, category: 'HIGHLANDS', question: "Северные Увалы", answer: "Северные Увалы", lat: 60, lng: 48, toleranceKm: 300 },

  { id: 170, block: 1, category: 'MOUNTAINS', question: "Хребет Джугджур", answer: "Джугджур", lat: 58, lng: 136, toleranceKm: 300 },
  { id: 171, block: 1, category: 'MOUNTAINS', question: "Сихотэ-Алинь", answer: "Сихотэ-Алинь", lat: 45, lng: 136, toleranceKm: 400 },
  { id: 172, block: 1, category: 'MOUNTAINS', question: "Западный Саян", answer: "Зап. Саян", lat: 52, lng: 92, toleranceKm: 250 },
  { id: 173, block: 1, category: 'MOUNTAINS', question: "Восточный Саян", answer: "Вост. Саян", lat: 53, lng: 100, toleranceKm: 250 },

  // --- БЛОК 2: РЕКОРДЫ И КРАЙНИЕ ТОЧКИ ---
  { id: 201, block: 2, category: 'RECORDS', question: "Самое большое и глубокое море у берегов России", answer: "Берингово море", lat: 58, lng: 175, toleranceKm: 800 },
  { id: 202, block: 2, category: 'RECORDS', question: "Самое мелководное море на Земле", answer: "Азовское море", lat: 46, lng: 37, toleranceKm: 150 },
  { id: 203, block: 2, category: 'RECORDS', question: "Самое холодное море России", answer: "Восточно-Сибирское море", lat: 72, lng: 163, toleranceKm: 600 },
  { id: 204, block: 2, category: 'RECORDS', question: "Самое чистое море России", answer: "Чукотское море", lat: 70, lng: -175, toleranceKm: 500 },
  { id: 205, block: 2, category: 'RECORDS', question: "Самое пресное море России", answer: "Балтийское море", lat: 57, lng: 20, toleranceKm: 400 },
  { id: 206, block: 2, category: 'RECORDS', question: "Самый длинный пролив", answer: "Татарский пролив", lat: 50, lng: 141, toleranceKm: 200 },
  { id: 207, block: 2, category: 'RECORDS', question: "Самый широкий пролив (у берегов РФ)", answer: "Берингов пролив", lat: 66, lng: -169, toleranceKm: 150 },
  { id: 208, block: 2, category: 'RECORDS', question: "Самый большой остров России", answer: "Сахалин", lat: 51, lng: 143, toleranceKm: 400 },
  { id: 209, block: 2, category: 'RECORDS', question: "Самый большой полуостров России", answer: "Таймыр", lat: 75, lng: 100, toleranceKm: 500 },
  { id: 210, block: 2, category: 'RECORDS', question: "Самые высокие приливы (в России)", answer: "Пенжинская губа", lat: 62, lng: 163, toleranceKm: 150 },
  { id: 211, block: 2, category: 'RECORDS', question: "Самая большая равнина России", answer: "Западно-Сибирская равнина", lat: 60, lng: 75, toleranceKm: 700 },
  { id: 212, block: 2, category: 'RECORDS', question: "Самая длинная горная система России", answer: "Уральские горы", lat: 60, lng: 60, toleranceKm: 600 },
  { id: 213, block: 2, category: 'RECORDS', question: "Самая высокая вершина России", answer: "гора Эльбрус", lat: 43.35, lng: 42.44, toleranceKm: 100 },
  { id: 214, block: 2, category: 'RECORDS', question: "Самая низкая отметка России", answer: "Прикаспийская низменность", lat: 47, lng: 48, toleranceKm: 200 },
  { id: 215, block: 2, category: 'RECORDS', question: "Самое глубокое озеро в мире", answer: "Байкал", lat: 53.5, lng: 108, toleranceKm: 150 },
  { id: 216, block: 2, category: 'RECORDS', question: "Самая длинная река России", answer: "Лена", lat: 64, lng: 124, toleranceKm: 600 },
  { id: 217, block: 2, category: 'RECORDS', question: "Самая длинная река Европы", answer: "Волга", lat: 50, lng: 46, toleranceKm: 400 },
  { id: 218, block: 2, category: 'RECORDS', question: "Самая полноводная река России", answer: "Енисей", lat: 62, lng: 91, toleranceKm: 400 },
  { id: 219, block: 2, category: 'RECORDS', question: "Самый высокий водопад России", answer: "Илья Муромец (о. Итуруп)", lat: 44.47, lng: 146.9, toleranceKm: 100 },
  { id: 220, block: 2, category: 'RECORDS', question: "Полюс холода (Оймякон)", answer: "Оймякон", lat: 63.46, lng: 142.78, toleranceKm: 150 },
  { id: 221, block: 2, category: 'RECORDS', question: "Географический центр России", answer: "озеро Виви", lat: 66.4, lng: 94.2, toleranceKm: 100 },

  { id: 301, block: 2, category: 'EXTREME_POINTS', question: "Самая северная островная точка", answer: "мыс Флигели", lat: 81.85, lng: 59.1, toleranceKm: 150 },
  { id: 302, block: 2, category: 'EXTREME_POINTS', question: "Самая северная материковая точка", answer: "мыс Челюскин", lat: 77.72, lng: 104.3, toleranceKm: 150 },
  { id: 303, block: 2, category: 'EXTREME_POINTS', question: "Самая южная точка России", answer: "гора Базардюзю", lat: 41.18, lng: 47.78, toleranceKm: 100 },
  { id: 304, block: 2, category: 'EXTREME_POINTS', question: "Самая западная точка России", answer: "Балтийская коса", lat: 54.45, lng: 19.63, toleranceKm: 80 },
  { id: 305, block: 2, category: 'EXTREME_POINTS', question: "Самая восточная материковая точка", answer: "мыс Дежнёва", lat: 66.08, lng: -169.65, toleranceKm: 100 }
];

export const MAP_CENTER: [number, number] = [62, 100];
export const INITIAL_ZOOM = 3;
export const MIN_ZOOM = 2;
export const MAX_ZOOM = 5;
export const QUESTIONS_PER_TEST = 10;
