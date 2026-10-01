import { THEME, map } from './_shared.mjs';
import { people, now } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'route', theme: THEME,
  body: [
    ui.nav({ title: 'Кто в пути' }),
    ui.scroll([
      ui.section({ children: [map([['ИМ', 'ry-x10', 'ry-y56'], ['ДО', 'ry-x34', 'ry-y70'], ['ВК', 'ry-x10', 'ry-y20']])] }),
      ui.granted('locationalways', `Вы отмечены в пути · ${now.time}`),
      ui.section({ title: 'Идут к старту', children: ui.list([
        ui.row({ lead: ui.avatar(people.ilya.initial), title: people.ilya.name, sub: 'У клуба · раскладывает конусы' }),
        ui.row({ lead: ui.avatar(people.dasha.initial), title: people.dasha.name, sub: 'Идёт от метро · семь минут' }),
        ui.row({ lead: ui.avatar(people.alina.initial), title: people.alina.name, sub: 'Улица Абая · 1,2 км' }),
        ui.row({ lead: ui.avatar(people.roman.initial), title: people.roman.name, sub: 'Подтвердил, дорогу не отмечает' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Написать в чат тренировки', icon: 'message-circle', variant: 'secondary', block: true, go: 'chat', primary: true })]) }),
    ]),
  ],
});
