import { THEME, TABS } from './_shared.mjs';
import { people, season, films, fMeta, lastTrip, nextWalk, routes } from '../model.mjs';

/* Профиль: своя статистика сезона, месяц, свои ролики и снятое друзьями — чипсы фильтруют на месте */
const me = people.me;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top(`<span class="vy-me">${ui.avatar(me.initial, { large: true })}<span class="ui-row-text"><strong>${me.name}</strong><span>Ходит по выходным с весны 2025</span></span></span>`,
      ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ children: [
      ui.stats([[season.trips, 'вылазок'], [season.km, 'км'], [season.filmed, 'снял']]),
      ui.actions(ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', block: true, go: 'account' }), { className: 'vy-gap' }),
    ] }),
    ui.section({ title: 'За октябрь', children: ui.miniInfo([
      { icon: 'footprints', text: `${routes.quarry.name} · ${lastTrip.day} · фильм ${lastTrip.film}`, accent: true },
      { icon: 'calendar', text: `Дальше — «${nextWalk.route.title}», ${nextWalk.when}`, go: 'nextwalk' },
    ]) }),
    ui.section({ children: ui.chips([
      { label: 'Мои фильмы', on: true, filter: 'films' },
      { label: 'Сняли друзья', filter: 'friends' },
    ]) }),
    ui.section({ tags: ['films'], children: ui.videoCard({
      art: films.film.art, duration: films.film.dur, go: 'watch', avatar: ui.avatar(me.initial),
      title: films.film.title, sub: films.film.meta,
    }) }),
    ui.section({ tags: ['friends'], className: 'is-filtered-out', title: 'Сняли друзья', meta: '29 роликов', children: ui.list(
      ['view', 'spring'].map((k) => { const f = films[k]; return ui.row({ thumb: f.art, wide: true, duration: f.dur, title: f.title, sub: fMeta(f), go: f.id }); }),
    ) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'route', title: 'Маршруты', sub: `${season.routes} серии · ${season.km} км за сезон`, go: 'routes' }),
      ui.cell({ icon: 'users', title: 'Кто идёт', sub: 'В субботу 4 из 6', go: 'crew' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
