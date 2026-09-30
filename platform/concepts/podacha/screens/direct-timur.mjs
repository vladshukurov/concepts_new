import { direct } from './_shared.mjs';

export default (ui) => direct(ui, { id: 'direct-timur', initial: 'ТС', name: 'Тимур Садыков', status: 'был в 14:20', items: [
  ui.day('Понедельник'),
  ui.bubble({ attach: '<button class="pd-chat-card" data-go="recipe"><b>20</b><span><strong>Хачапури на сковороде</strong><small>20 минут · 2 удачные замены</small></span></button>', text: 'Как обещал', time: '14:08' }),
  ui.bubble({ out: true, text: 'Спасибо, попробую на выходных', time: '14:12', read: true }),
  ui.voice({ dur: '0:21', time: '14:15' }),
] });
