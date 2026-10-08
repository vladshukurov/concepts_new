import { THEME } from './_shared.mjs';

/* «Фото»: снимки с выходных, выбран кадр с Катей */
const ART = ['md-ph md-katya', 'md-ph md-a5', 'md-ph md-a2', 'md-ph md-a3', 'md-ph md-a1', 'md-ph md-a6', 'md-ph md-a4', 'md-ph md-lyosha', 'md-ph md-andrey', 'ph', 'ph', 'ph'];
export default (ui) => ui.screen({
  id: 'photopick', theme: THEME,
  body: ui.photoPicker({
    section: 'Недавние · выходные на озере',
    tiles: ART.map((art, i) => ({ art, ...(i === 0 ? { picked: 1 } : {}) })),
    add: { go: 'katya', primary: true },
    cancel: { back: true },
  }),
});
