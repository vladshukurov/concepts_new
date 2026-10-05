import { THEME, TABS, chain } from './_shared.mjs';
import { lab } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'lab', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Лаборатория', ui.iconButton({ icon: 'wifi', label: 'Сеть лаборатории', go: 'labnet' })),
    ui.section({ title: 'Lab-Red', meta: 'до 23:00', children: [
      chain([['Красный свет', 'занят до 20:10'], ['Сканер 02', 'ваше окно 20:20', 'now'], ['Печать', 'завтра']]),
      ui.list([ui.row({ lead: ui.leadIcon('clock', { accent: true }), title: `Ваше окно сегодня, ${lab.window}`, sub: `${lab.scanner} · до ${lab.windowEnd} · оператор Марат`, toast: 'Выбор другого окна' })]),
    ] }),
    ui.section({ title: 'В процессе', children: ui.list([
      ui.row({ lead: `<span class="kt-num is-now kt-mono">06:42</span>`, title: 'HP5 · партия K-184', sub: 'DD-X 1+4 · 20 °C · переворот через 18 с', go: 'batch', primary: true }),
    ]) }),
    ui.section({ title: 'Очередь', meta: '3', children: ui.list([
      ui.row({ lead: ui.leadIcon('scan-line'), title: 'Portra 400 · K-185', sub: 'Сканирует Тимур', end: '<span class="ui-row-end is-value"><span class="dl is-busy"><svg><use href="#i-loader-circle"/></svg>62 %</span></span>', go: 'scan' }),
      ui.row({ lead: ui.leadIcon('flask-conical'), title: 'Fomapan 200 · K-186', sub: 'Ждёт бачок · Лиза', end: { badge: 'следующая' }, go: 'batch' }),
      ui.row({ lead: ui.leadIcon('file-text'), title: 'Ilford MG RC · 18 листов', sub: 'Мало · передача завтра', go: 'materials' }),
    ]) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'package', title: 'Материалы', sub: '7 позиций требуют внимания', go: 'materials' }),
      ui.cell({ icon: 'wifi', title: 'Сеть лаборатории', sub: 'Lab-Red · сканер виден', go: 'labnet' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'lab' }),
});
