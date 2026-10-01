import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'cataloglogin', theme: THEME, className: 'uz-web',
  body: [
    `<div class="uz-web-bar">${ui.icon('lock')}detali-spb.ru</div>`,
    `<div class="uz-web-page"><h1>Вход в каталог</h1><p>Патроны, абажуры, кабель в оплётке</p><div class="uz-web-field is-focus"><span>Почта</span>alexey@uzel.club</div><div class="uz-web-field"><span>Пароль</span>••••••••</div>${ui.button({ label: 'Войти', block: true, toast: 'Вход выполнен' })}${ui.button({ label: 'Вернуться в «Узел»', variant: 'tertiary', block: true, back: true, primary: true })}</div>`,
    `<div class="uz-quicktype"><button data-toast="Подставлено из «Узла»">${ui.icon('key')}Узел · alexey@uzel.club</button></div>`,
  ],
});
