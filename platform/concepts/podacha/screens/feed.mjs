import { THEME, TABS, dish } from './_shared.mjs';
import { own, cookalong } from '../model.mjs';

/* Свой дневник готовки: всё на главной приготовила и записала сама Саша. Чужих
   публикаций и подписок нет — с людьми готовят вместе по звонку и пишут в чат */
export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Вкусно' }), [
      ui.iconButton({ icon: 'search', label: 'Поиск по дневнику', go: 'discover' }),
      ui.iconButton({ icon: 'plus', label: 'Новая запись', menu: ['Снять блюдо>camera', 'Записать блюдо>compose'] }),
    ]),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Блюда', filter: 'dish' },
      { label: 'Рецепты', filter: 'recipe' },
      { label: 'Покупки', filter: 'list' },
    ]) }),
    ui.entry({
      icon: 'chef-hat', title: `${cookalong.title} · с Аминой`, meta: `сегодня в ${cookalong.start} · готовим вместе`, status: { label: 'идёт', accent: true },
      text: `Шаг ${cookalong.step} из ${cookalong.steps}: обжарить лук до прозрачности`, actions: [{ label: 'Вернуться к шагам', icon: 'list-ordered', go: 'cookalong' }], tags: ['recipe'],
    }),
    ui.entry({ icon: 'utensils', title: own.dish.title, meta: `${own.dish.when} · готовила ${own.dish.times} раз`, text: own.dish.text, photos: own.dish.photos, open: { go: 'post' }, menu: ['Изменить', 'Удалить'], tags: ['dish'] }),
    ui.entry({ icon: 'mic', title: own.voice.title, meta: `${own.voice.when} · заметка у плиты`, voice: { dur: own.voice.dur }, tags: ['recipe'] }),
    ui.entry({
      icon: 'shopping-basket', title: own.list.title, meta: `осталось ${own.list.left} из ${own.list.left + own.list.done}`,
      attach: ui.checklist(own.list.items.map((t) => ({ title: t }))), tags: ['list'],
    }),
    ui.entry({
      icon: 'megaphone', title: 'Лавка «Грядка» · сезонные овощи', meta: 'доставка по городу · реклама',
      text: 'Печёный перец и тыква по утрам, доставка от 3 000 ₸', actions: [{ label: 'Почему эта реклама', icon: 'sliders-horizontal', go: 'privacy' }],
    }),
    ui.entry({ icon: 'book-open', title: own.recipe.title, meta: `${own.recipe.when} · ${own.recipe.change}`, tags: ['recipe'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
