import { THEME } from './_shared.mjs';

/* Сайт регистрации на забег в Safari: телефон и пароль подставляет «Выбег» */
export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'ui-sf',
  body: ui.safariFill({
    site: 'start-zabeg.kz', title: 'Вход в кабинет участника', sub: 'Осенний полумарафон, 4 октября',
    fields: [['Телефон', '+7 900 123-45-67', true], ['Пароль', '••••••••']],
    suggestion: { app: 'Выбег', login: '+7 900 123-45-67' },
  }),
});
