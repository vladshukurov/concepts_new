import { THEME } from './_shared.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки в грамматике ВК Видео: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'flag', title: 'Старт квеста', sub: 'За час до старта, всем командам', toggle: true }),
        ui.cell({ icon: 'square-play', title: 'Соперники сняли точку', sub: 'Ролик другой команды на маршруте', toggle: true }),
        ui.cell({ icon: 'map-pin', title: 'Команда ушла вперёд', sub: 'Если вы отстали больше чем на точку', toggle: false }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются на странице квеста', go: 'embankment' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Ролики и маршрут', cells: [
        ui.cell({ icon: 'timer', title: 'Длина ролика на точке', value: 'До 30 секунд', menu: 'До 15 секунд=Ролик до 15 секунд|До 30 секунд=Ролик до 30 секунд|До минуты=Ролик до минуты' }),
        ui.cell({ icon: 'play', title: 'Автовоспроизведение роликов', toggle: true }),
        ui.cell({ icon: 'gauge', title: 'Качество съёмки', value: '1080p', menu: '1080p=Качество 1080p|720p=Качество 720p — экономит трафик' }),
        ui.cell({ icon: 'download', title: 'Ролики на iPhone', sub: '860 МБ · 11 роликов', value: 'Очистить', toast: 'Копии роликов удалены, квесты в облаке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'eye', title: 'Мои ролики видят', value: 'Участники квеста', menu: 'Участники квеста=Ролики видят участники квеста|Только команда=Ролики видит только ваша команда' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: '<span data-hide-granted="tracking">Без подбора</span><span class="perm-hidden" data-show-granted="tracking">По интересам</span>', go: 'ads' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Как в системе', menu: 'Как в системе=Тема как в системе|Светлая=Светлая тема|Тёмная=Тёмная тема' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Квесты и ролики останутся в облаке', menu: 'Выйти>phone' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (12)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vyzov.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vyzov.app/privacy' }),
      ] }) }),
    ]),
  ],
});
