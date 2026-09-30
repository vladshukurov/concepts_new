import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'dv-lock',
  body: [
    `<div class="dv-lock-body"><span>${ui.icon('scan-face')}</span><strong>Двор заблокирован</strong><p>Внутри адрес, номера квартир и коды</p></div>`,
    ui.actions([
      ui.button({ label: 'Разблокировать', icon: 'scan-face', block: true, back: true }),
      ui.button({ label: 'Ввести код-пароль', variant: 'tertiary', block: true, back: true }),
    ]),
  ],
});
