import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'steps', theme: THEME,
  body: [
    ui.nav({ title: 'Шаг 2 из 6', trailing: ui.iconButton({ icon: 'tv', label: 'Экран на кухне', go: 'kitchen' }) }),
    ui.scroll([
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('check', { round: true }), title: 'Подготовить продукты', sub: 'Всё на столе · 7 минут' }),
        ui.row({ lead: ui.leadIcon('', { text: '02', round: true, accent: true }), title: 'Обжарить лук', sub: 'Средний огонь · осталось 05:42', now: true }),
        ui.row({ lead: ui.leadIcon('', { text: '03', round: true }), title: 'Добавить томаты и фасоль', sub: 'Перемешать один раз' }),
        ui.row({ lead: ui.leadIcon('', { text: '04', round: true }), title: 'Томить под крышкой', sub: '12 минут' }),
        ui.row({ lead: ui.leadIcon('', { text: '05', round: true }), title: 'Разбить яйца в лунки', sub: 'Не мешать · 4 минуты' }),
        ui.row({ lead: ui.leadIcon('', { text: '06', round: true }), title: 'Посыпать зеленью и подать', sub: 'Прямо в сковороде' }),
      ]) }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Шаг готов', block: true, toast: 'Шаг 3 · добавить томаты и фасоль', primary: true }),
          ui.button({ label: 'Надиктовать заметку', icon: 'mic', variant: 'secondary', block: true, ask: 'speech|steps|steps' }),
        ]),
        ui.denied('speech'),
        ui.list([ui.row({ lead: ui.leadIcon('mic', { round: true, accent: true }), title: 'Лук не пережаривать, сразу томаты', sub: 'Заметка к шагу 2 · надиктовано', shownAfter: 'speech' })]),
      ] }),
    ]),
  ],
});
