import { THEME, TABS, map } from './_shared.mjs';
import { own, longrun } from '../model.mjs';

/* Свой беговой дневник: всё на главной пробежал, записал или снял сам Влад.
   Чужих публикаций, лайков и подписок нет — с клубом бегают вместе и пишут в чат */
export default (ui) => ui.screen({
  id: 'feed', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Выбег' }), [
      ui.iconButton({ icon: 'bell', label: 'Уведомления', go: 'notif' }),
      ui.iconButton({ icon: 'plus', label: 'Новая запись', menu: ['Снять технику>shoot', 'Записать пробежку>compose'] }),
    ]),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Пробежки', filter: 'run' },
      { label: 'Заметки', filter: 'note' },
      { label: 'Видео', filter: 'video' },
    ]) }),
    ui.entry({
      icon: 'route', title: `${longrun.title} · с клубом`, meta: `сегодня в ${longrun.start} · ${longrun.km} км`, status: { label: 'скоро', accent: true },
      text: `Старт от главного входа, темп ${longrun.pace}. Маршрут и подсказки уже на телефоне`, actions: [{ label: 'Открыть тренировку', icon: 'calendar', go: 'meetup', primary: true }], tags: ['run'],
    }),
    ui.entry({ icon: 'activity', title: own.run.title, meta: `${own.run.when} · темп ${own.run.pace} · ${own.run.time}`, text: own.run.note, attach: map(), open: { go: 'post' }, menu: ['Изменить', 'Удалить'], tags: ['run'] }),
    ui.entry({ icon: 'mic', title: own.voice.title, meta: `${own.voice.when} · заметка после разминки`, voice: { dur: own.voice.dur }, tags: ['note'] }),
    ui.entry({
      icon: 'target', title: `Неделя · ${own.week.done} из ${own.week.goal} км`, meta: `${own.week.runs} пробежки · осталось ${own.week.left} км`,
      attach: ui.list([
        ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Вт · интервалы 6 × 400', sub: '7,1 км' }),
        ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Чт · восстановительная', sub: '5,0 км' }),
        ui.row({ lead: ui.leadIcon('circle', { round: true }), title: 'Сб · лонгран с клубом', sub: `${longrun.km} км · сегодня` }),
      ]), tags: ['run'],
    }),
    ui.entry({
      icon: 'megaphone', title: 'Беговой магазин на Абая', meta: 'реклама',
      text: 'Подбор кроссовок по стопе на дорожке, примерка без записи', actions: [{ label: 'Показывать подходящее', icon: 'sliders-horizontal', ask: 'tracking|feed|feed' }],
    }),
    ui.denied('tracking'),
    ui.section({ shownAfter: 'tracking', children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Подбор включён', sub: 'Беговые магазины и забеги рядом с вашими маршрутами' })]) }),
    ui.entry({ icon: 'video', title: own.clip.title, meta: `${own.clip.when} · ${own.clip.dur} · ${own.clip.by}`, photos: 1, open: { go: 'videos' }, tags: ['video'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'feed' }),
});
