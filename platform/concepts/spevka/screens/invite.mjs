import { THEME } from './_shared.mjs';
import { choir, people } from '../model.mjs';

/* QR ссылки-приглашения — данные, нарисованные кодом: детерминированная сетка 21×21 с тремя метками */
const qr = () => {
  let x = 1408;
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
  return `<div class="sp-qr" aria-hidden="true">${cells.join('')}</div>`;
};
export default (ui) => ui.screen({
  id: 'invite', theme: THEME,
  body: [
    ui.nav({ title: 'Ссылка-приглашение' }),
    ui.scroll([
      ui.section({ children: [
        qr(),
        `<div class="sp-link"><strong>${choir.link}</strong><span>${choir.name} · для новичков · до 31 октября</span></div>`,
        ui.actions([
          ui.button({ label: 'Отправить в Сообщения', icon: 'send', block: true, go: 'sms', primary: true }),
          ui.button({ label: 'Скопировать ссылку', icon: 'copy', variant: 'secondary', block: true, toast: 'Ссылка скопирована' }),
        ]),
      ] }),
      ui.section({ title: 'Вступили по ссылке', meta: '3', children: ui.list([
        ui.row({ lead: ui.avatar(people.dasha.initial), title: people.dasha.name, sub: '6 октября, 21:14 · из Сообщений' }),
        ui.row({ lead: ui.avatar(people.marina.initial), title: people.marina.name, sub: '21 сентября, 19:50 · отсканировала QR на спевке' }),
        ui.row({ lead: ui.avatar(people.timur.initial), title: people.timur.name, sub: '2 сентября, 15:02 · ссылка из объявления в ДК' }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user-check', title: 'Одобрять вступление', sub: 'Регент подтверждает новичка после прослушивания', toggle: true }),
        ui.cell({ icon: 'unlink', title: 'Сбросить ссылку', sub: 'Старая перестанет открывать хор', toast: 'Ссылка сброшена, новая — spevka.app/j/kamerton-2' }),
      ] }) }),
    ]),
  ],
});
