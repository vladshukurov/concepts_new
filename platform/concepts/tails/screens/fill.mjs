import { THEME } from './_shared.mjs';

/* Кабинет ветклиники в Safari: телефон и пароль подставляет «Выгул» */
export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'ui-sf',
  body: ui.safariFill({
    site: 'svoi-vet.ru', title: 'Кабинет клиники', sub: 'Ветпаспорт Трюфеля и запись к врачу',
    fields: [['Телефон', '+7 900 123-45-67', true], ['Пароль', '••••••••']],
    suggestion: { app: 'Выгул', login: '+7 900 123-45-67' },
  }),
});
