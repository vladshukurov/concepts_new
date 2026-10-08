import { THEME, TABS } from './_shared.mjs';
import { people, stats, highlights, hlMeta, tonight, invite, lenaEvening } from '../model.mjs';

/* Профиль в грамматике ВК Видео: шапка с «Изменить» и шестерёнкой, свои вечера за месяц, свои разделы */
const me = people.me;
const mine = highlights.mine;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top(`<span class="vy-me">${ui.avatar(me.initial, { large: true })}<span class="ui-row-text"><strong>${me.name}</strong><span>Ведущая · ${tonight.title} сегодня в ${tonight.time}</span></span></span>`,
      ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ children: [
      ui.stats([[stats.evenings, 'вечера'], [stats.answers, 'ответов'], [stats.inHighlights, 'в хайлайтах']]),
      ui.actions(ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', block: true, go: 'account' }), { className: 'vy-gap' }),
    ] }),
    ui.section({ title: 'За месяц', children: ui.miniInfo([
      { icon: 'trophy', text: `${mine.votes} голоса за «${mine.title}»`, accent: true },
      { icon: 'calendar', text: `${invite.title} · ${invite.when}`, go: 'invite' },
    ]) }),
    ui.section({ title: 'Мои ответы в хайлайтах', children: ui.videoCard({
      art: mine.art, duration: mine.dur, go: 'watchmine', avatar: ui.avatar(me.initial),
      title: mine.title, sub: hlMeta(mine),
    }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'tv', title: 'Вечера', sub: `${stats.evenings} вечера · последний — ${lenaEvening.title}`, go: 'evenings' }),
      ui.cell({ icon: 'square-pen', title: 'Задания', sub: '2 своих задания', go: 'tasks' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
