import { dmScreen } from './_shared.mjs';
import { PET } from './_shared.mjs';

/* Чат с Маратом, хозяином Локи */
export default (ui) => dmScreen(ui, { id: 'chat-marat', head: { face: PET.loki, name: 'Марат · Локи' }, status: 'был в понедельник', msgs: [
  ['day', 'Понедельник'], ['me', 'Попробуй свисток вместо команды голосом', '19:02'],
  ['in', 'Спасибо за совет про свисток', '19:40'],
] });
