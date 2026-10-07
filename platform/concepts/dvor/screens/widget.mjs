import { THEME } from './_shared.mjs';
import { house, outage, meters } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'house', kicker: `В квартире · ${house.address}`, title: `${outage.title} ${outage.label}`, sub: `Показания — до ${meters.deadlineLabel} · ${meters.left}`, activate: 'keychain|home' },
    app: { name: 'В квартире', icon: 'house', activate: 'keychain|home' },
  }),
});
