import { THEME, TABS, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'create', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Новая запись'),
    `<div class="tl-composer"><div class="tl-composer-who"><span class="ui-thumb is-round ${PET.barni}"></span><span class="ui-row-text"><strong>Барни</strong><span>Видно друзьям</span></span></div><p class="tl-composer-field">Что нового у Барни?</p></div>`,
    `<div class="tl-attach-row"><button class="tl-attach-btn" data-primary data-ask="camera|camera|create">${ui.icon('camera')}<strong>Снять</strong><span>Камера</span></button><button class="tl-attach-btn" data-ask="photos|media|create">${ui.icon('images')}<strong>Из Фото</strong><span>Недавние снимки</span></button></div>`,
    ui.denied('camera', 'Камера недоступна — выберите готовый снимок'),
    ui.denied('photos', 'Фото недоступны — можно снять новый кадр'),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'map-pin', title: 'Место', value: 'у пруда', toast: 'Место: Петроградская, у пруда' }),
      ui.cell({ icon: 'paw-print', title: 'Площадка', value: 'Лопухинский сад', go: 'places' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'create' }),
});
