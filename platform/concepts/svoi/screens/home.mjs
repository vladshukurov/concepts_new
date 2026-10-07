import { THEME, TABS } from './_shared.mjs';
import { me, people, family, home, board, pickup, clubs, now } from '../model.mjs';

/* Шаги забирания: «Забрала» и «Едем» ставятся на месте, «Дома» — по домашней сети */
const steps = (ui) => `<div class="sv-steps">`
  + `<button class="sv-step" data-toggle="on" aria-pressed="false">${ui.icon('check')}<span>Забрала</span></button>`
  + `<button class="sv-step" data-toggle="on" aria-pressed="false">${ui.icon('car')}<span>Едем</span></button>`
  + `<button class="sv-step sv-step-home" data-activate="wifiinfo|home" aria-label="Дома">${ui.icon('house')}<span data-hide-granted="wifiinfo">Дома</span><span class="perm-hidden" data-show-granted="wifiinfo">Дома ${pickup.homeAt}</span></button>`
  + `</div>`
  + `<button class="sv-where" data-ask="location|geo|home" aria-label="Где сейчас">${ui.icon('navigation')}<span>Где сейчас</span><small>точка в чат семьи</small></button>`
  + `<p class="sv-arrived perm-hidden" data-show-granted="wifiinfo">${ui.icon('wifi')}${people.mila.short} дома в ${pickup.homeAt} · ${family.ssid}</p>`;

/* Карточка забирания: кто, где, до скольки и кто забирает. Своя — с «Заберу я» и шагами */
const card = (ui, { kid, what, place, from, to, by, mine, step, day }) => {
  const child = people[kid];
  const who = by ? people[by] : null;
  const head = `<div class="sv-pick-head">${ui.avatar(child.initial)}<span><strong>${what} · ${child.short}</strong><span>${place}</span></span><span class="sv-pick-to"><small>${day || 'до'}</small><b>${day ? `${from}–${to}` : to}</b></span></div>`;
  if (!mine) {
    return `<article class="sv-pick">${head}<p class="sv-pick-who">${ui.avatar(who.initial)}<span><strong>Забирает ${who.name.split(' ')[0]}</strong><span>${step}</span></span></p></article>`;
  }
  return `<article class="sv-pick is-open">${head}`
    + `<p class="sv-pick-who sv-nobody">${ui.icon('triangle-alert')}<span><strong>Никто не забирает</strong><span>до конца занятия ${pickup.left}</span></span></p>`
    + `<p class="sv-pick-who sv-mine">${ui.avatar(me.initial)}<span><strong>Забираю я</strong><span>Семья видит: «Забирает ${me.short}» · в чате «${child.short} — ${me.short}»</span></span></p>`
    + `<button class="sv-take" data-toggle="on" aria-pressed="false"><span class="sv-take-on">Заберу я</span><span class="sv-take-off">Не смогу</span></button>`
    + steps(ui)
    + `<div class="sv-pick-remind">${ui.list([ui.reminder({ title: 'Напомнить за 30 минут до конца занятия', titleGranted: `Напомним в ${pickup.remind} — забрать Милу в ${to}`, sub: `С адресом: ${pickup.addr}`, here: 'home' })])}</div>`
    + `</article>`;
};

/* Дом: доска «Кто заберёт» — каждое занятие детей карточкой, кто забирает и на каком шаге */
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Дом', ui.iconButton({ icon: 'plus', label: 'Новое занятие', go: 'newclass' })),
    ui.section({ className: 'sv-homesec', children: [
      `<p class="sv-homeline">${ui.icon('house')}<span><strong>Дома ${me.short} с ${home.meSince}</strong><span>${people.danya.short} на бассейне до 18:00 · ${people.timur.short} к ${home.timurBack}</span></span></p>`,
      ui.foot(`Статус «дома» обновился в ${home.synced}`),
    ] }),
    ui.section({ title: 'Кто заберёт', meta: now.date.split(', ')[1], children: [...board.today.map((c) => card(ui, c)), ui.denied('location')] }),
    ui.section({ title: 'В субботу', children: card(ui, board.saturday) }),
    ui.section({ title: 'Завтра', children: [
      ui.list(board.tomorrow.map(([title, sub, by]) => ui.row({ lead: ui.avatar(people[Object.keys(people).find((k) => people[k].short === by)].initial), title, sub: `${sub} · забирает ${by}` }))),
      ui.foot('Расписание обновлено в 06:30'),
    ] }),
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('calendar-days', { round: true, accent: true }), title: 'Расписание', sub: `${clubs.perWeek} занятий в неделю · школа и кружки`, go: 'schedule' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
