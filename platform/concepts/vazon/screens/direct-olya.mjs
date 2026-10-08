import { direct } from './_shared.mjs';

export default (ui) => direct(ui, { id: 'direct-olya', initial: 'ОС', name: 'Оля Сафина', status: 'была 28 сентября', items: [
  ui.day('28 сентября'),
  ui.bubble({ text: 'Уезжаю на неделю. Польёшь мой кротон? Ключи у консьержа', time: '18:15' }),
  ui.bubble({ out: true, text: 'Полью в выходные, не переживай', time: '18:20', read: true }),
] });
