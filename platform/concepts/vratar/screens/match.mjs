import { THEME } from './_shared.mjs';
import { lastMatch, moments, mMeta, friendClip, team } from '../model.mjs';

/* Страница прошлого матча как канал: обложка, команда, моменты, показ на ТВ в баре */
const LIST = ['save', 'free', 'win', 'mine'].map((k) => moments[k]);
export default (ui) => ui.screen({
  id: 'match', theme: THEME, className: 'vr-wrap',
  body: [
    ui.nav({ title: 'Матч' }),
    ui.scroll([
      `<div class="vr-banner ${lastMatch.art}"></div>`,
      ui.section({ children: [
        `<div class="vr-channel">${ui.avatar(team.initial, { large: true })}<span class="ui-row-text"><strong>${lastMatch.title}</strong><span>${lastMatch.meta}</span></span></div>`,
        ui.usersStack({ faces: ['ГП', 'ДЕ', 'ИС'], text: 'Гоша, Дима, Илья и ещё 6 в составе' }),
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: 'Показать на телевизоре', sub: 'В баре или раздевалке, в той же Wi‑Fi', ask: 'localnetwork|match|match' }),
        ui.row({ shownAfter: 'localnetwork', lead: ui.leadIcon('cast', { round: true, accent: true }), title: 'ТВ в баре «Штрафная»', sub: `LG · 55 дюймов · идут ${lastMatch.moments} моментов подряд`, end: { badge: 'ТВ' } }),
        ui.row({ lead: ui.leadIcon('images', { round: true, accent: true }), title: 'Добавить ролик товарища', sub: 'Сева прислал гол Кости в чат, он уже в «Фото»', ask: 'photos|picker|match' }),
      ]) }),
      ui.denied('localnetwork'),
      ui.denied('photos'),
      ui.section({ children: ui.chips([
        { label: 'Все', on: true, filter: 'all' },
        { label: 'Голы', filter: 'goal' },
        { label: 'Сейвы', filter: 'save' },
      ]) }),
      ui.section({ shownAfter: 'photos', tags: ['goal'], children: ui.videoCard({ art: friendClip.art, duration: friendClip.dur, avatar: ui.avatar('КБ'), title: friendClip.title, sub: friendClip.sub }) }),
      ...LIST.map((m) => ui.section({ tags: [m.kind], children: ui.videoCard({ art: m.art, duration: m.dur, go: m.id, avatar: ui.avatar(m.who.initial), title: m.title, sub: `${mMeta(m)} · снял ${m.by.short}` }) })),
    ]),
  ],
});
