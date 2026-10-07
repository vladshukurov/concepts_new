import { THEME } from './_shared.mjs';
import { family, home, people, pickup } from '../model.mjs';

/* Системная поверхность: экран «Домой» с виджетом «Кто дома». Касание открывает вкладку «Дом» */
const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Фото'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'sv-home',
  body: [
    `<button class="sv-widget" data-go="home" aria-label="Виджет «Кто дома»"><small>${ui.icon('house')}Кто дома · ${family.name}</small><strong>${people.danya.short} дома с ${home.danyaSince}</strong><span>${people.mila.short} на рисовании до ${pickup.to} · ${people.timur.short} к ${home.timurBack}</span><span class="sv-widget-faces">${[people.danya, people.mila, people.timur].map((p, i) => `<span class="sv-widget-face is-initial ${ui.hue(p.initial)}${i ? ' is-away' : ''}">${p.initial}</span>`).join('')}</span></button>`,
    `<div class="sv-apps"><button class="sv-app is-ours" data-go="chats" aria-label="Все дома"><i>${ui.icon('house')}</i>Все дома</button>${apps.map((a) => `<span class="sv-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
