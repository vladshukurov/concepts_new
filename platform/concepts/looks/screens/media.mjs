import { THEME, P } from './_shared.mjs';
import { own } from '../model.mjs';

/* Не пикер, а находка: приложение само собрало снимки в полный рост у зеркала
   из всей медиатеки — поэтому нужен полный доступ, а не выбор пары файлов */
const shots = Array.from({ length: 12 }, (_, i) => (i === 0 ? P.marina : 'ph'));
const picked = [0, 2, 5];
export default (ui) => ui.screen({
  id: 'media', theme: THEME,
  body: [
    ui.nav({ title: 'Снимки у зеркала', back: 'close', trailing: ui.textButton({ label: `Добавить ${own.mirror.picked}`, strong: true, go: 'create', primary: true }) }),
    ui.scroll([
      ui.section({ title: `Нашлось ${own.mirror.found}`, meta: `${own.mirror.since} · в полный рост`, children: `<div class="lk-grid">${shots.map((s, i) => `<button class="${s}${picked.includes(i) ? ' is-picked' : ''}" data-toast="${picked.includes(i) ? 'Снимок убран из образа' : 'Снимок добавлен в образ'}" aria-label="Снимок ${i + 1}"></button>`).join('')}</div>` }),
    ]),
  ],
});
