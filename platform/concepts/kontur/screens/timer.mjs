import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'timer', theme: THEME, className: 'kt-timer',
  body: [
    ui.nav({ title: '', back: 'close' }),
    `<div class="kt-timer-body"><small>Проявитель · этап 2 из 4</small><strong>09:30</strong><p>Первый переворот 30 секунд, затем каждые 60</p><div class="kt-ticks"><i class="is-on"></i><i class="is-on"></i><i></i><i></i></div></div>`,
    ui.actions([
      ui.button({ label: 'Начать проявку', icon: 'play', fillIcon: true, block: true, primary: true, toast: 'Проявка началась' }),
      ui.actions([ui.button({ label: '+1 мин', variant: 'secondary', toast: 'Добавлена минута' }), ui.button({ label: 'Пропустить', variant: 'secondary', toast: 'Этап пропущен' })], { row: true }),
    ]),
  ],
});
