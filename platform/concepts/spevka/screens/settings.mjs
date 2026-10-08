import { THEME, TABS } from './_shared.mjs';
import { me, choir, concert, parts, myRehearsals, mine } from '../model.mjs';

/* Настройки как в Telegram: своя карточка со спевками сезона, свои разделы, дальше группы настроек */
const MARK = { was: ['check', 'была'], missed: ['x', 'пропуск'], now: ['map-pin', 'сегодня'], next: ['clock', ''] };
const strip = (ui) => `<div class="sp-season">${myRehearsals.map((r) => `<span class="sp-season-d is-${r.state}"><small>${r.day}</small><span class="sp-season-ico">${ui.icon(MARK[r.state][0])}</span><span>${r.time || MARK[r.state][1]}</span></span>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: ui.scroll([
    ui.top(ui.iconButton({ icon: 'qr-code', label: 'Мой QR-код', toast: 'QR-код профиля на экране' }), ui.textButton({ label: 'Изменить', go: 'meedit' })),
    ui.section({ children: [
      `<div class="sp-me">${ui.avatar(me.initial, { large: true })}<h1>${me.name}</h1><p class="ui-sub">Альт · ${choir.name}</p></div>`,
      ui.stats([[mine.season, 'спевок с сентября'], [String(mine.recordings), 'своих записи партии'], [String(concert.inDays), 'дней до концерта']]),
    ] }),
    ui.section({ title: 'Спевки', meta: choir.days, children: strip(ui) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'audio-lines', title: 'Репертуар', value: `${concert.pieces.length} произведений`, go: 'repertoire' }),
      ui.cell({ icon: 'calendar', title: 'Расписание', value: 'до концерта', go: 'schedule' }),
      ui.cell({ icon: 'bookmark', title: 'Избранное', value: '24', go: 'saved' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Уведомления', cells: [
      ui.cell({ icon: 'clock', title: 'Спевку перенесли', sub: 'Новое время и зал', toggle: true }),
      ui.cell({ icon: 'users', title: 'Альтов не хватает', sub: 'Когда своей партии меньше шести', toggle: true }),
      ui.cell({ icon: 'mic', title: 'Новая запись регента', sub: 'Только для партии альтов', toggle: false }),
      ui.cell({ icon: 'bell', title: 'Напоминание о спевке', value: `<span data-hide-granted="push">Выключено</span><span class="perm-hidden" data-show-granted="push">за час</span>`, go: 'balance' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Партии и записи', cells: [
      ui.cell({ icon: 'repeat', title: 'Повтор куска по кругу', sub: 'Пауза 2 секунды между повторами', toggle: true }),
      ui.cell({ icon: 'gauge', title: 'Темп разбора', value: '90%', menu: ['75%=Темп разбора 75%', '90%=Темп разбора 90%', '100%=Темп разбора 100%'] }),
      ui.cell({ icon: 'database', title: `Загружено ${parts.size}`, sub: `Записи альтов · ${parts.count} шт`, value: 'Очистить', menu: ['Удалить свои черновики=Освобождено 12 МБ', 'Удалить всё, кроме программы концерта=Освобождено 18 МБ'] }),
      ui.cell({ icon: 'layout-grid', title: 'Виджет «Спевка сегодня»', value: 'Не добавлен', activate: 'appgroups|widget' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
      ui.cell({ icon: 'lock', title: 'Документы гастролей под Face ID', go: 'choirinfo' }),
      ui.cell({ icon: 'phone', title: 'Кто видит мой номер', value: 'Хористы', menu: ['Все=Номер видят все', 'Хористы=Номер видят хористы и контакты', 'Никто=Номер скрыт'] }),
      ui.cell({ icon: 'eye', title: 'Кто слышит мои записи', value: 'Партия и регент', menu: ['Партия и регент=Записи слышат альты и регент', 'Только регент=Записи слышит регент'] }),
      ui.cell({ icon: 'megaphone', title: 'Реклама', value: '<span data-hide-granted="tracking">Без подбора</span><span class="perm-hidden" data-show-granted="tracking">По интересам</span>', go: 'ads' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Внешний вид', cells: [
      ui.cell({ icon: 'palette', title: 'Тема', value: 'Как в системе', menu: ['Как в системе=Тема как в системе', 'Светлая=Светлая тема', 'Тёмная=Тёмная тема'] }),
      ui.cell({ icon: 'globe', title: 'Язык', value: 'Русский' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Аккаунт', cells: [
      ui.cell({ icon: 'smartphone', title: 'Номер телефона', value: me.phone, go: 'account' }),
      ui.cell({ icon: 'log-out', title: 'Выйти', sub: 'Данные на iPhone останутся', go: 'account' }),
      ui.cell({ icon: 'trash-2', title: 'Удалить аккаунт', go: 'deleteaccount' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'О приложении', cells: [
      ui.cell({ icon: 'info', title: 'Версия', value: '1.5.2' }),
      ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
      ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'spevka.app/terms' }),
      ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'spevka.app/privacy' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'settings' }),
});
