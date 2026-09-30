import { THEME } from './_shared.mjs';

const pins = [[14, 28, 1], [44, 48, 2], [72, 30, 3], [88, 70, 4]];
export default (ui) => ui.screen({
  id: 'route', theme: THEME,
  body: [
    ui.nav({ title: 'Маршрут' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="kt-map"><span class="kt-river"></span><span class="kt-path"></span>${pins.map(([x, y, n]) => `<span class="kt-pin kt-x${x} kt-y${y}">${n}</span>`).join('')}</div>`,
        '<div class="kt-sheet-cap"><span>4 точки · 4,2 км</span><span>закат 19:21</span></div>',
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '1' }), title: 'Арбат', sub: 'Сбор 18:40 · контровой свет', go: 'walk' }),
        ui.row({ lead: ui.leadIcon('', { text: '2' }), title: 'Мост на Кабанбай батыра', sub: 'Отражения · 19:08' }),
        ui.row({ lead: ui.leadIcon('', { text: '3' }), title: 'Верхняя набережная', sub: 'Закат · 19:21' }),
        ui.row({ lead: ui.leadIcon('', { text: '4' }), title: 'Lab-Red', sub: 'Финиш и передача плёнки · 20:55', go: 'lab' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Открыть сбор', block: true, primary: true, go: 'walk' })]) }),
    ]),
  ],
});
