import { contactScreen } from './_shared.mjs';
import { contacts } from '../model.mjs';

/* Лёша из группы: на его звонок — припев с их же репетиции */
export default (ui) => contactScreen(ui, contacts.lyosha, {
  extra: [ui.infoRows([['Последний звонок', 'вторник, 22:15'], ['Мелодия стоит', 'с 6 октября']])],
});
