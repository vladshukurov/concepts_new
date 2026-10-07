import { THEME } from './_shared.mjs';
import { trip, money } from '../model.mjs';

/* Общий кошелёк поездки: все траты делятся на всех; видно свою долю и сколько вернут */
const she = ['Лена', 'Ника'];
export default (ui) => ui.screen({
  id: 'expenses', theme: THEME,
  body: [
    ui.nav({ title: 'Расходы', trailing: ui.iconButton({ icon: 'plus', label: 'Добавить трату', menu: ['Снять чек>camera', 'Вручную>expensenew'] }) }),
    ui.scroll([
      ui.section({ children: `<div class="sb-money"><small>${trip.name} · ${money.spent.length} трат</small><strong>${money.total} ₽</strong><span>по ${money.each} ₽ с человека · делим на ${trip.people}</span></div>` }),
      ui.section({ title: 'Ваш баланс', children: ui.list([
        ui.row({ lead: ui.leadIcon('wallet', { round: true, accent: true }), title: `Вам вернут ${money.back} ₽`, sub: `Заплатили ${money.paid} ₽ за ужин · ваша доля ${money.each} ₽`, end: { value: 'Попросить', toast: 'Запрос на возврат ушёл в чат поездки', label: 'Попросить вернуть' }, primary: true }),
      ]) }),
      ui.section({ title: 'Траты', meta: String(money.spent.length), children: ui.list(money.spent.map(([ic, title, who, sum, sub]) => ui.row({
        lead: ui.leadIcon(ic, { round: true }), title: `${title} · ${sum} ₽`, sub: `платил${she.includes(who) ? 'а' : ''} ${who} · на 16 · ${sub}`,
      }))) }),
    ]),
  ],
});
