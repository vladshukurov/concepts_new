import { direct } from './_shared.mjs';

export default (ui) => direct(ui, { id: 'direct-zhanna', initial: 'ЖК', name: 'Жанна Ким', status: 'в сети', items: [
  ui.day('Вчера'),
  ui.bubble({ out: true, text: 'Чем можно заменить тахини?', time: '20:11', read: true }),
  ui.bubble({ text: 'Густым йогуртом и немного лимона — проверяла на прошлой неделе', time: '20:16' }),
  ui.bubble({ attach: '<div class="pd-chat-card"><b>35</b><span><strong>Чечевичный суп</strong><small>35 минут · 6 ингредиентов</small></span></div>', time: '20:17' }),
] });
