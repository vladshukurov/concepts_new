import { contactScreen } from './_shared.mjs';
import { contacts } from '../model.mjs';

/* Катя: своей мелодии нет, фото на карточку — из «Фото» */
export default (ui) => contactScreen(ui, contacts.katya, {
  actions: [
    ui.actions(ui.button({ label: 'Фото из «Фото»', icon: 'images', variant: 'secondary', block: true, ask: 'photos|photopick|katya' })),
    ui.denied('photos'),
  ],
  extra: [ui.infoRows([['Последний звонок', '5 октября, 11:20']])],
});
