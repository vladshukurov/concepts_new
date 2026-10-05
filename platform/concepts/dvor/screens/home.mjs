import { THEME, TABS } from './_shared.mjs';
import { house } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: house.address }), [
      ui.iconButton({ icon: 'plus', label: 'Сообщить о проблеме', go: 'problem' }),
    ]),
    ui.stories([
      { label: 'Субботник', icon: 'trees', go: 'events' },
      { label: 'Лифт', icon: 'triangle-alert', go: 'post' },
      { label: 'Хроника', icon: 'images', seen: true, go: 'chronicle' },
      { label: 'Обмен', icon: 'repeat-2', seen: true, go: 'yard' },
    ]),
    ui.denied('photos'),
    ui.post({
      author: { initial: 'УК', name: 'Управляющая компания', meta: 'вчера в 19:04 · официально' },
      text: 'Горячую воду отключат с 14 по 17 апреля — опрессовка стояка. Заявки на перерасчёт — в теме',
      likes: 34, comments: 12, shares: 9, views: 219, open: { go: 'post' }, discuss: { go: 'post' }, menu: ['Пожаловаться', 'Скрыть'],
    }),
    ui.post({
      author: { initial: 'МК', name: 'Марина, кв. 48', meta: 'сегодня в 08:12 · 3 подъезд', action: { go: 'profile' } },
      text: 'Доводчик на второй двери сорвало, бьёт по коляскам. Если кто вызывает мастера, приложите к заявке',
      likes: 8, comments: 5, shares: 2, views: 96, open: { go: 'problem' }, discuss: { go: 'chat' },
    }),
    ui.section({ title: 'Хроника двора', meta: '42 снимка за апрель', children: [
      `<div class="dv-grid">${Array.from({ length: 6 }, (_, i) => `<button class="ph" data-go="chronicle" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>`,
      ui.actions([ui.button({ label: 'Собрать хронику', icon: 'images', variant: 'secondary', block: true, ask: 'photos|chronicle|home' })], { className: 'dv-gap' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
