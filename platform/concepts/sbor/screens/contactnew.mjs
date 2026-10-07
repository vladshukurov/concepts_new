import { formScreen } from './_shared.mjs';
export default (ui) => formScreen(ui, { id: 'contactnew', title: 'Новый контакт', cta: 'Добавить', fields: [['Имя', 'Имя и фамилия'], ['Номер', '+7 900 000-00-00']] });
