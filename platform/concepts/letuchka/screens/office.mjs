import { THEME, TABS } from './_shared.mjs';
import { me, studio, standup, updates, myUpdate, rooms, guests, now } from '../model.mjs';

/* Летучка без созвона: до 10:30 каждый пишет «Вчера · Сегодня · Мешает».
   Блокеры сверху, своя форма — «Отправить» кладёт вашу карточку в список, счётчик 11 → 12 */
const card = (ui, { p, at, y, t, b, where }, className = '') =>
  `<article class="lt-upd${b ? ' is-blocked' : ''}${className ? ` ${className}` : ''}">${ui.avatar(p.initial)}<div><header><strong>${p.name}</strong><span>${at}${where ? ` · ${where}` : ''}</span></header><p><b>Вчера</b>${y}</p><p><b>Сегодня</b>${t}</p><p class="lt-upd-b"><b>Мешает</b>${b || 'нет'}</p></div></article>`;

const field = (label, value) =>
  `<label class="lt-line"><b>${label}</b><input value="${value}" aria-label="${label}"/></label>`;

const w = updates.written;
export default (ui) => ui.screen({
  id: 'office', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Летучка', ui.iconButton({ icon: 'timer', label: 'Режим летучки', go: 'standup', primary: true })),
    ui.section({ children: [
      `<div class="lt-due" role="status"><span><b class="lt-n0">${w}</b><b class="lt-n1">${w + 1}</b> из ${updates.total} написали</span><small>${now.date[0].toUpperCase() + now.date.slice(1)} · апдейты до ${standup.time}, потом ${standup.room} переговорка</small><i class="lt-due-bar"><i></i></i></div>`,
      ui.list([ui.reminder({ title: `Напомнить написать апдейт в ${standup.remind}`, titleGranted: `Напомним в ${standup.remind} по будням, если апдейта ещё нет`, sub: 'за полчаса до летучки · с блокерами команды', here: 'office' })]),
    ] }),
    ui.section({ title: 'Мешает', meta: String(updates.blockers.length), className: 'lt-blockers', children: ui.list(updates.blockers.map((u) => ui.row({
      lead: ui.leadIcon('triangle-alert', { round: true }), title: `Мешает: ${u.b} — ${u.p.name.split(' ')[0]}`, sub: `разберём первым · нужен ${u.who}`, wrap: true,
    }))) }),
    ui.section({ title: 'Мой апдейт', meta: '<span class="lt-a">черновик</span><span class="lt-b">отправлен в 10:05</span>', className: 'lt-form', children: [
      `<div class="lt-lines">${field('Вчера', myUpdate.y)}${field('Сегодня', myUpdate.t)}${field('Мешает', myUpdate.b)}</div>`,
      `<div data-hide-granted="wifiinfo">${ui.list([ui.row({ lead: ui.leadIcon('wifi', { round: true }), title: 'Отметить, что я в офисе', sub: `по сети офиса · ${studio.office}`, activate: 'wifiinfo|office' })])}</div>`,
      ui.list([ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Сегодня в офисе · ${studio.officeSsid}`, sub: `с 9:52 · ${studio.floor}`, shownAfter: 'wifiinfo' })]),
      `<div class="ui-actions"><button class="ui-btn is-primary is-block lt-send" data-toggle="on" aria-pressed="false" aria-label="Отправить апдейт">${ui.icon('send')}<span class="lt-a">Отправить</span><span class="lt-b">Изменить апдейт</span></button></div>`,
    ] }),
    ui.section({ title: 'Апдейты команды', meta: `<span class="lt-n0">${w}</span><span class="lt-n1">${w + 1}</span> из ${updates.total}`, children: [
      ui.list([ui.row({ lead: ui.leadIcon('history', { round: true }), title: `Апдейты команды обновились в ${updates.synced}`, wrap: true, sub: `последним написал ${updates.last}` })]),
      `<div class="lt-upds">${card(ui, { p: me, at: `10:05<span class="perm-hidden" data-show-granted="wifiinfo"> · в офисе, ${studio.officeSsid}</span>`, y: myUpdate.y, t: myUpdate.t, b: '' }, 'lt-mine')}${updates.posted.map((u) => card(ui, u)).join('')}</div>`,
      ui.list([ui.row({ lead: ui.leadIcon('clock', { round: true }), title: `Не написали · ${updates.total - w}`, sub: updates.missing })]),
    ] }),
    ui.section({ title: 'Вчерашняя летучка', children: ui.list([
      ui.row({ lead: ui.leadIcon('headphones', { round: true, accent: true }), title: 'Запись летучки', sub: `${standup.yesterday.label} · ${standup.yesterday.dur} · не были ${standup.yesterday.missed} из ${updates.total}`, go: 'recap' }),
    ]) }),
    ui.section({ title: 'Офис', children: ui.list([
      ui.row({ lead: ui.leadIcon('presentation', { round: true }), title: 'Переговорки', sub: `${rooms.big.name}: ${rooms.big.items[0][0]} летучка · ${rooms.small.name}: ${rooms.small.items[0][0]} собеседование`, go: 'rooms' }),
      ui.row({ lead: ui.leadIcon('message-circle', { round: true }), title: 'Гости дня', sub: `${guests.length} гостя · пропуска и гостевой Wi‑Fi`, go: 'guests' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'office' }),
});
