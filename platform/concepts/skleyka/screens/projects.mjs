import { TABS } from './_tabs.mjs';

export default (ui) => ui.screen({
  id: 'projects', theme: 'vk-dark',
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Склейка', glyph: 'clapperboard' }),
      ui.iconButton({ icon: 'plus', label: 'Создать событие', sr: 'Создать событие', go: 'create', primary: true })),
    ui.videoCard({
      art: 'm4', duration: '38 видео', progressClass: 'is-58', go: 'project', className: 'sk-first',
      avatar: '<span class="ui-avatar sk-place-ava"><svg><use href="#i-map-pin"/></svg></span>',
      title: 'Выходные у озера', sub: 'Боровое · 16–18 августа · собрано 58 %',
    }),
    ui.section({ title: 'Недавние', meta: '4 проекта', children: ui.list([
      ui.row({ thumb: 'm5', wide: true, duration: '2:46', title: 'День рождения Леры', sub: 'Черновик · вчера', end: { badge: 'Готов' }, go: 'draft' }),
      ui.row({ thumb: 'm3', wide: true, duration: '5:18', title: 'Финал летнего концерта', sub: 'Фильм · 4K · 612 МБ', go: 'viewer' }),
      ui.row({ thumb: 'm1', wide: true, duration: '4:02', title: 'Алматы, длинные выходные', sub: '91 видео · ждём 3 ролика', go: 'project' }),
      ui.row({ thumb: 'm6', wide: true, duration: '0:47', title: 'Поход на Бурабай', sub: '6 видео · импорт 62 %', go: 'project' }),
    ]) }),
    ui.section({ children: `<button class="sk-ad" data-go="ads"><span class="sk-ad-art ph"></span><span class="ui-row-text"><strong>Карты памяти до 1 ТБ</strong><span>Реклама · Настроить показ</span></span></button>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'projects' }),
});
