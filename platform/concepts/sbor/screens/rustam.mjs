import { dmScreen } from './_shared.mjs';
import { people } from '../model.mjs';

/* Личный чат с Рустамом, который ведёт группу по Кремлю */
export default (ui) => dmScreen(ui, { id: 'rustam', person: people.rustam, status: 'в сети', msgs: [
  ['day', 'Вчера'], ['in', 'Голосовое · 1:12 · про Свияжск', '19:40'],
  ['me', 'Спасибо, включу группе по дороге на катер', '19:52'],
  ['day', 'Сегодня'], ['in', 'Жду у входа, начнём у Спасской башни в 10:30', '9:31'],
] });
