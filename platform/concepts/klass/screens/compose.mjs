import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Публикация', back: 'cancel', trailing: ui.textButton({ label: 'Опубликовать', strong: true, go: 'post', primary: true }) }),
    ui.scroll([
      ui.composerPrompt({ initial: 'ОЗ', placeholder: 'На северной линии отключили воду. Аварийная бригада уже едет, обновлю после ремонта', toast: 'Редактирование текста' }),
      ui.section({ title: 'Медиа', meta: '2 снимка', children: ui.list([
        ui.row({ lead: ui.leadIcon('camera', { accent: true }), title: 'Снять', sub: 'Фото или видео со звуком', ask: 'camera|shoot|compose' }),
        ui.row({ lead: ui.leadIcon('images', { accent: true }), title: 'Из медиатеки', sub: 'Дорога, счётчик или общая территория', ask: 'photos|picker|compose' }),
      ]) }),
      ui.denied('camera', 'Камера недоступна — можно выбрать готовый снимок или отправить без медиа'),
      ui.denied('photos', 'Медиатека недоступна — снятый кадр попадёт в публикацию сразу'),
      ui.section({ children: [
        ui.group({ label: 'Кому и когда', cells: [
          ui.cell({ icon: 'users', title: 'Все участники', sub: '24 соседа и правление', toast: 'Всё СНТ · Только правление · Выбранные линии' }),
          ui.cell({ icon: 'map-pin', title: 'Отметить место', sub: 'Въезд, насосная, общая территория', ask: 'location|place|compose' }),
          ui.cell({ icon: 'clock', title: 'Срок', value: '5 октября', toast: 'Срок · завтра · 5 октября · без срока' }),
        ] }),
        ui.denied('location', 'Место можно вписать руками'),
      ] }),
    ]),
  ],
});
