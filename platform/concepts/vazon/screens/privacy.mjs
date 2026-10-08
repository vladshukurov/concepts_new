import { THEME } from './_shared.mjs';
import { ad, own, plantCount } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'privacy', theme: THEME,
  body: [
    ui.nav({ title: 'Конфиденциальность' }),
    ui.scroll([
      ui.section({ title: 'Реклама в дневнике', children: [
        ui.list([
          ui.row({ lead: ui.leadIcon('flask-conical', { round: true }), title: ad.title, sub: `Реклама · ${ad.text}` }),
          ui.row({ lead: ui.leadIcon('shuffle', { round: true, accent: true }), title: 'Реклама одна для всех', sub: 'Пока не учитывает, что растёт у вас дома' }),
        ]),
        ui.actions([
          ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|feed|privacy', primary: true }),
          ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true }),
        ]),
      ] }),
      ui.section({ children: ui.group({ label: 'Дневник', cells: [
        ui.cell({ icon: 'download', title: 'Скачать дневник', sub: `${own.entries} записей, ${plantCount} растений · архив 212 МБ`, toast: 'Архив готовится — пришлём в чат' }),
        ui.cell({ icon: 'mic', title: 'Голосовые заметки', value: 'Только на телефоне' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Открыть политику', variant: 'tertiary', block: true, toast: 'vazon.app/privacy' })]) }),
    ]),
  ],
});
