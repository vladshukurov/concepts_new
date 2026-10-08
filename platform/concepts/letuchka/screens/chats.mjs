import { THEME, TABS } from './_shared.mjs';
import { project, people, ad, standup } from '../model.mjs';

/* Список чатов по времени: проект сверху, папки — чипсами на месте, реклама — одна карточка */
export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Чаты', ui.iconButton({ icon: 'square-pen', label: 'Новый чат', go: 'newchat' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по чатам и сообщениям' }) }),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Проекты', filter: 'projects' },
      { label: 'Личные', filter: 'personal' },
      { label: 'Непрочитанные', filter: 'unread' },
    ]) }),
    ui.section({ children: [
      ui.dialog({ initial: project.initial, name: project.name, text: '<b>Лера:</b> Фото · логотип v3 — гляньте до летучки', time: '9:58', unread: 6, go: 'project', primary: true, tags: ['projects', 'unread'] }),
      ui.dialog({ initial: people.artem.initial, name: people.artem.name, text: 'Ок. Лера в блокерах ждёт доступ к макетам — дашь до 12?', time: '9:49', you: true, online: true, go: 'chat', tags: ['personal'] }),
      ui.dialog({ initial: 'ГД', name: 'Гости дня', text: '<b>Вика:</b> Полина будет в 11:00, встречу на ресепшене', time: '9:40', unread: 2, go: 'guests', tags: ['unread'] }),
      ui.dialog({ initial: people.pasha.initial, name: people.pasha.name, text: 'Ок, беру. Презентацию соберу к среде вечером', time: '9:33', you: true, go: 'pasha', tags: ['personal'] }),
      ui.dialog({ initial: 'ИЗ', name: 'Избранное', text: 'Чек-лист демо.pdf · 96 КБ', time: '8:05', go: 'saved', tags: ['personal'] }),
    ] }),
    ui.section({ children: ui.adCard({ icon: 'utensils', title: ad.title, sub: `Реклама · ${ad.text}`, subGranted: 'Реклама · подобрано по интересам: обеды рядом с офисом', go: 'ads' }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats', mini: `<div class="perm-hidden" data-show-granted="audio">${ui.miniPlayer({ face: 'lt-mini-face', title: `Запись летучки ${standup.yesterday.dur}`, sub: `${standup.yesterday.label} · 6:12 из 18:00`, open: { go: 'recap', label: 'Запись летучки' }, playAction: { label: 'Пауза', toast: 'Пауза на 6:12' }, progressClass: 'lt-mini-fill' })}</div>` }),
});
