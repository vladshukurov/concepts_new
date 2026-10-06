import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'videos', theme: THEME,
  body: [
    ui.nav({ title: 'Мои видео техники', trailing: ui.iconButton({ icon: 'cast', label: 'Смотреть на телевизоре', go: 'tv' }) }),
    ui.scroll([
      ui.section({ title: 'Снято на мой телефон', meta: '7', children: ui.list([
        ui.row({ lead: ui.leadIcon('film'), title: 'Постановка стопы на темпе', sub: `Позавчера · 0:42 · снимал ${people.roman.first}`, go: 'tv', primary: true }),
        ui.row({ lead: ui.leadIcon('film'), title: 'Подъём на Медеу, работа рук', sub: '2 сентября · 1:15 · штатив', go: 'tv' }),
        ui.row({ lead: ui.leadIcon('film'), title: 'Разминка перед подъёмом', sub: 'Август · 1:04 · для себя, чтобы не забыть порядок', go: 'tv' }),
      ]) }),
    ]),
  ],
});
