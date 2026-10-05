import { THEME } from './_shared.mjs';
import { people, club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Публикация' }),
    ui.scroll([
      ui.post({ author: { initial: people.alina.initial, name: people.alina.name, meta: `вчера, 21:04 · ${club.city}` }, text: 'Первый спокойный выход после перерыва: 6,4 км по набережной, средний темп 6:12. На восточном мосту лёд — лучше свернуть к велодорожке', likes: 14, comments: 9, shares: 2 }),
      ui.section({ title: 'Схема', children: [
        `<div class="ry-map"><span class="ry-river"></span><span class="ry-path"></span><span class="ry-pin ry-x10 ry-y36">С</span><span class="ry-pin ry-x58 ry-y28">!</span></div>`,
        ui.actions([ui.button({ label: 'Сохранить схему в Фото', icon: 'download', variant: 'secondary', block: true, ask: 'photosadd|post|post' })], { className: 'ry-gap' }),
        ui.denied('photosadd'),
      ] }),
      ui.section({ title: 'Шли вместе', meta: '4', children: ui.list([
        ui.row({ lead: ui.avatar(people.ilya.initial), title: people.ilya.name, sub: 'Держал темп 6:10 и отметил объезд', go: 'profile' }),
        ui.row({ lead: ui.avatar(people.dasha.initial), title: people.dasha.name, sub: 'Вернулась после паузы, 4 км', go: 'profile' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Пойти в субботу', block: true, go: 'meetup', primary: true })]) }),
      ui.comments({ count: 9, items: [
        { initial: people.roman.initial, name: people.roman.name, text: 'На мосту сегодня в 7 утра тоже скользко, у перил песок только с одной стороны', time: '22:17', likes: 6 },
        { initial: people.alina.initial, name: people.alina.name, text: 'Спасибо, в субботу поведу группу по велодорожке', time: '22:40', likes: 2, reply: true, author: true },
        { initial: people.lera.initial, name: people.lera.name, text: 'А темп 6:12 — это с остановкой у светофора или чистый?', time: 'сегодня, 8:03', likes: 1 },
        { initial: people.dasha.initial, name: people.dasha.name, text: 'Я после перерыва начинала с 4 км, к третьему выходу дошла до шести', time: 'сегодня, 9:26', liked: true, likes: 3 },
      ] }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>picker'] }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
