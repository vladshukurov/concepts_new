import { THEME } from './_shared.mjs';
import { field } from './_form.mjs';
import { me } from '../model.mjs';

/* Изменить профиль: имя, ник и подпись для семьи */
export default (ui) => ui.screen({
  id: 'meedit', theme: THEME,
  body: [
    ui.nav({ title: 'Изменить профиль', back: 'close', trailing: ui.textButton({ label: 'Готово', strong: true, back: true }) }),
    ui.scroll([
      ui.section({ children: [field('Имя', me.name), field('Имя пользователя', me.nick), field('О себе', 'Мама Дани и Милы')] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Изменить фото', menu: ['Снять фото>camera', 'Выбрать из медиатеки>attach'] }),
      ] }) }),
    ]),
  ],
});
