import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'invite', theme: THEME, className: 'pd-share',
  overlay: ui.sheet([
    `<div class="pd-link">${ui.avatar('СЛ')}<span><strong>Позвать готовить вместе</strong><small>vkusno.app/sasha-levina</small></span></div>`,
    ui.actions([
      ui.button({ label: 'Скопировать ссылку', icon: 'copy', block: true, toast: 'Ссылка скопирована|profile', primary: true }),
      ui.button({ label: 'Отмена', variant: 'tertiary', block: true, back: true }),
    ]),
  ]),
  body: '',
});
