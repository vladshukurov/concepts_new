import { THEME } from './_shared.mjs';
import { trip, money } from '../model.mjs';

/* Общий кошелёк поездки: траты всей группы, кто платил и на скольких делили, кто кому должен.
   Чек снимают камерой — сумма и магазин попадают в трату */
export default (ui) => ui.screen({
  id: 'expenses', theme: THEME,
  body: [
    ui.nav({ title: 'Расходы', trailing: ui.iconButton({ icon: 'plus', label: 'Добавить трату', menu: ['Снять чек>camera', 'Вручную=Новая трата: сумма, кто платил, на кого'] }) }),
    ui.scroll([
      ui.section({ children: `<div class="sb-money"><small>${trip.name} · ${money.receipts} чеков</small><strong>${money.total} ₽</strong><span>по ${money.each} ₽ с человека · делим на ${trip.people}</span></div>` }),
      ui.section({ title: 'Вы должны', children: ui.list(money.owe.map(([who, sum, why]) => ui.row({
        lead: ui.avatar('ЛК'), title: `${who} · ${sum} ₽`, sub: why,
        end: { value: 'Рассчитаться', toast: `Отмечено: вы вернули ${who} ${sum} ₽`, label: `Рассчитаться: ${who}` }, primary: true,
      }))) }),
      ui.section({ title: 'Траты', meta: String(money.spent.length), children: ui.list(money.spent.map(([ic, title, who, sum, sub]) => ui.row({
        lead: ui.leadIcon(ic, { round: true }), title: `${title} · ${sum} ₽`, sub: `платил${who === 'Лена' ? 'а' : ''} ${who} · ${sub}`,
      }))) }),
    ]),
  ],
});
