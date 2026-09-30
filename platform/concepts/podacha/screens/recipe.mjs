import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'recipe', theme: THEME,
  body: [
    ui.nav({ title: 'Рецепт', trailing: ui.iconButton({ icon: 'bookmark', label: 'Сохранить', toast: 'Сохранено в рецепты' }) }),
    ui.scroll([
      '<div class="pd-cover ph"></div>',
      `<div class="pd-head"><small>Проверено 34 раза</small><h1>Суп с печёным перцем</h1><p class="ui-sub">Жанна Ким · 35 минут · 4 порции</p></div>`,
      ui.section({ title: 'Ингредиенты', children: ui.group({ cells: [
        ui.cell({ title: 'Красная чечевица', value: '180 г' }),
        ui.cell({ title: 'Сладкий перец', value: '2 шт' }),
        ui.cell({ title: 'Тахини', value: '1 ложка' }),
        ui.cell({ title: 'Лимон', value: '½ шт' }),
      ] }) }),
      ui.section({ title: 'Рабочая замена', children: ui.list([ui.row({ lead: ui.leadIcon('repeat-2', { accent: true }), title: 'Нет тахини — 2 ложки кешью-пасты', sub: 'Проверили 11 человек', wrap: true })]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Готовить по шагам', block: true, go: 'cookalong', primary: true })]) }),
    ]),
  ],
});
