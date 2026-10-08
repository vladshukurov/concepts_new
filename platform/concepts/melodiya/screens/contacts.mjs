import { THEME, TABS, MINI, contactRow } from './_shared.mjs';
import { contacts } from '../model.mjs';

/* Контакты со своей мелодией и те, кому её ещё не поставили */
const { mama, andrey, lyosha, katya, babushka } = contacts;
export default (ui) => ui.screen({
  id: 'contacts', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Контакты'),
    ui.section({ title: 'Своя мелодия', meta: '3 контакта', children: ui.list([contactRow(mama), contactRow(andrey), contactRow(lyosha)]) }),
    ui.section({ title: 'Звонят под общую', children: ui.list([contactRow(katya), contactRow(babushka)]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'contacts', mini: MINI }),
});
