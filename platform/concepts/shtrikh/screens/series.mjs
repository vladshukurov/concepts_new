import { THEME } from './_shared.mjs';
import { places } from '../model.mjs';

const arts = ['sh-s1', 'sh-s2', 'sh-s5', 'sh-s6', 'sh-s1', 'sh-s2'];
export default (ui) => ui.screen({
  id: 'series', theme: THEME,
  body: [
    ui.nav({ title: places.panfilova.name, trailing: ui.iconButton({ icon: 'share', label: 'Поделиться серией', toast: 'Ссылка на серию скопирована' }) }),
    ui.scroll([
      ui.section({ children: `<div class="sh-head"><small>${places.panfilova.works} работ · ${places.panfilova.authors} авторов</small><strong>${places.panfilova.series}</strong><span>Одна точка у старой липы — каждый рисует её по-своему</span></div>` }),
      ui.section({ children: [`<div class="sh-series">${arts.map((a, i) => `<button class="${a}" data-go="post" aria-label="Работа серии ${i + 1}"></button>`).join('')}</div>`] }),
      ui.section({ children: [
        ui.list([ui.row({ lead: ui.leadIcon('bell'), title: 'Новые работы этой точки — сами', sub: 'Серия обновится, даже когда «Штрих» закрыт', activate: 'remotenotif|series' })]),
        ui.granted('remotenotif', 'Две новые работы появились ночью'),
        ui.actions([ui.button({ label: 'Добавить свой взгляд', icon: 'plus', block: true, go: 'compose', primary: true })], { className: 'sh-gap' }),
      ] }),
    ]),
  ],
});
