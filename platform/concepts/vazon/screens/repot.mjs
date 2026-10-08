import { THEME } from './_shared.mjs';
import { repot, swap, plants } from '../model.mjs';

/* Пересадка хлорофитума: что сделано, что докупить, кому детка */
export default (ui) => ui.screen({
  id: 'repot', theme: THEME,
  body: [
    ui.nav({ title: 'Пересадка' }),
    ui.scroll([
      `<div class="vz-head">${ui.leadIcon('layers', { round: true, accent: true })}<div><small>${repot.when} · ${plants.chlorophytum.room}</small><h1>${repot.title}</h1><p class="ui-sub">Горшок 12 → ${repot.pot} · три детки отсажены</p></div></div>`,
      ui.section({ title: 'Что сделано', children: ui.checklist([
        { title: 'Горшок побольше', sub: `Керамика ${repot.pot}, с дырой в дне`, done: true },
        { title: 'Дренаж', sub: 'Керамзит 2 см', done: true },
        { title: 'Отсадить деток', sub: 'Три штуки · две в воде, одна Ире', done: true },
        { title: 'Досыпать грунт сверху', sub: 'Осел после полива — не хватило пакета' },
      ]) }),
      ui.section({ title: 'Докупить', children: [
        ui.list([ui.row({ lead: ui.leadIcon('shopping-basket'), title: 'Грунт для лиственных', sub: `5 л · ${repot.price} · «${repot.shop}»` })]),
        ui.actions([ui.button({ label: 'Докупить грунт', icon: 'shopping-basket', variant: 'secondary', block: true, activate: 'autofill|fill' })]),
      ] }),
      ui.section({ title: 'Детка для Иры', children: ui.list([
        ui.row({ lead: ui.avatar('ИБ'), title: 'Ира Белова', sub: `Меняемся на ${swap.get} · ${swap.when}`, go: 'direct-ira' }),
        ui.row({ lead: ui.leadIcon('trees'), title: plants.chlorophytum.name, sub: 'Карточка растения', go: plants.chlorophytum.id }),
      ]) }),
    ]),
  ],
});
