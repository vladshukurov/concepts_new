import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'chronicle', theme: THEME,
  body: [
    ui.nav({ title: 'Хроника двора', trailing: ui.textButton({ label: 'Добавить 6', strong: true, toast: '6 кадров добавлено в хронику' }) }),
    ui.scroll([
      ui.foot('42 снимка за апрель · радиус 150 м от дома', 'is-block'),
      ui.section({ title: '12 апреля · субботник', children: `<div class="dv-grid">${Array.from({ length: 9 }, (_, i) => `<button class="ph${i < 4 ? ' is-picked' : ''}" data-toast="Снимок ${i + 1}" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>` }),
      ui.section({ title: '6 апреля · двор после ветра', children: `<div class="dv-grid">${Array.from({ length: 6 }, (_, i) => `<button class="ph${i < 2 ? ' is-picked' : ''}" data-toast="Снимок ${i + 10}" aria-label="Снимок ${i + 10}"></button>`).join('')}</div>` }),
    ]),
  ],
});
