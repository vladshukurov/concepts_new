import { THEME } from './_shared.mjs';

const marks = [['02:41', 'Сроки ремонта северной дороги'], ['08:14', 'График подачи воды на сентябрь'], ['10:02', 'Ремонт дома правления'], ['11:58', 'Ворота, контейнеры и субботник']];
export default (ui) => ui.screen({
  id: 'player', theme: THEME,
  body: [
    ui.nav({ title: 'Запись', trailing: ui.iconButton({ icon: 'cast', label: 'Слушать на телевизоре', go: 'tv' }) }),
    ui.scroll([
      ui.section({ children: `<div class="kl-rec"><div class="kl-rec-frame ph"></div><div class="kl-rec-copy"><h1>Собрание 4 сентября</h1><p class="ui-sub">Записал Илья · диктофон на столе правления</p></div>${ui.progress({ fillClass: 'kl-w-64' })}${ui.times('08:12', '−04:29')}<div class="kl-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.button({ label: 'Слушать', icon: 'play', fillIcon: true, primary: true, activate: 'audio|background' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div></div>` }),
      ui.section({ title: 'Метки', meta: '4', children: ui.list(marks.map(([t, s]) => ui.row({ lead: `<span class="kl-ts">${t}</span>`, title: s, toast: `Перемотано на ${t}` }))) }),
      ui.section({ title: 'Файл и обсуждение', children: ui.list([
        ui.row({ lead: `<span class="ui-thumb ph"></span>`, title: 'Скачано', sub: '84 МБ · играет без сети', end: '<span class="ui-row-end is-value"><span class="dl is-ready"><svg><use href="#i-circle-check"/></svg></span></span>' }),
        ui.row({ lead: `<span class="ui-thumb ph"></span>`, title: 'Обсуждают метку 08:14', sub: 'Там же уточняли сроки ремонта въезда', toast: 'Обсуждение метки 08:14' }),
      ]) }),
    ]),
  ],
});
