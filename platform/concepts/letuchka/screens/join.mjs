import { THEME } from './_shared.mjs';
import { project, me, studio, standup, guests } from '../model.mjs';

/* Ссылка-приглашение открылась в приложении: чат проекта до вступления — кто там, что завтра */
export default (ui) => ui.screen({
  id: 'join', theme: THEME,
  body: [
    ui.nav({ title: 'Приглашение', back: 'close' }),
    ui.scroll([
      `<div class="lt-head">${ui.avatar(project.initial, { large: true })}<h1 class="ui-title">${project.name}</h1><p class="ui-sub">Чат проекта · ${project.people} участников · пригласила ${me.name}</p></div>`,
      ui.section({ children: [
        ui.usersStack({ faces: ['ИС', 'ПИ', 'ЛБ'], text: 'Ира, Паша, Лера и ещё 4 в чате' }),
        ui.actions([
          ui.button({ label: 'Вступить в чат проекта', block: true, go: 'project', primary: true }),
          ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
        ]),
      ] }),
      ui.section({ title: 'Первый день', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: standup.time }), title: 'Летучка студии', sub: `${standup.room} переговорка · каждый день, 15 минут` }),
        ui.row({ lead: ui.leadIcon('', { text: guests[1][0] }), title: 'Знакомство с командой', sub: 'Малая переговорка · Паша и Ира' }),
      ]) }),
      ui.section({ children: ui.miniInfo([
        { icon: 'map-pin', text: `Офис: ${studio.office}, ${studio.floor}` },
        { icon: 'wifi', text: `Гостевой Wi‑Fi ${studio.guestSsid} — в чате «Гости дня»` },
        { icon: 'folder', text: `${project.files} файлов проекта: гайд, логотип, ролик` },
      ]) }),
    ]),
  ],
});
