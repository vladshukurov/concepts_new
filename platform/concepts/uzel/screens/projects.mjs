import { THEME, TABS, stages } from './_shared.mjs';
import { lamp, workshops, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'projects', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Проекты', ui.iconButton({ icon: 'plus', label: 'Новый проект', go: 'update' })),
    ui.section({ children: ui.segments([{ label: 'В работе', on: true, go: 'projects' }, { label: 'Нужна смена', go: 'shifts' }, { label: 'Готово', go: 'projects' }]) }),
    ui.section({ title: 'В работе', meta: '3', children: ui.list([
      ui.row({ lead: ui.leadIcon('lamp', { accent: true }), title: lamp.title, sub: `${workshops.revers.name} · ${lamp.next} · до ${lamp.due}`, end: stages(lamp.stage, lamp.stages), go: 'project', primary: true }),
      ui.row({ lead: ui.leadIcon('plug'), title: 'Тостер Т‑18', sub: `${workshops.electro.name} · заменить термореле`, end: stages(2, 4), go: 'project' }),
      ui.row({ lead: ui.leadIcon('armchair'), title: 'Стул С‑09', sub: `${workshops.revers.name} · сушка клея до пятницы`, end: stages(3, 5), go: 'project' }),
    ]) }),
    ui.section({ children: ui.list([ui.row({ lead: ui.avatar(people.irina.initial), title: 'Назначение от Ирины', sub: 'Абажур для Л‑74 · ждёт ответа', go: 'assignment' })]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'projects' }),
});
