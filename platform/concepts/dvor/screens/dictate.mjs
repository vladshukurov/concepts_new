import { THEME } from './_shared.mjs';

/* Результат разрешений на микрофон и распознавание: запись идёт, текст появляется сразу */
export default (ui) => ui.screen({
  id: 'dictate', theme: THEME,
  body: [
    ui.nav({ title: 'Заявка голосом', back: 'close' }),
    ui.scroll([
      ui.entry({ icon: 'mic', title: 'Записано 0:12', meta: 'сегодня, 8:10 · голосовая заявка', voice: { dur: '0:12' } }),
      ui.section({ title: 'Расшифровка', children: [
        `<p class="dv-transcript">В третьем подъезде вторая дверь не закрывается, доводчик висит на одном болте. Коляску не завезти, дверь хлопает</p>`,
      ] }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Сделать заявкой', block: true, go: 'problem', primary: true }),
        ui.button({ label: 'Записать заново', icon: 'rotate-ccw', variant: 'secondary', block: true, toast: 'Запись начата заново' }),
      ]) }),
    ]),
  ],
});
