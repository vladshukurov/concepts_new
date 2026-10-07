import { dmScreen } from './_shared.mjs';
import { people } from '../model.mjs';

/* Личный чат с Игорем: он добавил сеть отеля из QR */
export default (ui) => dmScreen(ui, { id: 'igor', person: people.igor, status: 'в сети', msgs: [
  ['day', '3 октября'], ['me', 'Игорь, созвонимся по видео про Казань?', '8:50'],
  ['in', 'Давай в 9:05', '8:52'],
  ['day', 'Вчера'], ['in', 'Сеть отеля добавил в чат поездки, пароль внутри', '22:14'],
] });
