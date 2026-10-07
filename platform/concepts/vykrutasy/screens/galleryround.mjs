import { THEME, frame, taskCard } from './_shared.mjs';
import { tasks, galleryAnswer, people } from '../model.mjs';

/* Раунд «Покажи из галереи»: свой старый ролик или фото на тему уходит в раунд */
export default (ui) => ui.screen({
  id: 'galleryround', theme: THEME,
  body: [
    ui.nav({ title: 'Раунд 2', trailing: ui.iconButton({ icon: 'tv', label: 'Вечер у Саши', go: 'room' }) }),
    ui.scroll([
      ui.section({ children: [
        taskCard(ui, { n: 2, task: tasks.prom, sub: 'Покажи из галереи · старый ролик или фото', icon: 'images' }),
        ui.actions(ui.button({ label: 'Выбрать из галереи', icon: 'images', block: true, ask: 'photos|picker|galleryround', primary: true }), { className: 'vy-task-actions' }),
      ] }),
      ui.denied('photos'),
      ui.section({ shownAfter: 'photos', title: 'Ваш ответ в раунде', children: ui.videoCard({ art: frame, duration: galleryAnswer.dur, avatar: ui.avatar(people.me.initial), title: galleryAnswer.title, sub: `${galleryAnswer.sub} · идёт на телевизоре` }) }),
      ui.section({ title: 'Ответы раунда', meta: '2 из 5', children: ui.list([
        ui.row({ thumb: frame, wide: true, duration: '0:31', title: 'Гоша Ким', sub: 'Гоша · раунд 2 · 0:31 · выпускной 2011' }),
        ui.row({ thumb: frame, wide: true, duration: '0:05', title: 'Оля Миронова', sub: 'Оля · раунд 2 · фото · выпускной 2016' }),
        ui.row({ thumb: frame, wide: true, title: 'Настя Белова', sub: 'Ищет в галерее' }),
      ]) }),
      ui.actions(ui.button({ label: 'Вечер у Саши', variant: 'secondary', block: true, go: 'room' }), { className: 'vy-bottom' }),
    ]),
  ],
});
