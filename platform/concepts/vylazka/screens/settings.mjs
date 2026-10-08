import { THEME } from './_shared.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки в грамматике ВК Видео: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'calendar', title: 'Вылазка накануне', sub: 'Выход, электричка и кто идёт', toggle: true }),
        ui.cell({ icon: 'square-play', title: 'Новый ролик похода', sub: 'Друг снял привал', toggle: true }),
        ui.cell({ icon: 'film', title: 'Фильм похода готов', sub: 'Вечером, когда склеится по точкам', toggle: false }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются на странице следующей вылазки', go: 'nextwalk' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Съёмка и просмотр', cells: [
        ui.cell({ icon: 'timer', title: 'Длина привала', value: 'До минуты', menu: 'До 30 секунд=Привал до 30 секунд|До минуты=Привал до минуты|До 3 минут=Привал до 3 минут' }),
        ui.cell({ icon: 'play', title: 'Автовоспроизведение роликов', toggle: true }),
        ui.cell({ icon: 'gauge', title: 'Качество видео', value: 'Авто', menu: 'Авто=Качество авто|1080p=Качество 1080p|720p=Качество 720p' }),
        ui.cell({ icon: 'download', title: 'Ролики на iPhone', sub: '2,3 ГБ · 52 ролика', value: 'Очистить', toast: 'Копии роликов удалены, фильмы в облаке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'eye', title: 'Мои ролики видят', value: 'Кто ходил', menu: 'Кто ходил=Ролики видят те, кто ходил|Только я=Ролики видите только вы' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: '<span data-hide-granted="tracking">Без подбора</span><span class="perm-hidden" data-show-granted="tracking">По интересам</span>', go: 'ads' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Как в системе', menu: 'Как в системе=Тема как в системе|Светлая=Светлая тема|Тёмная=Тёмная тема' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Вылазки и фильмы останутся в облаке', menu: 'Выйти>phone' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (12)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vylazka.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vylazka.app/privacy' }),
      ] }) }),
    ]),
  ],
});
