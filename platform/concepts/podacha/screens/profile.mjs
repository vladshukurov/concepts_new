import { THEME, TABS } from './_shared.mjs';
import { own, people, cookalong } from '../model.mjs';

/* Свой профиль: неделя у плиты, что готовила, свои рецепты и ужины вместе — без подписчиков */
const mark = { done: 'check', now: 'chef-hat', plan: 'calendar' };
const week = (ui) => `<div class="pd-week">${own.week.map(([d, n, st]) => `<span class="pd-day${st ? ` is-${st}` : ''}"><span>${d}</span><i>${st ? `${ui.icon(mark[st])}` : ''}</i><b>${n}</b></span>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="pd-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Готовлю дома по выходным и с друзьями · Алматы</p>${ui.stats([[String(own.saved.dishes), 'блюда'], [String(own.saved.recipes), 'рецептов'], [String(own.saved.together), 'ужинов вместе']])}${ui.actions([ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', go: 'account' }), ui.button({ label: 'Записать блюдо', icon: 'plus', go: 'compose' })], { row: true })}</div>`,
    ui.section({ title: 'Эта неделя', meta: `в сентябре ${own.month.dishes} блюд`, children: [
      week(ui),
      ui.list([ui.row({ lead: ui.leadIcon('trophy', { round: true, accent: true }), title: `${own.dish.title} — ${own.dish.times}-й раз`, sub: `${own.dish.when} · сахара вдвое меньше` })]),
    ] }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'book-open', title: 'Рецепты', sub: `${own.saved.recipes} своих · 4 с заменами`, go: 'recipes' }),
      ui.cell({ icon: 'chef-hat', title: 'Готовим', sub: `${cookalong.title} · идёт шаг ${cookalong.step} из ${cookalong.steps}`, go: 'cookings' }),
      ui.cell({ icon: 'users', title: 'Знакомые', sub: 'С кем готовим вместе · 3', go: 'following' }),
    ] }) }),
    ui.entry({ icon: 'utensils', title: own.dish.title, meta: own.dish.when, text: own.dish.text, photos: own.dish.photos, open: { go: 'post' }, menu: ['Изменить', 'Удалить'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
