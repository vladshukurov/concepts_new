import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: ui.photoPicker({
    section: 'Недавние',
    tiles: Array.from({ length: 9 }, () => ({})),
    add: { go: 'compose', primary: true },
  }),
});
