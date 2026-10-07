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
        ui.row({ lead: ui.leadIcon('shopping-basket', { round: true }), title: 'Молоко 3,2%', sub: 'в списке · добавил Тимур' }),
        ui.row({ lead: ui.leadIcon('shopping-basket', { round: true }), title: 'Бананы', sub: 'куплено сегодня', toast: 'Бананы добавлены в список|shopping' }),
        ui.row({ lead: ui.leadIcon('shopping-basket', { round: true }), title: 'Йогурт детский', sub: 'брали 3 октября', toast: 'Йогурт добавлен в список|shopping' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить в список', block: true, toast: 'Творог добавлен в список|shopping', primary: true })]) }),
    ]),
  ],
});
