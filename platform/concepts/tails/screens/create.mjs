import { THEME, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'create', theme: THEME,
  body: [
    ui.nav({ title: 'Новая запись', back: 'close', trailing: ui.textButton({ label: 'Сохранить', strong: true, toast: 'Запись в дневнике Трюфеля|home', primary: true }) }),
    ui.scroll([
    `<div class="tl-composer"><div class="tl-composer-who"><span class="ui-thumb is-round ${PET.truffle}"></span><span class="ui-row-text"><strong>Трюфель</strong><span>Только мне</span></span></div><p class="tl-composer-field">Что нового у Трюфеля?</p></div>`,
    `<div class="tl-attach-row"><button class="tl-attach-btn" data-ask="camera|camera|create">${ui.icon('camera')}<strong>Снять</strong><span>Камера</span></button><button class="tl-attach-btn" data-ask="photos|media|create">${ui.icon('images')}<strong>Из Фото</strong><span>Недавние снимки</span></button></div>`,
    ui.denied('camera'),
    ui.denied('photos'),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'map-pin', title: 'Место', value: 'у пруда', toast: 'Место: Петроградская, у пруда' }),
      ui.cell({ icon: 'paw-print', title: 'Площадка', value: 'Лопухинский сад', go: 'places' }),
    ] }) }),
  ]),
  ],
});
