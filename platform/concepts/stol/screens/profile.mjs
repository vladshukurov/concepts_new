import { THEME, TABS } from './_shared.mjs';
import { people, own } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="st-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Спокойный темп · Алматы · объясняю правила</p>${ui.stats([['24', 'партии'], ['17', 'коробок'], ['9', 'побед']])}</div>`,
    ui.section({ title: 'Последние партии', children: ui.list([
      ui.row({ lead: ui.leadIcon('dices', { accent: true }), title: 'Городские линии · 54 очка', sub: 'Третий из четырёх · вчера', go: 'post' }),
      ui.row({ lead: ui.leadIcon('trophy'), title: 'Лесные союзы · 83 очка', sub: 'Победа · 9 сентября' }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Архив острова', sub: 'Кооператив · не успели к рассвету · 6 сентября' }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Маршруты Севера', sub: 'Второй из пяти · 3 сентября' }),
    ]) }),
    ui.section({ title: 'С кем играю', children: ui.list([
      ui.row({ lead: ui.avatar('ИЛ'), title: 'Илья Левин', sub: '14 партий вместе · объясняет правила' }),
      ui.row({ lead: ui.avatar('МО'), title: 'Маша Орлова', sub: '11 партий · собирает столы в «Полке»' }),
      ui.row({ lead: ui.avatar('ЖК'), title: 'Женя Ким', sub: '6 партий · играет дома', go: 'direct' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
