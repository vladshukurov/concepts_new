import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'background', theme: THEME,
  body: [
    ui.nav({ title: 'Фоновая работа' }),
    ui.scroll([
      ui.section({ children: ui.actions([ui.button({ label: 'Обрабатывать на зарядке', icon: 'moon', block: true, primary: true, activate: 'bgtask|background' })]) }),
      ui.denied('bgtask', 'Миниатюры соберутся при открытом приложении'),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('images'), title: 'Миниатюры сканов', sub: '12 из 31 · следующая попытка ночью', end: '<span class="ui-row-end is-value"><span class="dl is-busy"><svg><use href="#i-loader-circle"/></svg>39 %</span></span>' }),
        ui.row({ lead: ui.leadIcon('house'), title: 'Лента к открытию', sub: 'Обновлена в 18:04 · 7 новых листов' }),
      ]) }),
    ]),
  ],
});
