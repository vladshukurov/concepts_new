import { THEME } from './_shared.mjs';
import { field } from './_form.mjs';

/* Новая покупка в общий список семьи */
export default (ui) => ui.screen({
  id: 'newitem', theme: THEME,
  body: [
    ui.nav({ title: 'Новая покупка', back: 'close', trailing: ui.textButton({ label: 'Добавить', strong: true, toast: 'Творог добавлен в список|shopping' }) }),
    ui.scroll([
      ui.section({ children: [field('Что купить', 'Творог 5%'), field('Сколько', '2 пачки')] }),
      ui.section({ title: 'Часто покупаете', children: ui.list([
        ui.row({ lead: ui.leadIcon('droplets', { round: true }), title: 'Молоко 3,2%', sub: 'в списке · добавил Тимур' }),
        ui.row({ lead: ui.leadIcon('apple', { round: true }), title: 'Бананы', sub: 'Даня купил сегодня', toast: 'Бананы добавлены в список|shopping' }),
        ui.row({ lead: ui.leadIcon('package', { round: true }), title: 'Яйца, 10 шт', sub: 'Оксана купила сегодня', toast: 'Яйца добавлены в список|shopping' }),
        ui.row({ lead: ui.leadIcon('utensils', { round: true }), title: 'Курица, 1 кг', sub: 'Тимур купил вчера', toast: 'Курица добавлена в список|shopping' }),
        ui.row({ lead: ui.leadIcon('heart', { round: true }), title: 'Йогурт детский', sub: 'брали 3 октября', toast: 'Йогурт добавлен в список|shopping' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить в список', block: true, toast: 'Творог добавлен в список|shopping', primary: true })]) }),
    ]),
  ],
});
