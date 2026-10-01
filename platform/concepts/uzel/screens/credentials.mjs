import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'credentials', theme: THEME,
  body: [
    ui.nav({ title: 'Каталоги деталей' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'globe', title: 'detali-spb.ru', sub: 'alexey@uzel.club', toast: 'Логин скопирован' }),
        ui.cell({ icon: 'globe', title: 'lamp-market.ru', sub: 'Общий вход «Реверса»', toast: 'Логин скопирован' }),
        ui.cell({ icon: 'key', title: 'Вход в каталог', sub: 'Подставлять логин на сайте', activate: 'autofill|cataloglogin' }),
      ] }) }),
    ]),
  ],
});
