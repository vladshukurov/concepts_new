import { directScreen } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => directScreen(ui, { id: 'direct-lera', person: people.lera, status: 'в сети', msgs: [
  ['day', 'Сегодня'], ['in', 'Скинула фото рынка сверху, с моста', '16:40'],
  ['me', 'Класс, возьму ракурс на встречу', '16:52'],
] });
