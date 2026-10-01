import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая зарисовка', back: 'cancel', trailing: ui.textButton({ label: 'Опубликовать', strong: true, go: 'post', primary: true }) }),
    ui.scroll([
      ui.section({ children: '<p class="sh-text">Двор на Панфилова в первом снегу — успела до того, как дворник прошёл</p>' }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять рисунок', sub: 'Лист целиком, без бликов', ask: 'camera|shoot|compose' }),
        ui.cell({ icon: 'image', title: 'Из медиатеки', sub: 'Готовая работа или скан', ask: 'photos|picker|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Отметить место', sub: 'Работа попадёт в серию этой точки', ask: 'location|places|compose' }),
        ui.cell({ icon: 'mic', title: 'Голосовая заметка', sub: 'Что слышно и чем пахнет на месте', ask: 'mic|compose|compose' }),
        ui.cell({ icon: 'captions', title: 'Расшифровать заметку', sub: 'Текст можно поправить', ask: 'speech|compose|compose' }),
      ] }) }),
      ui.granted('mic', 'Заметка записана · 0:24'),
      ui.granted('speech', 'Расшифровано: «пахнет мокрыми листьями, дворник уже идёт»'),
      ui.denied('camera', 'Камера выключена — выберите работу из медиатеки'),
      ui.denied('photos', 'Медиатека закрыта — снимите рисунок'),
      ui.denied('location', 'Место можно выбрать поиском'),
      ui.denied('mic', 'Впечатление можно написать текстом'),
      ui.denied('speech', 'Заметка остаётся голосовой'),
    ]),
  ],
});
