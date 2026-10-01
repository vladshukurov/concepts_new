import { THEME } from './_shared.mjs';
import { people, longrun } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая публикация', back: 'cancel', trailing: ui.textButton({ label: 'Опубликовать', strong: true, toast: 'Опубликовано|feed', primary: true }) }),
    ui.scroll([
      ui.section({ children: `<p class="ry-text">Суббота, ${longrun.start} — лёгкие ${longrun.km} км от клуба. Кто держит 6:10?</p>` }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять', sub: 'Фото или видео со звуком', ask: 'camera|shoot|compose' }),
        ui.cell({ icon: 'image', title: 'Из медиатеки', sub: 'Схема маршрута или кадр тренировки', ask: 'photos|picker|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Отметить место', sub: 'Точка старта', ask: 'location|place|compose' }),
        ui.cell({ icon: 'users', title: 'Позвать', value: '3 человека', go: 'friends' }),
      ] }) }),
      ui.denied('camera', 'Камера выключена — выберите кадр из медиатеки'),
      ui.denied('photos', 'Медиатека закрыта — снимите новый кадр'),
      ui.denied('location', 'Геопозиция выключена — точку старта впишите вручную'),
    ]),
  ],
});
