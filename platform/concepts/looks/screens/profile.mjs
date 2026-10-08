import { own, swap } from '../model.mjs';
import { THEME, TABS, P } from './_shared.mjs';

/* Профиль — свой гардероб: неделя в образах, что висит без дела (ночной пересчёт), сохранённое под Face ID, все образы */
const shots = Array.from({ length: 6 }, (_, i) => (i === 0 ? P.marina : 'ph'));
const logged = own.week.filter(([, , on]) => on).length;
const week = `<div class="lk-week">${own.week.map(([d, n, on, today]) => `<span class="${['lk-day', on && 'is-on', today && 'is-today'].filter(Boolean).join(' ')}"><span>${d}</span><i class="${on ? (today ? P.marina : 'ph') : ''}"></i><b>${n}</b></span>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', [ui.iconButton({ icon: 'plus', label: 'Новый образ', go: 'create' }), ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })]),
    `<div class="lk-me"><span class="lk-me-ava ${P.marina}"></span><h1>Марина Орлова</h1><p class="ui-sub">Собираю спокойный гардероб и ищу винтаж в Петербурге</p>${ui.stats([['86', 'образов'], ['143', 'вещи'], ['7', 'свопов']])}${ui.actions([ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', go: 'account' }), ui.button({ label: 'Отложить на своп', icon: 'repeat-2', go: 'swap' })], { row: true })}</div>`,
    ui.section({ title: 'Эта неделя', meta: `${logged} образов из 6 дней`, children: [
      week,
      ui.list([ui.row({ lead: ui.leadIcon('trophy', { round: true, accent: true }), title: `${own.today.title}`, sub: `${own.today.worn} · в мае ${own.month.looks} образов из ${own.month.items} вещей` })]),
    ] }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'repeat-2', title: 'Свопы', sub: `${own.swapItem.count} вещи на свопе · ${swap.place}`, go: 'swap' }),
      ui.cell({ icon: 'scan-face', title: 'Сохранённое', sub: `Мерки, ${own.saved.looks} образов и ${own.saved.drafts} черновика`, ask: 'faceid|lock|profile' }),
      ui.cell({ icon: 'audio-lines', title: 'Разбор голосом', sub: 'Разбор шкафа к лету · осталось 15:15', go: 'talk' }),
    ] }) }),
    ui.section({ title: `Висят без дела · ${own.idle.count}`, meta: own.idle.trace, children: [
      ui.list(own.idle.items.map(([t, s]) => ui.row({ lead: ui.leadIcon('shirt'), title: t, sub: s, end: { value: 'На своп', toast: `${t} — отложено на своп`, label: `${t} на своп` } }))),
      ui.foot(`Не надевали ${own.idle.days} дней и дольше`, "lk-idle-foot"),
    ] }),
    ui.section({ title: 'Мои образы', meta: '86', children: `<div class="lk-grid">${shots.map((s, i) => `<button class="${s}" data-go="${i ? `look${i + 1}` : 'post'}" aria-label="Образ ${i + 1}"></button>`).join('')}</div>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
