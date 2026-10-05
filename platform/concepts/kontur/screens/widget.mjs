import { THEME } from './_shared.mjs';
import { walk } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'kt-home',
  body: [
    `<div class="kt-widget"><small>${ui.icon('aperture')}Контур</small><strong>${walk.title}</strong><span>Сегодня · 18:40 · 7 участников</span><hr><strong>Передача K-184</strong><span>После 19:00 · кофейня у Lab-Red</span></div>`,
    ui.denied('appgroups'),
    ui.denied('keychain'),
    ui.actions([
      ui.button({ label: 'Добавить виджет', block: true, primary: true, activate: 'appgroups|widget' }),
      ui.button({ label: 'Открыть прогулку', variant: 'secondary', block: true, activate: 'keychain|walk' }),
    ]),
  ],
});
