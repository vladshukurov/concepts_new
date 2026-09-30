import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'tl-web',
  body: [
    `<div class="tl-web-bar">${ui.icon('lock')}tails.social</div>`,
    `<div class="tl-web-page"><h1>Вход в кабинет</h1><p>Ветпаспорт Барни, записи к врачу и история прививок</p><div class="tl-web-field is-focus"><span>Телефон</span>+7 900 123-45-67</div><div class="tl-web-field"><span>Пароль</span>••••••••••••</div>${ui.button({ label: 'Войти', block: true, primary: true, toast: 'Вход выполнен на tails.social' })}${ui.button({ label: 'Вернуться в «Хвосты»', variant: 'tertiary', block: true, back: true })}</div>`,
    `<div class="tl-quicktype"><button data-toast="Подставлено из «Хвостов»">${ui.icon('key')}Хвосты · +7 900 123-45-67</button></div>`,
  ],
});
