import { THEME } from './_shared.mjs';
import { lamp, workshops } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'update', theme: THEME,
  body: [
    ui.nav({ title: 'Новый этап', back: 'cancel', trailing: ui.textButton({ label: 'Сохранить', strong: true, go: 'project', primary: true }) }),
    ui.scroll([
      ui.section({ children: '<p class="uz-text">Заменили патрон и закрепили кабель. Лампа снова включается</p>' }),
      ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('lamp', { accent: true }), title: lamp.title, sub: `${workshops.revers.name} · этап ${lamp.stage} из ${lamp.stages}` })]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять фото', sub: 'Деталь крупно, при свете', ask: 'camera|camera|update' }),
        ui.cell({ icon: 'image', title: 'Выбрать из Фото', sub: 'Снимки с прошлых этапов', ask: 'photos|photos|update' }),
      ] }) }),
      ui.denied('camera', 'Камера выключена — выберите снимок из Фото'),
      ui.denied('photos', 'Фото закрыты — этап сохранится без снимка'),
    ]),
  ],
});
