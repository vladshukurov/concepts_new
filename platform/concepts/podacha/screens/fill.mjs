import { THEME } from './_shared.mjs';

/* Сайт доставки продуктов в Safari: телефон и пароль подставляет «Вкусно» */
export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'ui-sf',
  body: ui.safariFill({
    site: 'lavka-gryadka.kz', title: 'Вход в доставку', sub: 'Заказ продуктов к пятнице',
    fields: [['Телефон', '+7 900 123-45-67', true], ['Пароль', '••••••••']],
    suggestion: { app: 'Вкусно', login: '+7 900 123-45-67' },
  }),
});
