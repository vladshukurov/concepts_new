import { THEME } from './_shared.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки в грамматике ВК Видео: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'calendar', title: 'Приглашения на вечера', sub: 'Кто зовёт, когда и куда', toggle: true }),
        ui.cell({ icon: 'trophy', title: 'Хайлайты вечера готовы', sub: 'Когда ведущий соберёт лучшие ответы', toggle: true }),
        ui.cell({ icon: 'timer', title: 'Мой ход в раунде', sub: 'Если телефон лежит экраном вниз', toggle: false }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются в приглашении', go: 'invite' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Игра и просмотр', cells: [
        ui.cell({ icon: 'timer', title: 'Время на ответ', value: '10 секунд', menu: '5 секунд=Время на ответ 5 секунд|10 секунд=Время на ответ 10 секунд|20 секунд=Время на ответ 20 секунд' }),
        ui.cell({ icon: 'play', title: 'Автовоспроизведение хайлайтов', toggle: true }),
        ui.cell({ icon: 'gauge', title: 'Качество видео', value: 'Авто', menu: 'Авто=Качество авто|1080p=Качество 1080p|720p=Качество 720p' }),
        ui.cell({ icon: 'download', title: 'Ответы на iPhone', sub: '1,2 ГБ · 9 ответов', value: 'Очистить', toast: 'Копии ответов удалены, хайлайты в облаке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'eye', title: 'Мои ответы видят', value: 'Игроки вечера', menu: 'Игроки вечера=Ответы видят игроки вечера|Только я=Ответы видите только вы' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: '<span data-hide-granted="tracking">Без подбора</span><span class="perm-hidden" data-show-granted="tracking">По интересам</span>', go: 'ads' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Как в системе', menu: 'Как в системе=Тема как в системе|Светлая=Светлая тема|Тёмная=Тёмная тема' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Вечера и ответы останутся в облаке', menu: 'Выйти>phone' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (12)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vykrutasy.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vykrutasy.app/privacy' }),
      ] }) }),
    ]),
  ],
});
