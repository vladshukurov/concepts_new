import { THEME, TABS, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'vaccine', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Здоровье', ui.iconButton({ icon: 'share', label: 'Отправить ветпаспорт', toast: 'Ветпаспорт готов к отправке' })),
    `<div class="tl-vet-head"><span class="ui-thumb is-round ${PET.truffle}"></span><div><h2>Трюфель, 2 года</h2><p>Ветпаспорт RU 4471 · клиника «Свои люди»</p><p>27,4 кг · +1,3 кг с февраля</p></div></div>`,
    ui.section({ title: 'Ближайший приём', meta: '19 мая', children: [
      `<div class="tl-appt"><span class="tl-appt-when">19 мая · 09:15</span><strong>Видеоосмотр с Марией Тенищевой</strong><span>Походка и состояние кожи · 10 минут</span>${ui.actions([
        ui.button({ label: 'Начать', icon: 'video', activate: 'voip|vaccine' }),
        ui.button({ label: 'В Календарь', icon: 'calendar-plus', variant: 'secondary', primary: true, ask: 'calendar|vaccine|vaccine'}),
      ], { row: true })}</div>`,
      ui.denied('calendar', 'Приём остаётся в ветпаспорте и напоминании приложения'),
      ui.list([
        ui.row({ lead: `<span class="tl-date">${ui.icon('bell')}</span>`, title: 'Изменения приёма', sub: 'Перенос, отмена или подготовка от врача', activate: 'commnotif|vaccine' }),
        ui.row({ lead: `<span class="tl-date">${ui.icon('notebook-pen')}</span>`, title: 'Наблюдения к приёму', sub: 'Сегодня: 4 из 5 разобрано', go: 'vetnote' }),
      ]),
    ] }),
    ui.section({ title: 'Впереди', meta: '4 срока', children: ui.list([
      ui.row({ lead: `<span class="tl-date">${ui.icon('syringe')}</span>`, title: 'Ревакцинация', sub: 'Nobivac DHPPi, 29 мая в 10:40', end: '<span class="tl-days">11 дней</span>' }),
      ui.row({ lead: `<span class="tl-date">${ui.icon('shield')}</span>`, title: 'Обработка от клещей', sub: 'Bravecto кончился 14 мая', end: '<span class="tl-days is-late">−4 дня</span>' }),
      ui.row({ lead: `<span class="tl-date">${ui.icon('calendar')}</span>`, title: 'Приём перенесли', sub: 'С 12 на 19 мая, врач была в отпуске', end: '<span class="tl-days">перенос</span>' }),
      ui.row({ lead: `<span class="tl-date">${ui.icon('circle-check')}</span>`, title: 'Бешенство', sub: 'Сделано 6 марта · следующее в 2027', end: '<span class="tl-days">готово</span>' }),
    ]) }),
    ui.section({ title: 'Клиника и врач', children: ui.list([
      ui.row({ thumb: 'ph is-round', title: 'Мария Тенищева', sub: 'Ведёт Трюфеля с восьми месяцев · каб. 3' }),
      ui.row({ lead: `<span class="tl-date">${ui.icon('map-pin')}</span>`, title: 'Большой проспект П. С., 74', sub: 'От парка 12 минут пешком' }),
      ui.row({ lead: `<span class="tl-date">${ui.icon('id-card')}</span>`, title: 'Чип 643094100128756', sub: 'AnimalID с 4 апреля 2024' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'vaccine' }),
});
