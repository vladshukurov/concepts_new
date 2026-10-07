import { THEME } from './_shared.mjs';

/* Сайт забега в Safari: Даша отдала номер, его переоформляют в кабинете участника.
   Вход подставляет AutoFill-расширение «Выбега» — оно читает его из общей связки ключей приложения */
const swap = (before, after) => `<span data-hide-granted="keychain">${before}</span><span class="perm-hidden" data-show-granted="keychain">${after}</span>`;
export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'ui-sf',
  body: ui.safariFill({
    site: 'start-zabeg.kz', title: 'Вход в кабинет участника', sub: 'Осенний полумарафон, 4 октября · номер 1184 от Даши Орловой',
    fields: [['Телефон', swap('', '+7 900 123-45-67'), true], ['Пароль', swap('', '••••••••')]],
    suggestion: { app: 'Выбег', login: '+7 900 123-45-67' },
  }).replace('data-toast="Подставлено из «Выбег»"', 'data-activate="keychain|fill" aria-label="Вход из «Выбега» над клавиатурой"'),
});
