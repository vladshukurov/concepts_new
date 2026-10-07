import { THEME, TABS, videoCard } from './_shared.mjs';
import { people, stats, videos } from '../model.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

const me = people.me;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top(`<span class="vz-me">${ui.avatar(me.initial, { large: true })}<span class="ui-row-text"><strong>${me.name}</strong><span>${TEST_PHONE}</span></span></span>`),
    ui.section({ children: ui.stats([[stats.quests, 'квеста'], [stats.clips, 'роликов'], [stats.best, 'в лучшем']]) }),
    ui.section({ title: 'Ролики моей команды', children: videoCard(videos.fountain) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'megaphone', title: 'Реклама', sub: 'Бесплатная версия', go: 'ads' }),
      ui.cell({ icon: 'circle-user', title: 'Аккаунт', sub: TEST_PHONE, go: 'account' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
