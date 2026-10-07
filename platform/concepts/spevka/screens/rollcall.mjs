import { THEME, roll, came } from './_shared.mjs';
import { choir, today, people, me } from '../model.mjs';

/* Кто пришёл на спевку: отметка по сети зала, кого ещё нет и кто придёт на сводную */
const here = [
  [people.denis, 'бас · староста · DK_Zal_2 · 18:40'],
  [people.vera, 'альт · DK_Zal_2 · 18:48'],
  [people.lena, 'сопрано · DK_Zal_2 · 18:51'],
  [people.anya, 'альт · DK_Zal_2 · 18:55'],
  [people.timur, 'тенор · DK_Zal_2 · 19:04'],
  [people.sergey, 'бас · DK_Zal_2 · 19:05'],
];
const v = today.byVoice;
export default (ui) => ui.screen({
  id: 'rollcall', theme: THEME,
  body: [
    ui.nav({ title: 'Кто пришёл', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с отметками', menu: ['Отметить вручную=Отметка без сети зала', 'Закрыть отметки'] }) }),
    ui.scroll([
      ui.section({ children: [
        `<div class="sp-roll"><strong>Пришли ${came(today.came, today.cameMe)} из ${choir.people}</strong><span>спевка в ${today.time} · ${choir.dk}, ${choir.hall}</span>${roll(today.came, choir.people)}</div>`,
        ui.actions([ui.button({ label: 'Я на спевке', icon: 'wifi', block: true, activate: 'wifiinfo|rollcall', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'wifiinfo', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `${me.name} · на спевке`, sub: `альт · по сети ${choir.ssid} · 19:07` }),
      ]) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('history', { round: true }), title: 'Тимур и Сергей отметились', sub: `Отметки «на спевке» обновились в ${today.synced}`, subWrap: true }),
      ]) }),
      ui.section({ title: 'Ещё нет', meta: `<span data-hide-granted="wifiinfo">9</span><span class="perm-hidden" data-show-granted="wifiinfo">8</span>`, children: ui.list([
        ui.row({ lead: ui.avatar(people.oleg.initial), title: people.oleg.name, sub: 'бас · пишет «опаздываю на 10 минут»' }),
        ui.row({ lead: ui.avatar(people.yulia.initial), title: people.yulia.name, sub: 'альт · болеет, предупредила в чате альтов' }),
        ui.row({ lead: ui.avatar(people.kostya.initial), title: people.kostya.name, sub: 'тенор · не в сети с 17:40' }),
        ui.row({ lead: ui.avatar(people.dasha.initial), title: people.dasha.name, sub: 'сопрано · новенькая, придёт на сводную в субботу' }),
        `<div data-hide-granted="wifiinfo">${ui.row({ lead: ui.avatar(me.initial), title: me.name, sub: 'альт · вы, ещё не отметились' })}</div>`,
        ui.row({ lead: ui.leadIcon('users', { round: true }), title: 'Ещё 4', sub: 'сопрано 1, тенор 1, басы 2' }),
      ]) }),
      ui.section({ title: 'Пришли', meta: `${came(today.came, today.cameMe)}`, children: ui.list([
        ...here.map(([p, sub]) => ui.row({ lead: ui.avatar(p.initial), title: p.name, sub })),
        ui.row({ lead: ui.leadIcon('list-checks', { round: true }), title: `Сопрано ${v.soprano} из 10 · альты ${came(v.alto, v.alto + 1)} из 8`, sub: `Тенора ${v.tenor} из 7 · басы ${v.bass} из 7` }),
      ]) }),
      ui.section({ title: 'Кто придёт', children: ui.list([
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: 'Сводная в субботу: придут 27 из 32', sub: '3 не смогут, 2 не ответили · опрос в чате хора' }),
      ]) }),
    ]),
  ],
});
