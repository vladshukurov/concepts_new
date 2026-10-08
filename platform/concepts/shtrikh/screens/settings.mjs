import { THEME } from './_shared.mjs';
import { own, city } from '../model.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки «Вглядись»: свои события встреч, снимки рисунков, приватность скетчбука, аккаунт */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'map-pin', title: 'Встреча в моих местах', sub: 'Когда кто-то зовёт рисовать там, где вы бывали', toggle: true }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'Чаты встреч и личные · превью на экране блокировки', toggle: true }),
        ui.cell({ icon: 'layers', title: 'Пора продолжить серию', sub: 'Первый снег для «Один двор, четыре погоды»', toggle: false }),
        ui.cell({ icon: 'calendar', title: 'Встречи', sub: 'Сообщить, если встречу перенесут', go: 'events' }),
        ui.cell({ icon: 'moon', title: 'Тихие часы', value: '23:00–08:00', go: 'notif' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Скетчбук', cells: [
        ui.cell({ icon: 'camera', title: 'Снимок рисунка', value: 'Оригинал, без сжатия' }),
        ui.cell({ icon: 'download', title: 'Зарисовки без сети', sub: `${own.stats.sketches} работ · ${own.offline}`, value: 'Очистить', toast: `Освобождено ${own.offline}` }),
        ui.cell({ icon: 'globe', title: 'Город', value: city.name, go: 'manual' }),
        ui.cell({ icon: 'layout-grid', title: 'Виджет серии', value: 'Не добавлен', activate: 'appgroups|widget' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'shield', title: 'Приватность', sub: 'Замок черновиков, вход в магазин материалов', go: 'privacy' }),
        ui.cell({ icon: 'eye', title: 'Кто видит скетчбук', value: 'Только я' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Случайная', go: 'ads' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', sub: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти из аккаунта', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', className: 'sh-danger', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '2.3.0' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vglyadis.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vglyadis.app/privacy' }),
      ] }) }),
    ]),
  ],
});
