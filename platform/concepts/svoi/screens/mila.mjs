import { THEME } from './_shared.mjs';
import { people, pickup, now, clubs } from '../model.mjs';

/* Занятие Милы: где, до скольки и кто забирает. Напоминание стоит у самого события */
export default (ui) => ui.screen({
  id: 'mila', theme: THEME,
  body: [
    ui.nav({ title: pickup.title }),
    ui.scroll([
      `<div class="sv-head">${ui.avatar(people.mila.initial, { large: true })}<h1 class="ui-title">${pickup.title}</h1><p class="ui-sub">${now.date} · ${pickup.from}–${pickup.to}</p></div>`,
      ui.section({ children: ui.list([
        ui.reminder({ title: `Напомнить забрать Милу в ${pickup.to}`, titleGranted: `Напомним в ${pickup.remind} — забрать Милу в ${pickup.to}`, sub: `За 30 минут, с адресом: ${pickup.addr}`, here: 'mila' }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'map-pin', title: pickup.place, sub: `${pickup.addr} · ${pickup.dist} от дома` }),
        ui.cell({ icon: 'user', title: 'Педагог', value: pickup.teacher }),
        ui.cell({ icon: 'car', title: 'Забирает', value: 'Алина' }),
        ui.cell({ icon: 'message-circle', title: 'Написать в чат семьи', go: 'family' }),
      ] }) }),
      ui.section({ title: 'Кружки на неделе', meta: `${clubs.perWeek} занятий`, children: ui.list(clubs.list.map(([who, what, when]) => ui.row({
        lead: ui.avatar(who === 'Мила' ? people.mila.initial : people.danya.initial), title: `${what} · ${who}`, sub: when,
      }))) }),
    ]),
  ],
});
