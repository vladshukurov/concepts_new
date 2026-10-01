import { THEME } from './_shared.mjs';
import { lamp, workshops } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'assignment', theme: THEME,
  body: [
    ui.nav({ title: 'Назначение', back: 'close' }),
    ui.scroll([
      ui.section({ children: `<div class="uz-item"><small>${lamp.title} · до ${lamp.due}</small><strong>Подобрать ${lamp.next.toLowerCase()}</strong><span>«${workshops.revers.name}» предлагает взять следующий этап — срок и чек-лист уже в карточке</span></div>` }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Принять', block: true, toast: 'Задача в ваших проектах|projects', primary: true }),
        ui.button({ label: 'Отказаться', variant: 'tertiary', block: true, toast: 'Назначение отклонено|projects' }),
      ]) }),
    ]),
  ],
});
