import { dmScreen } from './_shared.mjs';
import { PET } from './_shared.mjs';

/* Чат с Алёной, хозяйкой Мяты */
export default (ui) => dmScreen(ui, { id: 'chat-alena', head: { face: PET.mint, name: 'Алёна · Мята' }, status: 'была 12 мая', msgs: [
  ['day', '12 мая'], ['in', 'Голосовое · 0:24', '11:14'],
  ['me', 'Услышала, в субботу идём вместе', '11:30'],
] });
