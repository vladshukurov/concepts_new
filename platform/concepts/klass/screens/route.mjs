import { THEME, who } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'route', theme: THEME,
  body: [
    ui.nav({ title: 'Где автобус', trailing: ui.textButton({ label: 'Обновить', strong: true, toast: 'Список обновлён', primary: true }) }),
    ui.scroll([
      ui.section({ children: ui.stats([['24', 'в автобусе'], ['2', 'координатора'], ['15:40', 'вернутся']]) }),
      ui.denied('locationalways'),
      ui.section({ title: 'Дорога', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '09:34' }), title: 'Автобус выехал', sub: 'Отметила Анна Викторовна, все 24 на местах' }),
        ui.row({ lead: ui.leadIcon('', { text: '10:12' }), title: 'Стоят на Гагарина', sub: 'Пробка · опаздывают минут на пятнадцать' }),
        who(ui, 'ЕС', 'Елена Соколова', 'Координатор · дорога отмечается сама'),
        who(ui, 'ИМ', 'Илья Макаров', 'Отметился кнопкой на остановке'),
        ui.row({ lead: ui.leadIcon('', { text: '15:40' }), title: 'Обратно к главному въезду', sub: 'Автобус остановится у ворот СНТ' }),
      ]) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Мы на месте', icon: 'map-pin', variant: 'secondary', block: true, toast: 'Соседи увидят, что группа на месте' }),
        ui.button({ label: 'Открыть поездку', variant: 'tertiary', block: true, go: 'event' }),
      ]) }),
    ]),
  ],
});
