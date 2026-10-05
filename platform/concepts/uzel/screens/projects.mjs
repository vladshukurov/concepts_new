import { THEME, TABS, stages } from './_shared.mjs';
import { lamp, workshops, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'projects', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Проекты', ui.iconButton({ icon: 'plus', label: 'Новый проект', go: 'update' })),
    ui.section({ children: ui.segments([{ label: 'В работе', on: true, filter: 'active' }, { label: 'Нужна смена', filter: 'shift' }, { label: 'Готово', filter: 'done' }]) }),
    ui.section({ title: 'В работе', meta: '3', tags: ['active', 'shift'], children: ui.list([
      ui.row({ lead: ui.leadIcon('lamp', { accent: true }), title: lamp.title, sub: `${workshops.revers.name} · ${lamp.next} · до ${lamp.due}`, end: stages(lamp.stage, lamp.stages), go: 'project', primary: true, tags: ['active', 'shift'] }),
      ui.row({ lead: ui.leadIcon('plug'), title: 'Тостер Т‑18', sub: `${workshops.electro.name} · заменить термореле`, end: stages(2, 4), go: 'project', tags: ['active'] }),
      ui.row({ lead: ui.leadIcon('armchair'), title: 'Стул С‑09', sub: `${workshops.revers.name} · сушка клея до пятницы · нужна смена в субботу`, end: stages(3, 5), go: 'project', tags: ['active', 'shift'] }),
    ]) }),
    ui.section({ tags: ['active'], children: ui.list([ui.row({ lead: ui.avatar(people.irina.initial), title: 'Назначение от Ирины', sub: 'Абажур для Л‑74 · ждёт ответа', go: 'assignment' })]) }),
    ui.section({ title: 'Готово', meta: '14', tags: ['done'], className: 'is-filtered-out', children: ui.list([
      ui.row({ lead: ui.leadIcon('armchair'), title: 'Кресло К‑02', sub: 'Вернули владельцу 2 октября · 6 этапов за 3 недели', go: 'project', tags: ['done'] }),
      ui.row({ lead: ui.leadIcon('lamp'), title: 'Лампа Л‑61', sub: 'Сдана 18 сентября · гарантия мастерской до апреля', go: 'project', tags: ['done'] }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'projects' }),
});
