import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'note', theme: THEME,
  body: [
    ui.nav({ title: 'Заметка осмотра', back: 'close', trailing: ui.textButton({ label: 'Сохранить', strong: true, go: 'task', primary: true }) }),
    ui.scroll([
      ui.granted('mic,speech', 'Записано 0:18 · расшифровка готова'),
      ui.denied('mic,speech', 'Заметку можно набрать текстом'),
      ui.section({ title: 'Осмотр крепления', children: '<p class="uz-text">Внутренний диаметр кольца — 238 мм. Нужна ткань средней плотности, иначе просветит патрон</p>' }),
    ]),
  ],
});
