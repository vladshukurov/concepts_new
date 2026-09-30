import { THEME, TABS, dish } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Подача', glyph: 'utensils' }), [
      ui.iconButton({ icon: 'search', label: 'Поиск', go: 'discover' }),
      ui.iconButton({ icon: 'bell', label: 'Уведомления', go: 'notif' }),
    ]),
    ui.composerPrompt({ initial: 'СЛ', placeholder: 'Что получилось сегодня?', go: 'compose', trailing: ui.iconButton({ icon: 'camera', label: 'Снять блюдо', go: 'camera' }) }),
    ui.stories([
      { label: 'Моё', icon: 'plus', seen: true, go: 'compose' },
      { label: 'Жанна', initial: 'ЖК', go: 'post' },
      { label: 'Вместе 19:00', icon: 'chef-hat', go: 'cookalong' },
      { label: 'Тимур', initial: 'ТС', seen: true, go: 'direct-timur' },
    ]),
    ui.post({
      author: { initial: 'ЖК', name: 'Жанна Ким', meta: 'сегодня, 12:14 · Алматы', action: { go: 'direct-zhanna' } },
      text: 'Тот самый чечевичный суп, но без сливок: запекла перец заранее и добавила ложку тахини',
      attach: dish(ui, 'Чечевичный суп', '35 минут · проверили 34 раза'),
      likes: 126, comments: 18, shares: 9, open: { go: 'post' }, discuss: { go: 'post' },
      menu: { toast: 'Скрыть · Пожаловаться · Скопировать ссылку' },
    }),
    ui.section({ title: 'Рекомендации', children: [
      ui.list([ui.row({ lead: ui.leadIcon('sparkles', { accent: true }), title: 'Сезонные блюда рядом', sub: 'Подборка по авторам, которых вы читаете' })]),
      ui.actions([ui.button({ label: 'Настроить рекомендации', variant: 'secondary', block: true, ask: 'tracking|feed|feed' })], { className: 'pd-gap' }),
      ui.denied('tracking', 'Остаются общие сезонные рекомендации'),
    ] }),
    ui.post({
      author: { initial: 'ТС', name: 'Тимур Садыков', meta: 'вчера, 20:40', action: { go: 'direct-timur' } },
      text: 'Хачапури на обычной сковороде: 7 минут с каждой стороны, сулугуни можно заменить моцареллой с брынзой',
      attach: dish(ui, 'Хачапури на сковороде', '20 минут · 2 удачные замены'),
      likes: 88, comments: 12, shares: 4, open: { go: 'post' },
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
