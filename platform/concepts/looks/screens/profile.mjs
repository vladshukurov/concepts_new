import { own } from '../model.mjs';
import { THEME, TABS, P } from './_shared.mjs';

const shots = Array.from({ length: 6 }, (_, i) => (i === 0 ? P.marina : 'ph'));
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', [ui.iconButton({ icon: 'plus', label: 'Новый образ', go: 'create' }), ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })]),
    `<div class="lk-me"><span class="lk-me-ava ${P.marina}"></span><h1>Марина Орлова</h1><p class="ui-sub">Собираю спокойный гардероб и ищу винтаж в Петербурге</p>${ui.stats([['86', 'образов'], ['143', 'вещи'], ['7', 'свопов']])}${ui.actions([ui.button({ label: 'Редактировать', variant: 'secondary', go: 'account' }), ui.button({ label: 'Отложить на своп', variant: 'secondary', go: 'swap' })], { row: true })}</div>`,
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('users', { accent: true }), title: 'Найти среди контактов', sub: 'Кто из знакомых ходит на свопы', ask: 'contacts|mates|mates' }),
      ui.row({ lead: ui.leadIcon('lock'), title: 'Сохранённое', sub: `${own.saved.looks} образов и ${own.saved.drafts} черновика`, go: 'lock' }),
    ]) }),
    ui.section({ title: 'Мои образы', meta: '86', children: `<div class="lk-grid">${shots.map((s, i) => `<button class="${s}" data-go="post" aria-label="Образ ${i + 1}"></button>`).join('')}</div>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
