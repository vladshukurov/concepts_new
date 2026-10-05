import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'note', theme: THEME,
  body: [
    ui.nav({ title: 'Заметка осмотра', back: 'close', trailing: ui.textButton({ label: 'Сохранить', strong: true, go: 'task', primary: true }) }),
    ui.scroll([ui.denied('mic,speech'),
      ui.section({ title: 'Осмотр крепления', children: '<p class="uz-text">Внутренний диаметр кольца — 238 мм. Нужна ткань средней плотности, иначе просветит патрон</p>' }),
    ]),
  ],
});
