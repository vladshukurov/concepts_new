import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'videos', theme: THEME,
  body: [
    ui.nav({ title: 'Мои видео техники', trailing: ui.iconButton({ icon: 'cast', label: 'Смотреть на телевизоре', go: 'tv' }) }),
    ui.scroll([
      ui.section({ title: 'Снято на мой телефон', meta: '3', children: ui.list([
        ui.row({ lead: ui.leadIcon('film'), title: 'Постановка стопы на темпе', sub: `Позавчера · 0:42 · снимал ${people.roman.first}`, go: 'cast', primary: true }),
        ui.row({ lead: ui.leadIcon('film'), title: 'Подъём на Медеу, работа рук', sub: '2 сентября · 1:15 · штатив · загружается 64 %' }),
        ui.row({ lead: ui.leadIcon('film'), title: 'Разминка перед подъёмом', sub: 'Август · 1:04 · порядок упражнений' }),
      ]) }),
    ]),
  ],
});
