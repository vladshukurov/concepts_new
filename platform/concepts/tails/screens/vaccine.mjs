import { THEME, TABS, PET } from './_shared.mjs';
import { revaccination } from '../model.mjs';
import { visit } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'vaccine', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Здоровье', ui.iconButton({ icon: 'share', label: 'Отправить ветпаспорт', toast: 'Ветпаспорт готов к отправке' })),
    `<div class="tl-vet-head"><span class="ui-thumb is-round ${PET.truffle}"></span><div><h2>Трюфель, 2 года</h2><p>Ветпаспорт RU 4471 · клиника «Свои люди»</p><p>27,4 кг · +1,3 кг с февраля</p></div></div>`,
    ui.section({ title: 'Ближайший приём', meta: visit.day, children: [
      `<div class="tl-appt"><span class="tl-appt-when">${visit.day} · ${visit.time}</span><strong>${visit.title}</strong><span>Походка и состояние кожи · 10 минут</span>${ui.actions([
        ui.button({ label: 'Написать', icon: 'message-circle', go: 'chats' }),
        ui.button({ label: 'В Календарь', icon: 'calendar-plus', variant: 'secondary', primary: true, ask: 'calendar|vaccine|vaccine'}),
      ], { row: true })}</div>`,
      ui.denied('calendar'),
      ui.list([ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: 'Приём в календаре', sub: 'Вторник, 09:15 · напоминание за час', shownAfter: 'calendar' })]),
      ui.list([
        ui.row({ lead: ui.leadIcon('bell'), title: 'Изменения приёма', sub: 'Перенос, отмена или подготовка от врача', go: 'chats' }),
        ui.row({ lead: ui.leadIcon('notebook-pen'), title: 'Наблюдения к приёму', sub: 'Вчера: 4 из 5 разобрано', go: 'vetnote' }),
      ]),
    ] }),
    ui.section({ title: 'Впереди', meta: '4 срока', children: ui.list([
      ui.row({ lead: ui.leadIcon('syringe'), title: 'Ревакцинация', sub: `${revaccination.vaccine}, ${revaccination.day} в ${revaccination.time}`, end: `<span class=\"tl-days\">${revaccination.left}</span>` }),
      ui.row({ lead: ui.leadIcon('shield'), title: 'Обработка от клещей', sub: 'Bravecto кончился 14 мая', end: '<span class="tl-days is-late">−4 дня</span>' }),
      ui.row({ lead: ui.leadIcon('calendar'), title: 'Приём перенесли', sub: `С ${visit.movedFrom} на ${visit.day}, врач была в отпуске`, end: '<span class="tl-days">перенос</span>' }),
      ui.row({ lead: ui.leadIcon('circle-check'), title: 'Бешенство', sub: 'Сделано 6 марта · следующее в 2027', end: '<span class="tl-days">готово</span>' }),
    ]) }),
    ui.section({ title: 'Клиника и врач', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: 'МТ', round: true }), title: 'Мария Тенищева', sub: 'Ведёт Трюфеля с восьми месяцев · каб. 3' }),
      ui.row({ lead: ui.leadIcon('map-pin'), title: 'Большой проспект П. С., 74', sub: 'От парка 12 минут пешком' }),
      ui.row({ lead: ui.leadIcon('id-card'), title: 'Чип 643094100128756', sub: 'AnimalID с 4 апреля 2024' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'vaccine' }),
});
