import { THEME, TABS, MINI, frame } from './_shared.mjs';
import { oldTown, hereLine, embankment, sokolniki, people } from '../model.mjs';

/* Квесты: идёт сейчас, скоро и прошедшие — каждый открывает свою страницу */
export default (ui) => ui.screen({
  id: 'quests', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Квесты', ui.iconButton({ icon: 'plus', label: 'Новый квест', go: 'newquest' })),
    ui.section({ title: 'Идёт сейчас', children: ui.videoCard({
      art: frame, duration: `${oldTown.pointsCount} точек`, go: 'quest', avatar: ui.avatar(people.lena.initial),
      title: oldTown.title, sub: `${oldTown.meta} · ${hereLine.toLowerCase()} · финал ${oldTown.finale}`,
    }) }),
    ui.section({ title: 'Скоро', children: ui.list([
      ui.row({ lead: ui.avatar(people.me.initial), title: embankment.title, sub: `${embankment.meta} · ${embankment.when} · придумали вы`, go: 'embankment' }),
    ]) }),
    ui.section({ title: 'Прошли', children: ui.list([
      ui.row({ thumb: frame, wide: true, duration: sokolniki.film, title: sokolniki.finalTitle, sub: `Сова ${sokolniki.score.owl} : ${sokolniki.score.hedgehog} Ёж · ${sokolniki.day}`, go: 'final' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'quests', mini: MINI }),
});
