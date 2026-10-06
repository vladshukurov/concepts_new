import { THEME } from './_shared.mjs';
import { pack } from '../model.mjs';

/* Кто что везёт: одна вещь — один ответственный, ничьё можно взять себе */
export default (ui) => ui.screen({
  id: 'pack', theme: THEME,
  body: [
    ui.nav({ title: 'Кто что везёт', trailing: ui.iconButton({ icon: 'plus', label: 'Добавить вещь', toast: 'Новая вещь в списке' }) }),
    ui.scroll([
      ui.section({ title: 'Общее', meta: `${pack.filter((p) => p[2]).length} из ${pack.length} собрано`, children: ui.list(pack.map(([what, who, done]) => ui.row({
        lead: ui.leadIcon(done ? 'circle-check' : 'circle', { round: true, accent: done }), title: what,
        sub: who ? (who === 'Ника' ? 'вы · ещё не купили' : `${who} · ${done ? 'взял' + (who === 'Лена' ? 'а' : '') : 'обещал'}`) : 'никто не взял',
        ...(who ? {} : { end: { value: 'Взять себе', toast: 'Термосы теперь на вас', label: `Взять: ${what}` }, primary: true }),
      }))) }),
      ui.section({ title: 'Себе', meta: 'видите только вы', children: ui.list([
        ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Паспорт и билет обратно', sub: 'в документах поездки' }),
        ui.row({ lead: ui.leadIcon('circle', { round: true }), title: 'Зарядка для часов', sub: 'забыла в пятницу' }),
      ]) }),
    ]),
  ],
});
