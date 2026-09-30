import { THEME, TABS, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'swap', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Свопы', ui.iconButton({ icon: 'calendar-plus', label: 'Добавить в Календарь', sr: 'Добавить в Календарь', ask: 'calendar|swap|swap' })),
    ui.section({ children: [
      `<div class="lk-swap"><small>Суббота, 24 мая · 14:00–19:00</small><strong>Своп в Новой Голландии</strong><span>Двор Бутылки, второй этаж · вход свободный</span></div>`,
      ui.granted('calendar', 'Своп в Календаре · напомним за час'),
      ui.denied('calendar', 'Дата остаётся в карточке свопа и в напоминании приложения'),
    ] }),
    ui.section({ title: 'Ваша вещь', children: [
      ui.list([ui.row({ thumb: P.marina, title: 'Шерстяной жакет, 46', sub: 'Лера проверит и подтвердит приём до 13:20', subWrap: true })]),
      ui.actions([
        ui.button({ label: 'Ждать результат', block: true, activate: 'commnotif|swap', primary: true }),
        ui.button({ label: 'Показать жакет ведущей', icon: 'message-circle', variant: 'secondary', block: true, go: 'chat' }),
      ]),
      ui.granted('commnotif', 'Лера напишет, как только проверит жакет'),
      ui.denied('commnotif', 'Результат появится в карточке свопа'),
    ] }),
    ui.section({ title: 'На месте', children: ui.list([
      ui.row({ lead: ui.leadIcon('map-pin', { accent: true }), title: 'Отметиться на свопе', sub: 'После входа во двор Бутылки', go: 'checkin' }),
      ui.row({ lead: ui.leadIcon('wifi'), title: 'Сеть площадки', sub: 'Код на стойке у входа', go: 'netqr' }),
    ]) }),
    ui.section({ title: 'Идут', meta: '18', children: ui.list([
      ui.row({ thumb: `${P.lera} is-round`, title: 'Лера Савина', sub: 'Несёт 4 вещи, будет к 15:00', go: 'chat' }),
      ui.row({ thumb: `${P.yulia} is-round`, title: 'Юля Карпова', sub: 'Записалась вчера вечером', go: 'clip' }),
      ui.row({ thumb: `${P.mark} is-round`, title: 'Марк Зотов', sub: 'Уезжает в 16:20', go: 'post' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'swap' }),
});
