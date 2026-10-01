import { THEME, TABS } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="st-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Спокойный темп · Алматы · в «Столе» с апреля</p>${ui.stats([['38', 'подписчиков'], ['24', 'партии'], ['17', 'игр']])}${ui.actions([ui.button({ label: 'Собрать стол', go: 'compose', primary: true }), ui.button({ label: 'Поделиться', variant: 'secondary', toast: 'Ссылка на профиль скопирована' })], { row: true })}</div>`,
    ui.section({ title: 'Последние партии', children: ui.list([
      ui.row({ lead: ui.leadIcon('trophy', { accent: true }), title: 'Лесные союзы · 71 очко', sub: 'Вторая из четырёх · неделю назад', go: 'score' }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Городские линии · 54 очка', sub: 'Третий из четырёх · 9 сентября', go: 'score' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
