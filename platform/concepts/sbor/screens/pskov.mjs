import { tripScreen } from './_shared.mjs';
import { trips } from '../model.mjs';

/* Чат будущей поездки в Псков: даты ещё выбирают опросом */
export default (ui) => tripScreen(ui, { id: 'pskov', initial: 'ПН', name: trips.pskov.name, status: `${trips.pskov.people} участников`, msgs: [
  ['sys', 'Лена создала поездку'], ['day', 'Вчера'],
  ['Лена Котова', 'Бронь на 9 человек, ждём ещё двоих', '21:16'],
  ['Игорь Ланской', 'Я в деле, даты выбрал в опросе', '21:24'],
  ['me', 'Записывайте и меня', '21:30'],
] });
