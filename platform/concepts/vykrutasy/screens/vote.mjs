import { THEME } from './_shared.mjs';
import { roundAnswers, myAnswer, people } from '../model.mjs';

/* Голосование: снятый ответ уже в раунде и крутится на телевизоре, игроки голосуют с телефонов */
export default (ui) => ui.screen({
  id: 'vote', theme: THEME,
  body: [
    ui.nav({ title: 'Голосование', trailing: ui.iconButton({ icon: 'tv', label: 'Вечер у Саши', go: 'room' }) }),
    ui.scroll([
      ui.section({ children: ui.videoCard({ art: myAnswer.art, duration: myAnswer.dur, avatar: ui.avatar(people.me.initial), title: 'Ваш ответ в раунде', sub: myAnswer.meta }) }),
      ui.section({ title: 'За кого голосуете', meta: 'раунд 1', children: ui.list(roundAnswers.map((a) =>
        ui.row({ thumb: a.art, wide: true, duration: a.dur, title: a.who.name, sub: a.sub, end: ui.iconButton({ icon: 'trophy', label: `Голос за ответ: ${a.who.short}`, toast: `Голос за ответ: ${a.who.short}` }) }))) }),
      ui.section({ children: ui.foot('Илья ещё снимает · голосование до 19:52', 'vy-watch-meta') }),
      ui.actions(ui.button({ label: 'Следующий раунд', block: true, go: 'galleryround', primary: true }), { className: 'vy-bottom' }),
    ]),
  ],
});
