import { THEME, TABS } from './_shared.mjs';
import { people, lamp } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'shield', label: 'Приватность', go: 'privacy' })),
    `<div class="uz-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Свет · дерево · диагностика · с апреля 2024</p>${ui.stats([['18', 'этапов'], ['126', 'подписчиков'], ['31', 'сохранено']])}${ui.actions([ui.button({ label: 'Опубликовать этап', go: 'update', primary: true }), ui.button({ label: 'Участники', variant: 'secondary', go: 'contacts' })], { row: true })}</div>`,
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'key', title: 'Каталоги деталей', value: '2 входа', go: 'credentials' }),
      ui.cell({ icon: 'shield', title: 'Приватность', go: 'privacy' }),
      ui.cell({ icon: 'user', title: 'Аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
    ] }) }),
    ui.section({ title: 'Публичная активность', children: ui.list([
      ui.row({ lead: ui.leadIcon('lamp', { accent: true }), title: `Новый этап · ${lamp.title}`, sub: 'Сегодня · 24 отметки «Полезно»', go: 'project' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
