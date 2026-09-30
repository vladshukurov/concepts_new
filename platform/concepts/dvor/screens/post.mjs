import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Объявление', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Пожаловаться', toast: 'Жалоба отправлена старшему по дому' }) }),
    ui.scroll([
      ui.post({ author: { initial: 'УК', name: 'Управляющая компания', meta: 'вчера в 19:04 · официально' }, text: 'Горячую воду отключат с 14 по 17 апреля — плановая опрессовка стояка. Холодная вода остаётся. Бригада начнёт 14 апреля с 8:00 в подвале третьего подъезда, вход через калитку. Заявки на перерасчёт — в этой теме', likes: 34, comments: 12, views: 219 }),
      ui.section({ children: [
        ui.group({ cells: [ui.cell({ icon: 'bell', title: 'Следить за темой', sub: 'Уведомление, когда УК ответит', toggle: false, ask: 'push|post|post' })] }),
        ui.denied('push', 'Без уведомлений тема отмечается точкой в ленте'),
      ] }),
      ui.section({ title: 'Обсуждение', meta: '12 ответов', children: ui.list([
        ui.row({ lead: ui.avatar('МК'), title: 'Марина, кв. 48', sub: 'Запишите перерасчёт, кв. 48. И доводчик на второй двери посмотрите', go: 'chat' }),
        ui.row({ lead: ui.avatar('ПИ'), title: 'Пётр, кв. 12', sub: 'На 14-е беру отгул, встречу бригаду. Код калитки теперь 4417', go: 'profile' }),
      ]) }),
    ]),
  ],
});
