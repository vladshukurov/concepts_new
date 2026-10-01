import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'tv', theme: THEME,
  body: [
    ui.nav({ title: 'Смотреть на телевизоре', back: 'close' }),
    ui.scroll([
      ui.section({ children: [
        ui.group({ label: 'Сеть «Kovalev_5G»', cells: [
          ui.cell({ icon: 'tv', title: 'Телевизор в гостиной', sub: 'Готов к показу', ask: 'localnetwork|cast|tv' }),
          ui.cell({ icon: 'monitor', title: 'Кухня, приставка', sub: 'Занята другим показом', toast: 'Приставка занята' }),
          ui.cell({ icon: 'repeat-2', title: 'Обновить список', activate: 'wifiinfo|tv' }),
          ui.cell({ icon: 'key', title: 'Войти на телевизоре', sub: 'Без пароля — с этого телефона', activate: 'keychain|tv' }),
        ] }),
        ui.granted('wifiinfo', 'Сеть «Kovalev_5G» · два устройства'),
        ui.granted('keychain', 'Телевизор в гостиной вошёл в ваш аккаунт'),
        ui.denied('localnetwork', 'Телевизор не найти — видео играет на телефоне'),
      ] }),
      ui.section({ children: ui.actions([ui.button({ label: 'Смотреть на телефоне', variant: 'secondary', block: true, go: 'videos', primary: true })]) }),
    ]),
  ],
});
