import { THEME, TABS, P, tags } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Образы', glyph: 'shirt' }), [ui.iconButton({ icon: 'plus', label: 'Новая публикация', go: 'create' })]),
    ui.stories([
      { label: 'История', icon: 'plus', seen: true, go: 'create' },
      { label: 'Лера', face: P.lera, go: 'post' },
      { label: 'Юля', face: P.yulia, go: 'clip' },
      { label: 'Марк', face: P.mark, seen: true, go: 'profile' },
      { label: 'Рядом', icon: 'map-pin', seen: true, ask: 'location|nearby|nearby' },
    ]),
    ui.post({
      author: { face: P.lera, name: 'Лера Савина', meta: '12 минут назад · Санкт-Петербург', action: { go: 'post' } },
      text: 'Три способа носить винтажный жакет — без ощущения, что вы собираетесь в офис',
      media: P.lera, attach: tags('Жакет · винтаж', 'Трикотаж', 'Прямые джинсы', 'Лоферы'),
      likes: 428, comments: 31, shares: 12, views: '4,1K', open: { go: 'post' }, discuss: { go: 'post' },
      menu: { toast: 'Скрыть · Пожаловаться' },
    }),
    ui.section({ children: [
      ui.list([ui.row({ lead: ui.leadIcon('repeat-2'), title: 'Новые образы к утру', sub: 'Публикации подписок без ожидания загрузки', activate: 'fetch|home' })]),
      ui.granted('fetch', 'Лента обновлена в 04:12 · 37 новых образов'),
    ] }),
    ui.section({ title: 'Разбор гардероба', more: { go: 'talk', label: 'Все разборы' }, children: ui.list([
      ui.row({ lead: ui.leadIcon('headphones', { accent: true }), title: 'Разобрать шкаф за один вечер', sub: 'Аня Дёмина · пауза на 12:04', go: 'talk' }),
      ui.row({ lead: ui.leadIcon('headphones'), title: 'Три пары брюк на осень', sub: '34:06 · вышел вчера', end: '<span class="ui-row-end is-value"><span class="dl is-busy"><svg><use href="#i-loader-circle"/></svg>62 %</span></span>', go: 'talk' }),
    ]) }),
    ui.post({
      author: { face: P.yulia, name: 'Юля Карпова', meta: 'час назад · Васильевский остров', action: { go: 'clip' } },
      text: 'Один яркий цвет и три спокойных сочетания к нему',
      media: P.yulia, likes: 196, comments: 14, shares: 6, open: { go: 'clip' },
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
