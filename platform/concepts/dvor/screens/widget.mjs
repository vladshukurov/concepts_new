import { THEME } from './_shared.mjs';

const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Настройки'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'dv-home',
  body: [
    `<button class="dv-widget" data-activate="keychain|home" aria-label="Виджет «Двор»"><small>${ui.icon('house')}Двор · Полевая, 12</small><strong>Горячей воды не будет 14–17 апреля</strong><span>Показания — до 25 апреля · 6 дней</span></button>`,
    `<div class="dv-apps"><button class="dv-app is-ours" data-activate="keychain|home"><i>${ui.icon('house')}</i>Открыть Двор</button>${apps.map((a) => `<span class="dv-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
