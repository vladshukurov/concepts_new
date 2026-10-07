import { THEME, TABS } from './_shared.mjs';
import { me } from '../model.mjs';

/* Настройки — это профиль, как в Telegram: фото, имя, номер и ник, дальше группы настроек */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'qr-code', label: 'Мой QR-код', toast: 'QR-код профиля на экране' })),
    ui.section({ children: `<div class="sb-me">${ui.avatar(me.initial, { large: true })}<h1>${me.name}</h1><p class="ui-sub">${me.phone} · @nika_r</p></div>` }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'camera', title: 'Изменить фото', menu: ['Снять фото>camera', 'Выбрать из медиатеки>attach'] }),
      ui.cell({ icon: 'at-sign', title: 'Имя пользователя', value: '@nika_r' }),
      ui.cell({ icon: 'info', title: 'О себе', value: 'Казань · вожу группы' }),
      ui.cell({ icon: 'user', title: 'Аккаунт', value: 'Номер, выход', go: 'account' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'bookmark', title: 'Избранное', value: '38', go: 'saved' }),
      ui.cell({ icon: 'phone', title: 'Недавние звонки', value: '1 пропущенный', go: 'calls' }),
      ui.cell({ icon: 'smartphone', title: 'Устройства', value: '2', toast: 'Этот iPhone и iPad Ники' }),
      ui.cell({ icon: 'folder', title: 'Папки с чатами', value: 'Поездки, Личные', toast: 'Папки — чипсы над списком чатов' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'bell', title: 'Уведомления и звуки', value: 'Колокольчик', toast: 'Личные и поездки — с превью, остальное без звука' }),
      ui.cell({ icon: 'lock', title: 'Конфиденциальность', value: 'Номер — контактам', toast: 'Номер видят только ваши контакты' }),
      ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Без подбора', go: 'ads' }),
      ui.cell({ icon: 'database', title: 'Данные и память', value: '2,4 ГБ', toast: 'Альбомы поездок — 1,9 ГБ, чаты — 0,5 ГБ' }),
      ui.cell({ icon: 'palette', title: 'Оформление', value: 'Как в системе' }),
      ui.cell({ icon: 'globe', title: 'Язык', value: 'Русский' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'layout-grid', title: 'Виджет «Ближайший сбор»', value: 'Не добавлен', activate: 'appgroups|widget' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'message-circle', title: 'Задать вопрос', toast: 'Чат поддержки открыт' }),
      ui.cell({ icon: 'circle-alert', title: 'Вопросы о «В сборе»', toast: 'sbor.app/faq' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'settings' }),
});
