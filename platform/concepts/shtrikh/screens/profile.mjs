import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

const arts = ['sh-s2', 'sh-s1', 'sh-s4', 'sh-s3', 'sh-s6', 'sh-s5'];
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Ещё', menu: ['Поделиться', 'Пожаловаться'] }) }),
    ui.scroll([
      `<div class="sh-me">${ui.avatar(people.alina.initial, { large: true })}<h1>${people.alina.name}</h1><p class="ui-sub">Городской скетчер · линер, акварель</p>${ui.stats([['128', 'работ'], ['2,4K', 'подписчиков'], ['184', 'подписки']])}${ui.actions([ui.button({ label: 'Подписаться', toast: 'Вы подписались', primary: true }), ui.button({ label: 'Написать', variant: 'secondary', go: 'direct' })], { row: true })}</div>`,
      ui.section({ title: 'Работы', children: `<div class="sh-series">${arts.map((a, i) => `<button class="${a}" data-go="post" aria-label="Работа ${i + 1}"></button>`).join('')}</div>` }),
    ]),
  ],
});
