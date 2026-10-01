import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'videos', theme: THEME,
  body: [
    ui.nav({ title: 'Видео техники', trailing: ui.iconButton({ icon: 'cast', label: 'Смотреть на телевизоре', go: 'tv' }) }),
    ui.scroll([
      ui.section({ children: [
        ui.list([ui.row({ lead: ui.leadIcon('clapperboard', { accent: true }), title: 'Разобрать видео ночью', sub: 'Каденс и постановка стопы — пока телефон заряжается', activate: 'processing|videos' })]),
        ui.granted('processing', 'Разбор готов: каденс 172, стопа под центром тяжести'),
      ] }),
      ui.section({ title: 'Клубное видео', meta: '12', children: ui.list([
        ui.row({ lead: ui.leadIcon('film'), title: 'Субботний лонгран по набережной', sub: `Снимал ${people.roman.first} · 8:12`, go: 'tv', primary: true }),
        ui.row({ lead: ui.leadIcon('film'), title: 'Постановка стопы на темпе', sub: `Сняла ${people.alina.first} · 3:47`, go: 'tv' }),
        ui.row({ lead: ui.leadIcon('film'), title: 'Разминка перед подъёмом', sub: 'Четыре упражнения · 1:04', go: 'tv' }),
      ]) }),
    ]),
  ],
});
