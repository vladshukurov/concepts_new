import { THEME } from './_shared.mjs';
import { project } from '../model.mjs';

/* Договоры и акты проекта под Face ID: суммы, реквизиты и подписи клиента */
const files = [
  ['file-text', 'Договор № 41-С', '1 840 000 ₽ · 3 этапа', 'Юра, 2 сентября'],
  ['pen-line', 'Допсоглашение № 1', '180 000 ₽ · подписано', 'Артём, 29 сентября'],
  ['badge-check', 'Акт № 12 · этап 1', '460 000 ₽ · оплачен', 'Женя, 15 сентября'],
  ['clock', 'Акт № 14 · этап 2', '690 000 ₽ · ждёт подписи', 'Женя, вчера'],
  ['landmark', 'Реквизиты клиента', 'ИНН и счёт', 'Артём, 2 сентября'],
];
export default (ui) => ui.screen({
  id: 'docs', theme: THEME,
  body: [
    ui.nav({ title: 'Договоры и акты', trailing: ui.iconButton({ icon: 'plus', label: 'Добавить документ', menu: ['Из Файлов>share', 'Сканировать камерой>camera'] }) }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Поиск по договорам и актам' }) }),
      ui.section({ title: project.name, meta: `${files.length} файлов`, children: ui.list(files.map(([ic, title, sub, who]) => ui.row({ lead: ui.leadIcon(ic, { round: true, accent: true }), title, sub: `${sub} · ${who}`, toast: `${title} открыт` }))) }),
      ui.section({ title: 'Итого по договору', children: ui.list([
        ui.row({ lead: ui.leadIcon('wallet', { round: true }), title: 'Оплачено 460 000 ₽ из 2 020 000 ₽', sub: 'акт № 14 на 690 000 ₽ ждёт подписи клиента' }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'scan-face', title: 'Закрывать через минуту', sub: 'После выхода из договоров', toggle: true }),
      ] }) }),
    ]),
  ],
});
