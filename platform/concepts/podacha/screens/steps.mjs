import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'steps', theme: THEME,
  body: [
    ui.nav({ title: 'Шаг 2 из 6', trailing: ui.iconButton({ icon: 'tv', label: 'Кухонный экран', go: 'kitchen' }) }),
    ui.scroll([
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('check', { round: true }), title: 'Подготовить продукты', sub: 'Всё на столе · 7 минут' }),
        ui.row({ lead: ui.leadIcon('', { text: '02', round: true, accent: true }), title: 'Обжарить лук', sub: 'Средний огонь · осталось 05:42', now: true }),
        ui.row({ lead: ui.leadIcon('', { text: '03', round: true }), title: 'Добавить томаты и фасоль', sub: 'Перемешать один раз' }),
        ui.row({ lead: ui.leadIcon('', { text: '04', round: true }), title: 'Томить под крышкой', sub: '12 минут' }),
      ]) }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Шаг готов', block: true, go: 'kitchen', primary: true }),
          ui.button({ label: 'Надиктовать заметку', icon: 'mic', variant: 'secondary', block: true, ask: 'speech|steps|steps' }),
        ]),
        ui.granted('speech', 'Заметка сохранена к шагу 2'),
        ui.denied('speech', 'Заметку можно набрать с клавиатуры'),
      ] }),
    ]),
  ],
});
