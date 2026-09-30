import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'cookalong', theme: THEME,
  body: [
    ui.nav({ title: 'Готовим вместе', trailing: ui.iconButton({ icon: 'message-circle', label: 'Чат кухни', go: 'conversation' }) }),
    ui.scroll([
      `<div class="pd-head"><small>Сегодня · 19:00</small><h1>Ужин из одной сковороды</h1><p class="ui-sub">Амина ведёт · 8 участников подготовились</p></div>`,
      ui.section({ title: 'Сейчас', children: [
        `<div class="pd-now"><b>02</b><span><strong>Обжарьте лук до прозрачности</strong><span>6 минут · средний огонь</span></span></div>`,
        ui.actions([
          ui.button({ label: 'Открыть все шаги', block: true, go: 'steps', primary: true }),
          ui.button({ label: 'Чат кухни · 4 новых', icon: 'message-circle', variant: 'secondary', block: true, go: 'conversation' }),
        ], { className: 'pd-gap' }),
      ] }),
      ui.section({ title: 'Не пропустить', children: [
        ui.group({ cells: [
          ui.cell({ icon: 'calendar-plus', title: 'Добавить в календарь', sub: '16 сентября · 19:00–19:45', ask: 'calendar|cookalong|cookalong' }),
          ui.cell({ icon: 'download', title: 'Скачать шаги перед готовкой', sub: 'Таймеры и видео без сети', activate: 'bgtask|cookalong' }),
          ui.cell({ icon: 'bell', title: 'Напомнить за 15 минут', sub: 'Только об этой готовке', toggle: false, ask: 'push|cookalong|cookalong' }),
        ] }),
        ui.granted('calendar', 'Готовка в календаре'),
        ui.granted('bgtask', 'Шаги и таймеры скачаны · 42 МБ'),
        ui.denied('calendar', 'Время остаётся в разделе «Готовим»'),
        ui.denied('push', 'Напоминание появится внутри приложения'),
      ] }),
    ]),
  ],
});
