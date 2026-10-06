import { THEME, tools } from './_shared.mjs';
import { own, places } from '../model.mjs';

/* Своя зарисовка целиком: кадр листа, материалы, место и заметка с места */
export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Зарисовка', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с зарисовкой', menu: ['Изменить', 'Отправить Лере>direct', 'Удалить'] }) }),
    ui.scroll([
      ui.entry({ icon: 'pen-line', title: own.today.title, meta: own.today.when, text: own.today.text, photos: 1, attach: tools(...own.today.tools) }),
      ui.section({ title: 'Место', children: ui.list([
        ui.row({ lead: ui.leadIcon('layers', { accent: true }), title: places.panfilova.name, sub: `Серия «${places.panfilova.series}» · ${own.series.done} из ${own.series.of}`, go: 'series', primary: true }),
      ]) }),
      ui.section({ title: 'Заметка с места', children: ui.list([
        ui.row({ lead: ui.leadIcon('mic'), title: 'Голосом · 0:22', sub: '«Пахнет мокрой листвой, во дворе кто-то играет на гитаре»' }),
      ]) }),
    ]),
  ],
});
