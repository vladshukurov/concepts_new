import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая публикация', back: 'close', trailing: ui.textButton({ label: 'Опубликовать', strong: true, go: 'post', primary: true }) }),
    ui.scroll([
      ui.section({ children: '<p class="pd-text">Проверила пирог с грушей на цельнозерновой муке. Сахара взяла вдвое меньше — текстура осталась мягкой</p>' }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять блюдо', sub: 'Фото или короткое видео со звуком', ask: 'camera|camera|compose' }),
        ui.cell({ icon: 'image', title: 'Из медиатеки', sub: 'Выбрать готовые кадры', ask: 'photos|picker|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Место', sub: 'Кухня, рынок или кафе рядом', ask: 'location|place|place' }),
        ui.cell({ icon: 'utensils', title: 'Проверенный рецепт', sub: 'Ингредиенты, замены и шаги', go: 'recipe' }),
      ] }) }),
      ui.denied('camera'),
      ui.denied('photos'),
    ]),
  ],
});
