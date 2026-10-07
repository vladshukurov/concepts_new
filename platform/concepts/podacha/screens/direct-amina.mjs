import { direct } from './_shared.mjs';

export default (ui) => direct(ui, { id: 'direct-amina', initial: 'АР', name: 'Амина Рахимова', status: 'ведёт ужин в 19:00', items: [
  ui.day('Сегодня'),
  ui.bubble({ text: 'Сегодня в 19:00 готовим из одной сковороды, приходите', time: '17:40' }),
  ui.bubble({ out: true, text: 'Буду, лук уже купила', time: '17:46', read: true }),
  ui.voice({ dur: '0:12', time: '19:18' }),
] });
