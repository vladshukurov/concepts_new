import { THEME } from './_shared.mjs';

/* Домашний Wi‑Fi: провайдер поставил новый роутер, сеть и пароль — с наклейки на корпусе.
   Подключение из приложения, сеть записывается в профиль дома — по ней работает отметка «я дома» */
export default (ui) => ui.screen({
  id: 'guest', theme: THEME,
  body: [
    ui.nav({ title: 'Домашний Wi‑Fi' }),
    ui.scroll([
      ui.section({ children: `<div class="dv-net"><span class="dv-net-ico">${ui.icon('wifi')}</span><div><strong>Polevaya-12-5G</strong><span>Новый роутер провайдера · поставили 9 апреля</span></div></div>` }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Подключиться к Polevaya-12-5G', icon: 'wifi', block: true, ask: 'hotspot|guest|guest' }),
          ui.button({ label: 'Сканировать наклейку роутера', icon: 'qr-code', variant: 'secondary', block: true, go: 'scan' }),
        ]),
        ui.denied('hotspot'),
        ui.list([ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: 'Подключено к Polevaya-12-5G', sub: 'Сеть записана в профиль дома вместо Polevaya-12', shownAfter: 'hotspot' })]),
        ui.denied('camera'),
      ] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'key', title: 'Пароль с наклейки', value: 'k7m4-2xq9', toast: 'Пароль скопирован' }),
      ] }) }),
      ui.section({ title: 'Старая сеть', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi'), title: 'Polevaya-12', sub: 'Роутер отключат 15 апреля · по ней отмечали «я дома»' }),
      ]) }),
    ]),
  ],
});
