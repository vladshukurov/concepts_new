import { THEME, sheet } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'scan', theme: THEME, className: 'kt-cam',
  body: [
    ui.nav({ title: 'Контакт-лист', back: 'close', trailing: ui.iconButton({ icon: 'zap', label: 'Подсветка', toast: 'Подсветка включена' }) }),
    `<div class="kt-cam-view">${sheet(36, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])}</div><div class="kt-cam-tags"><span>Найдено 16 номеров кадров</span></div>`,
    ui.actions([ui.button({ label: 'Сканировать лист', icon: 'scan-line', block: true, primary: true, go: 'batch' })]),
  ],
});
