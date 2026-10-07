import { THEME } from './_shared.mjs';
import { oldTown, teams, videos } from '../model.mjs';

/* Финал «Старого города» идёт на телевизоре Лены, телефон — пульт */
const q = oldTown;
const best = videos.fountain;
export default (ui) => ui.screen({
  id: 'cast', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: `Идёт на «${q.tv[0].toUpperCase()}${q.tv.slice(1)}»`, back: 'back' }),
    ui.scroll([
      `<div class="vz-tv ${best.art}"><div class="vz-tv-score"><small>${q.finalTitle}</small><strong>${teams.owl.name} ${q.score.owl} : ${q.score.hedgehog} ${teams.hedgehog.name}</strong><span>Лучший момент · точка ${best.point} · ${best.title.toLowerCase()}</span></div></div>`,
      ui.section({ children: [
        ui.progress({ fillClass: 'vz-p40' }),
        ui.times('1:02', q.film),
        `<div class="vz-remote">${ui.iconButton({ icon: 'skip-back', label: 'Предыдущая точка', toast: 'Точка 2' })}${ui.play({ size: 'xl', pause: true, label: 'Пауза', toast: 'Пауза на 1:02' })}${ui.iconButton({ icon: 'skip-forward', label: 'Следующая точка', toast: 'Точка 4' })}</div>`,
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: `${q.tv[0].toUpperCase()}${q.tv.slice(1)}`, sub: 'В сети Лены · финал идёт здесь', end: { badge: 'ТВ' } }),
        ui.row({ lead: ui.leadIcon('volume-2', { round: true }), title: 'Громкость телевизора', sub: 'Кнопками на iPhone' }),
      ]) }),
      ui.actions(ui.button({ label: 'Остановить показ', variant: 'secondary', block: true, back: true }), { className: 'vz-bottom' }),
    ]),
  ],
});
