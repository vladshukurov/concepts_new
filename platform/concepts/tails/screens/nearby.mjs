import { THEME, TABS, PET, faces } from './_shared.mjs';

const walk = ({ title, time, sub, tags, pets, go = 'walk' }) => `<button class="tl-walk" data-go="${go}"><span class="tl-walk-head"><strong>${title}</strong><span class="tl-walk-time">${time}</span></span><span class="tl-walk-sub">${sub}</span><span class="tl-walk-head">${faces(...pets)}<span class="tl-walk-tags">${tags.map((t) => `<span>${t}</span>`).join('')}</span></span></button>`;

export default (ui) => ui.screen({
  id: 'nearby', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Рядом', ui.iconButton({ icon: 'search', label: 'Площадки', go: 'places' })),
    ui.denied('location'),
    ui.section({ title: 'Прогулки сегодня', meta: 'Петроградская', children: [
      walk({ title: 'Спокойный круг у пруда', time: '18:40', sub: 'Трюфель и ещё 5 · старт в 18:40', tags: ['35 минут', 'малые и средние', '1,8 км'], pets: [PET.truffle, PET.mint, PET.barni] }),
      walk({ title: 'Быстро по набережной', go: 'walk-quay', time: '19:30', sub: 'Бруно и ещё 2', tags: ['50 минут', 'активный темп', '3,4 км'], pets: [PET.barni, PET.truffle] }),
      walk({ title: 'Знакомство щенков', go: 'walk-puppies', time: 'завтра', sub: 'Локи ждёт компанию в 10:10', tags: ['без поводка', 'до 1 года'], pets: [PET.loki] }),
    ] }),
    ui.section({ title: 'Площадки рядом', more: { go: 'places', label: 'Все площадки' }, children: ui.list([
      ui.row({ lead: ui.leadIcon('map-pin'), title: 'Лопухинский сад', sub: '1,8 км · с забором · 6 собак сейчас', end: { value: '18:40' }, go: 'place-lopukhin' }),
      ui.row({ lead: ui.leadIcon('map-pin'), title: 'Набережная у ЦПКиО', sub: '3,4 км · песок', end: { value: '19:30' }, go: 'place-quay' }),
      ui.row({ lead: ui.leadIcon('map-pin'), title: 'Двор на Съезжинской', sub: '0,6 км · для щенков до года', end: { value: 'завтра' }, go: 'place-yard' }),
    ]) }),
    ui.foot('Обновлено 12 минут назад · данные от 34 владельцев', 'is-block'),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'nearby' }),
});
