import { formScreen } from './_shared.mjs';
export default (ui) => formScreen(ui, { id: 'programnew', title: 'Новый пункт', cta: 'Добавить', fields: [['Время', '15:00'], ['Название', 'Например, катер в Свияжск'], ['Место', 'Адрес или причал']] });
