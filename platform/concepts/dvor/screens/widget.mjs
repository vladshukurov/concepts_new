import { THEME } from './_shared.mjs';
import { house, outage, meters, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: `<div class="dv-banner"><button class="ui-ln" data-activate="commnotif|chat" aria-label="Уведомление: ${people.marina.name}"><span class="ui-ln-face ${ui.hue(people.marina.initial)}">${people.marina.initial}<i>${ui.icon('house')}</i></span><span class="ui-ln-body"><span class="ui-ln-top"><b>${people.marina.name}</b><time>сейчас</time></span><small>кв. ${people.marina.flat}</small><span class="ui-ln-text">Мастер будет с 16:00, я открою подъезд</span></span></button></div>` + ui.homeScreen({
    widget: { icon: 'house', kicker: `В квартире · ${house.address}`, title: `${outage.title} ${outage.label}`, sub: `Показания — до ${meters.deadlineLabel} · ${meters.left}`, go: 'home' },
    app: { name: 'В квартире', icon: 'house', go: 'home' },
  }),
});
