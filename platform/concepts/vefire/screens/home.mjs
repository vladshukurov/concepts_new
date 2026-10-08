import { THEME, TABS, MINI, vcard } from './_shared.mjs';
import { issues, weekly, fri, rubrics, rMeta } from '../model.mjs';

/* Главная: логотип по центру, сверху выпуск этой недели, ниже — выпуски рубрик вертикальными кадрами в две колонки */
const ticker = `${issues.cat.title}`;
const sub = (i) => `${i.rubric.title} · ${i.by.short}`;
export default (ui) => ui.screen({
  id: 'home', theme: THEME, className: 'vf-wrap vf-home',
  body: ui.scroll([
    ui.top(ui.iconButton({ icon: 'search', label: 'Поиск', go: 'search' }), [
      ui.wordmark({ name: 'В эфире' }),
      ui.iconButton({ icon: 'users', label: 'Семья', go: 'family' }),
    ]),
    `<div class="vf-ticker" aria-label="Бегущая строка"><b>Срочно</b><span>${ticker}</span></div>`,
    ui.section({ title: 'Выпуск этой недели', more: { go: 'weekly', label: 'Выпуск недели' }, children: ui.videoCard({
      art: weekly.art, duration: weekly.dur, go: weekly.id, className: 'vf-week',
      overlay: `<span class="vf-onair">№${weekly.n}</span>`,
      title: weekly.title,
      sub: `Ведут ${weekly.hosts} · ${weekly.chapters.length} рубрики · премьера ${fri.day.split(', ')[0]} в ${fri.time} на ТВ`,
    }) }),
    ui.section({ title: 'Выпуски рубрик', meta: 'за неделю', children: ui.grid([
      vcard(ui, issues.weather, sub(issues.weather)),
      vcard(ui, issues.yard, sub(issues.yard)),
      vcard(ui, issues.cat, sub(issues.cat)),
      vcard(ui, issues.fog, sub(issues.fog)),
    ]) }),
    ui.section({ children: ui.adCard({ icon: 'store', title: 'Детская экшн-камера', sub: 'Реклама · доставка завтра', subGranted: 'Реклама · по интересам · для юных блогеров', go: 'ads' }) }),
    ui.section({ title: 'Рубрики', children: ui.list(Object.values(rubrics).map((r) =>
      ui.row({ lead: ui.avatar(r.host.initial), title: r.title, sub: rMeta(r), go: r.id }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
