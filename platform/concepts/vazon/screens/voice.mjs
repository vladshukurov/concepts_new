import { THEME } from './_shared.mjs';
import { own } from '../model.mjs';

/* Голосовая заметка к калатее: руки в земле, лист в руке — проще сказать */
export default (ui) => ui.screen({
  id: 'voice', theme: THEME,
  body: [
    ui.nav({ title: 'Голосовая заметка', back: 'close' }),
    ui.scroll([
      ui.section({ children: `<div class="vz-rec"><small>Идёт запись · ${own.yellow.dur}</small><h1>${own.yellow.title}</h1><p class="ui-sub">Калатея · спальня, полка</p></div>` }),
      ui.section({ children: ui.chat([ui.voice({ out: true, dur: own.yellow.dur, time: '9:41' })]) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Сохранить заметку', icon: 'check', block: true, back: true, primary: true }),
        ui.button({ label: 'Удалить запись', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
