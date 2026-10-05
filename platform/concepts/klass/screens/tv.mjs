import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'tv', theme: THEME,
  body: [
    ui.nav({ title: 'Смотреть на телевизоре', back: 'close' }),
    ui.scroll([
      ui.section({ children: [
        ui.group({ label: 'Сеть «Zaharov_5G»', cells: [
          ui.cell({ icon: 'tv-minimal', title: 'Телевизор в гостиной', sub: 'Google Cast · готов', check: true }),
          ui.cell({ icon: 'monitor', title: 'Кухня, приставка', sub: 'Занята другим показом', toast: 'Приставка занята другим показом' }),
          ui.cell({ icon: 'repeat-2', title: 'Обновить список', activate: 'wifiinfo|tv' }),
        ] }),
        ui.denied('localnetwork'),
      ] }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Смотреть на телевизоре', icon: 'cast', block: true, primary: true, ask: 'localnetwork|cast|tv' }),
        ui.button({ label: 'Смотреть на телефоне', variant: 'tertiary', block: true, go: 'album' }),
      ]) }),
    ]),
  ],
});
