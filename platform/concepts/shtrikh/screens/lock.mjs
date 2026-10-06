import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'sh-lock',
  body: [
    `<div class="sh-lock-body"><span>${ui.icon('scan-face')}</span><strong>Черновики под замком</strong><p>7 черновиков</p></div>`,
    ui.actions([
      ui.button({ label: 'Открыть', icon: 'scan-face', block: true, back: true, primary: true }),
      ui.button({ label: 'Ввести код-пароль', variant: 'tertiary', block: true, back: true }),
    ]),
  ],
});
