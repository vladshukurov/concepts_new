import { walkCard, PET } from './_shared.mjs';
export default (ui) => walkCard(ui, { id: 'walk-quay', title: 'Быстро по набережной', when: 'Сегодня, 19:30 · активный темп', pets: [PET.barni, PET.truffle], place: ['Набережная у ЦПКиО', 'Сбор у входа, песок и без забора'], time: ['19:30 — около 20:20', 'Без остановок, вода с собой'], route: ['3,4 км по набережной', 'Бруно и ещё 2 собаки'] });
