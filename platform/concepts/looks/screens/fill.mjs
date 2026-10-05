import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'lk-web',
  body: [
    `<div class="lk-web-bar">${ui.icon('lock')}looks.social</div>`,
    `<div class="lk-web-page"><h1>Вход в кабинет</h1><p>Заказы, размеры и лист ожидания</p><div class="lk-web-field is-focus"><span>Электронная почта</span>marina@inbox.ru</div><div class="lk-web-field"><span>Пароль</span>••••••••</div>${ui.button({ label: 'Войти', block: true, toast: 'Вход выполнен' })}${ui.button({ label: 'Вернуться в приложение', variant: 'tertiary', block: true, back: true, primary: true })}</div>`,
    `<div class="lk-quicktype"><button data-toast="Подставлено из «Вешалки»">${ui.icon('key')}Вешалка · marina@inbox.ru</button></div>`,
  ],
});
