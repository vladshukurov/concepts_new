import { directScreen } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => directScreen(ui, { id: 'direct-alina', person: people.alina, status: 'была вчера', msgs: [
  ['day', 'Понедельник'], ['me', 'Чем рисуешь контур?', '12:10'],
  ['in', 'Линер Sakura 0.3, бумага Fabriano', '12:31'],
] });
