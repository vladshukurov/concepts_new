import { THEME } from './_shared.mjs';
import { tonight, club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'compose', theme: THEME,
  body: [
    ui.nav({ title: 'Новая запись', back: 'cancel', trailing: ui.textButton({ label: 'Опубликовать', strong: true, go: 'post', primary: true }) }),
    ui.scroll([
      ui.section({ children: `<p class="st-text">Сегодня раскладываем «${tonight.game}». Одно место свободно, правила объясним перед партией</p>` }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять поле', sub: 'Расклад или итог партии', ask: 'camera|compose|compose' }),
        ui.cell({ icon: 'image', title: 'Фото', sub: 'Готовый снимок поля', ask: 'photos|compose|compose' }),
        ui.cell({ icon: 'map-pin', title: 'Место', sub: 'Клуб или кафе рядом', ask: 'location|compose|compose' }),
        ui.cell({ icon: 'dices', title: 'Игра', value: tonight.game, go: 'games' }),
      ] }) }),
      ui.granted('camera', 'Снимок поля добавлен в запись'),
      ui.granted('photos', 'Два снимка добавлены'),
      ui.granted('location', `Место: ${club.name}, ${club.address}`),
      ui.denied('camera', 'Камера выключена — выберите снимок из Фото'),
      ui.denied('photos', 'Фото закрыты — снимите поле камерой'),
      ui.denied('location', 'Место можно вписать вручную'),
    ]),
  ],
});
