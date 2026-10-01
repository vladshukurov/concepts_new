import { THEME, stages } from './_shared.mjs';
import { lamp, workshops } from '../model.mjs';

const steps = ['Диагностика', 'Разборка и очистка', 'Замена кабеля', 'Новый патрон E27', lamp.next];
export default (ui) => ui.screen({
  id: 'project', theme: THEME,
  body: [
    ui.nav({ title: lamp.title, trailing: ui.iconButton({ icon: 'share', label: 'Поделиться проектом', toast: 'Ссылка на проект скопирована' }) }),
    ui.scroll([
      ui.section({ children: `<div class="uz-item"><small>${workshops.revers.name} · инв. 074</small><strong>${lamp.what[0].toUpperCase() + lamp.what.slice(1)}</strong><span>Ведёт ${lamp.owner.name} · в работе ${lamp.days} дней</span>${stages(lamp.stage, lamp.stages)}</div>` }),
      ui.section({ title: 'Этапы', meta: `${lamp.stage} из ${lamp.stages}`, children: ui.list(steps.map((s, i) =>
        ui.row({ lead: i < lamp.stage ? ui.leadIcon('check', { round: true }) : ui.leadIcon('', { text: String(i + 1), round: true, accent: true }), title: s, sub: i < lamp.stage ? 'готово' : `следующий шаг · до ${lamp.due}`, now: i === lamp.stage, ...(i === lamp.stage ? { go: 'task' } : {}) }))) }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Добавить этап', icon: 'plus', block: true, go: 'update', primary: true })]),
        ui.group({ cells: [
          ui.cell({ icon: 'bell', title: 'Следить за проектом', sub: 'Когда появится новый этап', toggle: false, ask: 'push|project|project' }),
          ui.cell({ icon: 'layout-grid', title: 'Виджет проекта', sub: 'Следующий шаг на экране «Домой»', activate: 'appgroups|widget' }),
        ], className: 'uz-gap' }),
        ui.denied('push', 'Новые этапы видны в ленте'),
      ] }),
    ]),
  ],
});
