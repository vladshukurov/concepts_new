import { direct } from './_shared.mjs';

export default (ui) => direct(ui, { id: 'direct-mama', initial: 'М', name: 'Мама', status: 'была вчера', items: [
  ui.day('Вторник'),
  ui.bubble({ out: true, text: 'Мам, а твоя фиалка как зимует? Моя на окне вялая', time: '19:30', read: true }),
  ui.voice({ dur: '0:34', time: '19:41' }),
  ui.bubble({ text: 'Фиалку не заливай, она этого не любит', time: '19:42' }),
] });
