import { THEME, map } from './_shared.mjs';
import { people, own } from '../model.mjs';

/* Своя пробежка целиком: схема, отрезки, с кем бежал — и повторить маршрут */
export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Пробежка', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с пробежкой', menu: ['Изменить', 'Отправить Илье>chat', 'Удалить'] }) }),
    ui.scroll([
      ui.entry({ icon: 'activity', title: own.run.title, meta: `${own.run.when} · ${own.run.time}`, text: own.run.note }),
      ui.section({ title: 'Схема', children: [
        `<div class="ry-map"><span class="ry-river"></span><span class="ry-path"></span><span class="ry-pin ry-x10 ry-y36">С</span><span class="ry-pin ry-x58 ry-y28">!</span></div>`,
      ] }),
      ui.section({ title: 'Отрезки', meta: '6', children: ui.list([
        ui.row({ lead: '<span class="ry-km">1</span>', title: '6:31', sub: 'Разминка от клуба' }),
        ui.row({ lead: '<span class="ry-km">2</span>', title: '6:08', sub: 'Вдоль реки' }),
        ui.row({ lead: '<span class="ry-km">3</span>', title: '6:44', sub: 'Объезд моста по велодорожке' }),
        ui.row({ lead: '<span class="ry-km">4</span>', title: '6:02', sub: 'Самый ровный' }),
        ui.row({ lead: '<span class="ry-km">5</span>', title: '5:58', sub: 'Догнал Илью' }),
        ui.row({ lead: '<span class="ry-km">6</span>', title: '6:09', sub: 'Заминка, 400 м шагом' }),
      ]) }),
      ui.section({ title: 'Бежали вместе', meta: '2', children: ui.list([
        ui.row({ lead: ui.avatar(people.ilya.initial), title: people.ilya.name, sub: 'Держал темп 6:10 и показал объезд', go: 'chat' }),
        ui.row({ lead: ui.avatar(people.dasha.initial), title: people.dasha.name, sub: 'Сошла на 4-м км, догнала у клуба' }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Бежать этот маршрут снова', block: true, go: 'player', primary: true })]) }),
    ]),
  ],
});
