import { contactScreen } from './_shared.mjs';
import { contacts } from '../model.mjs';

/* Мама: на её звонок — смех внучки */
export default (ui) => contactScreen(ui, contacts.mama, {
  extra: [ui.infoRows([['Последний звонок', 'сегодня, 18:42'], ['Мелодия стоит', 'с 3 октября']])],
});
