import { THEME, TABS } from './_shared.mjs';
import { people, stats, highlights, hlMeta } from '../model.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

const me = people.me;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top(`<span class="vy-me">${ui.avatar(me.initial, { large: true })}<span class="ui-row-text"><strong>${me.name}</strong><span>${TEST_PHONE}</span></span></span>`),
    ui.section({ children: ui.stats([[stats.evenings, 'вечера'], [stats.answers, 'ответов'], [stats.inHighlights, 'в хайлайтах']]) }),
    ui.section({ title: 'Мои ответы в хайлайтах', children: ui.videoCard({
      art: highlights.mine.art, duration: highlights.mine.dur, go: 'watchmine', avatar: ui.avatar(me.initial),
      title: highlights.mine.title, sub: hlMeta(highlights.mine),
    }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'square-pen', title: 'Задания', sub: '2 своих задания', go: 'tasks' }),
      ui.cell({ icon: 'megaphone', title: 'Реклама', sub: 'Бесплатная версия', go: 'ads' }),
      ui.cell({ icon: 'circle-user', title: 'Аккаунт', sub: TEST_PHONE, go: 'account' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
