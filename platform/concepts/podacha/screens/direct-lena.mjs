import { plainDirect } from './_shared.mjs';

export default (ui) => plainDirect(ui, { id: 'direct-lena', initial: 'ЛО', name: 'Лена Орлова', status: 'была вчера', items: [
  ui.day('Сегодня'),
  ui.bubble({ out: true, text: 'Лена, пирог получился!', time: '9:02', read: true }),
  ui.bubble({ text: 'Как обещала, рецепт с заменами', time: '9:10' }),
] });
