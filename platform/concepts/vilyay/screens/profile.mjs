import { THEME, TABS, clipRow } from './_shared.mjs';
import { people, clips, cMeta, reactLine, channel, dog, seasons, yearAgo } from '../model.mjs';

/* Профиль в грамматике ВК Видео: шапка с «Изменить» и шестерёнкой, месяц, что сняла Катя и на что семья реагировала — чипсы фильтруют на месте */
const me = people.me;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top(`<span class="vl-me">${ui.avatar(me.initial, { large: true })}<span class="ui-row-text"><strong>${me.name}</strong><span>${channel.title} · ${me.role}</span></span></span>`,
      ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ children: [
      ui.stats([[47, 'сняла'], [312, 'реакций'], ['1,7', 'года Рыжику']]),
      ui.actions(ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', block: true, go: 'account' }), { className: 'vl-gap' }),
    ] }),
    ui.section({ title: 'За месяц', children: ui.miniInfo([
      { icon: 'clapperboard', text: `Серия 4 «${clips.robot.title}» · ${reactLine(clips.robot)}`, accent: true },
      { icon: 'history', text: `Год назад: «${yearAgo.title}»`, go: 'memory' },
    ]) }),
    ui.section({ children: ui.usersStack({ faces: [people.mama.initial, people.papa.initial, people.tema.initial], text: 'Мама, папа, Тёма и бабушка в канале', go: 'family' }) }),
    ui.section({ children: ui.chips([
      { label: 'Сняла', on: true, filter: 'mine' },
      { label: 'Семья смеялась', filter: 'laugh' },
    ]) }),
    ui.section({ tags: ['mine'], children: ui.videoCard({
      art: clips.robot.art, duration: clips.robot.dur, go: clips.robot.id, avatar: ui.avatar(me.initial),
      title: clips.robot.title, sub: `${cMeta(clips.robot)} · ${reactLine(clips.robot)}`,
    }) }),
    ui.section({ tags: ['laugh'], className: 'is-filtered-out', title: 'Больше всего 😂', meta: 'за месяц', children: ui.list(
      ['snow', 'puddle', 'dacha'].map((k) => clipRow(ui, clips[k], `${reactLine(clips[k])} · ${clips[k].react.who}`))) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'paw-print', title: 'Сезоны Рыжика', sub: `${dog.breed} · ${dog.age} · 113 роликов`, go: 'seasons' }),
      ui.cell({ icon: 'users', title: 'Семья', sub: '5 человек смотрят канал', go: 'family' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
