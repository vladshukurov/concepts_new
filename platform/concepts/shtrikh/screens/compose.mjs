import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая зарисовка', back: 'cancel', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Зарисовка в скетчбуке|home', primary: true }) }),
    ui.scroll([
      ui.section({ children: '<p class="sh-text">Навес над овощными рядами, пока не открылись ларьки. Перспектива поплыла — в следующий раз начать с крыши</p>' }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять рисунок', sub: 'Лист целиком, без бликов', ask: 'camera|shoot|compose' }),
        ui.cell({ icon: 'image', title: 'Из медиатеки', sub: 'Готовая работа или скан', ask: 'photos|picker|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Отметить место', sub: 'Зарисовка встанет в серию этой точки', ask: 'location|places|compose' }),
        ui.cell({ icon: 'mic', title: 'Голосовая заметка', sub: 'Что слышно и чем пахнет на месте', ask: 'mic|compose|compose' }),
        ui.cell({ icon: 'captions', title: 'Расшифровать заметку', sub: 'Текст можно поправить', ask: 'speech|compose|compose' }),
      ] }) }),
      ui.denied('camera'),
      ui.denied('photos'),
      ui.denied('location'),
      ui.denied('mic'),
      ui.denied('speech'),
      ui.section({ shownAfter: 'mic', children: ui.list([ui.row({ lead: ui.leadIcon('mic', { round: true, accent: true }), title: 'Заметка записана · 0:15', sub: 'Грузчики спорят про цены, пахнет укропом' })]) }),
      ui.section({ shownAfter: 'speech', children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Расшифровано', sub: '«Грузчики спорят про цены, пахнет укропом»' })]) }),
    ]),
  ],
});
