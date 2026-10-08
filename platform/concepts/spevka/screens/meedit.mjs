import { THEME } from './_shared.mjs';
import { me, choir } from '../model.mjs';

/* Изменить профиль: имя, ник и партия в хоре */
const field = (label, value) => `<label class="sp-field"><span>${label}</span><input value="${value}" aria-label="${label}"/></label>`;
export default (ui) => ui.screen({
  id: 'meedit', theme: THEME,
  body: [
    ui.nav({ title: 'Изменить профиль', back: 'close', trailing: ui.textButton({ label: 'Готово', strong: true, back: true }) }),
    ui.scroll([
      ui.section({ children: [field('Имя', me.name), field('Имя пользователя', me.nick), field('Партия', `Альт, ${choir.name}`)] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Изменить фото', menu: ['Снять фото>camera', 'Выбрать из медиатеки>attach'] }),
      ] }) }),
    ]),
  ],
});
