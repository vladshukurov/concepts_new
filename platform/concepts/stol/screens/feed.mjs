import { THEME, TABS, seats } from './_shared.mjs';
import { people, tonight, saturday } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Стол', glyph: 'dices' }), ui.iconButton({ icon: 'plus', label: 'Новая запись', go: 'compose' })),
    ui.composerPrompt({ initial: people.me.initial, placeholder: 'Собрать стол на вечер', go: 'compose', primary: true }),
    ui.section({ title: 'Ближайшие столы', more: { go: 'tables', label: 'Все столы' }, children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: tonight.start }), title: tonight.game, sub: `Сегодня · ${tonight.where}`, end: seats(tonight.taken, tonight.seats), go: 'table' }),
      ui.row({ lead: ui.leadIcon('', { text: 'сб' }), title: saturday.game, sub: `${saturday.start} · ${saturday.where}`, end: seats(saturday.taken, saturday.seats), go: 'table' }),
    ]) }),
    ui.post({
      author: { initial: people.masha.initial, name: people.masha.name, meta: `сегодня, 12:14 · ${tonight.where}`, action: { go: 'table' } },
      text: `Вечером раскладываем «${tonight.game}». Объяснение — минут десять, играем спокойно, без гонки за первым ходом`,
      attach: ui.list([ui.row({ lead: ui.leadIcon('dices', { accent: true }), title: `${tonight.game} · ${tonight.start}`, sub: `${tonight.minutes} минут · объясним правила`, go: 'table' })]),
      likes: 18, comments: 6, shares: 4, open: { go: 'post' }, discuss: { go: 'chat' }, menu: { toast: 'Скрыть · Пожаловаться · Скопировать ссылку' },
    }),
    ui.post({
      author: { initial: people.ilya.initial, name: people.ilya.name, meta: 'вчера · итог партии' },
      text: '«Городские линии» вчетвером: 92 у меня, Женя на два очка позади. Финальный раунд решил всё',
      attach: ui.list([ui.row({ lead: ui.leadIcon('trophy'), title: 'Городские линии · 92 очка', sub: '4 игрока · 48 минут', go: 'score' })]),
      likes: 24, comments: 3, open: { go: 'post' },
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
