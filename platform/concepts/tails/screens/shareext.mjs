import { THEME, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'shareext', theme: THEME,
  body: [
    ui.nav({ title: 'В «Хвосты»', back: 'cancel', trailing: ui.textButton({ label: 'Готово', strong: true, toast: 'Сохранено в черновик|create' }) }),
    ui.scroll([
      ui.section({ title: 'Пришло', children: ui.list([
        ui.row({ thumb: 'ph', title: 'Найдена собака у Чкаловской', sub: 'poteryashki-spb.ru · ссылка', end: { icon: 'x', toast: 'Убрано', label: 'Убрать ссылку' } }),
        ui.row({ thumb: PET.truffle, title: 'Кадр из «Фото»', sub: '2,4 МБ · 16 августа, 19:52', end: { icon: 'x', toast: 'Убрано', label: 'Убрать кадр' } }),
      ]) }),
      ui.section({ children: ui.group({ label: 'Куда положить', cells: [
        ui.cell({ icon: 'file-text', title: 'Черновик записи', sub: '3 черновика', check: true }),
        ui.cell({ icon: 'megaphone', title: 'Доска «Потеряшки»', sub: '1 284 участника', toast: 'Выбрана доска «Потеряшки»' }),
        ui.cell({ icon: 'paw-print', title: 'Карточка Барни', sub: 'Приметы и последняя прогулка', toast: 'Выбрана карточка Барни' }),
      ] }) }),
      ui.section({ title: 'Заметка', children: '<p class="tl-share-note">Видели у выхода к Ординарной, 19:20</p>' }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Сохранить в черновик', block: true, primary: true, toast: 'Сохранено в черновик|create' }),
      ]) }),
    ]),
  ],
});
