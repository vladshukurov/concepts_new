import { THEME, TABS, PET } from './_shared.mjs';
import { own, revaccination, feeder } from '../model.mjs';

/* Профиль Трюфеля: прогулки за неделю, здоровье, кормушка и с кем гуляем */
const week = own.week.map(([d, km, h]) => `<span class="${km ? '' : 'is-next'}"><small>${km ?? ''}</small><i class="tl-bar-${h}"></i><b>${d}</b></span>`).join('');
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Профиль', `<span class="tl-head-acts">${ui.textButton({ label: 'Изменить', go: 'pet' })}${ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })}</span>`),
    `<div class="tl-me"><span class="tl-me-ava ${PET.truffle}"></span><div><h2>Трюфель</h2><p>Золотистый ретривер · 2 года</p><p>С Ксенией с 2024 года</p></div></div>`,
    `<div class="tl-me-block">${ui.stats([[String(own.stats.walks), 'прогулки'], [String(own.stats.notes), 'заметки'], [String(own.stats.friends), 'друзей']])}</div>`,
    ui.denied('tracking'),
    ui.section({ title: 'Эта неделя', meta: `${own.weekKm} км · 5 прогулок`, children: [
      `<div class="tl-week" aria-label="Километры прогулок по дням">${week}</div>`,
      ui.list([ui.row({ lead: ui.leadIcon('trophy', { round: true, accent: true }), title: 'Дошёл до дальнего пруда', sub: `${own.walk.title} · ${own.walk.dur} · вчера`, go: 'home' })]),
    ] }),
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('paw-print', { accent: true }), title: 'Карточка Трюфеля', sub: 'Вес, чип и наблюдения', go: 'pet' }),
      ui.row({ lead: ui.leadIcon('stethoscope'), title: 'Здоровье', sub: `${revaccination.title} через ${revaccination.left}`, go: 'vaccine' }),
      ui.row({ lead: ui.leadIcon('utensils'), title: feeder.name, sub: `Следующая порция в 13:00 · ${feeder.meals[1][1]}`, go: 'feeder' }),
    ]) }),
    ui.section({ title: 'С кем гуляем', meta: String(own.stats.friends), children: ui.list([
      ui.row({ lead: `<span class="tl-nearby-ico">${ui.icon('users')}</span>`, title: 'Найти среди контактов', sub: 'Сверка ещё не проводилась', ask: 'contacts|mates|mates' }),
      ui.row({ thumb: `${PET.barni} is-round`, title: 'Влада · Барни', sub: 'Сегодня в 18:40 у пруда', go: 'chat' }),
      ui.row({ thumb: `${PET.mint} is-round`, title: 'Алёна · Мята', sub: 'Гуляем по средам' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
