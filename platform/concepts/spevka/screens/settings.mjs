import { THEME, TABS } from './_shared.mjs';
import { me } from '../model.mjs';

/* Настройки — это профиль, как в Telegram: фото, имя, номер и ник, дальше группы настроек */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', ui.iconButton({ icon: 'qr-code', label: 'Мой QR-код', toast: 'QR-код профиля на экране' })),
    ui.section({ children: `<div class="sp-me">${ui.avatar(me.initial, { large: true })}<h1>${me.name}</h1><p class="ui-sub">${me.phone} · ${me.nick}</p></div>` }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'camera', title: 'Изменить фото', menu: ['Снять фото>camera', 'Выбрать из медиатеки>attach'] }),
      ui.cell({ icon: 'at-sign', title: 'Имя пользователя', value: '@olya_alt' }),
      ui.cell({ icon: 'info', title: 'О себе', value: 'Альт в хоре «Камертон»' }),
      ui.cell({ icon: 'user', title: 'Аккаунт', value: 'Номер, выход', go: 'account' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'bookmark', title: 'Избранное', value: '24', go: 'saved' }),
      ui.cell({ icon: 'phone', title: 'Недавние звонки', value: '2 пропущенных', go: 'calls' }),
      ui.cell({ icon: 'smartphone', title: 'Устройства', value: '2', toast: 'Этот iPhone и iPad Оли' }),
      ui.cell({ icon: 'folder', title: 'Папки с чатами', value: 'Хор, Личные', toast: 'Папки — чипсы над списком чатов' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'bell', title: 'Уведомления и звуки', value: 'Колокольчик', toast: 'Хор и личные — с превью, остальное без звука' }),
      ui.cell({ icon: 'lock', title: 'Конфиденциальность', value: 'Номер — контактам', toast: 'Номер видят только ваши контакты' }),
      ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Без подбора', go: 'ads' }),
      ui.cell({ icon: 'database', title: 'Данные и память', value: '1,3 ГБ', toast: 'Видео концертов — 1,1 ГБ, партии — 46 МБ, чаты — 0,2 ГБ' }),
      ui.cell({ icon: 'palette', title: 'Оформление', value: 'Как в системе' }),
      ui.cell({ icon: 'globe', title: 'Язык', value: 'Русский' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'layout-grid', title: 'Виджет «Спевка сегодня»', value: 'Не добавлен', activate: 'appgroups|widget' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'message-circle', title: 'Задать вопрос', toast: 'Чат поддержки открыт' }),
      ui.cell({ icon: 'circle-alert', title: 'Вопросы о «В унисон»', toast: 'spevka.app/faq' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'settings' }),
});
