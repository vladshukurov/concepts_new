import { TABS, MINI } from './_tabs.mjs';

/* Проекты, кроме главного, открываются листом действий: своего экрана у каждого нет */
const MENU = 'Изменить|Удалить';

export default (ui) => ui.screen({
  id: 'projects', theme: 'vk-dark',
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Встык' }),
      ui.iconButton({ icon: 'plus', label: 'Создать событие', go: 'create', primary: true })),
    ui.videoCard({
      art: 'm4', duration: '<span data-hide-granted="photos">38 видео</span><span class="perm-hidden" data-show-granted="photos">42 видео</span>', go: 'project', className: 'sk-first',
      avatar: '<span class="ui-avatar sk-place-ava"><svg><use href="#i-map-pin"/></svg></span>',
      title: 'Выходные у озера', sub: 'Боровое · 14–16 августа · черновик собран',
    }),
    ui.section({ title: 'Недавние', meta: '4 проекта', children: ui.list([
      ui.row({ thumb: 'm5', wide: true, duration: '2:46', title: 'День рождения Леры', sub: 'Фильм готов вчера · 1080p', end: { badge: 'Готов' }, menu: MENU }),
      ui.row({ thumb: 'm3', wide: true, duration: '5:18', title: 'Финал летнего концерта', sub: 'Фильм · 4K · 612 МБ', menu: MENU }),
      ui.row({ thumb: 'm1', wide: true, duration: '4:02', title: 'Алматы, длинные выходные', sub: '91 видео · черновик собран', menu: MENU }),
      ui.row({ thumb: 'm6', wide: true, duration: '0:47', title: 'Поход на Бурабай', sub: '6 видео · импорт 62 %', menu: MENU }),
    ]) }),
    ui.section({ children: `<button class="sk-ad" data-go="ads"><span class="sk-ad-art" data-hide-granted="tracking"><svg><use href="#i-smartphone"/></svg></span><span class="sk-ad-art perm-hidden" data-show-granted="tracking"><svg><use href="#i-mic"/></svg></span><span class="ui-row-text"><strong data-hide-granted="tracking">Штатив для телефона</strong><strong class="perm-hidden" data-show-granted="tracking">Петличный микрофон</strong><span data-hide-granted="tracking">Реклама · снимать без рук</span><span class="perm-hidden" data-show-granted="tracking">Реклама · по интересам</span></span></button>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'projects', mini: MINI }),
});
