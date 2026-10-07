import { own } from '../model.mjs';
import { THEME, TABS, P } from './_shared.mjs';

/* Профиль — свой гардероб: что висит без дела (ночной пересчёт), сохранённое под Face ID, все образы */
const shots = Array.from({ length: 6 }, (_, i) => (i === 0 ? P.marina : 'ph'));
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', [ui.iconButton({ icon: 'plus', label: 'Новый образ', go: 'create' }), ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })]),
    `<div class="lk-me"><span class="lk-me-ava ${P.marina}"></span><h1>Марина Орлова</h1><p class="ui-sub">Собираю спокойный гардероб и ищу винтаж в Петербурге</p>${ui.stats([['86', 'образов'], ['143', 'вещи'], ['7', 'свопов']])}${ui.actions([ui.button({ label: 'Редактировать', variant: 'secondary', go: 'account' }), ui.button({ label: 'Отложить на своп', variant: 'secondary', go: 'swap' })], { row: true })}</div>`,
    ui.section({ title: `Висят без дела · ${own.idle.count}`, meta: own.idle.trace, children: [
      ui.list(own.idle.items.map(([t, s]) => ui.row({ lead: ui.leadIcon('shirt'), title: t, sub: s, end: { value: 'На своп', toast: `${t} — отложено на своп`, label: `${t} на своп` } }))),
      ui.foot(`Не надевали ${own.idle.days} дней и дольше`, "lk-idle-foot"),
    ] }),
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('scan-face', { accent: true }), title: 'Сохранённое', sub: `Мерки, ${own.saved.looks} образов и ${own.saved.drafts} черновика`, ask: 'faceid|lock|profile' }),
    ]) }),
    ui.section({ title: 'Мои образы', meta: '86', children: `<div class="lk-grid">${shots.map((s, i) => `<button class="${s}" data-go="post" aria-label="Образ ${i + 1}"></button>`).join('')}</div>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
