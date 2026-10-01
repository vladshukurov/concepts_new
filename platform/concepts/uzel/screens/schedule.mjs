import { THEME } from './_shared.mjs';
import { shift } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'schedule', theme: THEME,
  body: [
    ui.nav({ title: 'Роль на смене' }),
    ui.scroll([
      ui.section({ title: `Сегодня · ${shift.start}–${shift.end}`, children: ui.group({ cells: [
        ui.cell({ icon: 'plug', title: 'Свет и электрика', value: '2 места', check: true }),
        ui.cell({ icon: 'clipboard-check', title: 'Приём вещей', value: '1 место', toast: 'Роль: приём вещей' }),
        ui.cell({ icon: 'camera', title: 'Фото и архив', value: '1 место', toast: 'Роль: фото и архив' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Записаться', block: true, toast: 'Вы на смене · свет и электрика|profile', primary: true })]) }),
    ]),
  ],
});
