import { THEME, frame, channel, videoCard } from './_shared.mjs';
import { sokolniki, teams, people, videos } from '../model.mjs';

/* Итог квеста: счёт, финал на телевизоре, лучшие моменты и фильм квеста в «Фото» */
const s = sokolniki;
export default (ui) => ui.screen({
  id: 'final', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: 'Итог квеста' }),
    ui.scroll([
      `<div class="vz-banner ${frame}">${ui.duration(s.film)}</div>`,
      ui.section({ children: [
        channel({ initial: people.me.initial, title: s.finalTitle, sub: `${s.meta} · придумали вы` }),
        `<div class="vz-score"><span><strong>${s.score.owl}</strong>${teams.owl.name}</span><i>:</i><span><strong>${s.score.hedgehog}</strong>${teams.hedgehog.name}</span></div>`,
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: 'Показать финал на телевизоре', sub: 'Счёт и лучшие моменты на экране в комнате', ask: 'localnetwork|cast|final' }),
        ui.row({ lead: ui.leadIcon('download', { round: true, accent: true }), title: 'Сохранить фильм квеста в «Фото»', sub: `${s.clips} роликов · ${s.film} одним фильмом`, ask: 'photosadd|final|final' }),
        ui.row({ shownAfter: 'photosadd', lead: ui.leadIcon('images', { round: true, accent: true }), title: `Фильм «${s.title}» · ${s.film} в «Фото»`, sub: 'Альбом «Вызов» · 1080p · 212 МБ' }),
      ]) }),
      ui.denied('localnetwork'),
      ui.section({ title: 'Лучшие моменты', children: videoCard(videos.boat) }),
      ui.section({ title: 'Точки', meta: `${s.points} точек`, children: ui.list([
        ui.row({ lead: ui.leadIcon('', { round: true, text: '6' }), title: 'Проплывите по пруду, гребя руками', sub: 'Ёж +6 · Сова +4' }),
        ui.row({ lead: ui.leadIcon('', { round: true, text: '7' }), title: 'Изобразите белку, которая прячет орех', sub: 'Сова +6 · Ёж +3' }),
        ui.row({ lead: ui.leadIcon('', { round: true, text: '8' }), title: 'Спойте гимн Сокольников, который сочините', sub: 'Сова +5 · Ёж +5' }),
      ]) }),
    ]),
  ],
});
