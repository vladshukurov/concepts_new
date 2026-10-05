import { THEME, P, tags } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Публикация', trailing: ui.iconButton({ icon: 'share', label: 'Поделиться', toast: 'Ссылка скопирована' }) }),
    ui.scroll([
      ui.post({ author: { face: P.lera, name: 'Лера Савина', meta: '12 минут назад · Санкт-Петербург', action: { go: 'swap' } }, text: 'Три способа носить винтажный жакет. В первом — тонкий трикотаж и прямые джинсы, остальные в карусели', media: P.lera, attach: tags('Жакет · винтаж', 'Трикотаж', 'Джинсы', 'Лоферы'), likes: 428, comments: 31, shares: 12 }),
      ui.section({ children: ui.actions([ui.button({ label: 'Написать Лере', icon: 'message-circle', variant: 'secondary', block: true, go: 'chat' })]) }),
      ui.comments({ count: 31, items: [
        { face: P.yulia, name: 'Юля Карпова', text: 'Очень нравится пропорция. А какая длина у жакета?', time: '8 мин', likes: 12 },
        { face: P.lera, name: 'Лера Савина', text: 'Чуть ниже бедра, примерно 74 см — это даёт вертикаль', time: '5 мин', likes: 9, reply: true, author: true },
      ] }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { label: 'Прикрепить', menu: ['Камера>camera', 'Фото>media'] }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
