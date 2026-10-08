import { THEME } from './_shared.mjs';
import { plants } from '../model.mjs';

/* Новая запись в дневник: текст, растение, кадр или голос */
export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая запись', back: 'close', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Запись в дневнике|feed', primary: true }) }),
    ui.scroll([
      ui.section({ children: '<label class="vz-note"><textarea aria-label="Текст записи" placeholder="Что с растением сегодня">Полила монстеру, протёрла листья. Новый лист раскрылся до конца</textarea></label>' }),
      ui.section({ title: 'Растение', children: ui.group({ cells: [
        ui.cell({ icon: 'trees', title: plants.monstera.name, sub: plants.monstera.room, check: true }),
        ui.cell({ icon: 'trees', title: plants.calathea.name, sub: plants.calathea.room }),
        ui.cell({ icon: 'trees', title: plants.peperomia.name, sub: plants.peperomia.room }),
      ] }) }),
      ui.section({ title: 'Добавить', children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять растение', sub: 'Кадр сегодняшнего дня', go: 'camera' }),
        ui.cell({ icon: 'images', title: 'Снимки из галереи', sub: 'Кадры этого растения за прошлые дни', go: 'picker' }),
      ] }) }),
    ]),
  ],
});
