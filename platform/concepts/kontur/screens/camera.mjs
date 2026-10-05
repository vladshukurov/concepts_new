import { THEME, sheet } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'kt-cam',
  body: [
    ui.nav({ title: 'Скан листа', back: 'close', trailing: ui.iconButton({ icon: 'zap', label: 'Подсветка', toast: 'Подсветка включена' }) }),
    `<div class="kt-cam-view">${sheet(36)}</div><div class="kt-cam-tags"><span>авто</span><span>36 кадров</span><span>без бликов</span></div>`,
    ui.denied('camera'),
    ui.actions([ui.button({ label: 'Сохранить скан', block: true, primary: true, go: 'compose' })]),
  ],
});
