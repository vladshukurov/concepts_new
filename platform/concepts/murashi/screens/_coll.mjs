import { THEME, soundRow, wave } from './_shared.mjs';

/** Коллекция как плейлист: фото первого места, «Слушать» и звуки по порядку */
export const collScreen = (ui, c) => ui.screen({
  id: c.id, theme: THEME,
  body: [
    ui.nav({ title: '' }),
    ui.scroll([
      `<div class="ms-coll"><div class="ms-coll-art ${c.art}">${wave(c.title, { n: 28, className: 'is-coll' })}</div><h1 class="ui-title">${c.title}</h1><p class="ui-sub">${c.sub}</p></div>`,
      ui.actions(ui.button({ label: 'Слушать', icon: 'play', fillIcon: true, block: true, ...(c.id === 'son' ? { go: 'player' } : { toggle: 'play' }), primary: true })),
      ui.section({ title: 'Звуки', meta: 'по порядку', children: ui.list(c.list.map((x, i) => soundRow(x, { n: i + 1 }))) }),
    ]),
  ],
});
