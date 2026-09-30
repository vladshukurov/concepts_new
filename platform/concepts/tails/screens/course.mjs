import { THEME, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'course', theme: THEME,
  body: [
    ui.nav({ title: 'Курс послушания' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="tl-course-cover ${PET.loki}"></div>`,
        `<div class="tl-course-copy"><h1>Подзыв в парке с отвлечениями</h1><p>Марина Гурьева · кинолог</p><p>Занятие 4 из 12 · 14:20 · 96 МБ</p></div>`,
        `<div class="tl-player">${ui.progress({ fillClass: 'tl-w-46' })}${ui.times('6:41', '−7:39')}<div class="tl-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: '6:26' })}${ui.button({ label: 'Слушать', icon: 'play', fillIcon: true, primary: true, activate: 'audio|background' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: '6:56' })}</div></div>`,
      ] }),
      ui.section({ title: 'Занятия курса', meta: 'скачано 3 из 12', children: ui.list([
        ui.row({ thumb: PET.barni, title: 'Рядом без натяжения', sub: '11:38 · прошли вчера', end: '<span class="ui-row-end is-value"><span class="dl is-ready"><svg><use href="#i-circle-check"/></svg>41 МБ</span></span>', toast: 'Занятие 1' }),
        ui.row({ thumb: PET.truffle, title: 'Выдержка при собаках', sub: '17:05 · 3 минуты загрузки', end: '<span class="ui-row-end is-value"><span class="dl is-busy"><svg><use href="#i-loader-circle"/></svg>62 %</span></span>', toast: 'Занятие догружается' }),
        ui.row({ thumb: PET.loki, title: 'Свисток вместо голоса', sub: '9:12 · прошли 4 218 владельцев', end: '<span class="ui-row-end is-value"><span class="dl"><svg><use href="#i-download"/></svg>38 МБ</span></span>', toast: 'Занятие в очереди на загрузку' }),
        ui.row({ thumb: PET.mint, title: 'Первый раз без поводка', sub: '21:47 · вышло сегодня', end: '<span class="ui-row-end is-value">нет сети</span>' }),
      ]) }),
    ]),
  ],
});
