import { THEME, TABS } from './_shared.mjs';
import { cookalong, now } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'cookings', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Готовим', ui.iconButton({ icon: 'bell', label: 'Уведомления', go: 'notif' })),
    ui.section({ children: ui.chips([{ label: 'Все', on: true, filter: 'all' }, { label: 'Сегодня', filter: 'today' }, { label: 'Выпечка', filter: 'bake' }]) }),
    ui.section({ title: `Сегодня · ${now.short}`, tags: ['today', 'bake'], children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: cookalong.start }), title: cookalong.title, sub: `${cookalong.host.first} ведёт · ${cookalong.cooks} из ${cookalong.seats} мест · 45 минут`, end: { badge: 'идёт' }, go: 'cookalong', primary: true, tags: ['today'] }),
      ui.row({ lead: ui.leadIcon('', { text: '20:30' }), title: 'Хлеб без замеса', sub: 'Тимур ведёт · 17 участников · расстойка на ночь', go: 'cookalong', tags: ['today', 'bake'] }),
    ]) }),
    ui.section({ title: 'На неделе', tags: ['week'], children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: 'пт' }), title: 'Пельмени втроём', sub: 'Жанна ведёт · 6 шагов', go: 'cookalong' }),
    ]) }),
    ui.section({ children: ui.actions([ui.button({ label: 'Создать готовку', icon: 'plus', variant: 'secondary', block: true, go: 'compose' })]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'cookings' }),
});
