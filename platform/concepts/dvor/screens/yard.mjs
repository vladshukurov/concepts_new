import { THEME, TABS } from './_shared.mjs';
import { house, meters, cleanup } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'yard', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Двор'),
    ui.section({ children: [
      `<div class="dv-map"><span class="dv-block dv-b10">10</span><span class="dv-block dv-b12">12</span><span class="dv-block dv-b14">14</span><span class="dv-zone dv-play">площадка</span><span class="dv-zone dv-park">парковка</span><i class="dv-pin p1"></i><i class="dv-pin p2"></i><i class="dv-me"></i></div>`,
      ui.foot(`Граница 150 м · точка — вы · кольцо — заявка`, 'is-block'),
    ] }),
    ui.denied('location'),
    ui.section({ title: 'Сервисы двора', children: ui.list([
      ui.row({ lead: ui.leadIcon('wifi'), title: 'Гостевая сеть', sub: 'Dvor-Guest · QR на лавочке', go: 'guest' }),
      ui.row({ lead: ui.leadIcon('gauge'), title: 'Счётчики', sub: `Вода и электричество · до ${meters.deadlineLabel}`, go: 'meters' }),
      ui.row({ lead: ui.leadIcon('calendar'), title: 'События дома', sub: `Субботник ${cleanup.day}`, go: 'events' }),
      ui.row({ lead: ui.leadIcon('phone-incoming', { accent: true }), title: 'Домофон', sub: 'Курьер у второй двери · сейчас', go: 'intercom' }),
      ui.row({ lead: ui.leadIcon('trash-2'), title: 'Мусорные баки', sub: 'Вывоз по чётным · следующий 14 апреля' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'yard' }),
});
