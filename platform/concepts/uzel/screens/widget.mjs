import { THEME, stages } from './_shared.mjs';
import { lamp, shift } from '../model.mjs';

const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Настройки'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'uz-home',
  body: [
    `<button class="uz-widget" data-activate="keychain|profile" aria-label="Открыть «Узел»"><small>${ui.icon('wrench')}Узел · ${lamp.title}</small><strong>${lamp.next}</strong><span>Этап ${lamp.stage} из ${lamp.stages} · смена сегодня в ${shift.start}</span>${stages(lamp.stage, lamp.stages)}</button>`,
    `<div class="uz-apps"><button class="uz-app is-ours" data-activate="keychain|profile" data-primary><i>${ui.icon('wrench')}</i>Узел</button>${apps.map((a) => `<span class="uz-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
