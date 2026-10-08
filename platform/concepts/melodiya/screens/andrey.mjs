import { contactScreen } from './_shared.mjs';
import { contacts } from '../model.mjs';

/* Андрей: снять постер звонка — кадр во весь экран, когда он звонит */
export default (ui) => contactScreen(ui, contacts.andrey, {
  actions: [
    ui.actions(ui.button({ label: 'Снять постер', icon: 'camera', variant: 'secondary', block: true, ask: 'camera|capture|andrey' })),
    ui.denied('camera'),
    ui.section({ shownAfter: 'camera', children: ui.list([ui.row({ thumb: 'md-ph md-andrey', title: 'Постер звонка', sub: 'снят сегодня · во весь экран при звонке', go: 'poster' })]) }),
  ],
  extra: [ui.infoRows([['Последний звонок', 'сегодня, 13:05'], ['Мелодия стоит', 'с 29 августа']])],
});
