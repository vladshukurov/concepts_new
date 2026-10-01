import { THEME } from './_shared.mjs';
import { places, pleinair } from '../model.mjs';

const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Настройки'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'sh-home',
  body: [
    `<button class="sh-widget" data-activate="keychain|profile" aria-label="Место дня"><i class="${places.panfilova.art}"></i><small>${ui.icon('pen-line')}Штрих · место дня</small><strong>${places.panfilova.name}</strong><span>${places.panfilova.works} работ · встреча завтра в ${pleinair.start}</span></button>`,
    `<div class="sh-apps"><button class="sh-app is-ours" data-activate="keychain|profile" data-primary><i>${ui.icon('pen-line')}</i>Штрих</button>${apps.map((a) => `<span class="sh-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
