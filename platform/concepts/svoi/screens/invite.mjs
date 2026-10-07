import { THEME } from './_shared.mjs';
import { family, people, me } from '../model.mjs';

/* QR ссылки-приглашения — данные, нарисованные кодом: детерминированная сетка 21×21 с тремя метками */
const qr = () => {
  let x = 2610;
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
  return `<div class="sv-qr" aria-hidden="true">${cells.join('')}</div>`;
};
export default (ui) => ui.screen({
  id: 'invite', theme: THEME,
  body: [
    ui.nav({ title: 'Ссылка-приглашение' }),
    ui.scroll([
      ui.section({ children: [
        qr(),
        `<div class="sv-link"><strong>${family.link}</strong><span>${family.name} · для Галины Гариповой · действует 7 дней</span></div>`,
        ui.actions([
          ui.button({ label: 'Отправить в Сообщения', icon: 'send', block: true, go: 'sms', primary: true }),
          ui.button({ label: 'Скопировать ссылку', icon: 'copy', variant: 'secondary', block: true, toast: 'Ссылка скопирована' }),
        ]),
      ] }),
      ui.section({ title: 'Вступили по ссылке', meta: '2', children: ui.list([
        ui.row({ lead: ui.avatar(people.oksana.initial), title: people.oksana.name, sub: '1 сентября, 12:40 · из Сообщений' }),
        ui.row({ lead: ui.avatar(people.roza.initial), title: people.roza.name, sub: '14 марта 2025 · Алина показала QR на кухне' }),
      ]) }),
      ui.section({ title: 'Ждём', meta: '1', children: ui.list([
        ui.row({ lead: ui.avatar(people.galya.initial), title: people.galya.name, sub: `мама Тимура · ссылка ушла вчера в 20:15 от ${me.short}` }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user-check', title: 'Одобрять вступление', sub: 'Новые участники ждут подтверждения', toggle: true }),
        ui.cell({ icon: 'unlink', title: 'Сбросить ссылку', sub: 'Старая перестанет открывать чат семьи', toast: 'Ссылка сброшена, новая — svoi.app/f/garipovy-2' }),
      ] }) }),
    ]),
  ],
});
