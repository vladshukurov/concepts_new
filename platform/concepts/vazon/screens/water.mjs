import { THEME } from './_shared.mjs';
import { today, plants } from '../model.mjs';

/* Полив на сегодня: отметки на месте, погода в своём городе сдвигает сроки,
   домашняя сеть подтверждает «вы дома — можно полить» */
export default (ui) => ui.screen({
  id: 'water', theme: THEME,
  body: [
    ui.nav({ title: 'Полив сегодня' }),
    ui.scroll([
      `<div class="vz-head">${ui.leadIcon('droplets', { round: true, accent: true })}<div><small>четверг · ${today.length} растения</small><h1>Полить сегодня</h1><p class="ui-sub">Отстоянная вода, комнатной температуры</p></div></div>`,
      ui.section({ children: ui.checklist(today.map((p) => ({ title: p.name, sub: `${p.room} · полив ${p.every}`, value: p === plants.monstera ? '500 мл' : p === plants.calathea ? '200 мл' : '100 мл' }))) }),
      ui.section({ title: 'Дома ли вы', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true }), title: 'Проверить, что я дома', sub: 'По домашней сети — тогда можно полить', activate: 'wifiinfo|water' }),
        ui.row({ lead: ui.leadIcon('house', { round: true, accent: true }), title: 'Вы дома · можно полить', sub: 'Сеть Morozovy_5G · квартира на Чистопольской', shownAfter: 'wifiinfo' }),
      ]) }),
      ui.section({ title: 'Погода', children: [
        ui.group({ cells: [ui.cell({ icon: 'cloud-sun', title: 'Погода в моём городе', sub: 'Солнце и отопление сушат грунт быстрее', ask: 'location|water|water' })] }),
        ui.denied('location'),
        ui.list([ui.row({ lead: ui.leadIcon('cloud-sun', { round: true, accent: true }), title: 'Казань · солнечно, +14°', sub: 'Сегодня солнечно — подоконник пересыхает быстрее, пеперомию полить первой', subWrap: true, shownAfter: 'location' })]),
      ] }),
      ui.section({ title: 'Скоро', children: ui.list([
        ui.row({ lead: ui.leadIcon('trees'), title: plants.chlorophytum.name, sub: `Полить ${plants.chlorophytum.water}`, go: plants.chlorophytum.id }),
        ui.row({ lead: ui.leadIcon('trees'), title: plants.ficus.name, sub: `Полить ${plants.ficus.water}`, go: plants.ficus.id }),
        ui.row({ lead: ui.leadIcon('layout-grid'), title: 'Полив на экране «Домой»', sub: 'Список без открытия приложения', activate: 'appgroups|widget' }),
      ]) }),
    ]),
  ],
});
