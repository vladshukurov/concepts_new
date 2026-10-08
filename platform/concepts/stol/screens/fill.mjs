import { THEME } from './_shared.mjs';

/* Сайт брони столов клуба в Safari: телефон и пароль подставляет «В кругу» */
export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'ui-sf',
  body: ui.safariFill({
    site: 'bron-polka.kz', title: 'Бронь стола', sub: 'Клуб «Полка» · четверг, 19:30',
    fields: [['Телефон', '+7 900 123-45-67', true], ['Пароль', '••••••••']],
    suggestion: { app: 'В кругу', login: '+7 900 123-45-67' },
  }),
});
