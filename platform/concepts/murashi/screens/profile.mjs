import { THEME, TABS, MINI, ico, lead } from './_shared.mjs';
import { me, totals, week, sounds, collections, soundsN } from '../model.mjs';

/* Профиль: свои звуки и места, засыпания недели, вход в настройки */
const bars = week.map(([d, m]) => `<span class="${m === null ? 'is-next' : d === 'чт' ? 'is-now' : ''}"><small>${m ?? ''}</small><i class="ms-d${m || 0}"></i><b>${d}</b></span>`).join('');
const F = sounds.dozhd;
const P = sounds.pekarnya;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Профиль', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="ms-me">${ui.avatar(me.initial, { large: true })}<span><strong>${me.name}</strong><span>записываю звуки с июня</span></span></div>`,
    ui.stats([[totals.sounds, 'звуков'], [totals.places, 'мест'], [totals.hours, 'всего']]),
    ui.section({ title: 'Засыпала под свои звуки', meta: 'минут за неделю', children: [
      `<div class="ms-days" aria-label="Минуты таймера сна по вечерам недели">${bars}</div>`,
      ui.list([
        ui.row({ lead: lead(F), title: F.title, sub: 'чаще всего на ночь · 4 вечера подряд', go: F.id }),
        ui.row({ lead: lead(P), title: P.title, sub: `последняя запись · ${P.date}, ${P.time}`, go: P.id }),
      ]),
    ] }),
    ui.section({ title: 'Моё', children: ui.list([
      ui.row({ lead: ico('layers'), title: 'Коллекции', sub: `${Object.keys(collections).length} подборки и список на зиму`, go: 'collections' }),
      ui.row({ lead: ico('moon', true), title: 'Засыпать', sub: collections.son.sub, go: 'son' }),
      ui.row({ lead: ico('map-pin'), title: 'Дача в Малаховке', sub: `больше всего записей · ${soundsN(2)}`, go: 'dacha' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile', mini: MINI }),
});
