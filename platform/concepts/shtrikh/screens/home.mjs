import { THEME, TABS, tools } from './_shared.mjs';
import { people, places } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Штрих', glyph: 'pen-line' }), [
      ui.iconButton({ icon: 'search', label: 'Поиск мест и авторов', go: 'places' }),
      ui.iconButton({ icon: 'plus', label: 'Новая зарисовка', go: 'compose' }),
    ]),
    ui.composerPrompt({ initial: people.me.initial, placeholder: 'Что заметили в городе?', go: 'compose', primary: true, trailing: ui.iconButton({ icon: 'camera', label: 'Снять рисунок', go: 'compose' }) }),
    ui.stories([
      { label: 'Алина', face: 'sh-s2', go: 'post' },
      { label: 'Базар', face: places.bazar.art, go: 'series' },
      { label: 'Миша', face: 'sh-s6', seen: true, go: 'profile' },
      { label: 'Мост', face: places.terrenkur.art, seen: true, go: 'series' },
    ]),
    ui.post({
      author: { initial: people.alina.initial, name: people.alina.name, meta: `12 минут назад · ${places.panfilova.name}`, action: { go: 'profile' } },
      text: 'Поймала тень от липы до того, как включили фонари',
      media: 'sh-s2', attach: tools('Линер 0.3', 'Бумага 160 г', '20 минут'),
      likes: 146, comments: 18, shares: 7, views: '1,2K', open: { go: 'post' }, discuss: { go: 'post' }, menu: { toast: 'Скрыть · Пожаловаться' },
    }),
    ui.section({ title: 'Серия места', more: { go: 'series', label: 'Открыть серию' }, children: ui.list([
      ui.row({ thumb: places.panfilova.art, title: places.panfilova.series, sub: `${places.panfilova.name} · ${places.panfilova.works} работ · ${places.panfilova.authors} авторов`, go: 'series' }),
    ]) }),
    ui.post({
      author: { initial: people.misha.initial, name: people.misha.name, meta: `сегодня в 09:40 · ${places.bazar.name}`, action: { go: 'profile' } },
      text: 'Пять минут на прилавок с яблоками, пока продавец не заметил',
      media: places.bazar.art, attach: tools('Карандаш', '5 минут'),
      likes: 88, comments: 9, shares: 3, open: { go: 'post' },
    }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
