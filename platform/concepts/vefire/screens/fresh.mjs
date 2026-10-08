import { THEME } from './_shared.mjs';
import { shot } from '../model.mjs';

/* Только что снятый выпуск «Новостей двора»: где снято и попадёт ли в пятничный выпуск */
export default (ui) => ui.screen({
  id: 'fresh', theme: THEME, className: 'vf-wrap vf-marks',
  body: [
    ui.nav({ title: 'Выпуск снят' }),
    ui.scroll([
      ui.section({ children: ui.videoCard({ art: shot.art, duration: shot.dur, className: 'vf-week', title: shot.title, sub: shot.meta }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin', { round: true, accent: true }), title: 'Отметить, где снято', sub: 'Новости двора: во дворе или у школы', ask: 'location|fresh|fresh' }),
        ui.row({ shownAfter: 'location', lead: ui.leadIcon('map-pin', { round: true, accent: true }), title: shot.place, sub: shot.placeSub }),
      ]) }),
      ui.denied('location'),
      ui.section({ title: 'Отметки', children: ui.checklist([
        { title: 'В пятничный выпуск', sub: 'Встанет в выпуск №14 после «Новостей двора»', done: true },
        { title: 'Главная новость недели', sub: 'Откроет выпуск вместо бабушкиного юбилея' },
      ]) }),
      ui.actions(ui.button({ label: 'Готово', block: true, go: 'yard', primary: true }), { className: 'vf-bottom' }),
    ]),
  ],
});
