import { THEME } from './_shared.mjs';

const lines = [
  ['0:02', 'Жакет сажает плечо, рукав подворачиваю на два оборота'],
  ['0:07', 'Юбка в тон ботинкам, разница только в фактуре'],
  ['0:14', 'Впишите, что говорите на 0:14', true],
  ['0:21', 'Сверху шерсть, снизу хлопок — иначе образ плывёт к вечеру'],
  ['0:29', 'Ремень не по петлям, а поверх жакета'],
  ['0:38', 'Ботинки те же, что в июльском клипе'],
];
export default (ui) => ui.screen({
  id: 'subtitles', theme: THEME,
  body: [
    ui.nav({ title: 'Субтитры', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Субтитры сохранены|create', primary: true }) }),
    ui.scroll([
      ui.denied('speech', 'Распознавание выключено — строки набираются вручную'),
      ui.section({ title: 'Клип-примерка', meta: '1:12 · 14 строк', children: ui.list(lines.map(([t, s, gap]) =>
        ui.row({ lead: `<span class="${gap ? 'lk-ts is-gap' : 'lk-ts'}">${t}</span>`, title: s, wrap: true, toast: `Правка строки ${t}` }))) }),
    ]),
  ],
});
