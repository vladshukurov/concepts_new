import { THEME, TABS } from './_shared.mjs';
import { me } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Настройки'),
    ui.section({ children: ui.list([ui.row({ lead: ui.avatar(me.initial), title: me.name, sub: `${me.phone} · Профиль и аккаунт`, go: 'account' })]) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'bookmark', title: 'Избранное', value: '38', go: 'saved' }),
      ui.cell({ icon: 'users', title: 'Контакты', value: '27 из поездок', go: 'contacts' }),
      ui.cell({ icon: 'layout-grid', title: 'Виджет «Ближайший сбор»', value: 'Не добавлен', activate: 'appgroups|widget' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Уведомления', cells: [
      ui.cell({ icon: 'message-circle', title: 'Личные чаты', sub: 'Имя, фото и текст в уведомлении', toggle: true }),
      ui.cell({ icon: 'route', title: 'Чаты поездок', sub: 'Сборы и перекличка — всегда, остальное — без звука', toggle: true }),
      ui.cell({ icon: 'bell', title: 'Звук', value: 'Колокольчик', toast: 'Звук «Колокольчик»' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
      ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Без подбора', go: 'ads' }),
      ui.cell({ icon: 'phone', title: 'Номер телефона', value: 'Мои контакты', toast: 'Номер видят только ваши контакты' }),
      ui.cell({ icon: 'smartphone', title: 'Устройства', value: 'iPad Ники, 2 дня назад', toast: 'Активный сеанс один — iPad' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Данные', cells: [
      ui.cell({ icon: 'download', title: 'Автозагрузка медиа', value: 'Только Wi‑Fi', toast: 'Фото и кружки грузятся только в Wi‑Fi' }),
      ui.cell({ icon: 'folder', title: 'Память', value: '2,4 ГБ', toast: 'Альбомы поездок — 1,9 ГБ, чаты — 0,5 ГБ' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'settings' }),
});
