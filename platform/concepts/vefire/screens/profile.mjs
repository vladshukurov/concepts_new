import { THEME, TABS } from './_shared.mjs';
import { people, rubrics, rMeta, show, weekly } from '../model.mjs';

/* Профиль продюсера шоу: статистика, октябрь, рубрики вертикальными карточками, вход в настройки */
const me = people.me;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME, className: 'vf-wrap',
  body: ui.scroll([
    ui.top(`<span class="vf-me">${ui.avatar(me.initial, { large: true })}<span class="ui-row-text"><strong>${me.name}</strong><span>${show.title} · ${me.role}</span></span></span>`,
      ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ children: [
      ui.stats([[weekly.n, 'выпусков недели'], [286, 'реакций'], [51, 'репортаж']]),
      ui.actions(ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', block: true, go: 'account' }), { className: 'vf-gap' }),
    ] }),
    ui.section({ title: 'За октябрь', children: ui.miniInfo([
      { icon: 'tv', text: `${weekly.title} — премьера в пятницу`, accent: true, go: 'weekly' },
      { icon: 'heart', text: 'Бабушка поставила ❤️ под каждым выпуском' },
      { icon: 'users', text: 'Соня, Миша, папа и бабушка в шоу', go: 'family' },
    ]) }),
    ui.section({ title: 'Рубрики шоу', children: ui.grid(Object.values(rubrics).slice(0, 2).map((r) => ui.card({ art: r.art, title: r.title, sub: rMeta(r), go: r.id, className: 'vf-v' }))) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'clapperboard', title: 'Все рубрики', sub: '3 рубрики · 51 репортаж', go: 'rubrics' }),
      ui.cell({ icon: 'users', title: 'Семья', sub: '5 человек в шоу', go: 'family' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
