import { THEME } from './_shared.mjs';

/* Запись голосового в чат: руки в муке — вопрос голосом. Единственная точка запроса микрофона — чат ужина */
export default (ui) => ui.screen({
  id: 'voice', theme: THEME,
  body: [
    ui.nav({ title: 'Голосовое', back: 'close' }),
    ui.scroll([
      ui.section({ children: '<div class="pd-head"><small>Идёт запись · 0:07</small><h1>Нут вместо фасоли — сколько варить?</h1><p class="ui-sub">Отпустите, чтобы отправить</p></div>' }),
      ui.section({ children: ui.chat([ui.voice({ out: true, dur: '0:07', time: '19:19' })]) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Отправить голосовое', icon: 'send', block: true, back: true, toast: 'Голосовое отправлено', primary: true }),
        ui.button({ label: 'Удалить запись', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
