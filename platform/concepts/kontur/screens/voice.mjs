import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'voice', theme: THEME,
  body: [
    ui.nav({ title: 'Заметка к K-184' }),
    ui.scroll([
      ui.denied('mic', 'Микрофон недоступен — напишите заметку текстом'),
      ui.denied('speech', 'Запись сохранена без расшифровки'),
      ui.section({ children: ui.actions([ui.button({ label: 'Записать голосом', icon: 'mic', block: true, primary: true, ask: 'mic|voice|voice' })]) }),
      ui.section({ title: 'Последняя запись', meta: '00:18', children: [
        ui.list([ui.row({ lead: ui.leadIcon('audio-lines', { accent: true }), title: 'На шестой минуте поднялось до 21 °C', sub: 'Сократили последние два переворота', wrap: true, toast: 'Воспроизведение 00:18' })]),
        ui.actions([ui.button({ label: 'Распознать запись', variant: 'secondary', block: true, ask: 'speech|voice|voice' })]),
      ] }),
    ]),
  ],
});
