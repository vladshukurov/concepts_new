import { THEME } from './_shared.mjs';
import { tonight } from '../model.mjs';

const chapters = ['Цель партии', 'Подготовка поля', 'Ход игрока', 'Подсчёт союзов', 'Финальный раунд'];
export default (ui) => ui.screen({
  id: 'audio', theme: THEME,
  body: [
    ui.nav({ title: 'Памятка правил', trailing: ui.iconButton({ icon: 'download', label: 'Скачать памятку', toast: 'Памятка на телефоне' }) }),
    ui.scroll([
      ui.section({ children: `<div class="st-rules"><h1>${tonight.game}: правила за 10 минут</h1>${ui.progress({ fillClass: 'st-w-40' })}${ui.times('4:02', '−6:10')}<div class="st-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.button({ label: 'Слушать памятку', icon: 'headphones', activate: 'audio|audio', primary: true })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div></div>` }),
      ui.granted('audio', 'Памятка звучит и при погашенном экране'),
      ui.section({ title: 'Главы', children: ui.list(chapters.map((c, i) => ui.row({ lead: ui.leadIcon('', { text: String(i + 1).padStart(2, '0') }), title: c, toast: `Глава ${i + 1}`, now: i === 2 }))) }),
    ]),
  ],
});
