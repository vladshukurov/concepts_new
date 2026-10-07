import { dmScreen } from './_shared.mjs';
import { people } from '../model.mjs';

/* Личный чат с Аней: спускается к сбору */
export default (ui) => dmScreen(ui, { id: 'anya', person: people.anya, status: 'в отеле', msgs: [
  ['day', 'Сегодня'], ['me', 'Аня, сбор в 10:00, ты готова?', '9:35'],
  ['in', 'Спускаюсь, 3 минуты', '9:39'],
] });
