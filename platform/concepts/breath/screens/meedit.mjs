/* Изменить профиль: имя и подпись */
const THEME = 'vk-dark';
const field = (label, value) => `<label class="br-field"><span>${label}</span><input value="${value}" aria-label="${label}"/></label>`;
export default (ui) => ui.screen({
  id: 'meedit', theme: THEME,
  body: [
    ui.nav({ title: 'Изменить профиль', back: 'close', trailing: ui.textButton({ label: 'Готово', strong: true, back: true }) }),
    ui.scroll([
      ui.section({ children: [field('Имя', 'Влад'), field('О себе', 'Пишу песни под гитару')] }),
    ]),
  ],
});
