import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: [ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'С именем и фото отправителя', toggle: false, activate: 'commnotif|settings' }),
        ui.cell({ icon: 'eye', title: 'Мой дневник', value: 'Только я' }),
        ui.cell({ icon: 'dices', title: 'Коллекция', value: 'Только я' }),
      ] })] }),
      ui.section({ children: ui.group({ label: 'Вне приложения', cells: [
        ui.cell({ icon: 'layout-grid', title: 'Виджет на экран «Домой»', sub: 'Ближайший стол и места', activate: 'appgroups|widget' }),
        ui.cell({ icon: 'key', title: 'Бронь в клубе', value: 'bron-polka.kz', activate: 'autofill|fill' }),
      ] }) }),
    ]),
  ],
});
