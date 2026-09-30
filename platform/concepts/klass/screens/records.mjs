import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'records', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Записи', ui.iconButton({ icon: 'mic', label: 'Записать собрание', sr: 'Записать собрание', ask: 'mic|records|records' })),
    ui.denied('mic', 'Микрофон недоступен — остаются текстовый протокол и загрузка готовой записи'),
    ui.section({ title: 'Собрание сегодня', meta: 'в 19:00', children: [
      `<div class="kl-live"><span class="kl-live-top"><i></i>Идёт · пункт 2 из 5</span><strong>Правление, северная дорога</strong><span>Смета на шлагбаум · слушают 38 собственников</span>${ui.actions([
        ui.button({ label: 'Войти в эфир', icon: 'headphones', activate: 'voip|records' }),
        ui.button({ label: 'Свернуть', variant: 'secondary', toast: 'Трансляция свёрнута' }),
      ], { row: true })}</div>`,
      ui.list([
        ui.row({ lead: `<span class="ui-thumb ph"></span>`, title: 'Повестка обновлена', sub: 'Смета на шлагбаум — пятым пунктом', end: { value: 'сейчас' }, activate: 'commnotif|records' }),
        ui.row({ lead: `<span class="ui-thumb ph"></span>`, title: 'Собрание 4 сентября', sub: 'Записал Илья · остановились на 21:30', end: { value: 'Слушать', go: 'player', primary: true, label: 'Слушать собрание 4 сентября' } }),
      ]),
    ] }),
    ui.section({ title: 'Записи товарищества', meta: '14', children: ui.list([
      ui.row({ thumb: 'ph', title: 'Ремонт северной дороги', sub: '12:04 · фрагмент собрания', end: { badge: 'новое' }, go: 'player' }),
      ui.row({ thumb: 'ph', title: 'Отчёт правления за лето', sub: '6:14 · вода, ворота и территория', end: '<span class="ui-row-end is-value"><span class="dl is-busy"><svg><use href="#i-loader-circle"/></svg>62 %</span></span>', go: 'player' }),
      ui.row({ thumb: 'ph', title: 'Объявление председателя', sub: '2:58 · слушали 19 раз', end: { value: 'вчера' }, go: 'player' }),
      ui.row({ thumb: 'ph', title: 'Собрание в мае целиком', sub: '1:12:08 · не скачано, 84 МБ', go: 'player' }),
      ui.row({ thumb: 'ph', title: 'Инструктаж к поездке', sub: '7:19 · для координаторов', end: '<span class="ui-row-end is-value"><span class="dl is-ready"><svg><use href="#i-circle-check"/></svg>скачано</span></span>', go: 'player' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'records' }),
});
