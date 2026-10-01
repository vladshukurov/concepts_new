import { THEME, TABS, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Профиль', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="tl-me"><span class="tl-me-ava ${PET.barni}"></span><div><h2>Барни</h2><p>Лабрадор-ретривер · 4 года</p><p>С Владой с 2022 года</p></div></div>`,
    `<div class="tl-me-block">${ui.stats([['312', 'друзей'], ['86', 'публикаций'], ['24', 'прогулки']])}${ui.actions([ui.button({ label: 'Редактировать', variant: 'secondary', block: true, primary: true, toast: 'Редактирование профиля Барни' })])}</div>`,
    ui.denied('tracking', 'Реклама остаётся, но без подбора'),
    ui.section({ title: 'Ближайшая прогулка', meta: 'сегодня', children: ui.list([
      ui.row({ thumb: PET.truffle, title: 'Спокойный круг у пруда', sub: '18:40 · Лопухинский сад', go: 'walk' }),
    ]) }),
    ui.section({ title: 'Друзья', meta: '312', children: ui.list([
      ui.row({ lead: `<span class="tl-nearby-ico">${ui.icon('users')}</span>`, title: 'Найти среди контактов', sub: 'Сверка ещё не проводилась', ask: 'contacts|mates|mates' }),
      ui.row({ thumb: `${PET.truffle} is-round`, title: 'Ксения · Трюфель', sub: 'Гуляли вместе 4 мая', end: { value: 'взаимно' }, go: 'pet' }),
      ui.row({ thumb: `${PET.mint} is-round`, title: 'Алёна · Мята', sub: 'Подписаны с марта', go: 'pet' }),
    ]) }),
    ui.section({ title: 'Публикации', meta: '86', children: `<div class="tl-gallery">${[PET.barni, PET.truffle, PET.barni, PET.loki, PET.barni, PET.mint].map((p, i) => `<button class="${p}" data-toast="Публикация ${i + 1}" aria-label="Публикация ${i + 1}"></button>`).join('')}</div>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
