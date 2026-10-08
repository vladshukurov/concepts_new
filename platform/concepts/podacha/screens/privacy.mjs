import { THEME } from './_shared.mjs';
import { ad } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'privacy', theme: THEME,
  body: [
    ui.nav({ title: 'Конфиденциальность' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Звонки и заметки', cells: [
        ui.cell({ icon: 'phone', title: 'Звонки ужина', value: 'Только знакомые' }),
        ui.cell({ icon: 'mic', title: 'Голосовые заметки', value: 'Только на телефоне' }),
      ] }) }),
      ui.section({ title: 'Реклама в дневнике', children: [
        ui.list([
          ui.row({ lead: ui.avatar('ЛГ'), title: ad.title, sub: `Реклама · ${ad.text}` }),
          ui.row({ lead: ui.leadIcon('shuffle', { round: true, accent: true }), title: 'Сейчас: без подбора', sub: 'Одна и та же реклама для всего Алматы' }),
        ]),
        ui.actions([
          ui.button({ label: 'Подбирать по району', block: true, ask: 'tracking|feed|privacy', primary: true }),
          ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true }),
        ]),
      ] }),
      ui.section({ children: ui.group({ label: 'Дневник', cells: [
        ui.cell({ icon: 'download', title: 'Скачать дневник', sub: '42 блюда, 27 рецептов · архив 186 МБ', toast: 'Архив готовится — пришлём в чат' }),
        ui.cell({ icon: 'trash-2', title: 'Голосовые старше года', value: '14 заметок', menu: ['Удалить 14 заметок=Старые голосовые удалены'] }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Открыть политику', variant: 'tertiary', block: true, toast: 'vkusno.app/privacy' })]) }),
    ]),
  ],
});
