import { THEME } from './_shared.mjs';
import { own, visit } from '../model.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки «Выгула»: события прогулок и здоровья, без сети, приватность ветпаспорта, аккаунт */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'syringe', title: 'Прививки и приёмы', sub: `За день до визита · ${visit.day}, ${visit.time}`, toggle: true }),
        ui.cell({ icon: 'utensils', title: 'Кормушка пуста', sub: 'Когда порция не выдана', toggle: true }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'Владельцы и клиника · превью на экране блокировки', toggle: true }),
        ui.cell({ icon: 'paw-print', title: 'Прогулка', sub: 'Сообщить о переносе прогулки', go: 'walk' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Дневник и данные', cells: [
        ui.cell({ icon: 'download', title: 'Без сети', value: 'Ветпаспорт', go: 'refresh' }),
        ui.cell({ icon: 'images', title: 'Фото в дневнике', value: 'Высокое качество' }),
        ui.cell({ icon: 'database', title: 'Загружено', sub: `Фото и голосовые заметки · ${own.offline}`, value: 'Очистить', toast: `Освобождено ${own.offline}` }),
        ui.cell({ icon: 'layout-grid', title: 'Виджет', value: 'Не добавлен', activate: 'appgroups|widget' }),
        ui.cell({ icon: 'key', title: 'Вход в кабинет клиники', value: 'svoi-vet.ru', activate: 'autofill|fill' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок Face ID', value: 'Чип и наблюдения', ask: 'faceid|lock|lock' }),
        ui.cell({ icon: 'eye', title: 'Кто видит дневник Трюфеля', value: 'Только я' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', go: 'ads' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', sub: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти из аккаунта', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', className: 'tl-danger', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.4.2' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vygul.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vygul.app/privacy' }),
      ] }) }),
    ]),
  ],
});
