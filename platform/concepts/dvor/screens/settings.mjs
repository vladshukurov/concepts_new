import { THEME } from './_shared.mjs';
import { house, people, meters, cleanup } from '../model.mjs';

/* Настройки в грамматике ВК: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'wrench', title: 'Ответы по моим заявкам', sub: 'Мастер принял, перенёс или закрыл', toggle: true }),
        ui.cell({ icon: 'calendar', title: 'События дома за день', sub: `Ближайшее — субботник, ${cleanup.day}`, toggle: true }),
        ui.cell({ icon: 'gauge', title: 'Срок показаний за 3 дня', sub: `Сейчас до ${meters.deadlineLabel}`, toggle: false }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются в заявке, где их ждёте', go: 'post' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Квартира', cells: [
        ui.cell({ icon: 'house', title: 'Мой дом', sub: `${house.address}, кв. ${people.me.flat} · подтверждён`, go: 'verify' }),
        ui.cell({ icon: 'gauge', title: 'Счётчики', value: 'Вода, свет', go: 'meters' }),
        ui.cell({ icon: 'layout-grid', title: 'Виджет на экран «Домой»', value: 'Не добавлен', activate: 'appgroups|widget' }),
        ui.cell({ icon: 'images', title: 'Хроника на iPhone', sub: '312 МБ · 42 снимка', value: 'Очистить', toast: 'Копии снимков удалены, хроника в облаке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок Face ID', toggle: false, ask: 'faceid|lock|settings' }),
        ui.cell({ icon: 'eye', title: 'Кто видит квартиру', value: '3 подъезд', menu: ['3 подъезд', 'Весь дом', 'Никто'] }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: '<span data-hide-granted="tracking">Случайная</span><span class="perm-hidden" data-show-granted="tracking">Местная</span>', go: 'ads' }),
      ] }) }),
      ui.denied('faceid'),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Данные на iPhone останутся', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (14)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'dvor.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'dvor.app/privacy' }),
      ] }) }),
    ]),
  ],
});
