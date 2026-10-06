import { THEME } from './_shared.mjs';
import { longrun } from '../model.mjs';

/* Новая запись в свой дневник: пробежка, кадр техники, место старта */
export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая запись', back: 'cancel', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Запись в дневнике|feed', primary: true }) }),
    ui.scroll([
      ui.section({ children: `<p class="ry-text">Лонгран ${longrun.km} км: первые 5 держал 6:10, потом подсел. Пить на 5-м км, а не на 6-м</p>` }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять технику', sub: 'Фото или видео со звуком', ask: 'camera|shoot|compose' }),
        ui.cell({ icon: 'image', title: 'Из медиатеки', sub: 'Кадр с часов или с забега', ask: 'photos|picker|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Точка старта', sub: 'Где начинал', go: 'place' }),
        ui.cell({ icon: 'route', title: 'Маршрут', value: 'Набережная', go: 'music' }),
      ] }) }),
      ui.denied('camera'),
      ui.denied('photos'),
      ui.section({ title: 'Самочувствие', children: ui.list([
        ui.row({ lead: ui.leadIcon('heart-pulse'), title: 'Пульс в среднем 151', sub: 'С часов · на 4 удара выше прошлой субботы' }),
        ui.row({ lead: ui.leadIcon('footprints'), title: 'Колено', sub: 'Не ныло, на спуске чуть тянуло' }),
      ]) }),
    ]),
  ],
});
