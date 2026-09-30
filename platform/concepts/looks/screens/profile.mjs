import { THEME, TABS, P } from './_shared.mjs';

const shots = [P.marina, P.lera, P.yulia, P.mark, P.marina, P.yulia];
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', [ui.iconButton({ icon: 'plus', label: 'Новая публикация', go: 'create' }), ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })]),
    `<div class="lk-me"><span class="lk-me-ava ${P.marina}"></span><h1>Марина Орлова</h1><p class="ui-sub">Собираю спокойный гардероб и ищу винтаж в Петербурге</p>${ui.stats([['86', 'публикаций'], ['312', 'подписчиков'], ['148', 'подписок']])}${ui.actions([ui.button({ label: 'Редактировать', variant: 'secondary', toast: 'Редактирование профиля' }), ui.button({ label: 'Поделиться', variant: 'secondary', toast: 'Ссылка на профиль скопирована' })], { row: true })}</div>`,
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('users', { accent: true }), title: 'Найти среди контактов', sub: '12 знакомых уже публикуют образы', ask: 'contacts|mates|mates' }),
      ui.row({ lead: ui.leadIcon('lock'), title: 'Сохранённое', sub: '86 образов · под замком', go: 'lock' }),
    ]) }),
    ui.section({ title: 'Публикации', children: `<div class="lk-grid">${shots.map((s, i) => `<button class="${s}" data-go="post" aria-label="Публикация ${i + 1}"></button>`).join('')}</div>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
