import { THEME } from './_shared.mjs';

const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Настройки'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'tl-lock',
  body: [
    `<button class="tl-widget" data-activate="keychain|home" aria-label="Виджет «Хвосты»"><small>${ui.icon('paw-print')}Хвосты · Барни</small><strong>Спокойный круг у пруда</strong><span>Сегодня 18:40 · Лопухинский сад</span><span>4 участника · обновлён в 04:12</span></button>`,
    `<div class="tl-home-grid"><button class="tl-app is-ours" data-primary data-activate="keychain|home"><i>${ui.icon('paw-print')}</i>Открыть «Хвосты»</button>${apps.map((a) => `<span class="tl-app"><i></i>${a}</span>`).join('')}</div>`,
    `<div class="tl-lock-stack">${ui.button({ label: 'Убрать виджет', variant: 'secondary', back: true })}</div>`,
  ],
});
