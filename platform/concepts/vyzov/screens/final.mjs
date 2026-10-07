import { THEME, channel, videoCard } from './_shared.mjs';
import { oldTown, teams, people, videos, current } from '../model.mjs';

/* Финал «Старого города» сегодня в 20:00 у Лены: счёт, показ на её телевизоре,
   лучшие моменты и фильм квеста в «Фото» */
const q = oldTown;
const done = q.points.filter((p) => p.done || p.now);
export default (ui) => ui.screen({
  id: 'final', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: 'Финал' }),
    ui.scroll([
      `<div class="vz-banner ${q.finalArt}">${ui.duration(q.film)}</div>`,
      ui.section({ children: [
        channel({ initial: q.by.initial, title: q.finalTitle, sub: `${q.finale[0].toUpperCase()}${q.finale.slice(1)} · ${q.meta}` }),
        `<div class="vz-score"><span><strong>${q.score.owl}</strong>${teams.owl.name}</span><i>:</i><span><strong>${q.score.hedgehog}</strong>${teams.hedgehog.name}</span></div>`,
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: 'Показать финал на телевизоре', sub: `Счёт и лучшие моменты на экране · ${q.tv}`, ask: 'localnetwork|cast|final' }),
        ui.row({ lead: ui.leadIcon('download', { round: true, accent: true }), title: 'Сохранить фильм квеста в «Фото»', sub: `${q.clips} роликов · ${q.film} одним фильмом`, ask: 'photosadd|final|final' }),
        ui.row({ shownAfter: 'photosadd', lead: ui.leadIcon('images', { round: true, accent: true }), title: `Фильм «${q.title}» · ${q.film} в «Фото»`, sub: 'Альбом «Вызов» · 1080p · 148 МБ' }),
      ]) }),
      ui.denied('localnetwork'),
      ui.section({ title: 'Лучшие моменты', children: [videoCard(videos.fountain), videoCard(videos.door)] }),
      ui.section({ title: 'Точки', meta: `${current.n} из ${q.pointsCount} сняты`, children: ui.list(done.map((p) =>
        ui.row({ lead: ui.leadIcon(p.done ? 'check' : '', { round: true, text: p.done ? undefined : String(p.n) }), title: p.task, sub: p.done ? `${p.place} · обе команды` : `${p.place} · снял ${teams.hedgehog.name}` }))) }),
    ]),
  ],
});
