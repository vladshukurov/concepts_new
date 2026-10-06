import { THEME, TABS } from './_shared.mjs';
import { own } from '../model.mjs';

/* Свой профиль: что готовила, свои рецепты и ужины вместе — без подписчиков */
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="pd-me">${ui.avatar('СЛ', { large: true })}<h1>Саша Левина</h1><p class="ui-sub">Готовлю дома · Алматы</p>${ui.stats([[String(own.saved.dishes), 'блюда'], [String(own.saved.recipes), 'рецептов'], [String(own.saved.together), 'ужинов вместе']])}</div>`,
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('users', { accent: true }), title: 'Знакомые', sub: 'С кем готовим вместе · 3', go: 'following' }),
      ui.row({ lead: ui.leadIcon('book-open'), title: 'Мои рецепты', sub: `${own.saved.recipes} рецептов · 4 с заменами`, go: 'recipes' }),
    ]) }),
    ui.entry({ icon: 'utensils', title: own.dish.title, meta: own.dish.when, text: own.dish.text, photos: own.dish.photos, open: { go: 'post' }, menu: ['Изменить', 'Удалить'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
