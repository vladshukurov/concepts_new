import { dmScreen } from './_shared.mjs';
import { people } from '../model.mjs';

/* Личный чат с Олегом: билеты и бронь отеля */
export default (ui) => dmScreen(ui, { id: 'oleg', person: people.oleg, status: 'в сети', msgs: [
  ['day', '7 октября'], ['in', 'Ника, билеты на обратный поезд у меня, скину вагон и места', '11:20'],
  ['me', 'Да, жду. И счёт за отель раскинь на всех', '11:24'],
  ['in', 'Скинул в расходы, 19 650 ₽', '11:31'],
] });
