import { dmScreen } from './_shared.mjs';
import { people } from '../model.mjs';

/* Личный чат с Тимуром: пропущенный звонок */
export default (ui) => dmScreen(ui, { id: 'timur', person: people.timur, status: 'был 2 минуты назад', msgs: [
  ['day', '1 октября'], ['in', 'Пропущенный звонок · 18:44', '18:44'],
  ['me', 'Тимур, перезвоню вечером, на работе', '18:50'],
  ['in', 'Ок, там про поезд, ничего срочного', '18:52'],
] });
