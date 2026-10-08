import { THEME } from './_shared.mjs';
import { own, plants } from '../model.mjs';

/* Настройки в грамматике ВК: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'droplets', title: 'Полив в день полива', sub: 'В 10:00 · сегодня три растения', toggle: true }),
        ui.cell({ icon: 'sparkles', title: 'Подкормка и пересадка', sub: 'Фикус до весны без подкормок', toggle: true }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'Звук и превью на экране блокировки', toggle: true }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются в карточке фикуса', go: plants.ficus.id }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Растения', cells: [
        ui.cell({ icon: 'clock', title: 'Время напоминаний', value: '10:00', menu: ['8:00', '10:00', '19:00'] }),
        ui.cell({ icon: 'cloud-rain', title: 'Пропуск, если грунт влажный', toggle: true }),
        ui.cell({ icon: 'layout-grid', title: 'Полив на экране «Домой»', sub: 'Кого полить сегодня', go: 'widget' }),
        ui.cell({ icon: 'images', title: 'Фото дневника на iPhone', sub: `1,1 ГБ · ${own.entries} записей`, value: 'Очистить', toast: 'Копии фото удалены, дневник в облаке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'shield', title: 'Конфиденциальность', sub: 'Данные и реклама', go: 'privacy' }),
        ui.cell({ icon: 'eye', title: 'Кто видит дневник', value: 'Только я', menu: ['Только я', 'Ира и мама', 'Все знакомые'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Дневник на iPhone останется', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (14)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vazon.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vazon.app/privacy' }),
      ] }) }),
    ]),
  ],
});
