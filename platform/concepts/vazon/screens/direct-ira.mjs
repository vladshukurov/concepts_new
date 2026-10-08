import { direct } from './_shared.mjs';
import { swap, plants } from '../model.mjs';

/* Переписка с подругой-цветоводом: детка хлорофитума в обмен на черенок хойи.
   Ответ Иры придёт на экран блокировки с её именем */
export default (ui) => direct(ui, { id: 'direct-ira', initial: 'ИБ', name: 'Ира Белова', status: 'в сети', placeholder: 'Да, в субботу в 12 у меня', send: { activate: 'commnotif|lockscreen', label: 'Отправить' }, items: [
  ui.day('Вторник'),
  ui.bubble({ out: true, text: 'У калатеи опять жёлтые края. Батарея?', time: '21:04', read: true }),
  ui.bubble({ text: 'Скорее всего. Поставь рядом миску с водой и не опрыскивай листья', time: '21:10' }),
  ui.day('Сегодня'),
  ui.bubble({ attach: `<button class="vz-chat-card" data-go="${plants.chlorophytum.id}"><b>${ui.icon('trees')}</b><span><strong>${plants.chlorophytum.name}</strong><small>Три детки · одна твоя</small></span></button>`, out: true, text: 'Детка готова, корешки уже 2 см', time: '8:05', read: true }),
  ui.bubble({ attach: '<div class="vz-photos"><span class="ph"></span><span class="ph"></span></div>', text: 'Вот моя хойя — отрежу тебе черенок с двумя узлами', time: '8:12' }),
  ui.bubble({ text: `Меняемся ${swap.when}?`, time: '8:12' }),
] });
