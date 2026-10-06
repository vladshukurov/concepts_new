import { own } from '../model.mjs';
import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'lock', theme: THEME,
  body: [
    ui.nav({ title: 'Сохранённое' }),
    ui.scroll([
      `<div class="lk-me"><span class="ui-lead is-round is-accent">${ui.icon('scan-face')}</span><h1>Под замком</h1></div>`,
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'bookmark', title: 'Образы', value: String(own.saved.looks) }),
        ui.cell({ icon: 'file-text', title: 'Черновики', value: String(own.saved.drafts) }),
        ui.cell({ icon: 'clock', title: 'Закрывать', value: 'Сразу', toast: 'Закрывать сразу' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Открыть', icon: 'scan-face', block: true, go: 'profile', primary: true })]) }),
    ]),
  ],
});
