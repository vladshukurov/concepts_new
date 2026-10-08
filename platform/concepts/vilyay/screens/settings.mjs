import { THEME } from './_shared.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки в грамматике ВК Видео: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'heart', title: 'Реакции семьи на мои ролики', sub: 'Кто посмеялся и что написал', toggle: true }),
        ui.cell({ icon: 'clapperboard', title: 'Новая серия в сезоне', sub: 'Когда папа или Тёма добавят ролик', toggle: true }),
        ui.cell({ icon: 'history', title: 'Год назад сегодня', sub: 'Ролик Рыжика из прошлого года', toggle: false }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются на экране «Год назад сегодня»', go: 'memory' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Ролики и просмотр', cells: [
        ui.cell({ icon: 'paw-print', title: 'Сезон для новых роликов', value: 'Сейчас', menu: 'Сейчас=Новые ролики уходят в сезон «Сейчас»|Первый год=Новые ролики уходят в сезон «Первый год»' }),
        ui.cell({ icon: 'play', title: 'Автовоспроизведение серий', toggle: true }),
        ui.cell({ icon: 'gauge', title: 'Качество видео', value: 'Авто', menu: 'Авто=Качество авто|1080p=Качество 1080p|720p=Качество 720p' }),
        ui.cell({ icon: 'download', title: 'Ролики на iPhone', sub: '2,1 ГБ · 113 роликов', value: 'Очистить', toast: 'Копии роликов удалены, сезоны в облаке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'eye', title: 'Канал Рыжика видят', value: 'Только семья', menu: 'Только семья=Канал видит только семья|Семья и друзья=Канал видят семья и друзья' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: '<span data-hide-granted="tracking">Без подбора</span><span class="perm-hidden" data-show-granted="tracking">По интересам</span>', go: 'ads' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
        ui.cell({ icon: 'moon', title: 'Тема', value: 'Как в системе', menu: 'Как в системе=Тема как в системе|Светлая=Светлая тема|Тёмная=Тёмная тема' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Сезоны и ролики останутся в облаке', menu: 'Выйти>phone' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (12)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vilyay.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vilyay.app/privacy' }),
      ] }) }),
    ]),
  ],
});
