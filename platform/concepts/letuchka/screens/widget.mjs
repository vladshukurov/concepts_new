import { THEME } from './_shared.mjs';
import { standup } from '../model.mjs';

/* Системная поверхность: экран «Домой» с виджетом ближайшей летучки. Касание открывает повестку */
const apps = ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Файлы'];
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'lt-home',
  body: [
    `<button class="lt-widget" data-go="standup" aria-label="Виджет «Ближайшая летучка»"><small>${ui.icon('clock')}Летучка · ${standup.room} переговорка</small><strong>Летучка через ${standup.in} минут</strong><span>${standup.time} · ${standup.agenda.length} пунктов · ваш первый</span><span>${standup.agenda[0][0]}</span></button>`,
    `<div class="lt-apps"><button class="lt-app is-ours" data-go="chats" aria-label="В курсе"><i>${ui.icon('message-circle')}</i>В курсе</button>${apps.map((a) => `<span class="lt-app"><i></i>${a}</span>`).join('')}</div>`,
  ],
});
