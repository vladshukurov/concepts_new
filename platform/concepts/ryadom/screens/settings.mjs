import { THEME } from './_shared.mjs';
import { own, longrun, route } from '../model.mjs';

/* Настройки в грамматике ВК: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'target', title: 'Цель недели', sub: `В пятницу вечером · осталось ${own.week.left} км`, toggle: true }),
        ui.cell({ icon: 'users', title: 'Кто идёт со мной', sub: `Новые участники лонграна · ${longrun.confirmed} из ${longrun.spots}`, toggle: true }),
        ui.cell({ icon: 'message-circle', title: 'Чат тренировки', sub: 'Звук и превью сообщений', toggle: false }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются в тренировке', go: 'meetup' }),
        ui.cell({ icon: 'clock', title: 'Оповещения', value: '2 сегодня', go: 'notif' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Пробежки', cells: [
        ui.cell({ icon: 'gauge', title: 'Единицы', value: 'км · мин/км', menu: ['км · мин/км', 'мили · мин/миля'] }),
        ui.cell({ icon: 'audio-lines', title: 'Свои подсказки на маршруте', sub: 'Голосом поверх музыки', toggle: true }),
        ui.cell({ icon: 'download', title: 'Скачанные маршруты', sub: `${route.name} и Медеу · 32 МБ`, value: 'Очистить', toast: 'Маршруты удалены с iPhone, скачаются снова' }),
        ui.cell({ icon: 'layout-grid', title: 'Виджет на экран «Домой»', sub: 'Неделя и ближайшая тренировка', activate: 'appgroups|widget' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'eye', title: 'Мой дневник', value: 'Только я', menu: ['Только я', 'Знакомые в клубе'] }),
        ui.cell({ icon: 'route', title: 'Кто видит меня в пути', value: 'Группа', menu: ['Группа', 'Только тренер', 'Никто'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Дневник на iPhone останется', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (14)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vybeg.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vybeg.app/privacy' }),
      ] }) }),
    ]),
  ],
});
