import { formScreen } from './_shared.mjs';
export default (ui) => formScreen(ui, { id: 'expensenew', title: 'Новая трата', cta: 'Добавить', fields: [['Название', 'Например, такси от вокзала'], ['Сумма', '0 ₽'], ['Кто платил', 'Ника Рябова', 'Ника Рябова']] });
