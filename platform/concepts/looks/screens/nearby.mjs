import { THEME, TABS, P } from './_shared.mjs';
import { swap } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'nearby', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Рядом', ui.iconButton({ icon: 'search', label: 'Поиск событий', toast: 'Поиск событий и авторов' })),
    ui.denied('location'),
    ui.section({ title: 'Свопы и встречи', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: '23' }), title: swap.title, sub: `Идёт до ${swap.hours.split('–')[1]} · 2,4 км`, go: 'swap' }),
      ui.row({ lead: ui.leadIcon('', { text: '24' }), title: 'Барахолка на Ваське', sub: 'Воскресенье, 12:00 · 5,1 км', go: 'swap' }),
      ui.row({ lead: ui.leadIcon('', { text: '28' }), title: 'Разбор гардероба на Рубинштейна', sub: '19:30 · 1,2 км', go: 'talk' }),
    ]) }),
    ui.section({ title: 'Авторы рядом', meta: '24', children: ui.list([
      ui.row({ thumb: `${P.lera} is-round`, title: 'Лера Савина', sub: 'Петроградская · 18 общих', end: { value: 'подписаны' }, go: 'post' }),
      ui.row({ thumb: `${P.yulia} is-round`, title: 'Юля Карпова', sub: 'Васильевский · 12 общих', end: { value: 'Подписаться', toast: 'Вы подписались на Юлю', label: 'Подписаться на Юлю' } }),
      ui.row({ thumb: `${P.mark} is-round`, title: 'Марк Зотов', sub: 'Коломна · 9 общих', end: { value: 'Подписаться', toast: 'Вы подписались на Марка', label: 'Подписаться на Марка' } }),
    ]) }),
    ui.section({ title: 'Что носят в районе', children: [
      ui.list([ui.row({ thumb: P.marina, title: 'Петроградская сторона', sub: 'Спокойные фактуры и длинные пальто · 84 публикации', go: 'clip', primary: true })]),
      ui.actions([ui.button({ label: 'Смотреть подборку', variant: 'secondary', block: true, go: 'clip' })], { className: 'lk-gap' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'nearby' }),
});
