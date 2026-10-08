import { sessionScreen } from './_shared.mjs';
import { sessions, reminder, pieces, beats } from '../model.mjs';

/* Сегодняшнее занятие: запись открывает плеер, «вчера и сегодня», напоминание на завтра */
const s = sessions.today;
export default (ui) => sessionScreen(ui, s, {
  prev: `${sessions.yesterday.bpm} вчера`, player: true,
  extra: [ui.section({ children: ui.list([
    ui.row({ lead: `<span class="ui-thumb mt-ico is-accent">${ui.icon('arrow-left-right')}</span>`, title: 'Вчера и сегодня', sub: `${sessions.yesterday.bpm} и ${beats(s.bpm)} · послушать подряд`, go: 'compare' }),
    ui.reminder({ title: `Напомнить позаниматься в ${reminder.time}`, titleGranted: `Напомним ${reminder.when}`, sub: `${pieces.romance.title} · завтра`, here: 'today' }),
  ]) })],
});
