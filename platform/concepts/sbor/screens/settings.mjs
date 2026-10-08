import { THEME, TABS } from './_shared.mjs';
import { me, trip, meet, year, mine } from '../model.mjs';

/* Настройки как в Telegram: своя карточка с итогом поездок, свои разделы, дальше группы настроек */
const yearStrip = `<div class="sb-year">${year.map((t) => `<span class="sb-year-i${t.now ? ' is-now' : ''}"><small>${t.month}</small><strong>${t.name}</strong><span>${t.photos.toLocaleString('ru-RU').replace(/\s/g, ' ')} фото</span></span>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: ui.scroll([
    ui.top(ui.iconButton({ icon: 'qr-code', label: 'Мой QR-код', toast: 'QR-код профиля на экране' }), ui.textButton({ label: 'Изменить', go: 'meedit' })),
    ui.section({ children: [
      `<div class="sb-me">${ui.avatar(me.initial, { large: true })}<h1>${me.name}</h1><p class="ui-sub">Вожу группы · сейчас ${trip.name}, ${trip.day}</p></div>`,
      ui.stats([[String(mine.trips), 'поездки за год'], [mine.photos, 'фото в альбомах'], [String(mine.films), 'фильма поездок']]),
    ] }),
    ui.section({ title: 'Поездки 2026', children: yearStrip }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'route', title: 'Поездки', value: trip.name, go: 'trips' }),
      ui.cell({ icon: 'images', title: 'Альбом поездки', value: `${trip.photos} фото`, go: 'album' }),
      ui.cell({ icon: 'bookmark', title: 'Избранное', value: '38', go: 'saved' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Уведомления', cells: [
      ui.cell({ icon: 'clock', title: 'Сбор перенесли', sub: 'Новое время и место — со звуком', toggle: true }),
      ui.cell({ icon: 'users', title: 'Перекличка', sub: 'Кто ещё не отметился к сбору', toggle: true }),
      ui.cell({ icon: 'wallet', title: 'Новые траты в кошельке', sub: 'Без звука, только счётчик', toggle: false }),
      ui.cell({ icon: 'bell', title: 'Напоминание о сборе', value: `<span data-hide-granted="push">Выключено</span><span class="perm-hidden" data-show-granted="push">за 10 минут до ${meet.time}</span>`, go: 'rollcall' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Поездки и память', cells: [
      ui.cell({ icon: 'download', title: 'Загружать фото группы', sub: 'Только по Wi‑Fi', toggle: true }),
      ui.cell({ icon: 'film', title: 'Фильм дня', value: 'Собирать ночью', go: 'album' }),
      ui.cell({ icon: 'database', title: 'Загружено 2,4 ГБ', sub: 'Альбомы 1,9 ГБ · чаты 0,5 ГБ', value: 'Очистить', menu: ['Очистить кэш чатов=Освобождено 0,5 ГБ', 'Очистить всё, кроме Казани=Освобождено 1,7 ГБ'] }),
      ui.cell({ icon: 'layout-grid', title: 'Виджет «Ближайший сбор»', value: 'Не добавлен', activate: 'appgroups|widget' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Конфиденциальность', cells: [
      ui.cell({ icon: 'lock', title: 'Документы поездки под Face ID', value: '7 файлов', go: 'tripinfo' }),
      ui.cell({ icon: 'phone', title: 'Кто видит мой номер', value: 'Мои контакты', menu: ['Все=Номер видят все', 'Мои контакты=Номер видят только контакты', 'Никто=Номер скрыт'] }),
      ui.cell({ icon: 'map-pin', title: 'Геопозиция в поездке', value: 'Только на сборе', menu: ['Только на сборе=Видно группе 15 минут до сбора', 'Никогда=Геопозиция скрыта'] }),
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
      ui.cell({ icon: 'info', title: 'Версия', value: '2.4.1' }),
      ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
      ui.cell({ icon: 'file-text', title: 'Пользовательское соглашение', toast: 'sbor.app/terms' }),
      ui.cell({ icon: 'shield', title: 'Политика конфиденциальности', toast: 'sbor.app/privacy' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'settings' }),
});
