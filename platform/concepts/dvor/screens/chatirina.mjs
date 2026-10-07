import { dmScreen } from './_shared.mjs';

/* Диалог с Ириной из 78-й: голосовое про стеллаж */
export default (ui) => dmScreen(ui, { id: 'chatirina', initial: 'ИТ', name: 'Ирина, кв. 78', status: 'была 3 апреля', msgs: [
  ['day', '3 апреля'], ['in', 'Голосовое · 0:31', '18:12'],
  ['me', 'Поняла, ключ заберу в субботу', '18:30'],
] });
