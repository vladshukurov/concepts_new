import { THEME, channel, videoCard } from './_shared.mjs';
import { oldTown, teams, current, next, toNext, hereLine, videos, myShot } from '../model.mjs';

/* Страница квеста как канал: где вы на маршруте, команды, точки и ролики квеста */
const q = oldTown;
export default (ui) => ui.screen({
  id: 'quest', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: 'Квест' }),
    ui.scroll([
      `<div class="vz-banner ${q.art}"></div>`,
      ui.section({ children: [
        channel({ initial: q.by.initial, title: q.title, sub: `${q.meta} · придумала ${q.by.short}` }),
        ui.miniInfo([
          { icon: 'clock', text: `Старт в ${q.start} · идёт сейчас` },
        ]),
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: 'Где я на маршруте', sub: 'Точка, на которой стоит команда, и путь к следующей', ask: 'location|quest|quest' }),
        ui.row({ shownAfter: 'location', lead: ui.leadIcon('map-pin', { round: true, accent: true }), title: `${hereLine} · ${current.place}`, sub: `Задание открыто: ${current.task.toLowerCase()}` }),
        ui.row({ shownAfter: 'location', lead: ui.leadIcon('footprints', { round: true }), title: `До точки ${next.n} — ${toNext.dist}`, sub: `${toNext.walk} · ${next.place}` }),
      ]) }),
      ui.denied('location'),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: q.finalTitle, sub: `${q.finale[0].toUpperCase()}${q.finale.slice(1)} · счёт на телевизоре`, go: 'final' }),
      ]) }),
      ui.section({ title: 'Счёт', meta: `после ${current.n - 1} точек`, children: ui.list([
        ui.row({ lead: ui.avatar(teams.owl.initial), title: `${teams.owl.name} · ${q.score.owl} точки`, sub: `${teams.owl.members} · ваша команда` }),
        ui.row({ lead: ui.avatar(teams.hedgehog.initial), title: `${teams.hedgehog.name} · ${q.score.hedgehog} точки`, sub: teams.hedgehog.members }),
      ]) }),
      ui.section({ title: 'Точки', meta: `${q.pointsCount} точек`, children: ui.list([
        ...q.points.map((p) => ui.row({
          lead: ui.leadIcon(p.done ? 'check' : '', { round: true, accent: !!p.now, text: p.done ? undefined : String(p.n) }),
          title: p.task, sub: p.done ? `${p.place} · снято` : p.now ? `${p.place} · вы здесь` : `${p.place} · следующая`,
          ...(p.now ? { go: 'point' } : {}),
        })),
        ui.row({ lead: ui.leadIcon('lock', { round: true }), title: `Ещё ${q.hiddenLeft} точки`, sub: 'Откроются по ходу маршрута' }),
      ]) }),
      ui.section({ title: 'Ролики квеста', meta: `${q.clips} роликов`, children: [
        ui.list([ui.row({ shownAfter: 'camera', thumb: myShot.art, wide: true, duration: myShot.dur, title: 'Ваш стук в дверь 1907', sub: myShot.sub })]),
        videoCard(videos.door), videoCard(videos.fountain),
      ] }),
    ]),
  ],
});
