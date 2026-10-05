import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Контакт-лист', back: 'cancel', trailing: ui.textButton({ label: 'Опубликовать', strong: true, primary: true, toast: 'Контакт-лист опубликован' }) }),
    ui.scroll([
      ui.composerPrompt({ initial: 'АР', placeholder: 'Коротко опишите серию и отбор кадров', toast: 'Описание серии' }),
      ui.section({ title: 'Скан листа', children: ui.list([
        ui.row({ lead: ui.leadIcon('scan-line', { accent: true }), title: 'Сканировать лист', sub: 'Камерой телефона на подсветке', ask: 'camera|camera|compose' }),
        ui.row({ lead: ui.leadIcon('images', { accent: true }), title: 'Выбрать из Фото', sub: 'Только выбранные сканы', ask: 'photos|picker|compose' }),
      ]) }),
      ui.denied('camera'),
      ui.denied('photos'),
      ui.section({ children: ui.group({ label: 'Плёнка и проявка', cells: [
        ui.cell({ icon: 'film', title: 'Плёнка', value: 'HP5 · EI 800', toast: 'Плёнка выбрана' }),
        ui.cell({ icon: 'flask-conical', title: 'Проявка', sub: 'DD-X 1+4 · 20 °C · 9:30', go: 'batch' }),
        ui.cell({ icon: 'map-pin', title: 'Место', value: 'Самал-2', toast: 'Место сохранено' }),
      ] }) }),
    ]),
  ],
});
