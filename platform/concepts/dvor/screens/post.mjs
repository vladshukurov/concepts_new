import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Объявление', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с объявлением', menu: ['Скопировать ссылку', 'Пожаловаться старшему по дому'] }) }),
    ui.scroll([
      ui.post({ author: { initial: 'УК', name: 'Управляющая компания', meta: 'вчера в 19:04 · официально' }, text: 'Горячую воду отключат с 14 по 17 апреля — плановая опрессовка стояка. Холодная вода остаётся. Бригада начнёт 14 апреля с 8:00 в подвале третьего подъезда, вход через калитку. Заявки на перерасчёт — в этой теме', likes: 34, comments: 12, views: 219 }),
      ui.section({ children: [
        ui.group({ cells: [ui.cell({ icon: 'bell', title: 'Следить за темой', sub: 'Уведомление, когда УК ответит', toggle: false, ask: 'push|post|post' })] }),
        ui.denied('push'),
      ] }),
      ui.comments({ count: 12, items: [
        { initial: 'МК', name: 'Марина, кв. 48', text: 'Запишите перерасчёт, кв. 48. И доводчик на второй двери посмотрите', time: 'вчера, 19:31', likes: 9 },
        { initial: 'УК', name: 'Управляющая компания', text: 'Перерасчёт будет в майской квитанции автоматически, доводчик поставим в заявку', time: 'вчера, 20:02', likes: 4, reply: true, author: true },
        { initial: 'ПИ', name: 'Пётр, кв. 12', text: 'На 14-е беру отгул, встречу бригаду. Код калитки теперь 4417', time: 'сегодня, 7:48', liked: true, likes: 15 },
        { initial: 'ИТ', name: 'Ирина, кв. 31', text: 'У нас в 31-й полотенцесушитель от горячей — его тоже перекроют?', time: 'сегодня, 10:12', likes: 2 },
      ] }),
    ]),
    ui.composer({ placeholder: 'Комментарий', attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>chronicle'] }, send: { toast: 'Комментарий отправлен' } }),
  ],
});
