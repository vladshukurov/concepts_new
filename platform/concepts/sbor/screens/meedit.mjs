import { formScreen } from './_shared.mjs';
import { me } from '../model.mjs';

/* Изменить профиль: имя, ник и подпись, с возвратом в настройки */
export default (ui) => formScreen(ui, { id: 'meedit', title: 'Изменить профиль', cta: 'Сохранить', fields: [
  ['Имя', 'Имя и фамилия', me.name],
  ['Имя пользователя', '@ник', '@nika_r'],
  ['О себе', 'Пара слов', 'Казань · вожу группы'],
] });
