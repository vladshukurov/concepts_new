import { THEME, TABS } from './_shared.mjs';
import { me } from '../model.mjs';

/* Настройки — это профиль, как в Telegram: фото, имя, номер и ник, дальше группы настроек */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'qr-code', label: 'Мой QR-код', toast: 'QR-код профиля на экране' })),
    ui.section({ children: `<div class="lt-me">${ui.avatar(me.initial, { large: true })}<h1>${me.name}</h1><p class="ui-sub">${me.phone} · ${me.nick}</p></div>` }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'camera', title: 'Изменить фото', menu: ['Снять фото>camera', 'Выбрать из медиатеки>attach'] }),
      ui.cell({ icon: 'at-sign', title: 'Имя пользователя', value: me.nick }),
      ui.cell({ icon: 'info', title: 'О себе', value: 'Менеджер проектов, «Полдень»' }),
      ui.cell({ icon: 'user', title: 'Аккаунт', value: 'Номер, выход', go: 'account' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'bookmark', title: 'Избранное', value: '27', go: 'saved' }),
      ui.cell({ icon: 'phone', title: 'Недавние звонки', value: '1 пропущенный', go: 'calls' }),
      ui.cell({ icon: 'smartphone', title: 'Устройства', value: '2', toast: 'Этот iPhone и MacBook Иры' }),
      ui.cell({ icon: 'folder', title: 'Папки с чатами', value: 'Проекты, Личные', toast: 'Папки — чипсы над списком чатов' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'bell', title: 'Уведомления и звуки', value: 'Колокольчик', toast: 'Личные и проекты — с превью, «Гости дня» без звука' }),
      ui.cell({ icon: 'lock', title: 'Конфиденциальность', value: 'Номер — коллегам', toast: 'Номер видят только коллеги и контакты' }),
      ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Без подбора', go: 'ads' }),
      ui.cell({ icon: 'database', title: 'Данные и память', value: '3,1 ГБ', toast: 'Файлы проектов — 2,4 ГБ, записи летучек — 0,5 ГБ, чаты — 0,2 ГБ' }),
      ui.cell({ icon: 'palette', title: 'Оформление', value: 'Как в системе' }),
      ui.cell({ icon: 'globe', title: 'Язык', value: 'Русский' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'layout-grid', title: 'Виджет «Ближайшая летучка»', value: 'Не добавлен', activate: 'appgroups|widget' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'message-circle', title: 'Задать вопрос', toast: 'Чат поддержки открыт' }),
      ui.cell({ icon: 'circle-alert', title: 'Вопросы о «В курсе»', toast: 'vkurse.app/faq' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'settings' }),
});
