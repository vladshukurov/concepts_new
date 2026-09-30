import { THEME } from './_shared.mjs';

const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Настройки'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'lk-home',
  body: [
    `<button class="lk-widget" data-activate="keychain|profile" aria-label="Открыть «Образы»"><small>${ui.icon('bookmark')}Образы · сохранённое</small><strong>Жакет и тонкий трикотаж</strong><span>Добавлено сегодня в 8:52 · 86 в сохранённом</span></button>`,
    `<div class="lk-apps"><button class="lk-app is-ours" data-activate="keychain|profile" data-primary><i>${ui.icon('shirt')}</i>Образы</button>${apps.map((a) => `<span class="lk-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
