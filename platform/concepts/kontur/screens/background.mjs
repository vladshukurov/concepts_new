import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'background', theme: THEME,
  body: [
    ui.nav({ title: 'Сканы к утру' }),
    ui.scroll([
      ui.section({ children: ui.actions([ui.button({ label: 'Собрать миниатюры к утру', icon: 'moon', block: true, primary: true, activate: 'bgtask|background' })]) }),
      ui.granted('bgtask', '31 миниатюра готова к 07:00'),
      ui.denied('bgtask', 'Миниатюры соберутся при открытом приложении'),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('images'), title: 'Миниатюры сканов', sub: '12 из 31 · следующая попытка ночью', end: '<span class="ui-row-end is-value"><span class="dl is-busy"><svg><use href="#i-loader-circle"/></svg>39 %</span></span>' }),
        ui.row({ lead: ui.leadIcon('house'), title: 'Лента к открытию', sub: 'Обновлена в 18:04 · 7 новых листов' }),
      ]) }),
    ]),
  ],
});
