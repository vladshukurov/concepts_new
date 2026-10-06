import { THEME, TABS, P, tags } from './_shared.mjs';
import { own, item } from '../model.mjs';

/* Свой лукбук: всё на главной сняла и записала сама Марина. Чужих образов, лайков
   и подписок нет — с людьми говорят в мессенджере и встречаются на свопах */
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Вешалка' }), [ui.iconButton({ icon: 'plus', label: 'Новый образ', go: 'create' })]),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Образы', filter: 'look' },
      { label: 'Вещи', filter: 'item' },
      { label: 'На своп', filter: 'swap' },
    ]) }),
    ui.entry({
      icon: 'cloud-rain', title: own.plan.title, meta: `${own.plan.weather} · собрано к утру`,
      attach: tags(...own.plan.items), actions: [{ label: 'Надену', icon: 'check', toast: 'План на завтра сохранён' }], tags: ['look'],
    }),
    ui.entry({
      icon: 'shirt', title: own.today.title, meta: `${own.today.when} · ${own.today.worn}`, photos: [P.marina],
      attach: tags(...own.today.items), open: { go: 'post' }, menu: ['Изменить', 'Удалить'], tags: ['look', 'item'],
    }),
    ui.entry({
      icon: 'repeat-2', title: `${own.swapItem.title} · ${own.swapItem.count}`, meta: 'своп сегодня до 15:00', status: { label: 'на проверке', accent: true },
      text: `${item.title}. ${own.swapItem.note}`, actions: [{ label: 'Открыть своп', icon: 'repeat-2', go: 'swap' }], tags: ['swap', 'item'],
    }),
    ui.entry({ icon: 'mic', title: own.voice.title, meta: `${own.voice.when} · разбор голосом`, voice: { dur: own.voice.dur }, open: { go: 'talk' }, tags: ['item'] }),
    ui.entry({
      icon: 'megaphone', title: 'Винтаж на Большой Пушкарской', meta: '600 м · реклама',
      text: 'Пальто и жакеты из 90‑х, примерка без записи до 21:00', actions: [{ label: 'Настроить рекламу', icon: 'sliders-horizontal', go: 'ads' }],
    }),
    ui.entry({
      icon: 'link', title: own.find.title, meta: `${own.find.when} · по ссылке`, text: `${own.find.price} · ${own.find.site} · под серое пальто, померить рукав`,
      actions: [{ label: 'В план', icon: 'plus', toast: 'Добавлено в план образа' }], tags: ['item'],
    }),
    ui.entry({ icon: 'video', title: own.clip.title, meta: `${own.clip.when} · клип ${own.clip.dur}`, photos: [P.marina], open: { go: 'clip' }, tags: ['look'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
