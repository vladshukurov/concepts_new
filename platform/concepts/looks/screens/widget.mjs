import { THEME } from './_shared.mjs';

const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Настройки'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'lk-home',
  body: [
    `<button class="lk-widget" data-activate="keychain|profile" aria-label="Открыть «Вешалку»"><small>${ui.icon('bookmark')}Вешалка · план на завтра</small><strong>Тренч и серый свитер</strong><span>Завтра +9°, дождь после обеда · ботинки на тракторе</span></button>`,
    `<div class="lk-apps"><button class="lk-app is-ours" data-activate="keychain|profile" data-primary><i>${ui.icon('shirt')}</i>Вешалка</button>${apps.map((a) => `<span class="lk-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
