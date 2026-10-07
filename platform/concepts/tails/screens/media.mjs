import { THEME, PET } from './_shared.mjs';

const photos = [PET.truffle, PET.truffle, PET.barni, PET.truffle, PET.truffle, PET.truffle, PET.mint, PET.truffle, PET.truffle, PET.truffle, PET.barni, PET.truffle];
export default (ui) => ui.screen({
  id: 'media', theme: THEME,
  body: ui.photoPicker({
    section: 'Недавние',
    tiles: photos.map((art) => ({ art })),
    add: { go: 'home' },
  }),
});
