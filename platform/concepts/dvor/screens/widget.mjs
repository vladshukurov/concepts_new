import { THEME } from './_shared.mjs';
import { house, outage, meters } from '../model.mjs';

const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Настройки'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'dv-home',
  body: [
    `<button class="dv-widget" data-activate="keychain|home" aria-label="Виджет «Двор»"><small>${ui.icon('house')}Двор · ${house.address}</small><strong>${outage.title} ${outage.label}</strong><span>Показания — до ${meters.deadlineLabel} · ${meters.left}</span></button>`,
    `<div class="dv-apps"><button class="dv-app is-ours" data-activate="keychain|home"><i>${ui.icon('house')}</i>Открыть Двор</button>${apps.map((a) => `<span class="dv-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
