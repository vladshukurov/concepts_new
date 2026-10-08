import { THEME } from './_shared.mjs';
import { season, moments, mMeta, team } from '../model.mjs';

/* Лучшее за сезон: 12 моментов одним роликом, сохранить себе в «Фото» */
export default (ui) => ui.screen({
  id: 'season', theme: THEME, className: 'vr-wrap',
  body: [
    ui.nav({ title: 'Лучшее за сезон' }),
    ui.scroll([
      ui.section({ children: ui.videoCard({ art: 'f4', duration: season.total, avatar: ui.avatar(team.initial), title: `${team.season} · лучшее`, sub: `${season.best} моментов из ${season.moments} · ${season.matches} матчей` }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('download', { round: true, accent: true }), title: 'Сохранить лучшее за сезон в «Фото»', sub: `${season.best} моментов · ${season.total} одним роликом`, ask: 'photosadd|season|season' }),
        ui.row({ shownAfter: 'photosadd', lead: ui.leadIcon('images', { round: true, accent: true }), title: `Лучшее за сезон · ${season.total} в «Фото»`, sub: `Альбом «${team.name}» · 1080p · 214 МБ` }),
      ]) }),
      ui.section({ title: 'Топ сезона', meta: 'по голосам', children: ui.list(['save', 'free', 'win', 'mine'].map((k) => {
        const m = moments[k];
        return ui.row({ thumb: m.art, wide: true, duration: m.dur, title: m.title, sub: `${mMeta(m)} · ${m.votes} голосов`, go: m.id });
      })) }),
    ]),
  ],
});
