import { plainDirect } from './_shared.mjs';

export default (ui) => plainDirect(ui, { id: 'direct-marat', initial: 'МС', name: 'Марат Сафиуллин', status: 'в сети', items: [
  ui.day('Сегодня'),
  ui.bubble({ out: true, text: 'Марат, взяла твой совет про фольгу', time: '9:02', read: true }),
  ui.bubble({ text: 'Фольга на 25-й минуте, да', time: '9:10' }),
] });
