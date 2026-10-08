import { THEME } from './_shared.mjs';
import { plants, today } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ title: 'Сегодня', children: ui.list([
        ui.row({ lead: ui.avatar('ИБ'), title: 'Ира прислала 2 фото хойи', sub: 'Фото хойи от Иры уже в чате · 8:12', go: 'direct-ira' }),
        ui.row({ lead: ui.leadIcon('droplets', { accent: true }), title: `Полить сегодня: ${today.length}`, sub: today.map((p) => p.name).join(', '), go: 'water', primary: true }),
      ]) }),
      ui.section({ title: 'На неделе', children: ui.list([
        ui.row({ lead: ui.avatar('М'), title: 'Мама ответила в чате', sub: '«Фиалку не заливай, она этого не любит» · вт', subWrap: true, go: 'direct-mama' }),
        ui.row({ lead: ui.leadIcon('trees'), title: `${plants.sansevieria.name} — полив ${plants.sansevieria.water}`, sub: 'Раз в 3 недели · следующая через 12 дней', go: plants.sansevieria.id }),
      ]) }),
    ]),
  ],
});
