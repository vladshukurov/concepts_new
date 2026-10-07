import { THEME } from './_shared.mjs';
import { studio, project, people, me } from '../model.mjs';

/* Ссылка-приглашение новичку в чат проекта. QR — данные, нарисованные кодом: детерминированная сетка 21×21 с тремя метками */
const qr = () => {
  let x = 1009;
  const finder = (r, c) => [[0, 0], [0, 14], [14, 0]].some(([fr, fc]) => r >= fr && r < fr + 7 && c >= fc && c < fc + 7);
  const ring = (r, c) => [[0, 0], [0, 14], [14, 0]].some(([fr, fc]) => {
    const dr = r - fr, dc = c - fc;
    return dr >= 0 && dr < 7 && dc >= 0 && dc < 7 && (dr === 0 || dr === 6 || dc === 0 || dc === 6 || (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4));
  });
  const cells = [];
  for (let r = 0; r < 21; r++) for (let c = 0; c < 21; c++) {
    x = (x * 9301 + 49297) % 233280;
    const on = finder(r, c) ? ring(r, c) : x / 233280 > 0.52;
    cells.push(`<i${on ? ' class="is-on"' : ''}></i>`);
  }
  return `<div class="lt-qr" aria-hidden="true">${cells.join('')}</div>`;
};
export default (ui) => ui.screen({
  id: 'invite', theme: THEME,
  body: [
    ui.nav({ title: 'Ссылка-приглашение' }),
    ui.scroll([
      ui.section({ children: [
        qr(),
        `<div class="lt-link"><strong>${studio.link}</strong><span>Чат «${project.name}» · действует до 9 октября, 23:59</span></div>`,
        ui.actions([
          ui.button({ label: 'Отправить в Сообщения', icon: 'send', block: true, go: 'sms', primary: true }),
          ui.button({ label: 'Скопировать ссылку', icon: 'copy', variant: 'secondary', block: true, toast: 'Ссылка скопирована' }),
        ]),
      ] }),
      ui.section({ title: 'Вступили по ссылке', meta: '3', children: ui.list([
        ui.row({ lead: ui.avatar(me.initial), title: me.name, sub: '21 сентября, 9:40 · первый день в студии' }),
        ui.row({ lead: ui.avatar(people.roma.initial), title: people.roma.name, sub: '3 сентября, 18:02 · из Сообщений, работает удалённо' }),
        ui.row({ lead: ui.avatar(people.katya.initial), title: people.katya.name, sub: '29 сентября · отсканировала QR на летучке' }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user-check', title: 'Одобрять вступление', sub: 'Новые участники ждут подтверждения', toggle: false }),
        ui.cell({ icon: 'unlink', title: 'Сбросить ссылку', sub: 'Старая перестанет открывать чат', toast: 'Ссылка сброшена, новая — vkurse.app/j/polden-sever2' }),
      ] }) }),
    ]),
  ],
});
