/* Настройки «Мотива»: события своих набросков, запись и воспроизведение, хранилище, тема, аккаунт */
const THEME = 'vk-dark';
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'bell', title: 'Напоминание дописать', value: `<span data-hide-granted="push">Выключено</span><span class="perm-hidden" data-show-granted="push">завтра в 20:00</span>`, go: 'result' }),
        ui.cell({ icon: 'file-text', title: 'Текст из блокнота разобран', sub: 'Когда строки встали в набросок', toggle: true }),
        ui.cell({ icon: 'mic', title: 'Запись без метки неделю', sub: 'Напомнить разобрать, раз в неделю', toggle: false }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Запись и воспроизведение', cells: [
        ui.cell({ icon: 'audio-lines', title: 'Качество записи', value: 'Высокое', menu: ['Высокое=Качество записи высокое', 'Обычное=Качество записи обычное'] }),
        ui.cell({ icon: 'play', title: 'Продолжать с места остановки', sub: 'Как у «Припева про дождь» с 0:57', toggle: true }),
        ui.cell({ icon: 'repeat', title: 'Повтор версии по кругу', toggle: false }),
        ui.cell({ icon: 'moon', title: 'Таймер сна', value: 'Выключен', menu: ['15 минут=Остановим через 15 минут', '30 минут=Остановим через 30 минут', 'Выключен=Таймер выключен'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Хранилище', cells: [
        ui.cell({ icon: 'database', title: 'Загружено 1,4 ГБ', sub: 'Записи 1,2 ГБ · фото текстов 0,2 ГБ', value: 'Очистить', menu: ['Удалить фото уже разобранных текстов=Освобождено 0,2 ГБ', 'Отмена'] }),
        ui.cell({ icon: 'folder', title: 'Импорт из «Файлов»', sub: 'Голосовые и демо в m4a и wav', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'lock', title: 'Кто слышит наброски', value: 'Только я', menu: ['Только я=Наброски слышите только вы', 'По ссылке=Версию услышит тот, кому дали ссылку'] }),
        ui.cell({ icon: 'eye', title: 'Скрывать названия на экране блокировки', toggle: false }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'palette', title: 'Тема', value: 'Тёмная', menu: ['Как в системе=Тема как в системе', 'Светлая=Светлая тема', 'Тёмная=Тёмная тема'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'smartphone', title: 'Номер телефона', value: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Наброски на iPhone останутся', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'motiv.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'motiv.app/privacy' }),
      ] }) }),
    ]),
  ],
});
