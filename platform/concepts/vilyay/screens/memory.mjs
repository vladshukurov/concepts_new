import { THEME } from './_shared.mjs';
import { yearAgo, snowDay, clips, cMeta, dog } from '../model.mjs';

/* «Год назад сегодня»: воспоминание дня и напоминание о следующем — первом снеге */
export default (ui) => ui.screen({
  id: 'memory', theme: THEME, className: 'vl-wrap',
  body: [
    ui.nav({ title: 'Год назад сегодня' }),
    ui.scroll([
      ui.section({ children: ui.videoCard({ art: yearAgo.art, duration: yearAgo.dur, avatar: ui.avatar(yearAgo.by.initial), title: yearAgo.title, sub: `${yearAgo.day} 2025 · сняла мама · Рыжику было 7 месяцев` }) }),
      ui.section({ children: ui.miniInfo([
        { icon: 'history', text: `Ровно год назад · сейчас ${dog.name} ${dog.age}` },
        { icon: 'map-pin', text: 'Парк Дружбы' },
      ]) }),
      ui.section({ title: 'Скоро год', children: ui.list([
        ui.row({ thumb: clips.snow.art, wide: true, duration: clips.snow.dur, title: clips.snow.title, sub: `${cMeta(clips.snow)} 2025 · через 37 дней`, go: clips.snow.id }),
      ]) }),
      ui.section({ children: ui.list([
        ui.reminder({ title: 'Напомнить: год назад Рыжик впервые увидел снег', titleGranted: `Напомним ${snowDay.short} в ${snowDay.time}`, sub: `${snowDay.day} · вечером, когда все дома`, here: 'memory' }),
      ]) }),
    ]),
  ],
});
