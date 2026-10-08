import { THEME, swapText } from './_shared.mjs';
import { own, item, next } from '../model.mjs';

/* Настройки в грамматике ВК: группы ячеек, свитчи переключаются на месте */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'cloud-sun', title: 'План на завтра', sub: `Утром в ${own.plan.remind}, с погодой`, toggle: true }),
        ui.cell({ icon: 'repeat-2', title: 'Ответ ведущей о вещах', sub: `${item.host.first} принимает вещи до ${item.acceptBy}`, toggle: true }),
        ui.cell({ icon: 'calendar', title: 'Своп за день', sub: `${next[0].title}, ${next[0].day} мая`, toggle: false }),
        ui.cell({ icon: 'bell', title: 'Уведомления на iPhone', sub: 'Разрешаются у плана на завтра', go: 'home' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Лукбук', cells: [
        ui.cell({ icon: 'shirt', title: 'Размеры', value: 'RU', menu: ['RU', 'EU', 'US'] }),
        ui.cell({ icon: 'cloud-sun', title: 'Температура', value: '°C', menu: ['°C', '°F'] }),
        ui.cell({ icon: 'history', title: 'Без дела после', value: `${own.idle.days} дней`, menu: ['60 дней', '90 дней', 'Полгода'] }),
        ui.cell({ icon: 'film', title: 'Клипы-примерки на iPhone', sub: '1,2 ГБ · 9 клипов', value: 'Очистить', toast: 'Копии клипов удалены, они остались в лукбуке' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'scan-face', title: 'Сохранённое', sub: 'Мерки и образы под Face ID', go: 'profile' }),
        ui.cell({ icon: 'eye', title: 'Кто видит лукбук', value: 'Только я', menu: ['Только я', 'Знакомые', 'Участники свопа'] }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: swapText('tracking', 'Без подбора', 'По интересам'), go: 'ads' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', value: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Лукбук на iPhone останется', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.0 (14)' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'looks.social/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'looks.social/privacy' }),
      ] }) }),
    ]),
  ],
});
