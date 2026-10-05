import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: [ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'С именем и фото отправителя', toggle: false, activate: 'commnotif|settings' }),
        ui.cell({ icon: 'eye', title: 'Кто видит партии', value: 'Подписчики', toast: 'Партии видят подписчики' }),
        ui.cell({ icon: 'dices', title: 'Коллекция', value: 'Видна всем', toast: 'Коллекция видна всем' }),
      ] })] }),
    ]),
  ],
});
