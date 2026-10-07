import { THEME } from './_shared.mjs';
import { own } from '../model.mjs';

/* Свой рецепт грушевого пирога: замены и проверки — только свои */
export default (ui) => ui.screen({
  id: 'recipe', theme: THEME,
  body: [
    ui.nav({ title: 'Рецепт', trailing: ui.iconButton({ icon: 'square-pen', label: 'Изменить рецепт', go: 'recipeedit' }) }),
    ui.scroll([
      `<div class="pd-head"><small>Мой рецепт · пекла ${own.dish.times} раз</small><h1>${own.dish.title}</h1><p class="ui-sub">55 минут · форма 22 см · последний раз ${own.dish.when}</p></div>`,
      ui.section({ title: 'Ингредиенты', children: ui.group({ cells: [
        ui.cell({ title: 'Груши', value: '4 шт' }),
        ui.cell({ title: 'Мука цельнозерновая', value: '180 г' }),
        ui.cell({ title: 'Сахар', value: '60 г' }),
        ui.cell({ title: 'Яйца', value: '3 шт' }),
        ui.cell({ title: 'Мёд', value: '2 ложки' }),
      ] }) }),
      ui.section({ title: 'Мои замены', children: ui.list([
        ui.row({ lead: ui.leadIcon('repeat-2', { accent: true }), title: 'Сахар 120 → 60 г', sub: 'Проверила вчера · мягкий, не сухой' }),
        ui.row({ lead: ui.leadIcon('repeat-2'), title: 'Пшеничная мука → цельнозерновая', sub: '2 сентября · пересушила на 5 минут' }),
      ]) }),
      ui.section({ title: 'Как печь', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '01' }), title: 'Груши дольками', sub: 'Сбрызнуть лимоном' }),
        ui.row({ lead: ui.leadIcon('', { text: '02' }), title: 'Тесто: яйца, сахар, мука', sub: 'Взбить 5 минут до светлого' }),
        ui.row({ lead: ui.leadIcon('', { text: '03' }), title: 'Печь 40 минут при 180°', sub: 'На 25-й минуте накрыть фольгой' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Записать, как получилось', block: true, go: 'compose', primary: true })]) }),
    ]),
  ],
});
