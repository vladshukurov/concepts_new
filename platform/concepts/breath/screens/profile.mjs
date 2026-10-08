/* Профиль «Мотива»: свои песни и записи, июль полосой по дням, последнее записанное, вход в настройки */
const THEME = 'vk-dark';
/* Записи июля по дням — те же даты, что в «Набросках»: 11, 14 (две), 15, 18, 21, 29 */
const JULY = { 11: 1, 14: 2, 15: 1, 18: 1, 21: 1, 29: 1 };
const strip = `<div class="br-month" aria-label="Записи июля по дням">${Array.from({ length: 31 }, (_, i) => `<i class="${JULY[i + 1] ? `is-on${JULY[i + 1] > 1 ? ' is-2' : ''}` : ''}"></i>`).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.nav({ title: 'Профиль', trailing: `<span class="br-nav-act">${ui.textButton({ label: 'Изменить', go: 'meedit' })}${ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })}</span>` }),
    ui.scroll([
      `<section class="br-me">${ui.avatar('В', { large: true })}<h1 class="ui-title">Влад</h1><p class="ui-sub">Пишу песни под гитару · с 3 мая в «Мотиве»</p></section>`,
      ui.stats([['9', 'песен'], ['14', 'записей без песни'], ['6', 'любимых версий']]),
      ui.section({ title: 'Июль', meta: '7 записей · 2 новые песни', children: strip }),
      ui.section({ children: ui.list([
        ui.row({ lead: `<span class="ui-thumb br-ico"><svg><use href="#i-mic"/></svg></span>`, title: 'Последнее: Без названия 14', sub: 'напел в метро · сегодня, 08:12', end: { value: '0:38' }, go: 'n14' }),
        ui.row({ lead: `<span class="ui-thumb br-ico"><svg><use href="#i-list-music"/></svg></span>`, title: 'Наброски', sub: '9 песен и 14 записей без песни', go: 'discover' }),
        ui.row({ lead: `<span class="ui-thumb br-ico"><svg><use href="#i-heart"/></svg></span>`, title: 'Любимое', sub: '6 версий · недавно слушали', go: 'library' }),
      ]) }),
    ]),
  ],
});
