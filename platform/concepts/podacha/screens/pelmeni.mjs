import { THEME } from './_shared.mjs';

/* Предстоящий ужин: что купить и записать в календарь заранее */
export default (ui) => ui.screen({
  id: 'pelmeni', theme: THEME,
  body: [
    ui.nav({ title: 'Ужин в пятницу', trailing: ui.iconButton({ icon: 'message-circle', label: 'Написать Жанне', go: 'direct-zhanna' }) }),
    ui.scroll([
      `<div class="pd-head"><small>Пятница · 19:30</small><h1>Пельмени втроём</h1><p class="ui-sub">Жанна ведёт · вы и Тимур · 6 шагов · около 2 часов</p></div>`,
      ui.section({ title: 'Купить заранее', meta: '2 из 5', children: ui.checklist([
        { title: 'Мука', sub: '1 кг · куплено', done: true },
        { title: 'Лук', sub: '3 шт · дома', done: true },
        { title: 'Фарш говяжий', sub: '700 г · Жанна советует пополам со свининой' },
        { title: 'Сметана', sub: '20 % · 2 банки' },
        { title: 'Лавровый лист' },
      ]) }),
      ui.section({ title: 'Не пропустить', children: [
        ui.group({ cells: [
          ui.cell({ icon: 'calendar-plus', title: 'Добавить в календарь', sub: 'Пятница, 19:30–21:30', ask: 'calendar|pelmeni|pelmeni' }),
        ] }),
        ui.denied('calendar'),
        ui.list([ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: 'Пельмени втроём в календаре', sub: 'Пятница, 19:30 · напоминание за час', shownAfter: 'calendar' })]),
      ] }),
    ]),
  ],
});
