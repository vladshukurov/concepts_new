import { walkCard, PET } from './_shared.mjs';
export default (ui) => walkCard(ui, { id: 'walk-puppies', title: 'Знакомство щенков', when: 'Завтра, 10:10 · без поводка', pets: [PET.loki], place: ['Двор на Съезжинской', 'Огороженная площадка для щенков'], time: ['10:10 — около 10:50', 'Для собак до 1 года'], route: ['От вас 8 минут пешком', 'Локи ждёт компанию'] });
