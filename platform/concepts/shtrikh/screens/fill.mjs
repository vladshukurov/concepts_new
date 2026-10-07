import { THEME } from './_shared.mjs';

/* Сайт магазина материалов в Safari: телефон и пароль подставляет «Вглядись» */
export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'ui-sf',
  body: ui.safariFill({
    site: 'art-lavka.kz', title: 'Вход в магазин', sub: 'Бумага, линеры и краски',
    fields: [['Телефон', '+7 900 123-45-67', true], ['Пароль', '••••••••']],
    suggestion: { app: 'Вглядись', login: '+7 900 123-45-67' },
  }),
});
