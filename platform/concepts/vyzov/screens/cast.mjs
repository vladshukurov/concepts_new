import { THEME } from './_shared.mjs';
import { sokolniki, teams } from '../model.mjs';

/* Финал идёт на телевизоре в гостиной, телефон — пульт */
const s = sokolniki;
export default (ui) => ui.screen({
  id: 'cast', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: `Идёт на «${s.tv}»`, back: 'back' }),
    ui.scroll([
      `<div class="vz-tv ph on-dark"><div class="vz-tv-score"><small>Финал «${s.title}»</small><strong>${teams.owl.name} ${s.score.owl} : ${s.score.hedgehog} ${teams.hedgehog.name}</strong><span>Лучший момент · точка 6</span></div></div>`,
      ui.section({ children: [
        ui.progress({ fillClass: 'vz-p40' }),
        ui.times('1:31', s.film),
        `<div class="vz-remote">${ui.iconButton({ icon: 'skip-back', label: 'Предыдущая точка', toast: 'Точка 5' })}${ui.play({ size: 'xl', pause: true, label: 'Пауза', toast: 'Пауза на 1:31' })}${ui.iconButton({ icon: 'skip-forward', label: 'Следующая точка', toast: 'Точка 7' })}</div>`,
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: s.tv, sub: 'Телевизор в вашей сети · финал идёт здесь', end: { badge: 'ТВ' } }),
        ui.row({ lead: ui.leadIcon('volume-2', { round: true }), title: 'Громкость телевизора', sub: 'Кнопками на iPhone' }),
      ]) }),
      ui.actions(ui.button({ label: 'Остановить показ', variant: 'secondary', block: true, back: true }), { className: 'vz-bottom' }),
    ]),
  ],
});
