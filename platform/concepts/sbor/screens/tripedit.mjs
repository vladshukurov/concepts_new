import { formScreen } from './_shared.mjs';
import { trip } from '../model.mjs';
export default (ui) => formScreen(ui, { id: 'tripedit', title: 'Правка поездки', cta: 'Сохранить', fields: [['Название', 'Название поездки', trip.name], ['Даты', '9–11 октября', trip.dates], ['Отель', 'Где живёте', trip.hotel]] });
