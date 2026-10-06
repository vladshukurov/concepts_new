import { THEME } from './_shared.mjs';

const lines = [
  ['0:04', 'Хромает на левую заднюю после парка', 'Правлено вручную в 19:14'],
  ['0:11', 'Отказался от корма второй раз за неделю', '«За неделю» досказано после паузы'],
  ['0:19', 'Лапу лижет, а…', 'Слово под шумом трамвая не разобрано', true],
  ['0:26', 'Между подушечками краснота с утра', '«Подушечками» ушло в словарь карточки'],
  ['0:35', 'Воду пьёт как обычно, ночью не будил', 'Сказано тише, разобрано целиком'],
];
export default (ui) => ui.screen({
  id: 'vetnote', theme: THEME,
  body: [
    ui.nav({ title: 'Наблюдение' }),
    ui.scroll([
      `<div class="tl-note-head"><h2>Трюфель, сегодня в 19:12</h2><p>Прогулка в Лопухинском саду · разобрано 4 из 5</p><div class="tl-wave">0:41<i></i>2,1 МБ</div></div>`,
      ui.denied('mic'),
      ui.denied('speech'),
      ui.section({ shownAfter: 'mic', children: ui.list([ui.row({ lead: ui.leadIcon('mic', { round: true, accent: true }), title: 'Записано · 0:41', sub: 'Строки ниже разобраны из записи' })]) }),
      ui.section({ title: 'Наблюдения', children: ui.list(lines.map(([t, title, sub, gap]) => ui.row({ lead: `<span class="tl-ts${gap ? ' is-gap' : ''}">${t}</span>`, title, sub, wrap: true, toast: `Правка строки ${t}` }))) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Сохранить в карточку', block: true, primary: true, toast: 'Сохранено в карточку Трюфеля' }),
        ui.button({ label: 'Надиктовать наблюдение', icon: 'mic', variant: 'secondary', block: true, ask: 'mic|vetnote|vetnote' }),
      ]) }),
      ui.section({ title: 'Прошлые заметки', meta: '23', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '14.05' }), title: 'Чесал правое ухо весь вечер', sub: 'Прошло само на следующий день', toast: 'Заметка 14 мая' }),
        ui.row({ lead: ui.leadIcon('', { text: '06.05' }), title: 'Съел что-то у воды', sub: 'Показали Марии, наблюдать трое суток', toast: 'Заметка 6 мая' }),
        ui.row({ lead: ui.leadIcon('', { text: '27.04' }), title: 'Заметка без текста', sub: '0:22 · ищется только по дате', toast: 'Воспроизведение 0:22' }),
      ]) }),
    ]),
  ],
});
