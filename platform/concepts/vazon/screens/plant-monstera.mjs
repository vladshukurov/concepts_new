import { plantScreen } from './_shared.mjs';
import { now } from '../model.mjs';

/* Монстера: рост по месяцам. Камера снимает октябрьский кадр, медиатека
   добавляет снимки прошлых месяцев — так видно, как она росла */
export default (ui) => plantScreen(ui, 'monstera', {
  care: [
    ui.row({ lead: ui.leadIcon('flask-conical'), title: 'Подкормка', sub: 'Последняя 12 сентября · до весны без подкормок' }),
    ui.row({ lead: ui.leadIcon('cloud-sun'), title: 'Свет', sub: 'Рассеянный · повернуть горшок раз в две недели' }),
  ],
  extra: [
    ui.section({ title: 'Снимок месяца', children: [
      ui.group({ cells: [
        ui.cell({ icon: 'camera', title: 'Снять монстеру', sub: 'Кадр месяца — с того же места у окна', ask: 'camera|camera|plant-monstera' }),
        ui.cell({ icon: 'images', title: 'Снимки за прошлые месяцы', sub: 'Найти в медиатеке и расставить по датам', ask: 'photos|picker|plant-monstera' }),
      ] }),
      ui.denied('camera'),
      ui.denied('photos'),
    ] }),
    ui.section({ shownAfter: 'camera', children: ui.entry({ icon: 'camera', title: 'Монстера · октябрь', meta: `снято сегодня, ${now.short} · 8 листьев`, text: 'Новый лист с прорезями — первый за три года', photos: 1 }) }),
  ],
  growth: [
    ui.row({ thumb: 'ph', title: 'Сентябрь · 7 листьев', sub: 'Снято 6 сентября · воздушный корень в горшок' }),
    ui.row({ thumb: 'ph', title: 'Август · 6 листьев', sub: 'Из медиатеки · 14 августа', shownAfter: 'photos' }),
    ui.row({ thumb: 'ph', title: 'Июнь · 5 листьев', sub: 'Из медиатеки · после пересадки', shownAfter: 'photos' }),
    ui.row({ thumb: 'ph', title: 'Апрель · 4 листа', sub: 'Из медиатеки · первый снимок дома', shownAfter: 'photos' }),
  ],
});
