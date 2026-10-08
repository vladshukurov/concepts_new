import { THEME, TABS, videoCard } from './_shared.mjs';
import { people, teams, stats, videos, oldTown, sokolniki, embankment } from '../model.mjs';

/* Профиль в грамматике ВК Видео: шапка с «Изменить» и шестерёнкой, свои квесты за месяц, свои разделы */
const me = people.me;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top(`<span class="vz-me">${ui.avatar(me.initial, { large: true })}<span class="ui-row-text"><strong>${me.name}</strong><span>Команда «${teams.owl.name}» · ${teams.owl.members}</span></span></span>`,
      ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ children: [
      ui.stats([[stats.quests, 'квеста'], [stats.clips, 'роликов'], [stats.best, 'в лучшем']]),
      ui.actions(ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', block: true, go: 'account' }), { className: 'vz-gap' }),
    ] }),
    ui.section({ title: 'За месяц', children: ui.miniInfo([
      { icon: 'trophy', text: `«${sokolniki.title}»: ${teams.owl.name} ${sokolniki.score.owl} : ${sokolniki.score.hedgehog} ${teams.hedgehog.name}`, accent: true },
      { icon: 'flag', text: `«${oldTown.title}» идёт · вы на точке 4 из ${oldTown.pointsCount}`, go: 'quest' },
    ]) }),
    ui.section({ title: 'Ролики моей команды', children: videoCard(videos.fountain) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'flag', title: 'Квесты', sub: `${stats.quests} квеста · следующий — «${embankment.title}»`, go: 'quests' }),
      ui.cell({ icon: 'bell', title: 'Уведомления', sub: 'Ролики с точек и старты квестов', go: 'activity' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
