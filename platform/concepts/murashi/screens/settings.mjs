import { THEME } from './_shared.mjs';
import { storage, timer, zima, soundsN } from '../model.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки «Мурашей»: свои напоминания, сон и воспроизведение, записи, тема, аккаунт */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'cloud-snow', title: 'Первый снег', sub: `Напомнить записать · ${zima.remind.date}`, go: 'zima' }),
        ui.cell({ icon: 'moon', title: 'Тихо ночью', sub: 'С 23:00 до 08:00 без звука', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Сон и воспроизведение', cells: [
        ui.cell({ icon: 'timer', title: 'Таймер сна', value: `${timer.min} мин`, menu: timer.options }),
        ui.cell({ icon: 'volume-2', title: 'Тихо затухать', sub: 'Последние три минуты всё тише', toggle: true }),
        ui.cell({ icon: 'repeat', title: 'Звук по кругу', sub: 'Пока не сработает таймер', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Записи', cells: [
        ui.cell({ icon: 'mic', title: 'Из «Диктофона»', value: soundsN(storage.recorder) }),
        ui.cell({ icon: 'folder', title: 'Из «Файлов»', value: soundsN(storage.files) }),
        ui.cell({ icon: 'database', title: 'Копия в iCloud', toggle: true }),
        ui.cell({ icon: 'download', title: 'Загружено', sub: `Звуки и фото мест · ${storage.size}`, value: 'Очистить', toast: `Освобождено ${storage.size}` }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Тёмная', menu: ['Как в системе', 'Светлая', 'Тёмная'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'map-pin', title: 'Места в звуках', value: 'Только у меня' }),
        ui.cell({ icon: 'activity', title: 'Отчёты о сбоях', sub: 'Без записей и мест', toggle: false }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', sub: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти из аккаунта', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', className: 'ms-danger', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0.3' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'murashi.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'murashi.app/privacy' }),
      ] }) }),
    ]),
  ],
});
