import { THEME, TABS } from './_shared.mjs';
import { people, own } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="st-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Спокойный темп · Алматы · объясняю правила</p>${ui.stats([['24', 'партии'], ['17', 'игр в коллекции'], ['9', 'побед']])}</div>`,
    ui.section({ title: 'Последние партии', children: ui.list([
      ui.row({ lead: ui.leadIcon('trophy', { accent: true }), title: 'Лесные союзы · 71 очко', sub: 'Вторая из четырёх · неделю назад', go: 'score' }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Городские линии · 54 очка', sub: 'Третий из четырёх · 9 сентября', go: 'score' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
