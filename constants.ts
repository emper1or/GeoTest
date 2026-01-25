
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
    description: 'Географические достижения и границы страны.',
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
  
  // МОРЯ
  { id: 1, block: 1, category: 'SEAS', question: "Балтийское море", answer: "Балтийское", lat: 57, lng: 20, toleranceKm: 400 },
  { id: 2, block: 1, category: 'SEAS', question: "Белое море", answer: "Белое", lat: 65.5, lng: 36.5, toleranceKm: 250 },
  { id: 3, block: 1, category: 'SEAS', question: "Баренцево море", answer: "Баренцево", lat: 73, lng: 43, toleranceKm: 500 },
  { id: 4, block: 1, category: 'SEAS', question: "Карское море", answer: "Карское", lat: 75, lng: 75, toleranceKm: 600 },
  { id: 5, block: 1, category: 'SEAS', question: "Море Лаптевых", answer: "Лаптевых", lat: 76, lng: 115, toleranceKm: 600 },
  { id: 6, block: 1, category: 'SEAS', question: "Восточно-Сибирское море", answer: "Восточно-Сибирское", lat: 72, lng: 163, toleranceKm: 600 },
  { id: 7, block: 1, category: 'SEAS', question: "Чукотское море", answer: "Чукотское", lat: 70, lng: -175, toleranceKm: 500 },
  { id: 8, block: 1, category: 'SEAS', question: "Берингово море", answer: "Берингово", lat: 58, lng: 175, toleranceKm: 700 },
  { id: 9, block: 1, category: 'SEAS', question: "Охотское море", answer: "Охотское", lat: 55, lng: 150, toleranceKm: 600 },
  { id: 10, block: 1, category: 'SEAS', question: "Японское море", answer: "Японское", lat: 40, lng: 135, toleranceKm: 500 },
  { id: 11, block: 1, category: 'SEAS', question: "Азовское море", answer: "Азовское", lat: 46, lng: 37, toleranceKm: 150 },
  { id: 12, block: 1, category: 'SEAS', question: "Черное море", answer: "Черное", lat: 43, lng: 34, toleranceKm: 400 },

  // ОСТРОВА
  { id: 101, block: 1, category: 'ISLANDS', question: "Остров Колгуев", answer: "Колгуев", lat: 69.1, lng: 49.2, toleranceKm: 150 },
  { id: 102, block: 1, category: 'ISLANDS', question: "Соловецкие острова", answer: "Соловецкие", lat: 65.0, lng: 35.7, toleranceKm: 100 },
  { id: 103, block: 1, category: 'ISLANDS', question: "Земля Франца-Иосифа", answer: "Земля Франца-Иосифа", lat: 80.7, lng: 54.8, toleranceKm: 300 },
  { id: 104, block: 1, category: 'ISLANDS', question: "Новая Земля", answer: "Новая Земля", lat: 74, lng: 56, toleranceKm: 400, polyPoints: [[71, 53], [75, 59], [77, 68]] },
  { id: 105, block: 1, category: 'ISLANDS', question: "Северная Земля", answer: "Северная Земля", lat: 79.5, lng: 97, toleranceKm: 300, polyPoints: [[78, 96], [80, 102]] },
  { id: 106, block: 1, category: 'ISLANDS', question: "Новосибирские острова", answer: "Новосибирские", lat: 75, lng: 142, toleranceKm: 300, polyPoints: [[74.5, 137], [75.5, 146]] },
  { id: 107, block: 1, category: 'ISLANDS', question: "Остров Врангеля", answer: "Врангеля", lat: 71.2, lng: 179.4, toleranceKm: 150 },
  { id: 108, block: 1, category: 'ISLANDS', question: "Командорские острова", answer: "Командорские", lat: 55, lng: 166, toleranceKm: 150 },
  { id: 109, block: 1, category: 'ISLANDS', question: "Курильские острова", answer: "Курильские", lat: 47, lng: 152, toleranceKm: 400, polyPoints: [[50.8, 156.5], [44.8, 147.5], [43.8, 146.1]] },
  { id: 110, block: 1, category: 'ISLANDS', question: "Остров Сахалин", answer: "Сахалин", lat: 51, lng: 143, toleranceKm: 450, polyPoints: [[46, 142], [54, 142]] },
  { id: 111, block: 1, category: 'ISLANDS', question: "Остров Ратманова", answer: "Ратманова", lat: 65.78, lng: -169.05, toleranceKm: 100 },

  // ПОЛУОСТРОВА
  { id: 120, block: 1, category: 'PENINSULAS', question: "Кольский полуостров", answer: "Кольский", lat: 67.5, lng: 35, toleranceKm: 250 },
  { id: 121, block: 1, category: 'PENINSULAS', question: "Полуостров Канин", answer: "Канин", lat: 68, lng: 45, toleranceKm: 150 },
  { id: 122, block: 1, category: 'PENINSULAS', question: "Полуостров Ямал", answer: "Ямал", lat: 70.5, lng: 70, toleranceKm: 300 },
  { id: 123, block: 1, category: 'PENINSULAS', question: "Полуостров Таймыр", answer: "Таймыр", lat: 75, lng: 100, toleranceKm: 400 },
  { id: 124, block: 1, category: 'PENINSULAS', question: "Чукотский полуостров", answer: "Чукотский", lat: 66, lng: -172, toleranceKm: 300 },
  { id: 125, block: 1, category: 'PENINSULAS', question: "Полуостров Камчатка", answer: "Камчатка", lat: 56, lng: 159, toleranceKm: 400, polyPoints: [[51, 157], [61, 163]] },

  // ПРОЛИВЫ
  { id: 130, block: 1, category: 'STRAITS', question: "Пролив Маточкин Шар", answer: "Маточкин Шар", lat: 73.3, lng: 54.5, toleranceKm: 100 },
  { id: 131, block: 1, category: 'STRAITS', question: "Пролив Карские Ворота", answer: "Карские Ворота", lat: 70.5, lng: 58, toleranceKm: 100 },
  { id: 132, block: 1, category: 'STRAITS', question: "Пролив Югорский Шар", answer: "Югорский Шар", lat: 69.7, lng: 60.5, toleranceKm: 100 },
  { id: 133, block: 1, category: 'STRAITS', question: "Берингов пролив", answer: "Берингов", lat: 66, lng: -169, toleranceKm: 150 },
  { id: 134, block: 1, category: 'STRAITS', question: "Кунаширский пролив", answer: "Кунаширский", lat: 44, lng: 145.5, toleranceKm: 100 },
  { id: 135, block: 1, category: 'STRAITS', question: "Пролив Измены", answer: "Измены", lat: 43.7, lng: 145.4, toleranceKm: 50 },
  { id: 136, block: 1, category: 'STRAITS', question: "Пролив Лаперуза", answer: "Лаперуза", lat: 45.7, lng: 142, toleranceKm: 100 },
  { id: 137, block: 1, category: 'STRAITS', question: "Татарский пролив", answer: "Татарский", lat: 50, lng: 141, toleranceKm: 300, polyPoints: [[46.5, 142], [52.5, 141.5]] },

  // ЗАЛИВЫ
  { id: 140, block: 1, category: 'GULFS', question: "Онежская губа", answer: "Онежская губа", lat: 64.5, lng: 36.5, toleranceKm: 150 },
  { id: 141, block: 1, category: 'GULFS', question: "Печорская губа", answer: "Печорская губа", lat: 68.3, lng: 54.5, toleranceKm: 150 },
  { id: 142, block: 1, category: 'GULFS', question: "Обская губа", answer: "Обская губа", lat: 70, lng: 72, toleranceKm: 300, polyPoints: [[67, 74], [72, 73]] },
  { id: 143, block: 1, category: 'GULFS', question: "Анадырский залив", answer: "Анадырский залив", lat: 64, lng: 178, toleranceKm: 250 },
  { id: 144, block: 1, category: 'GULFS', question: "Залив Шелехова", answer: "Залив Шелехова", lat: 60, lng: 158, toleranceKm: 300 },
  { id: 145, block: 1, category: 'GULFS', question: "Пенжинская губа", answer: "Пенжинская губа", lat: 62, lng: 163, toleranceKm: 150 },
  { id: 146, block: 1, category: 'GULFS', question: "Залив Петра Великого", answer: "Залив Петра Великого", lat: 42.8, lng: 131.5, toleranceKm: 150 },
  { id: 147, block: 1, category: 'GULFS', question: "Бухта Золотой Рог", answer: "Золотой Рог", lat: 43.1, lng: 131.9, toleranceKm: 50 },

  // ОЗЕРА
  { id: 190, block: 1, category: 'LAKES', question: "Каспийское море-озеро", answer: "Каспийское", lat: 42, lng: 51, toleranceKm: 500 },
  { id: 191, block: 1, category: 'LAKES', question: "Онежское озеро", answer: "Онежское", lat: 61.7, lng: 35.4, toleranceKm: 150 },
  { id: 192, block: 1, category: 'LAKES', question: "Ладожское озеро", answer: "Ладожское", lat: 60.8, lng: 31.5, toleranceKm: 150 },
  { id: 193, block: 1, category: 'LAKES', question: "Чудское озеро", answer: "Чудское", lat: 58.7, lng: 27.5, toleranceKm: 100 },
  { id: 194, block: 1, category: 'LAKES', question: "Озеро Байкал", answer: "Байкал", lat: 53.5, lng: 108, toleranceKm: 200 },
  { id: 195, block: 1, category: 'LAKES', question: "Озеро Баскунчак", answer: "Баскунчак", lat: 48.2, lng: 46.8, toleranceKm: 50 },

  // РЕКИ
  { id: 150, block: 1, category: 'RIVERS', question: "Река Волга", answer: "Волга", lat: 50, lng: 46, toleranceKm: 400, polyPoints: [[57, 33], [56, 43], [54, 48], [48, 44], [46, 48]] },
  { id: 151, block: 1, category: 'RIVERS', question: "Река Ока", answer: "Ока", lat: 54.5, lng: 39, toleranceKm: 200, polyPoints: [[52.9, 36.1], [54.5, 39], [56.1, 44]] },
  { id: 152, block: 1, category: 'RIVERS', question: "Река Кама", answer: "Кама", lat: 56, lng: 54, toleranceKm: 250, polyPoints: [[58, 53], [54, 50]] },
  { id: 153, block: 1, category: 'RIVERS', question: "Река Дон", answer: "Дон", lat: 48.5, lng: 40, toleranceKm: 300, polyPoints: [[54, 38], [50, 42], [47, 39]] },
  { id: 154, block: 1, category: 'RIVERS', question: "Река Кубань", answer: "Кубань", lat: 45, lng: 39, toleranceKm: 150, polyPoints: [[43.5, 42.1], [45, 40], [45.2, 37.4]] },
  { id: 155, block: 1, category: 'RIVERS', question: "Река Терек", answer: "Терек", lat: 43.5, lng: 45, toleranceKm: 150, polyPoints: [[42.7, 44.5], [43.9, 47.6]] },
  { id: 156, block: 1, category: 'RIVERS', question: "Река Урал", answer: "Урал", lat: 51, lng: 55, toleranceKm: 300, polyPoints: [[54.5, 59], [51, 51], [47, 52]] },
  { id: 157, block: 1, category: 'RIVERS', question: "Река Сев. Двина", answer: "Сев. Двина", lat: 64.5, lng: 41, toleranceKm: 300, polyPoints: [[61, 46], [64.5, 41]] },
  { id: 158, block: 1, category: 'RIVERS', question: "Река Нева", answer: "Нева", lat: 59.9, lng: 30.3, toleranceKm: 50 },
  { id: 159, block: 1, category: 'RIVERS', question: "Река Печора", answer: "Печора", lat: 65.5, lng: 56, toleranceKm: 400, polyPoints: [[62, 59], [68, 54]] },
  { id: 160, block: 1, category: 'RIVERS', question: "Река Обь (Бия, Катунь)", answer: "Обь", lat: 62, lng: 75, toleranceKm: 600, polyPoints: [[52, 84], [56, 80], [61, 69], [66, 70]] },
  { id: 161, block: 1, category: 'RIVERS', question: "Река Иртыш", answer: "Иртыш", lat: 58, lng: 69, toleranceKm: 500, polyPoints: [[47.5, 90], [55, 73], [61, 69]] },
  { id: 162, block: 1, category: 'RIVERS', question: "Река Енисей", answer: "Енисей", lat: 62, lng: 91, toleranceKm: 500, polyPoints: [[51.5, 94], [61, 90], [71, 83]] },
  { id: 163, block: 1, category: 'RIVERS', question: "Река Ангара", answer: "Ангара", lat: 58, lng: 103, toleranceKm: 300, polyPoints: [[51.8, 104.9], [58.5, 103]] },
  { id: 164, block: 1, category: 'RIVERS', question: "Нижняя Тунгуска", answer: "Нижняя Тунгуска", lat: 63, lng: 103, toleranceKm: 400, polyPoints: [[58, 106], [65, 88]] },
  { id: 165, block: 1, category: 'RIVERS', question: "Река Лена", answer: "Лена", lat: 64, lng: 124, toleranceKm: 600, polyPoints: [[53, 105], [62, 120], [72, 127]] },
  { id: 166, block: 1, category: 'RIVERS', question: "Река Витим", answer: "Витим", lat: 56, lng: 115, toleranceKm: 250, polyPoints: [[53, 113], [59, 112]] },
  { id: 167, block: 1, category: 'RIVERS', question: "Река Вилюй", answer: "Вилюй", lat: 63, lng: 115, toleranceKm: 400, polyPoints: [[66, 103], [64, 126]] },
  { id: 168, block: 1, category: 'RIVERS', question: "Река Яна", answer: "Яна", lat: 69, lng: 135, toleranceKm: 300, polyPoints: [[67, 134], [71, 136]] },
  { id: 169, block: 1, category: 'RIVERS', question: "Река Амур (Шилка, Аргунь)", answer: "Амур", lat: 50, lng: 132, toleranceKm: 600, polyPoints: [[53, 120], [48, 135], [53, 140]] },
  { id: 170, block: 1, category: 'RIVERS', question: "Река Индигирка", answer: "Индигирка", lat: 69, lng: 147, toleranceKm: 400, polyPoints: [[63, 142], [71, 150]] },
  { id: 171, block: 1, category: 'RIVERS', question: "Река Колыма", answer: "Колыма", lat: 66, lng: 155, toleranceKm: 500, polyPoints: [[62, 148], [69, 161]] },
  { id: 172, block: 1, category: 'RIVERS', question: "Река Анадырь", answer: "Анадырь", lat: 65, lng: 172, toleranceKm: 300, polyPoints: [[66, 168], [64, 177]] },
  { id: 173, block: 1, category: 'RIVERS', question: "Река Камчатка", answer: "Камчатка", lat: 56, lng: 160, toleranceKm: 200, polyPoints: [[54, 158], [56, 162]] },

  // РАВНИНЫ И ПЛОСКОГОРЬЯ
  { id: 210, block: 1, category: 'PLAINS', question: "Восточно-Европейская равнина", answer: "Восточно-Европейская", lat: 55, lng: 40, toleranceKm: 700 },
  { id: 211, block: 1, category: 'PLAINS', question: "Западно-Сибирская равнина", answer: "Западно-Сибирская", lat: 60, lng: 75, toleranceKm: 700 },
  { id: 212, block: 1, category: 'PLAINS', question: "Средне-Сибирское плоскогорье", answer: "Средне-Сибирское", lat: 65, lng: 100, toleranceKm: 700 },

  // ВОЗВЫШЕННОСТИ
  { id: 220, block: 1, category: 'HIGHLANDS', question: "Валдайская возвышенность", answer: "Валдайская", lat: 57.5, lng: 33.5, toleranceKm: 200 },
  { id: 221, block: 1, category: 'HIGHLANDS', question: "Смоленско-Московская возвышенность", answer: "Смоленско-Московская", lat: 55.5, lng: 35.5, toleranceKm: 250 },
  { id: 222, block: 1, category: 'HIGHLANDS', question: "Среднерусская возвышенность", answer: "Среднерусская", lat: 52, lng: 37, toleranceKm: 300 },
  { id: 223, block: 1, category: 'HIGHLANDS', question: "Приволжская возвышенность", answer: "Приволжская", lat: 52, lng: 47.5, toleranceKm: 300 },
  { id: 224, block: 1, category: 'HIGHLANDS', question: "Тиманский кряж", answer: "Тиманский кряж", lat: 65, lng: 51, toleranceKm: 250, polyPoints: [[62, 49], [67, 53]] },
  { id: 225, block: 1, category: 'HIGHLANDS', question: "Северные Увалы", answer: "Северные Увалы", lat: 60, lng: 48, toleranceKm: 300, polyPoints: [[59, 42], [61, 54]] },
  { id: 226, block: 1, category: 'HIGHLANDS', question: "Общий Сырт", answer: "Общий Сырт", lat: 52, lng: 53, toleranceKm: 200 },
  { id: 227, block: 1, category: 'HIGHLANDS', question: "Енисейский кряж", answer: "Енисейский кряж", lat: 59.5, lng: 93, toleranceKm: 250 },

  // ГОРЫ И НАГОРЬЯ
  { id: 250, block: 1, category: 'MOUNTAINS', question: "Плато Путорана (г. Камень)", answer: "Путорана", lat: 69, lng: 90, toleranceKm: 400 },
  { id: 251, block: 1, category: 'MOUNTAINS', question: "Срединный хребет (Камчатка)", answer: "Срединный хребет", lat: 56, lng: 158.5, toleranceKm: 300, polyPoints: [[52, 156], [59, 161]] },
  { id: 252, block: 1, category: 'MOUNTAINS', question: "Восточный хребет (Камчатка)", answer: "Восточный хребет", lat: 55, lng: 160.5, toleranceKm: 300, polyPoints: [[51, 157], [56, 162]] },
  { id: 253, block: 1, category: 'MOUNTAINS', question: "Уральские горы", answer: "Уральские", lat: 60, lng: 60, toleranceKm: 500, polyPoints: [[67, 66], [62, 59], [56, 58], [52, 57]] },
  { id: 254, block: 1, category: 'MOUNTAINS', question: "Верхоянский хребет", answer: "Верхоянский хребет", lat: 67, lng: 128, toleranceKm: 400, polyPoints: [[64, 125], [70, 130]] },
  { id: 255, block: 1, category: 'MOUNTAINS', question: "Хребет Джугджур", answer: "Джугджур", lat: 58, lng: 136, toleranceKm: 300, polyPoints: [[56, 134], [60, 139]] },
  { id: 256, block: 1, category: 'MOUNTAINS', question: "Хребет Черского", answer: "хр. Черского", lat: 66, lng: 145, toleranceKm: 400, polyPoints: [[63, 140], [68, 152]] },
  { id: 257, block: 1, category: 'MOUNTAINS', question: "Сихотэ-Алинь (г. Тардоки-Янги 2077 м)", answer: "Сихотэ-Алинь", lat: 45, lng: 136, toleranceKm: 400, polyPoints: [[43, 133], [49, 140]] },
  { id: 258, block: 1, category: 'MOUNTAINS', question: "Алтай (г. Белуха 4506 м)", answer: "Алтай", lat: 49.8, lng: 86.6, toleranceKm: 200 },
  { id: 259, block: 1, category: 'MOUNTAINS', question: "Горы Бырранга (г. Прончищева 1146 м)", answer: "Бырранга", lat: 75.5, lng: 100, toleranceKm: 300, polyPoints: [[74, 90], [76, 110]] },
  { id: 260, block: 1, category: 'MOUNTAINS', question: "Хибины (г. Часначорр 1191 м)", answer: "Хибины", lat: 67.7, lng: 33.4, toleranceKm: 100 },
  { id: 261, block: 1, category: 'MOUNTAINS', question: "Западный Саян (г. Кызыл-Тайга 3121 м)", answer: "Западный Саян", lat: 52, lng: 92, toleranceKm: 250, polyPoints: [[51, 89], [53, 95]] },
  { id: 262, block: 1, category: 'MOUNTAINS', question: "Восточный Саян (г. Мунку-Сардык 3491 м)", answer: "Восточный Саян", lat: 53, lng: 100, toleranceKm: 250, polyPoints: [[52, 96], [55, 105]] },
  { id: 263, block: 1, category: 'MOUNTAINS', question: "Кавказские горы (г. Эльбрус 5642 м)", answer: "Кавказ", lat: 43.3, lng: 43, toleranceKm: 400, polyPoints: [[44.5, 39], [41.5, 48]] },

  // --- БЛОК 2: РЕКОРДЫ И КРАЙНИЕ ТОЧКИ (27 ОБЪЕКТОВ) ---
  { id: 3001, block: 2, category: 'RECORDS', question: "Самое большое и глубокое море у берегов России", answer: "Берингово", lat: 58, lng: 175, toleranceKm: 800 },
  { id: 3002, block: 2, category: 'RECORDS', question: "Самое мелководное море на Земле", answer: "Азовское", lat: 46, lng: 37, toleranceKm: 150 },
  { id: 3003, block: 2, category: 'RECORDS', question: "Самое холодное море", answer: "Восточно-Сибирское", lat: 72, lng: 163, toleranceKm: 500 },
  { id: 3004, block: 2, category: 'RECORDS', question: "Самое чистое море", answer: "Чукотское", lat: 70, lng: -175, toleranceKm: 400 },
  { id: 3005, block: 2, category: 'RECORDS', question: "Самое пресное море", answer: "Балтийское", lat: 57, lng: 20, toleranceKm: 400 },
  { id: 3006, block: 2, category: 'RECORDS', question: "Самый длинный пролив", answer: "Татарский (663 км)", lat: 50, lng: 141, toleranceKm: 300, polyPoints: [[46, 142], [53, 141]] },
  { id: 3007, block: 2, category: 'RECORDS', question: "Самый широкий пролив (в России)", answer: "Берингов (86 км)", lat: 66, lng: -169, toleranceKm: 150 },
  { id: 3008, block: 2, category: 'RECORDS', question: "Самый большой остров", answer: "Сахалин", lat: 51, lng: 143, toleranceKm: 450, polyPoints: [[46, 142], [54, 142]] },
  { id: 3009, block: 2, category: 'RECORDS', question: "Самый большой полуостров", answer: "Таймыр", lat: 75, lng: 100, toleranceKm: 400 },
  { id: 3010, block: 2, category: 'RECORDS', question: "Самые высокие приливы", answer: "Пенжинская губа (13м)", lat: 62, lng: 163, toleranceKm: 150 },
  { id: 3011, block: 2, category: 'RECORDS', question: "Самая большая равнина", answer: "Западно-Сибирская", lat: 60, lng: 75, toleranceKm: 700 },
  { id: 3012, block: 2, category: 'RECORDS', question: "Самая длинная горная система", answer: "Урал (2100 км)", lat: 60, lng: 60, toleranceKm: 600, polyPoints: [[67, 66], [52, 57]] },
  { id: 3013, block: 2, category: 'RECORDS', question: "Самая высокая вершина", answer: "г. Эльбрус (5642 м)", lat: 43.35, lng: 42.44, toleranceKm: 150 },
  { id: 3014, block: 2, category: 'RECORDS', question: "Самая низкая отметка", answer: "Прикаспийская низменность (-28 м)", lat: 47, lng: 47, toleranceKm: 300 },
  { id: 3015, block: 2, category: 'RECORDS', question: "Самое глубокое озеро в мире", answer: "Байкал (1637 м)", lat: 53.5, lng: 108, toleranceKm: 150 },
  { id: 3016, block: 2, category: 'RECORDS', question: "Самая длинная река", answer: "Лена (4400 км)", lat: 64, lng: 124, toleranceKm: 600, polyPoints: [[53, 105], [72, 127]] },
  { id: 3017, block: 2, category: 'RECORDS', question: "Самая длинная река Европы", answer: "Волга (3531 км)", lat: 50, lng: 46, toleranceKm: 400, polyPoints: [[57, 33], [46, 48]] },
  { id: 3018, block: 2, category: 'RECORDS', question: "Самая полноводная река", answer: "Енисей", lat: 62, lng: 91, toleranceKm: 400, polyPoints: [[51, 94], [71, 83]] },
  { id: 3019, block: 2, category: 'RECORDS', question: "Самый высокий водопад", answer: "Илья Муромец (141 м)", lat: 44.47, lng: 146.9, toleranceKm: 100 },
  { id: 3020, block: 2, category: 'RECORDS', question: "Самая низкая температура воздуха", answer: "Оймякон (-71°)", lat: 63.46, lng: 142.78, toleranceKm: 200 },
  { id: 3021, block: 2, category: 'RECORDS', question: "Самая высокая температура", answer: "полупустыни Прикаспия", lat: 46, lng: 48, toleranceKm: 300 },
  { id: 3022, block: 2, category: 'RECORDS', question: "Географический центр России", answer: "озеро Виви", lat: 66.41, lng: 94.25, toleranceKm: 200 },
  { id: 3023, block: 2, category: 'EXTREME_POINTS', question: "Самая северная островная точка России", answer: "мыс Флигели", lat: 81.85, lng: 59.1, toleranceKm: 200 },
  { id: 3024, block: 2, category: 'EXTREME_POINTS', question: "Самая северная материковая точка России", answer: "мыс Челюскин", lat: 77.72, lng: 104.3, toleranceKm: 200 },
  { id: 3025, block: 2, category: 'EXTREME_POINTS', question: "Самая южная точка России", answer: "гора Базардюзю", lat: 41.18, lng: 47.78, toleranceKm: 150 },
  { id: 3026, block: 2, category: 'EXTREME_POINTS', question: "Самая западная точка России", answer: "Балтийская коса", lat: 54.45, lng: 19.63, toleranceKm: 100 },
  { id: 3027, block: 2, category: 'EXTREME_POINTS', question: "Самая восточная материковая точка России", answer: "мыс Дежнёва", lat: 66.08, lng: -169.65, toleranceKm: 200 }
];

export const MAP_CENTER: [number, number] = [62, 100];
export const INITIAL_ZOOM = 3;
export const MIN_ZOOM = 2;
export const MAX_ZOOM = 6;
export const QUESTIONS_PER_TEST = 10;
