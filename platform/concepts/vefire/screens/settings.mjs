import { THEME } from './_shared.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки в грамматике ВК Видео: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'heart', title: 'Реакции на выпуски', sub: 'Кто посмеялся и кто похлопал ведущему', toggle: true }),
        ui.cell({ icon: 'clapperboard', title: 'Новый выпуск рубрики', sub: 'Когда Соня или Миша снимут выпуск', toggle: true }),
        ui.cell({ icon: 'bell', title: 'Напоминание о пятничном выпуске', sub: 'Включается на экране «Выпуск недели»', go: 'weekly' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Выпуски и просмотр', cells: [
        ui.cell({ icon: 'tv', title: 'Премьера выпуска недели', value: 'Пт, 19:00', menu: 'Пт, 19:00=Премьера в пятницу в 19:00|Сб, 11:00=Премьера в субботу в 11:00' }),
        ui.cell({ icon: 'play', title: 'Автовоспроизведение рубрик', toggle: true }),
        ui.cell({ icon: 'gauge', title: 'Качество видео', value: 'Авто', menu: 'Авто=Качество авто|1080p=Качество 1080p|720p=Качество 720p' }),
        ui.cell({ icon: 'download', title: 'Выпуски на iPhone', sub: '1,4 ГБ · 51 репортаж', value: 'Очистить', toast: 'Копии выпусков удалены, рубрики в облаке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'eye', title: 'Шоу видят', value: 'Только семья', menu: 'Только семья=Шоу видит только семья|Семья и друзья=Шоу видят семья и друзья' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: '<span data-hide-granted="tracking">Без подбора</span><span class="perm-hidden" data-show-granted="tracking">По интересам</span>', go: 'ads' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Как в системе', menu: 'Как в системе=Тема как в системе|Светлая=Светлая тема|Тёмная=Тёмная тема' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Выпуски и рубрики останутся в облаке', menu: 'Выйти>phone' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (8)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vefire.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vefire.app/privacy' }),
      ] }) }),
    ]),
  ],
});
