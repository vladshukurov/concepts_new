import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'fill', theme: THEME, className: 'dv-web',
  body: [
    `<div class="dv-web-bar">${ui.icon('lock')}uk-polevaya.ru</div>`,
    `<div class="dv-web-page"><h1>Личный кабинет</h1><p>Вход по лицевому счёту</p><div class="dv-web-field is-focus"><span>Лицевой счёт</span>12-74</div><div class="dv-web-field"><span>Пароль</span><span data-hide-granted="keychain">&nbsp;</span><span class="perm-hidden" data-show-granted="keychain">••••••••</span></div><p class="perm-hidden dv-web-note" data-show-granted="keychain">Лицевой счёт и пароль подставлены из «В квартире»</p>${ui.button({ label: 'Войти', block: true, toast: 'Вход в кабинет УК' })}${ui.button({ label: 'Вернуться в приложение', variant: 'tertiary', block: true, back: true })}</div>`,
    `<div class="dv-quicktype"><button data-activate="keychain|fill" aria-label="Подставить пароль кабинета УК из «В квартире»">${ui.icon('key')}В квартире · 12-74</button></div>`,
  ],
});
