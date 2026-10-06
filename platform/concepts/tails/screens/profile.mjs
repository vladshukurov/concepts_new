import { THEME, TABS, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Профиль', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="tl-me"><span class="tl-me-ava ${PET.truffle}"></span><div><h2>Трюфель</h2><p>Золотистый ретривер · 2 года</p><p>С Ксенией с 2024 года</p></div></div>`,
    `<div class="tl-me-block">${ui.stats([['24', 'прогулки'], ['23', 'заметки'], ['5', 'друзей']])}${ui.actions([ui.button({ label: 'Карточка Трюфеля', variant: 'secondary', block: true, primary: true, go: 'pet' })])}</div>`,
    ui.denied('tracking'),
    ui.section({ title: 'Ближайшая прогулка', meta: 'сегодня', children: ui.list([
      ui.row({ lead: ui.leadIcon('paw-print', { accent: true }), title: 'Спокойный круг у пруда', sub: '18:40 · Лопухинский сад · с Барни', go: 'walk' }),
    ]) }),
    ui.section({ title: 'С кем гуляем', meta: '5', children: ui.list([
      ui.row({ lead: `<span class="tl-nearby-ico">${ui.icon('users')}</span>`, title: 'Найти среди контактов', sub: 'Сверка ещё не проводилась', ask: 'contacts|mates|mates' }),
      ui.row({ thumb: `${PET.barni} is-round`, title: 'Влада · Барни', sub: 'Гуляли вместе 4 мая', go: 'chat' }),
      ui.row({ thumb: `${PET.mint} is-round`, title: 'Алёна · Мята', sub: 'Гуляем по средам' }),
    ]) }),
    ui.section({ title: 'Фото Трюфеля', meta: '86', children: `<div class="tl-gallery">${Array(6).fill(PET.truffle).map((p, i) => `<button class="${p}" data-toast="Фото ${i + 1}" aria-label="Фото ${i + 1}"></button>`).join('')}</div>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
