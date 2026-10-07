import { THEME } from './_shared.mjs';
import { club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'invite', theme: THEME,
  body: [
    ui.nav({ title: 'Пригласить', back: 'close' }),
    ui.scroll([
      ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('link', { accent: true }), title: 'vybeg.app/central', sub: `Бегать с ${club.name} · ссылка на 7 дней` })]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'copy', title: 'Скопировать', toast: 'Ссылка скопирована' }),
        ui.cell({ icon: 'clock', title: 'Срок действия', value: '7 дней' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Отправить ссылку', icon: 'send', block: true, toast: 'Приглашение отправлено|friends', primary: true })]) }),
    ]),
  ],
});
