import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'sh-web',
  body: [
    `<div class="sh-web-bar">${ui.icon('lock')}portfolio.shtrikh.app</div>`,
    `<div class="sh-web-page"><h1>Веб-портфолио</h1><p>Работы и серии для заказчиков</p><div class="sh-web-field is-focus"><span>Логин</span>anna.razumova</div><div class="sh-web-field"><span>Пароль</span>••••••••</div>${ui.button({ label: 'Войти', block: true, toast: 'Вход выполнен' })}${ui.button({ label: 'Вернуться в «Штрих»', variant: 'tertiary', block: true, back: true, primary: true })}</div>`,
    `<div class="sh-quicktype"><button data-toast="Подставлено из «Штриха»">${ui.icon('key')}Штрих · anna.razumova</button></div>`,
  ],
});
