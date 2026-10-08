import { THEME, soundRow } from './_shared.mjs';
import { sounds, places } from '../model.mjs';

/* Поиск по своим звукам и местам */
export default (ui) => ui.screen({
  id: 'search', theme: THEME,
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      `<div class="ms-search">${ui.search({ value: 'дождь', placeholder: 'Звуки и места', clear: { toast: 'Запрос очищен' } })}</div>`,
      ui.section({ title: 'Звуки', meta: '2 найдено', children: ui.list([soundRow(sounds.dozhd), soundRow(sounds.okno)]) }),
      ui.section({ title: 'Места', children: ui.list([ui.row({ lead: `<span class="ui-thumb ${places.dacha.art}"></span>`, title: places.dacha.title, sub: 'дождь на веранде, 14 июля', go: 'dacha' })]) }),
    ]),
  ],
});
