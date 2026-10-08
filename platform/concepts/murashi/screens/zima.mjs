import { THEME, ico } from './_shared.mjs';
import { zima } from '../model.mjs';

/* «Зима 2026»: список, что записать, и напоминание про первый снег */
export default (ui) => ui.screen({
  id: 'zima', theme: THEME,
  body: [
    ui.nav({ title: '' }),
    ui.scroll([
      `<div class="ms-coll"><div class="ms-coll-art ms-ico is-lg">${ui.icon('cloud-snow')}</div><h1 class="ui-title">${zima.title}</h1><p class="ui-sub">хочу записать · 0 из ${zima.todo.length}</p></div>`,
      ui.section({ children: ui.list([ui.reminder({
        title: 'Напомнить записать первый снег', titleGranted: `Напомним ${zima.remind.date} в ${zima.remind.time}`,
        sub: `${zima.remind.date}, ${zima.remind.time} · первый пункт списка`, here: 'zima', icon: 'cloud-snow',
      })]) }),
      ui.section({ title: 'Записать', children: ui.checklist(zima.todo) }),
    ]),
  ],
});
