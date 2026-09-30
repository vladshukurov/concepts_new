import { THEME, sheet } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'photographer', theme: THEME,
  body: [
    ui.nav({ title: '' }),
    ui.scroll([
      `<div class="kt-me">${ui.avatar('ДС')}<div><h2>Дана Садыкова</h2><p>Алматы · архитектура, дождь и маленькие камеры</p></div></div>`,
      `<div class="kt-me-block">${ui.stats([['18', 'листов'], ['6', 'прогулок'], ['2', 'передачи']])}${ui.actions([
        ui.button({ label: 'Следить за Даной', block: true, primary: true, toast: 'Вы следите за публикациями Даны' }),
        ui.button({ label: 'Ближайшая прогулка', variant: 'secondary', block: true, go: 'walk' }),
      ])}</div>`,
      ui.section({ title: 'Последние листы', children: [sheet(18, [3, 9]), `<div class="kt-sheet-cap"><span>После дождя · K-184</span><span>8 сентября</span></div>`] }),
      ui.section({ title: 'Снимает сейчас', children: ui.list([
        ui.row({ lead: ui.leadIcon('camera'), title: 'Olympus XA', sub: 'Ilford HP5 · кадр 27 из 36' }),
        ui.row({ lead: ui.leadIcon('send'), title: 'Серия «После дождя»', sub: 'Три листа · один отпечаток в передаче', go: 'handoff' }),
        ui.row({ lead: ui.leadIcon('file-text'), title: 'Лист K-184', sub: '36 кадров, 9 отмечено', go: 'post' }),
      ]) }),
    ]),
  ],
});
