import { THEME, P, tags } from './_shared.mjs';
import { own } from '../model.mjs';

/* Свой образ целиком: кадры, вещи, когда носила — и отправить Лере в чат, если нужен совет */
export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Образ', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с образом', menu: ['Изменить', 'Отправить Лере>chat', 'Удалить'] }) }),
    ui.scroll([
      ui.entry({ icon: 'shirt', title: own.today.title, meta: `${own.today.when} · ${own.today.worn}`, photos: [P.marina], text: 'Свитер с запахом навыпуск, брюки в пол — в офис и на своп одинаково' }),
      ui.section({ title: 'Вещи', meta: '4', children: ui.list([
        ui.row({ lead: ui.leadIcon('shirt'), title: 'Свитер с запахом, кремовый', sub: 'Надевала 9 раз · с ноября', tags: ['item'] }),
        ui.row({ lead: ui.leadIcon('shirt'), title: 'Широкие брюки, шерсть', sub: 'Надевала 14 раз · любимая основа' }),
        ui.row({ lead: ui.leadIcon('package'), title: 'Плетёная сумка', sub: 'Надевала 22 раза · ручка разносилась' }),
        ui.row({ lead: ui.leadIcon('footprints'), title: 'Лоферы', sub: 'Надевала 6 раз · натирают в дождь' }),
      ]) }),
      ui.section({ title: 'Когда носила', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '23' }), title: 'Сегодня, своп в Новой Голландии', sub: '+14°, солнце' }),
        ui.row({ lead: ui.leadIcon('', { text: '12' }), title: '12 мая, встреча с Юрой', sub: '+11°, ветер · свитер оказался кстати' }),
        ui.row({ lead: ui.leadIcon('', { text: '2' }), title: '2 мая, работа', sub: '+9° · без пальто было холодно' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Отправить Лере', icon: 'message-circle', variant: 'secondary', block: true, go: 'chat' })]) }),
    ]),
  ],
});
