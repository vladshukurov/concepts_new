import { THEME, TABS } from './_shared.mjs';
import { me, studio, standup, rooms, project, myWeek, mine } from '../model.mjs';

/* Настройки как в Telegram: своя карточка с апдейтами недели, свои разделы, дальше группы настроек */
const weekStrip = (ui) => `<div class="lt-week">${myWeek.map((d) => `<span class="lt-week-d${d.at ? ' is-done' : ''}${d.now ? ' is-now' : ''}"><small>${d.day}</small><span class="lt-week-ico">${ui.icon(d.at ? 'check' : d.now ? 'pen-line' : 'minus')}</span><span>${d.at || (d.now ? `до ${standup.time}` : '&nbsp;')}</span></span>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: ui.scroll([
    ui.top(ui.iconButton({ icon: 'qr-code', label: 'Мой QR-код', toast: 'QR-код профиля на экране' }), ui.textButton({ label: 'Изменить', go: 'meedit' })),
    ui.section({ children: [
      `<div class="lt-me">${ui.avatar(me.initial, { large: true })}<h1>${me.name}</h1><p class="ui-sub">Менеджер проектов · ${studio.full}</p></div>`,
      ui.stats([[mine.onTime, 'апдейтов вовремя'], [String(rooms.mine), 'брони сегодня'], [String(mine.decisions), 'решения на мне']]),
    ] }),
    ui.section({ title: 'Апдейты недели', meta: 'вторая неделя в студии', children: weekStrip(ui) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'list-checks', title: 'Летучка', value: `в ${standup.time}`, go: 'office' }),
      ui.cell({ icon: 'calendar', title: 'Переговорки', value: `${rooms.mine} брони`, go: 'rooms' }),
      ui.cell({ icon: 'bookmark', title: 'Избранное', value: '27', go: 'saved' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Уведомления', cells: [
      ui.cell({ icon: 'clock', title: 'Летучку перенесли', sub: 'Новое время и переговорка', toggle: true }),
      ui.cell({ icon: 'triangle-alert', title: 'Меня назвали в «Мешает»', sub: 'Кому нужна ваша помощь до летучки', toggle: true }),
      ui.cell({ icon: 'mic', title: 'Запись летучки готова', sub: 'Для пропустивших, утром', toggle: false }),
      ui.cell({ icon: 'bell', title: 'Напоминание об апдейте', value: `<span data-hide-granted="push">Выключено</span><span class="perm-hidden" data-show-granted="push">в ${standup.remind}</span>`, go: 'office' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Летучка и файлы', cells: [
      ui.cell({ icon: 'wifi', title: 'Отметка «в офисе»', value: studio.officeSsid, go: 'office' }),
      ui.cell({ icon: 'gauge', title: 'Скорость записи летучки', value: '1,5×', menu: ['1×=Запись — 1×', '1,5×=Запись — 1,5×', '2×=Запись — 2×'] }),
      ui.cell({ icon: 'database', title: 'Загружено 3,1 ГБ', sub: `Файлы проектов 2,4 ГБ · записи 0,5 ГБ`, value: 'Очистить', menu: ['Удалить записи старше недели=Освобождено 0,4 ГБ', 'Очистить кэш чатов=Освобождено 0,2 ГБ'] }),
      ui.cell({ icon: 'layout-grid', title: 'Виджет «Ближайшая летучка»', value: 'Не добавлен', activate: 'appgroups|widget' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
      ui.cell({ icon: 'lock', title: `Договоры «${project.name}» под Face ID`, go: 'projectinfo' }),
      ui.cell({ icon: 'phone', title: 'Кто видит мой номер', value: 'Коллеги', menu: ['Все=Номер видят все', 'Коллеги=Номер видят коллеги и контакты', 'Никто=Номер скрыт'] }),
      ui.cell({ icon: 'eye', title: 'Кто видит «в офисе»', value: 'Студия', menu: ['Студия=Отметку видит студия', 'Никто=Отметка «в офисе» скрыта'] }),
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
      ui.cell({ icon: 'info', title: 'Версия', value: '3.2.0' }),
      ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
      ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'vkurse.app/terms' }),
      ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'vkurse.app/privacy' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'settings' }),
});
