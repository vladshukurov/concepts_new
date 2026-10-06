import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'tv', theme: THEME,
  body: [
    ui.nav({ title: 'Смотреть на телевизоре', back: 'close' }),
    ui.scroll([
      ui.section({ children: [
        ui.group({ label: 'Сеть «Kovalev_5G»', cells: [
          ui.cell({ icon: 'tv', title: 'Телевизор в гостиной', sub: 'AirPlay · готов к показу', go: 'cast' }),
          ui.cell({ icon: 'monitor', title: 'Кухня, приставка', sub: 'Занята другим показом', toast: 'Приставка занята' }),
          ui.cell({ icon: 'repeat-2', title: 'Обновить список', activate: 'wifiinfo|tv' }),
        ] }),
        ui.list([ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: 'Вы в сети «Kovalev_5G»', sub: 'Найдено 2 устройства рядом', shownAfter: 'wifiinfo' })]),
      ] }),
      ui.section({ children: ui.actions([ui.button({ label: 'Смотреть на телефоне', variant: 'secondary', block: true, go: 'videos', primary: true })]) }),
    ]),
  ],
});
