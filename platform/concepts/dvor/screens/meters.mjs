import { THEME } from './_shared.mjs';

const drum = (whole, frac = '') => `<div class="dv-drum">${[...whole].map((d) => `<i>${d}</i>`).join('')}${[...frac].map((d) => `<i class="is-frac">${d}</i>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'meters', theme: THEME,
  body: [
    ui.nav({ title: 'Счётчики' }),
    ui.scroll([
      ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('calendar', { accent: true }), title: 'Срок показаний до 25 апреля', sub: 'Осталось 6 дней' })]) }),
      ui.section({ title: 'Холодная вода', meta: '№ 41-882-07', children: `<div class="dv-meter">${drum('00417', '83')}<p>Предыдущее 00415,42 · 12 марта</p></div>` }),
      ui.section({ title: 'Электричество', meta: '№ 09-14-337', children: `<div class="dv-meter">${drum('018247')}<p>Предыдущее 018204 · 12 марта</p></div>` }),
      ui.section({ children: [
        ui.group({ cells: [ui.cell({ icon: 'repeat-2', title: 'Обновлять в фоне', sub: 'Последний запуск 04:12', toggle: false, activate: 'remotenotif|background' })] }),
        ui.actions([ui.button({ label: 'Сохранить показания', block: true, toast: 'Показания сохранены' })], { className: 'dv-gap' }),
      ] }),
    ]),
  ],
});
