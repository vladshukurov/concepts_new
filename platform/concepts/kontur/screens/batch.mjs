import { THEME } from './_shared.mjs';

const steps = [['1', 'Предсмачивание', '1:00 · завершено 18:12', 'done'], ['2', 'Проявитель', '6:42 из 9:30 · переворот через 18 с', 'now'], ['3', 'Стоп и фиксаж', 'Ещё не начато', ''], ['4', 'Промывка', '12 минут · вода 19 °C', '']];
export default (ui) => ui.screen({
  id: 'batch', theme: THEME,
  body: [
    ui.nav({ title: 'Партия K-184' }),
    ui.scroll([
      `<div class="kt-batch"><small>HP5 · Айжан и Дана</small><h1>Проявка 20 °C</h1><p class="ui-sub kt-mono">DD-X 1+4 · 9:30</p></div>`,
      ui.section({ children: ui.actions([ui.button({ label: 'Запустить таймер', icon: 'timer', block: true, primary: true, go: 'timer' })]) }),
      ui.section({ title: 'Этапы', children: ui.list(steps.map(([n, t, s, st]) => ui.row({ lead: `<span class="kt-num${st ? ` is-${st}` : ''}">${n}</span>`, title: t, sub: s }))) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'mic', title: 'Голосовая заметка', sub: 'Одна запись · без расшифровки', go: 'voice' }),
        ui.cell({ icon: 'scan-line', title: 'Сканировать лист', sub: 'После сушки · номера кадров', go: 'scan' }),
      ] }) }),
    ]),
  ],
});
