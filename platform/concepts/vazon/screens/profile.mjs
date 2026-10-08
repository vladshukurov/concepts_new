import { THEME, TABS } from './_shared.mjs';
import { own, plants, plantCount, people } from '../model.mjs';

/* Свой профиль: растения, записи и отданные детки — без подписчиков */
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="vz-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Комнатные растения · Казань</p>${ui.stats([[String(plantCount), 'растений'], [String(own.entries), 'записей'], [String(own.given), 'детки отданы']])}</div>`,
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('trees', { accent: true }), title: 'Подоконники', sub: `${plantCount} растений · 3 полить сегодня`, go: 'plants' }),
      ui.row({ lead: ui.leadIcon('arrow-left-right'), title: 'Обмен с Ирой', sub: 'Детка хлорофитума ↔ черенок хойи', go: 'direct-ira' }),
      ui.row({ lead: ui.leadIcon('images'), title: 'Альбом «Октябрь» собран к утру', sub: `${plantCount} растений · по снимку на каждое` }),
    ]) }),
    ui.entry({ icon: 'trees', title: own.newLeaf.title, meta: own.newLeaf.when, text: own.newLeaf.text, photos: own.newLeaf.photos, open: { go: plants.monstera.id }, menu: ['Изменить', 'Удалить'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
