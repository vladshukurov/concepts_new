import { THEME, feedRow } from './_shared.mjs';
import { liveMatch, liveMoments, myMoment, people } from '../model.mjs';

/* Снятый момент уже в ленте матча: отметить, чей он и что это */
export default (ui) => ui.screen({
  id: 'moment', theme: THEME, className: 'vr-wrap vr-marks',
  body: [
    ui.nav({ title: 'Момент', trailing: ui.iconButton({ icon: 'trophy', label: 'Матч', go: 'live' }) }),
    ui.scroll([
      ui.section({ children: ui.videoCard({ art: myMoment.art, duration: myMoment.dur, avatar: ui.avatar(people.me.initial), title: myMoment.title, sub: myMoment.meta }) }),
      ui.section({ title: 'Что в кадре', children: ui.checklist([
        { title: 'Удар в перекладину', sub: 'Не гол, но в ленте матча', done: true },
        { title: 'Тимур Ахметов', sub: 'Кто бил', done: true },
        { title: 'Голос за лучший момент недели', sub: 'Сейчас лидирует сейв Гоши · 6 голосов' },
      ]) }),
      ui.section({ title: 'Лента матча', meta: `${liveMoments.length + 1} момента`, children: ui.list([
        ui.row({ thumb: myMoment.art, wide: true, duration: myMoment.dur, title: myMoment.title, sub: `${liveMatch.minute}' · снял Миша · только что` }),
        ...[...liveMoments].reverse().map((m) => feedRow(ui, m)),
      ]) }),
      ui.actions(ui.button({ label: 'Готово', block: true, go: 'live', primary: true }), { className: 'vr-bottom' }),
    ]),
  ],
});
