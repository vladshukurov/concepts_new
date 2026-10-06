import { THEME } from './_shared.mjs';
import { own, longrun } from '../model.mjs';

/* Виджет на экране «Домой»: неделя и ближайшая тренировка — данные приложения через App Group */
export default (ui) => ui.screen({
  id: 'widget', theme: THEME, className: 'ui-hs',
  body: ui.homeScreen({
    widget: { icon: 'dumbbell', kicker: 'Выбег · неделя', title: `${own.week.done} из ${own.week.goal} км`, sub: `${longrun.title} в ${longrun.start}`, activate: 'keychain|meetup' },
    app: { name: 'Выбег', icon: 'dumbbell', go: 'feed', primary: true },
  }),
});
