import { THEME } from './_shared.mjs';
import { reminder, records } from '../model.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки «Метронома»: свои события практики, звук метронома, записи занятий, тема, аккаунт */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'bell', title: 'Напоминание', sub: `Позаниматься в ${reminder.time} · в сегодняшнем занятии`, go: 'today' }),
        ui.cell({ icon: 'target', title: 'Цель темпа взята', sub: 'Когда пьеса дошла до целевого темпа', toggle: true }),
        ui.cell({ icon: 'calendar', title: 'Два дня без занятий', sub: 'Мягко напомним, на чём остановились', toggle: false }),
        ui.cell({ icon: 'chart-column', title: 'Итоги недели', sub: 'В воскресенье вечером', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Метроном', cells: [
        ui.cell({ icon: 'audio-lines', title: 'Звук щелчка', value: 'Дерево', menu: ['Дерево', 'Клаве', 'Электронный'] }),
        ui.cell({ icon: 'volume-2', title: 'Акцент на первую долю', toggle: true }),
        ui.cell({ icon: 'timer-reset', title: 'Отсчёт перед стартом', value: '1 такт', menu: ['Без отсчёта', '1 такт', '2 такта'] }),
        ui.cell({ icon: 'lock', title: 'Метроном', sub: 'Играть с погашенным экраном', go: 'metronome' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Записи занятий', cells: [
        ui.cell({ icon: 'mic', title: 'Из «Диктофона»', value: `${records.recorder} записи` }),
        ui.cell({ icon: 'folder', title: 'Из «Файлов»', value: `${records.files} записей` }),
        ui.cell({ icon: 'database', title: 'Копия в iCloud', toggle: true }),
        ui.cell({ icon: 'download', title: 'Загружено', sub: `Записи и ноты · ${records.size}`, value: 'Очистить', toast: `Освобождено ${records.size}` }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Тёмная', menu: ['Как в системе', 'Светлая', 'Тёмная'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'eye', title: 'Занятия и записи', value: 'Только я' }),
        ui.cell({ icon: 'activity', title: 'Отчёты о сбоях', sub: 'Без записей и заметок', toggle: false }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', sub: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти из аккаунта', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', className: 'mt-danger', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '3.1.0' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'metronom.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'metronom.app/privacy' }),
      ] }) }),
    ]),
  ],
});
