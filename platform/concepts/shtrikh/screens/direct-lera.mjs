import { directScreen } from './_shared.mjs';
import { people, leraReply } from '../model.mjs';

/* Отправка вопроса Лере: ответ приходит на экран блокировки с её именем (commnotif) и появляется в диалоге */
export default (ui) => directScreen(ui, { id: 'direct-lera', person: people.lera, status: 'в сети', msgs: [
  ['day', 'Сегодня'], ['in', 'Скинула фото рынка сверху, с моста', '16:40'],
  ['me', 'Класс, возьму ракурс на встречу. Во сколько будешь у часов?', '18:20'],
], send: { activate: 'commnotif|lockscreen' }, reply: [leraReply.text, leraReply.time] });
