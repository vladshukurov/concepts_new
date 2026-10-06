import { THEME } from './_shared.mjs';
import { own, longrun } from '../model.mjs';

/* Виджет на экране «Домой»: неделя и ближайшая тренировка — данные приложения через App Group */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'activity', kicker: 'Выбег · неделя', title: `${own.week.done} из ${own.week.goal} км`, sub: `${longrun.title} в ${longrun.start}`, go: 'meetup' },
    app: { name: 'Выбег', icon: 'activity', go: 'feed', primary: true },
  }),
});
