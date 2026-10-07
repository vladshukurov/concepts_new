import { THEME } from './_shared.mjs';
import { project, standup, people, me, studio, demo } from '../model.mjs';

/* Сведения о чате проекта: всё, что команде нужно кроме переписки */
const crew = [
  [me.initial, me.name, `${me.role} · ведёт проект`],
  [people.pasha.initial, people.pasha.name, `${people.pasha.role} · в офисе`],
  [people.artem.initial, people.artem.name, `${people.artem.role} · у клиента до 13:00`],
  [people.lera.initial, people.lera.name, `${people.lera.role} · логотип v3`],
  [people.olya.initial, people.olya.name, `${people.olya.role} · тексты гайда`],
  [people.roma.initial, people.roma.name, `${people.roma.role} · удалённо`],
  [people.katya.initial, people.katya.name, `${people.katya.role} · ролик к демо`],
];
export default (ui) => ui.screen({
  id: 'projectinfo', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.textButton({ label: 'Изменить', toast: 'Открыт режим правки' }) }),
    ui.scroll([
      `<div class="lt-head">${ui.avatar(project.initial, { large: true })}<h1 class="ui-title">${project.name}</h1><p class="ui-sub">${project.full[0].toUpperCase() + project.full.slice(1)} · ${project.people} участников</p></div>`,
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'clock', title: `Летучка в ${standup.time}`, sub: `${standup.room} переговорка · перенесена с ${standup.was}`, value: 'апдейты', go: 'office' }),
        ui.cell({ icon: 'presentation', title: 'Переговорки', sub: 'Созвон с клиентом в 12:00, Большая', value: 'сегодня 6', go: 'rooms' }),
        ui.cell({ icon: 'folder', title: 'Файлы проекта', sub: 'Макеты, гайд, ролик к демо', value: `${project.files} файлов`, go: 'files' }),
        ui.cell({ icon: 'lock', title: 'Договоры и акты', sub: 'Договор, допсоглашение, 2 акта, реквизиты', value: '5 файлов', ask: 'faceid|docs|projectinfo' }),
      ] }) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'calendar-days', title: `Демо клиенту ${demo.label}`, sub: `${demo.where} · едут Ира и Паша` }),
        ui.cell({ icon: 'link', title: 'Ссылка-приглашение', sub: studio.link, value: '3 вступили', go: 'invite' }),
      ] }) }),
      ui.section({ title: 'Участники', meta: String(project.people), children: ui.list([
        ...crew.map(([ini, name, sub]) => ui.row({ lead: ui.avatar(ini), title: name, sub, ...(name === people.artem.name ? { go: 'chat' } : name === people.pasha.name ? { go: 'pasha' } : {}) })),
        ui.row({ lead: ui.leadIcon('user-plus', { round: true, accent: true }), title: 'Добавить из контактов', sub: 'Коллеги студии и адресная книга', go: 'contacts' }),
      ]) }),
    ]),
  ],
});
