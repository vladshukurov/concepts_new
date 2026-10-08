import { THEME } from './_shared.mjs';
import { records } from '../model.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки «Мелодии»: звук, уведомления о своих событиях, записи, тема, аккаунт */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Звук', cells: [
        ui.cell({ icon: 'activity', title: 'Затухание по умолчанию', value: '2 с', menu: ['Без затухания', '1 с', '2 с', '3 с'] }),
        ui.cell({ icon: 'scissors', title: 'Длина фрагмента', value: '20 с', menu: ['10 с', '20 с', '30 с'] }),
        ui.cell({ icon: 'volume-2', title: 'Выравнивать громкость', sub: 'тихие записи станут слышнее', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'calendar', title: 'Дни рождения', sub: 'напоминание у бабушки · 13 октября', go: 'babushka' }),
        ui.cell({ icon: 'alarm-clock', title: 'Будильник', sub: 'будить с погашенным экраном', go: 'alarm' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Записи', cells: [
        ui.cell({ icon: 'mic', title: 'Из «Диктофона»', value: `${records.recorder} записи` }),
        ui.cell({ icon: 'folder', title: 'Из «Файлов»', value: `${records.files} файла` }),
        ui.cell({ icon: 'database', title: 'Копия в iCloud', toggle: true }),
        ui.cell({ icon: 'download', title: 'Загружено', sub: `Записи и мелодии · ${records.size}`, value: 'Очистить', toast: `Освобождено ${records.size}` }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Тёмная', menu: ['Как в системе', 'Светлая', 'Тёмная'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'eye', title: 'Мелодии и записи', value: 'Только я' }),
        ui.cell({ icon: 'activity', title: 'Отчёты о сбоях', sub: 'Без записей и имён контактов', toggle: false }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', sub: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти из аккаунта', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', className: 'md-danger', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0.0' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'melodiya.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'melodiya.app/privacy' }),
      ] }) }),
    ]),
  ],
});
