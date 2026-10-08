import { THEME, P, swapText } from './_shared.mjs';
import { own } from '../model.mjs';

/* Новый образ: кадр у зеркала (камера) или найденные снимки (медиатека),
   погода — по текущему месту, вещи и повод. Результат каждого доступа виден здесь же */
export default (ui) => ui.screen({
  id: 'create', theme: THEME,
  body: [
    ui.nav({ title: 'Новый образ', back: 'close', trailing: ui.textButton({ label: 'Готово', strong: true, toast: 'Образ в лукбуке|home' }) }),
    ui.scroll([
      ui.section({ children: `<label class="lk-note"><span class="ui-post-ava ${P.marina}"></span><input placeholder="Куда и в чём — пара слов для себя" aria-label="Заметка к образу"/></label>` }),
      ui.section({ children: [
        ui.list([
          ui.row({ thumb: P.marina, title: 'Кадр в полный рост', sub: 'Только что · обложка образа', shownAfter: 'camera', toast: 'Кадр выбран обложкой' }),
          ui.row({ lead: ui.leadIcon('images', { accent: true }), title: `${own.mirror.picked} снимка из медиатеки`, sub: 'У зеркала, март и апрель', shownAfter: 'photos', toast: 'Снимки выбраны обложкой' }),
        ]),
        ui.actions([
          ui.button({ label: 'Снять', icon: 'camera', block: true, ask: 'camera|camera|create', primary: true }),
          ui.button({ label: 'Найти образы в медиатеке', icon: 'image', variant: 'secondary', block: true, ask: 'photos|media|create' }),
        ]),
      ] }),
      ui.denied('camera'),
      ui.denied('photos'),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'tag', title: 'Отметить вещи', value: '4', toggle: 'on' }),
        ui.cell({ icon: 'cloud-sun', title: 'Погода здесь', sub: swapText('location', 'По текущему месту', `${own.weather.where} · сейчас`), value: swapText('location', '', own.weather.now), ask: 'location|create|create' }),
        `<div class="perm-hidden" data-show-denied="location">${ui.cell({ icon: 'map-pin', title: 'Район для погоды', value: 'Выбрать', menu: ['Петроградская', 'Васильевский', 'Центр', 'Купчино'] })}</div>`,
        ui.cell({ icon: 'calendar', title: 'Повод', value: 'Своп', menu: ['Работа', 'Своп', 'Встреча', 'Дом'] }),
      ] }) }),
      ui.denied('location'),
    ]),
  ],
});
