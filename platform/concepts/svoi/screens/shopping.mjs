import { THEME } from './_shared.mjs';
import { shopping, family } from '../model.mjs';

/* Общий список покупок семьи: кто что добавил, что уже куплено */
export default (ui) => ui.screen({
  id: 'shopping', theme: THEME,
  body: [
    ui.nav({ title: 'Список покупок', trailing: ui.iconButton({ icon: 'plus', label: 'Новая покупка', go: 'newitem' }) }),
    ui.scroll([
      ui.section({ children: `<div class="sv-money"><small>${family.name} · общий список</small><strong>${shopping.bought} из ${shopping.total}</strong><span>куплено · осталось ${shopping.total - shopping.bought}</span></div>` }),
      ui.section({ title: 'Купить', meta: String(shopping.todo.length), children: ui.list(shopping.todo.map(([title, who]) => ui.row({
        lead: ui.leadIcon('circle', { round: true }), title, sub: `добавил${/[аи]$/.test(who) && who !== 'Даня' ? 'а' : ''} ${who}`, toast: `${title} — куплено`,
      }))) }),
      ui.section({ title: 'Куплено', meta: String(shopping.done.length), children: ui.list(shopping.done.map(([title, who, when]) => ui.row({
        lead: ui.leadIcon('circle-check', { round: true, accent: true }), title, sub: `${who} · ${when}`,
      }))) }),
    ]),
  ],
});
