import { THEME } from './_shared.mjs';
import { meters, outage, cleanup } from '../model.mjs';

/* Сводка дома к утру: то, что обновилось ночью, а не журнал фоновой задачи */
export default (ui) => ui.screen({
  id: 'background', theme: THEME,
  body: [
    ui.nav({ title: 'Дом к утру' }),
    ui.scroll([
      ui.section({ title: 'Обновилось в 06:10', children: ui.list([
        ui.row({ lead: ui.leadIcon('megaphone', { accent: true }), title: 'Два объявления УК', sub: `${outage.title} ${outage.label}`, go: 'post' }),
        ui.row({ lead: ui.leadIcon('wrench'), title: 'Доводчик, второй подъезд', sub: 'Мастер сегодня с 16:00', go: 'events' }),
        ui.row({ lead: ui.leadIcon('gauge'), title: `Показания до ${meters.deadlineLabel}`, sub: `Осталось ${meters.left}`, go: 'meters' }),
        ui.row({ lead: ui.leadIcon('trees'), title: cleanup.title, sub: `Завтра в ${cleanup.time}`, go: 'events' }),
      ]) }),
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Собирать сводку каждое утро', icon: 'sunrise', block: true, activate: 'bgtask|background', primary: true })]),
        ui.granted('bgtask', 'Сводка будет готова к 07:00 каждый день'),
      ] }),
    ]),
  ],
});
