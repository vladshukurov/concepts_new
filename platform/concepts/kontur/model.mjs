/**
 * Модель домена «Контура»: плёночная лаборатория, партии, листы и прогулки.
 * «Сейчас» — среда, 9 сентября, 18:20: партия K-184 в проявителе,
 * сбор прогулки в 18:40, окно сканера в 20:20.
 */
import { moment, dateLabel, range } from '../../kernel/world.mjs';

export const now = moment('2026-09-09', '18:20');

export const people = {
  me: { name: 'Айжан', initial: 'АЙ', about: 'это вы' },
  dana: { name: 'Дана Садыкова', initial: 'ДС' },
  timur: { name: 'Тимур Ким', initial: 'ТК' },
};

export const lab = { name: 'Lab-Red', network: 'Lab-Red', scanner: 'Сканер 02', window: '20:20', windowEnd: '20:50' };
export const batch = { id: 'K-184', film: 'HP5', developer: 'DD-X 1+4', temp: '20 °C', time: '9:30', developed: dateLabel('2026-09-08') };
export const walk = { title: 'Тени вдоль Малой Алматинки', start: '18:40', end: '21:00', hours: range('18:40', '21:00'), sunset: '19:21', from: 'Арбат', people: 7 };

export const entities = [
  { name: 'Партия', what: 'плёнка в проявке: химия, температура, этапы', states: ['принята', 'проявляется', 'сушится', 'отсканирована'], screens: ['batch', 'timer', 'lab'] },
  { name: 'Контакт-лист', what: 'лист кадров с номерами и отметками', states: ['снят', 'отмечен', 'опубликован'], screens: ['scan', 'post', 'photographer', 'picker'] },
  { name: 'Прогулка', what: 'фотопрогулка: маршрут, время, участники', states: ['собирается', 'идёт', 'прошла'], screens: ['walks', 'walk', 'route', 'calendar'] },
  { name: 'Передача', what: 'отпечатки и материалы от лаборатории человеку', states: ['подготовлена', 'передана', 'получена'], screens: ['handoff', 'materials'] },
  { name: 'Окно оборудования', what: 'время на сканере или красном свете', states: ['свободно', 'ваше', 'занято'], screens: ['lab', 'labnet'] },
];
