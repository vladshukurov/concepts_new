import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'invite', theme: THEME,
  body: [
    ui.nav({ title: 'Пригласить', back: 'close' }),
    ui.scroll([
      ui.section({ children: `<div class="kl-event"><small>Ссылка в СНТ «Берёзка»</small><strong>sotki.app/v/berezka-3b</strong><span>Действует семь дней</span></div>` }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'copy', title: 'Скопировать', sub: 'Отправить через любое приложение', toast: 'Ссылка скопирована' }),
        ui.cell({ icon: 'share', title: 'Поделиться', sub: 'Системное меню iPhone', toast: 'Меню «Поделиться»' }),
        ui.cell({ icon: 'clock', title: 'Срок действия', value: '7 дней', toast: 'Срок · 7 дней · 30 дней · без срока' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Отправить ссылку', icon: 'send', block: true, primary: true, toast: 'Приглашение отправлено' })]) }),
    ]),
  ],
});
