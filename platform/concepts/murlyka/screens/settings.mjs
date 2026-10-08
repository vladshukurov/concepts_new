import { THEME } from './_shared.mjs';
import { reminder, storage, timer, records } from '../model.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки «Мурлыки»: свои события вечера, сон и воспроизведение, записи, тема, аккаунт */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'bell', title: 'Вечер', sub: `Напомнить начать укладывание в ${reminder.time}`, go: 'evening' }),
        ui.cell({ icon: 'mic', title: 'Новая запись от семьи', sub: 'Когда папа или бабушка прислали колыбельную', toggle: true }),
        ui.cell({ icon: 'moon', title: 'Тихо после укладывания', sub: 'До 07:00 уведомления приходят тихо', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Сон и воспроизведение', cells: [
        ui.cell({ icon: 'timer', title: 'Таймер сна', value: `${timer.on} мин`, menu: timer.options.map((o) => `${o.min} мин`) }),
        ui.cell({ icon: 'volume-2', title: 'Тихо затухать', sub: 'Последние две минуты всё тише', toggle: true }),
        ui.cell({ icon: 'repeat', title: 'Вечер по кругу', sub: 'Пока не сработает таймер', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Записи', cells: [
        ui.cell({ icon: 'mic', title: 'Из «Диктофона»', value: records(storage.recorder) }),
        ui.cell({ icon: 'folder', title: 'Из «Файлов»', value: records(storage.files) }),
        ui.cell({ icon: 'database', title: 'Копия в iCloud', toggle: true }),
        ui.cell({ icon: 'download', title: 'Загружено', sub: `Записи и обложки · ${storage.size}`, value: 'Очистить', toast: `Освобождено ${storage.size}` }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Тёмная', menu: ['Как в системе', 'Светлая', 'Тёмная'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'users', title: 'Кто слышит записи', value: 'Только семья' }),
        ui.cell({ icon: 'activity', title: 'Отчёты о сбоях', sub: 'Без записей и имён', toggle: false }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', sub: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти из аккаунта', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', className: 'mr-danger', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.2.0' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'murlyka.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'murlyka.app/privacy' }),
      ] }) }),
    ]),
  ],
});
