import { directScreen } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => directScreen(ui, { id: 'direct-misha', person: people.misha, status: 'был недавно', msgs: [
  ['day', 'Воскресенье'], ['in', 'Спасибо за разбор перспективы на встрече', '20:14'],
  ['me', 'Приходи в следующий раз, покажу про горизонт', '20:30'],
] });
