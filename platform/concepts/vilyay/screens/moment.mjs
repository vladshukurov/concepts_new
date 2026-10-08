import { THEME } from './_shared.mjs';
import { shot, people, seasons, newSeries } from '../model.mjs';

/* Только что снятый ролик уже в сезоне «Сейчас»: название, серия, «первый раз», где снято */
const input = (value, label) => `<input class="vl-input" value="${value}" aria-label="${label}"/>`;
export default (ui) => ui.screen({
  id: 'moment', theme: THEME, className: 'vl-wrap vl-marks',
  body: [
    ui.nav({ title: 'Новый ролик', trailing: ui.iconButton({ icon: 'clapperboard', label: 'Сезон «Сейчас»', go: 'now' }) }),
    ui.scroll([
      ui.section({ children: ui.videoCard({ art: shot.art, duration: shot.dur, avatar: ui.avatar(people.me.initial), title: shot.title, sub: shot.meta }) }),
      ui.section({ children: ui.group({ className: 'vl-form', cells: [
        ui.cell({ title: input(shot.title, 'Название'), sub: 'Название' }),
        ui.cell({ icon: 'clapperboard', title: `Сезон «${seasons.now.title}»`, sub: 'Сезон' }),
        ui.cell({ icon: 'film', title: newSeries.title, sub: 'Серия', menu: `${newSeries.title}=Серия «${newSeries.title}»|Рыжик против пылесоса=Серия «Рыжик против пылесоса»|Без серии=Без серии`, label: 'Выбрать серию' }),
      ] }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin', { round: true, accent: true }), title: 'Отметить, где снято', sub: 'Парк, двор или дача', ask: 'location|moment|moment' }),
        ui.row({ shownAfter: 'location', lead: ui.leadIcon('map-pin', { round: true, accent: true }), title: shot.place, sub: shot.placeSub }),
      ]) }),
      ui.denied('location'),
      ui.section({ title: 'Отметки', children: ui.checklist([
        { title: 'Первый раз', sub: 'Первый пакет из магазина — попадёт в «Год назад сегодня» через год', done: true },
        { title: 'Показать семье вечером на ТВ', sub: 'Встанет в очередь на телевизор в гостиной' },
      ]) }),
      ui.actions(ui.button({ label: 'Готово', block: true, go: 'now', primary: true }), { className: 'vl-bottom' }),
    ]),
  ],
});
