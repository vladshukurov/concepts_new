import { THEME, TABS, P } from './_shared.mjs';
import { swap, item, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'swap', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Свопы', ui.iconButton({ icon: 'calendar-plus', label: 'Добавить в Календарь', sr: 'Добавить в Календарь', ask: 'calendar|swap|swap' })),
    ui.section({ children: [
      `<div class="lk-swap"><small>Сегодня · ${swap.hours} · идёт</small><strong>${swap.title}</strong><span>${swap.where} · вход свободный</span></div>`,
      ui.denied('calendar'),
      ui.list([ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: 'Своп в Календаре', sub: 'Напомним в 9:00 · перенос подхватится сам', shownAfter: 'calendar' })]),
    ] }),
    ui.section({ title: 'Жакет на проверке', children: [
      ui.list([ui.row({ thumb: P.marina, title: item.title, sub: `${item.host.first} проверит и подтвердит приём до ${item.acceptBy}`, subWrap: true })]),
      ui.actions([
        ui.button({ label: 'Сообщить, когда примут', icon: 'bell', block: true, activate: 'commnotif|chat', primary: true }),
        ui.button({ label: `Показать ${item.short} ведущей`, icon: 'message-circle', variant: 'secondary', block: true, go: 'chat' }),
      ]),
      ui.denied('commnotif'),
    ] }),
    ui.section({ title: 'На месте', children: ui.list([
      ui.row({ lead: ui.leadIcon('map-pin', { accent: true }), title: 'Отметиться на свопе', sub: 'После входа во двор Бутылки', go: 'checkin' }),
      ui.row({ lead: ui.leadIcon('wifi'), title: 'Сеть площадки', sub: 'Код на стойке у входа', go: 'netqr' }),
    ]) }),
    ui.section({ title: 'Идут', meta: String(swap.going), children: ui.list([
      ui.row({ thumb: `${P.lera} is-round`, title: people.lera.name, sub: 'Ведёт своп · принесла 4 вещи', go: 'chat' }),
      ui.row({ thumb: `${P.yulia} is-round`, title: people.yulia.name, sub: 'Отметился в 9:35', go: 'chat' }),
      ui.row({ thumb: `${P.mark} is-round`, title: people.mark.name, sub: 'Отметился в 9:31 · принёс два пальто', go: 'chat' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'swap' }),
});
