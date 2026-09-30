import { THEME, TABS, dish } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="pd-me">${ui.avatar('СЛ', { large: true })}<h1>Саша Левина</h1><p class="ui-sub">Готовлю дома · Алматы</p>${ui.stats([['42', 'публикации'], ['218', 'подписчиков'], ['27', 'проверено']])}${ui.actions([ui.button({ label: 'Опубликовать', go: 'compose', primary: true }), ui.button({ label: 'Пригласить', variant: 'secondary', go: 'invite' })], { row: true })}</div>`,
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('users', { accent: true }), title: 'Подписки', sub: '31 автор · 6 новых блюд сегодня', go: 'following' }),
      ui.row({ lead: ui.leadIcon('bookmark'), title: 'Мои проверки', sub: '27 блюд с результатом', go: 'recipes' }),
    ]) }),
    ui.post({
      author: { initial: 'СЛ', name: 'Саша Левина', meta: 'вчера, 18:40', action: { go: 'profile' } },
      text: 'Пирог с грушей на цельнозерновой муке. Сахара вдвое меньше, результат всё равно мягкий',
      media: 'ph', attach: dish(ui, 'Грушевый пирог', '55 минут · повторили 6 раз'),
      likes: 64, comments: 7, shares: 3, open: { go: 'post' }, menu: { toast: 'Изменить · Удалить · Скопировать ссылку' },
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
