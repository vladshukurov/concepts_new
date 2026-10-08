import { THEME, TABS } from './_shared.mjs';
import { own, plants, plantCount, people, today, swap } from '../model.mjs';

/* Свой профиль: растения, неделя полива, записи и обмен детками — без подписчиков */
const week = (ui) => `<div class="vz-pweek">${own.days.map(([d, n, c, t]) => `<span class="vz-pday${c ? ' is-on' : ''}${t ? ' is-today' : ''}"><span>${d}</span><i>${c ? `${ui.icon('droplets')}<em>${c}</em>` : ''}</i><b>${n}</b></span>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="vz-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Шесть растений на трёх подоконниках · Казань</p>${ui.stats([[String(plantCount), 'растений'], [String(own.entries), 'записей'], [String(own.given), 'детки отданы']])}${ui.actions([ui.button({ label: 'Изменить', icon: 'pen-line', variant: 'secondary', go: 'account' }), ui.button({ label: 'Новая запись', icon: 'plus', go: 'compose' })], { row: true })}</div>`,
    ui.section({ title: 'Полив за неделю', meta: `сегодня ${today.length} на очереди`, children: [
      week(ui),
      ui.list([ui.row({ lead: ui.leadIcon('sparkles', { round: true, accent: true }), title: own.newLeaf.title, sub: `${own.newLeaf.when} · первый с прорезями`, go: plants.monstera.id }),
        ui.row({ lead: ui.leadIcon('images', { round: true }), title: 'Альбом «Октябрь» собран к утру', sub: `${plantCount} растений · по снимку на каждое` }),
      ]),
    ] }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'droplets', title: 'Полив сегодня', sub: today.map((p) => p.name).join(', '), go: 'water' }),
      ui.cell({ icon: 'trees', title: 'Подоконники', sub: `${plantCount} растений · кухня, спальня, балкон`, go: 'plants' }),
      ui.cell({ icon: 'arrow-left-right', title: 'Обмен с Ирой', sub: `${swap.give} ↔ ${swap.get}`, go: 'direct-ira' }),
    ] }) }),
    ui.entry({ icon: 'trees', title: own.newLeaf.title, meta: own.newLeaf.when, text: own.newLeaf.text, photos: own.newLeaf.photos, open: { go: plants.monstera.id }, menu: ['Изменить', 'Удалить'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
