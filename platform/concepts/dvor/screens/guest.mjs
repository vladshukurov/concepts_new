import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'guest', theme: THEME,
  body: [
    ui.nav({ title: 'Гостевая сеть' }),
    ui.scroll([
      ui.section({ children: `<div class="dv-net"><span class="dv-net-ico">${ui.icon('wifi')}</span><div><strong>Dvor-Guest</strong><span>WPA2 · действует до 30 апреля</span></div></div>` }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Подключиться к Dvor-Guest', icon: 'wifi', block: true, ask: 'hotspot|guest|guest' }),
          ui.button({ label: 'Сканировать QR с лавочки', icon: 'qr-code', variant: 'secondary', block: true, go: 'scan' }),
        ]),
        ui.granted('hotspot', 'Вы в сети Dvor-Guest'),
        ui.denied('hotspot', 'Сеть придётся выбрать руками: Настройки → Wi-Fi → Dvor-Guest'),
        ui.denied('camera', 'Без камеры — имя и пароль ниже'),
      ] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'wifi', title: 'Сеть', value: 'Dvor-Guest' }),
        ui.cell({ icon: 'key', title: 'Пароль', value: 'dvor-2026', toast: 'Пароль скопирован' }),
      ] }) }),
    ]),
  ],
});
