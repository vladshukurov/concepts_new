import { THEME } from './_shared.mjs';
import { own, saturday } from '../model.mjs';
import { TEST_PHONE } from '../../../kernel/world.mjs';

/* Настройки «В кругу»: свои события столов, памятки и табло, приватность дневника, аккаунт */
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'armchair', title: 'Освободилось место', sub: 'За столами, куда вы просились', toggle: true }),
        ui.cell({ icon: 'dices', title: 'Ваш ход', sub: 'Когда табло дошло до вас', toggle: true }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'Звук и превью на экране блокировки', toggle: true }),
        ui.cell({ icon: 'bell', title: 'Стол', sub: `«${saturday.game}» · сообщить о месте в субботу`, go: 'table' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'За столом', cells: [
        ui.cell({ icon: 'headphones', title: 'Памятка правил', sub: `Скачано ${own.memo.count} памятки · ${own.memo.size}`, go: 'audio' }),
        ui.cell({ icon: 'download', title: 'Очистить загрузки', value: own.memo.size, toast: `Памятки удалены · освобождено ${own.memo.size}` }),
        ui.cell({ icon: 'tv', title: 'Счёт на экране', sub: 'Табло партии на телевизоре клуба', go: 'cast' }),
        ui.cell({ icon: 'layout-grid', title: 'Виджет на экран «Домой»', sub: 'Ближайший стол и места', activate: 'appgroups|widget' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
        ui.cell({ icon: 'eye', title: 'Кто видит дневник', value: 'Друзья' }),
        ui.cell({ icon: 'dices', title: 'Кто видит коллекцию', value: 'Только я' }),
        ui.cell({ icon: 'user-plus', title: 'Звать меня за стол', sub: 'Друзья могут добавить вас в стол', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
        ui.cell({ icon: 'phone', title: 'Аккаунт', sub: TEST_PHONE, go: 'account' }),
        ui.cell({ icon: 'log-out', title: 'Выйти из аккаунта', go: 'account' }),
        ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', className: 'st-danger', go: 'deleteaccount' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'info', title: 'Версия', value: '1.4.2' }),
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vkrugu.app/terms' }),
        ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vkrugu.app/privacy' }),
      ] }) }),
    ]),
  ],
});
