import { THEME, TABS } from './_shared.mjs';
import { people, season, moments, mMeta, team, lastMatch, nextMatch } from '../model.mjs';

/* Профиль игрока в грамматике ВК Видео: шапка с «Изменить» и шестерёнкой, месяц, свои голы и то, что снял со скамейки — чипсы фильтруют на месте */
const me = people.me;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top(`<span class="vr-me">${ui.avatar(me.initial, { large: true })}<span class="ui-row-text"><strong>${me.name}</strong><span>${team.name} · ${me.role}</span></span></span>`,
      ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ children: [
      ui.stats([[season.matches, 'матчей'], [season.goals, 'гола'], [season.filmed, 'снял']]),
      ui.actions(ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', block: true, go: 'account' }), { className: 'vr-gap' }),
    ] }),
    ui.section({ title: 'За месяц', children: ui.miniInfo([
      { icon: 'trophy', text: `${lastMatch.title} с «${lastMatch.rival}» · ваш гол пяткой на ${moments.mine.min}'`, accent: true },
      { icon: 'calendar', text: `Дальше — «${nextMatch.rival}», ${nextMatch.day}, ${nextMatch.time}`, go: 'nextmatch' },
    ]) }),
    ui.section({ children: ui.chips([
      { label: 'Мои голы', on: true, filter: 'goals' },
      { label: 'Снял', filter: 'filmed' },
    ]) }),
    ui.section({ tags: ['goals'], children: ui.videoCard({
      art: moments.mine.art, duration: moments.mine.dur, go: 'watchmine', avatar: ui.avatar(me.initial),
      title: moments.mine.title, sub: mMeta(moments.mine),
    }) }),
    ui.section({ tags: ['filmed'], className: 'is-filtered-out', title: 'Снял со скамейки', meta: `${season.filmed} моментов`, children: ui.list([
      ...['free', 'win'].map((k) => { const m = moments[k]; return ui.row({ thumb: m.art, wide: true, duration: m.dur, title: m.title, sub: mMeta(m), go: m.id }); }),
    ]) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'sparkles', title: 'Лучшее за сезон', sub: `${season.best} моментов · ${season.total}`, go: 'season' }),
      ui.cell({ icon: 'users', title: 'Состав', sub: '9 игроков в команде', go: 'squad' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
