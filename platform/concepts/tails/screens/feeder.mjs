import { THEME } from './_shared.mjs';
import { feeder } from '../model.mjs';

/* Автокормушка: настройка как у умных устройств — телефон берёт имя домашней сети,
   подключается к сети самой кормушки и передаёт ей сеть и расписание порций */
export default (ui) => ui.screen({
  id: 'feeder', theme: THEME,
  body: [
    ui.nav({ title: feeder.name }),
    ui.scroll([
      `<div class="tl-note-head"><h2>Кормушка Трюфеля</h2><p>Порции по весу: ${feeder.weight}, +1,3 кг с февраля</p></div>`,
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Взять домашнюю сеть', icon: 'wifi', block: true, primary: true, activate: 'wifiinfo|feeder' }),
          ui.button({ label: 'Подключиться к кормушке', icon: 'plug', variant: 'secondary', block: true, ask: 'hotspot|feeder|feeder' }),
        ]),
        ui.list([
          ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Домашняя сеть ${feeder.home}`, sub: 'Пароль введите один раз — кормушка запомнит', shownAfter: 'wifiinfo' }),
          ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: `Кормушка подключена через ${feeder.ap}`, sub: `Расписание передано · следующая порция в ${feeder.meals[1][0]}`, shownAfter: 'hotspot' }),
        ]),
      ] }),
      ui.section({ title: 'Расписание', meta: '3 раза · 450 г', children: ui.list(feeder.meals.map(([time, gram, sub]) =>
        ui.row({ lead: ui.leadIcon('', { text: time }), title: gram, sub }))) }),
    ]),
  ],
});
