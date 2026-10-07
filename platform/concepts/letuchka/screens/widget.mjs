import { THEME } from './_shared.mjs';
import { standup, updates } from '../model.mjs';

/* Системная поверхность: экран «Домой» с виджетом ближайшей летучки. Касание открывает повестку */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'list-checks', kicker: `Летучка в ${standup.time} · ${standup.room}`, title: `Написали ${updates.written} из ${updates.total}`, sub: `апдейт до ${standup.time} · вы ещё не написали`, lines: [['Мешает', `${updates.blockers[0].p.name.split(' ')[0]}: ${updates.blockers[0].b}`]], go: 'office' },
    app: { name: 'В курсе', icon: 'message-circle', go: 'chats' },
    apps: ['Телефон', 'Почта', 'Карты', 'Камера', 'Заметки', 'Погода', 'Файлы'],
  }),
});
