import { THEME } from './_shared.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки в грамматике ВК Видео: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'calendar', title: 'Матч накануне', sub: 'Время, поле и кто придёт', toggle: true }),
        ui.cell({ icon: 'square-play', title: 'Новый момент матча', sub: 'Кто-то снял со скамейки', toggle: true }),
        ui.cell({ icon: 'sparkles', title: 'Голосование за лучший момент', sub: 'В понедельник, когда открывается', toggle: false }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются на странице следующего матча', go: 'nextmatch' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Съёмка и просмотр', cells: [
        ui.cell({ icon: 'timer', title: 'Длина момента', value: 'До 20 секунд', menu: 'До 10 секунд=Момент до 10 секунд|До 20 секунд=Момент до 20 секунд|До 30 секунд=Момент до 30 секунд' }),
        ui.cell({ icon: 'play', title: 'Автовоспроизведение моментов', toggle: true }),
        ui.cell({ icon: 'gauge', title: 'Качество видео', value: 'Авто', menu: 'Авто=Качество авто|1080p=Качество 1080p|720p=Качество 720p' }),
        ui.cell({ icon: 'download', title: 'Моменты на iPhone', sub: '1,4 ГБ · 41 момент', value: 'Очистить', toast: 'Копии моментов удалены, сезон в облаке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'eye', title: 'Мои моменты видят', value: 'Состав команды', menu: 'Состав команды=Моменты видит состав команды|Только я=Моменты видите только вы' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: '<span data-hide-granted="tracking">Без подбора</span><span class="perm-hidden" data-show-granted="tracking">По интересам</span>', go: 'ads' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Как в системе', menu: 'Как в системе=Тема как в системе|Светлая=Светлая тема|Тёмная=Тёмная тема' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Матчи и моменты останутся в облаке', menu: 'Выйти>phone' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (12)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vratar.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vratar.app/privacy' }),
      ] }) }),
    ]),
  ],
});
