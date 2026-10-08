import { THEME, TABS } from './_shared.mjs';
import { me, people, family, clubs, week, mine, pickup } from '../model.mjs';

/* Настройки как в Telegram: своя карточка с забираниями, свои разделы, дальше группы настроек */
const who = (ui, id) => (id === 'me' ? me : people[id]);
const weekStrip = (ui) => `<div class="sv-week">${week.map((d) => `<span class="sv-week-d${d.now ? ' is-now' : ''}"><small>${d.day}</small>${d.by ? ui.avatar(who(ui, d.by).initial) : `<span class="sv-week-q">${ui.icon('triangle-alert')}</span>`}<span>${d.by ? who(ui, d.by).short : 'никто'}</span></span>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: ui.scroll([
    ui.top(ui.iconButton({ icon: 'qr-code', label: 'Мой QR-код', toast: 'QR-код профиля на экране' }), ui.textButton({ label: 'Изменить', go: 'meedit' })),
    ui.section({ children: [
      `<div class="sv-me">${ui.avatar(me.initial, { large: true })}<h1>${me.name}</h1><p class="ui-sub">Мама Дани и Милы · семья «${family.name}»</p></div>`,
      ui.stats([[String(mine.pickedSept), 'забрала в сентябре'], [String(clubs.perWeek), 'занятий в неделю'], [family.photos.toLocaleString('ru-RU').replace(/\s/g, ' '), 'фото в альбоме']]),
    ] }),
    ui.section({ title: 'Кто забирает на неделе', meta: `в сентябре ${mine.coveredSept}`, children: weekStrip(ui) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'house', title: 'Дом', value: `${pickup.child} — никто`, go: 'home' }),
      ui.cell({ icon: 'calendar', title: 'Расписание', value: `${clubs.perWeek} занятий`, go: 'schedule' }),
      ui.cell({ icon: 'bookmark', title: 'Избранное', value: '64', go: 'saved' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Уведомления', cells: [
      ui.cell({ icon: 'triangle-alert', title: 'Никто не забирает', sub: 'За час до конца занятия', toggle: true }),
      ui.cell({ icon: 'house', title: 'Дети дома', sub: 'Когда телефон ребёнка в домашней сети', toggle: true }),
      ui.cell({ icon: 'clock', title: 'Перенос занятия', sub: 'Если в чате класса сдвинули время', toggle: true }),
      ui.cell({ icon: 'bell', title: 'Напоминание забрать', value: `<span data-hide-granted="push">Выключено</span><span class="perm-hidden" data-show-granted="push">в ${pickup.remind}</span>`, go: 'home' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Семья и память', cells: [
      ui.cell({ icon: 'wifi', title: 'Домашняя сеть', value: family.ssid, go: 'wifi' }),
      ui.cell({ icon: 'film', title: 'Видео недели', value: 'Собирать ночью', go: 'album' }),
      ui.cell({ icon: 'database', title: 'Загружено 3,1 ГБ', sub: 'Альбом семьи 2,6 ГБ · чаты 0,5 ГБ', value: 'Очистить', menu: ['Очистить кэш чатов=Освобождено 0,5 ГБ', 'Оставить фото только за год=Освобождено 1,1 ГБ'] }),
      ui.cell({ icon: 'layout-grid', title: 'Виджет «Кто заберёт»', value: 'Не добавлен', activate: 'appgroups|widget' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
      ui.cell({ icon: 'lock', title: 'Документы семьи под Face ID', value: '9 файлов', go: 'familyinfo' }),
      ui.cell({ icon: 'phone', title: 'Кто видит мой номер', value: 'Мои контакты', menu: ['Все=Номер видят все', 'Мои контакты=Номер видят только контакты', 'Никто=Номер скрыт'] }),
      ui.cell({ icon: 'eye', title: 'Кто видит статус «дома»', value: 'Только семья', menu: ['Только семья=Статус видит семья', 'Никто=Статус «дома» скрыт'] }),
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
      ui.cell({ icon: 'info', title: 'Версия', value: '1.8.3' }),
      ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
      ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'svoi.app/terms' }),
      ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'svoi.app/privacy' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'settings' }),
});
