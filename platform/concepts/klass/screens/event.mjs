import { THEME, who } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'event', theme: THEME,
  body: [
    ui.nav({ title: 'Поездка на ярмарку' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="kl-event"><small>Пятница, 12 сентября · выезд в 09:30</small><strong>Садовая ярмарка</strong><span>Автобус от главного въезда · записались 18 из 28</span>${ui.progress({ fillClass: 'kl-w-64' })}</div>`,
      ] }),
      ui.section({ children: [
        ui.group({ cells: [
          ui.cell({ icon: 'navigation', title: 'Отмечать дорогу', sub: 'Для координаторов, только 12 сентября', ask: 'locationalways|route|event', primary: true }),
          ui.cell({ icon: 'map-pin', title: 'Мы на месте', sub: 'Отметка для соседей', toast: 'Отмечено: группа на месте' }),
          ui.cell({ icon: 'route', title: 'Где автобус', sub: 'Автобус выехал в 09:34', go: 'route' }),
        ] }),
        ui.denied('locationalways', 'Дорогу можно отметить кнопкой «Мы на месте»'),
      ] }),
      ui.section({ title: 'Кто едет', meta: '24', children: ui.list([
        who(ui, 'АВ', 'Анна Викторовна', 'Старшая группы, у ворот с 09:10'),
        who(ui, 'ЕС', 'Елена Соколова', 'Координатор, первая группа'),
        who(ui, 'ИМ', 'Илья Макаров', 'Координатор, сядет у Лесной'),
        ui.row({ lead: ui.leadIcon('user-plus'), title: 'Осталось пять мест', sub: 'Запись до вечера четверга', toast: 'Вы записаны' }),
      ]) }),
    ]),
  ],
});
