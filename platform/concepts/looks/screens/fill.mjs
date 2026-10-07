import { THEME } from './_shared.mjs';
import { site } from '../model.mjs';

/* Анкета участника на сайте организаторов свопа: аккаунт завела «Вешалка» при записи на своп,
   в Safari вход подставляется из неё */
export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'ui-sf',
  body: ui.safariFill({
    site: site.domain, title: 'Анкета вещей', sub: 'Своп в Новой Голландии · 23 мая',
    fields: [['Электронная почта', site.login, true], ['Пароль', '••••••••••']],
    suggestion: { app: 'Вешалка', login: site.login },
  }),
});
