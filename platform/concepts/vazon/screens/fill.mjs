import { THEME } from './_shared.mjs';
import { repot } from '../model.mjs';

/* Магазин грунтов и горшков в Safari: вход подставляет расширение автозаполнения «Вазона»,
   которое читает его из общей связки ключей приложения */
const swap = (before, after) => `<span data-hide-granted="keychain">${before}</span><span class="perm-hidden" data-show-granted="keychain">${after}</span>`;
export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'ui-sf',
  body: ui.safariFill({
    site: repot.site, title: `Вход в «${repot.shop}»`, sub: `В корзине: грунт для лиственных, 5 л · ${repot.price}`,
    fields: [['Телефон', swap('', '+7 900 123-45-67'), true], ['Пароль', swap('', '••••••••')]],
    suggestion: { app: 'Вазон', login: '+7 900 123-45-67' },
  }).replace('>Вернуться в приложение<', '>Назад во «Вазон»<').replace('data-toast="Подставлено из «Вазон»"', 'data-activate="keychain|fill" aria-label="Вход из «Вазона» над клавиатурой"'),
});
