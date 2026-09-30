import { THEME, P, tags } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Публикация', trailing: ui.iconButton({ icon: 'share', label: 'Поделиться', toast: 'Ссылка скопирована' }) }),
    ui.scroll([
      ui.post({ author: { face: P.lera, name: 'Лера Савина', meta: '12 минут назад · Санкт-Петербург', action: { go: 'swap' } }, text: 'Три способа носить винтажный жакет. В первом — тонкий трикотаж и прямые джинсы, остальные в карусели', media: P.lera, attach: tags('Жакет · винтаж', 'Трикотаж', 'Джинсы', 'Лоферы'), likes: 428, comments: 31, shares: 12 }),
      ui.section({ title: 'Комментарии', meta: '31', children: ui.list([
        ui.row({ thumb: `${P.yulia} is-round`, title: 'Юля Карпова', sub: 'Очень нравится пропорция. А какая длина у жакета?', end: { value: '8 мин' } }),
        ui.row({ thumb: `${P.lera} is-round`, title: 'Лера Савина', sub: 'Чуть ниже бедра, примерно 74 см — это даёт вертикаль', end: { value: '5 мин' } }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Написать Лере', icon: 'message-circle', variant: 'secondary', block: true, go: 'chat' })]) }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { go: 'media' }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
