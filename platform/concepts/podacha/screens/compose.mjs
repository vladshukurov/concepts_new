import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая запись', back: 'close', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Запись в дневнике|feed', primary: true }) }),
    ui.scroll([
      ui.section({ children: '<p class="pd-text">Грушевый пирог, седьмой раз: груш взяла пять, как и хотела — сочнее, но середина чуть сырая. В следующий раз 45 минут</p>' }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять блюдо', sub: 'Фото или короткое видео со звуком', ask: 'camera|camera|compose' }),
        ui.cell({ icon: 'image', title: 'Из медиатеки', sub: 'Выбрать готовые кадры', ask: 'photos|picker|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Место', sub: 'Кухня, рынок или кафе рядом', ask: 'location|place|place' }),
        ui.cell({ icon: 'utensils', title: 'Свой рецепт', sub: 'Ингредиенты, замены и шаги', go: 'recipe' }),
      ] }) }),
      ui.denied('camera'),
      ui.denied('photos'),
    ]),
  ],
});
