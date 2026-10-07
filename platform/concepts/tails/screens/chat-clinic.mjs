import { dmScreen } from './_shared.mjs';
import { visit } from '../model.mjs';

/* Чат с клиникой: врач Мария Тенищева, перенос приёма */
export default (ui) => dmScreen(ui, { id: 'chat-clinic', head: { initial: 'МТ', name: 'Мария Тенищева · клиника' }, status: 'ветеринар', msgs: [
  ['day', 'Вчера'], ['in', `Приём сдвинули на ${visit.day}, ${visit.time}`, '17:20'],
  ['me', 'Хорошо, буду. Ветпаспорт возьму с собой', '17:31'],
] });
