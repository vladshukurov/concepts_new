import { THEME } from './_shared.mjs';
import { cookalong, own } from '../model.mjs';

/* Настройки в грамматике ВК: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'chef-hat', title: 'Ужин вместе начинается', sub: `Сегодня в ${cookalong.start} · ведёт ${cookalong.host.first}`, toggle: true }),
        ui.cell({ icon: 'timer', title: 'Таймер шага', sub: 'Звук, когда шаг готов', toggle: true }),
        ui.cell({ icon: 'list-checks', title: 'Изменения в списке покупок', sub: own.list.synced, toggle: false }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются в ужине в пятницу', go: 'pelmeni' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'На кухне', cells: [
        ui.cell({ icon: 'headphones', title: 'Рецепт вслух', sub: 'С погашенным экраном', go: 'audio' }),
        ui.cell({ icon: 'tv', title: 'Экран на кухне', sub: 'Крупные шаги и таймер', go: 'kitchen' }),
        ui.cell({ icon: 'smartphone', title: 'Не гасить экран в шагах', toggle: true }),
        ui.cell({ icon: 'database', title: 'Фото и голосовые на iPhone', sub: '640 МБ · 42 блюда', value: 'Очистить', toast: 'Копии удалены, дневник остался в облаке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'shield', title: 'Конфиденциальность', sub: 'Звонки, голосовые, реклама', go: 'privacy' }),
        ui.cell({ icon: 'eye', title: 'Кто видит дневник', value: 'Знакомые', menu: ['Только я', 'Знакомые', 'Все'] }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Дневник на iPhone останется', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (14)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vkusno.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vkusno.app/privacy' }),
      ] }) }),
    ]),
  ],
});
