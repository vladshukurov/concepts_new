import { THEME } from './_shared.mjs';
import { cookalong } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ title: 'Сегодня', children: ui.list([
        ui.row({ lead: ui.avatar('АР'), title: 'Амина в чате ужина', sub: 'Голосовое · 0:12 · 19:18', go: 'conversation' }),
        ui.row({ lead: ui.leadIcon('chef-hat', { accent: true }), title: cookalong.title, sub: `Начало в ${cookalong.start} · шаги скачаны`, go: 'cookalong', primary: true }),
      ]) }),
      ui.section({ title: 'Вчера', children: ui.list([
        ui.row({ lead: ui.avatar('ЖК'), title: 'Жанна ответила в чате', sub: '«Густым йогуртом и немного лимона» · 20:16', subWrap: true, go: 'direct-zhanna' }),
        ui.row({ lead: ui.leadIcon('shopping-basket'), title: 'Покупки к пятнице', sub: 'Осталось 3 · фарш, сметана, лавровый лист', go: 'feed' }),
      ]) }),
    ]),
  ],
});
