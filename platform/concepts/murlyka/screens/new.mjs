import { THEME } from './_shared.mjs';
import { snow, voices } from '../model.mjs';

/* Новая колыбельная: файл из «Файлов» или «Диктофона», название, чей голос, обложка, «в вечер» */
const input = (value, label) => `<input class="mr-input" value="${value}" aria-label="${label}"/>`;
const file = (title, sub, tags, on = false) => `<div class="ui-row${on ? ' is-now' : ''}" data-tags="${tags}"><span class="ui-thumb mr-ico">${'%I%'}</span><span class="ui-row-text"><strong>${title}</strong><span>${sub}</span></span>${on ? '<span class="ui-row-end ui-link">%C%</span>' : ''}</div>`;
export default (ui) => ui.screen({
  id: 'new', theme: THEME,
  body: [
    ui.nav({ title: 'Новая колыбельная', back: 'cancel' }),
    ui.scroll([
      ui.segments([{ label: 'Из «Файлов»', on: true, filter: 'files' }, { label: 'Из «Диктофона»', filter: 'memos' }]),
      ui.section({ title: 'Запись', children: ui.list([
        file(snow.file, `бабушка Нина прислала сегодня · ${snow.dur}`, 'files', true),
        file('Песенка про кота.m4a', 'папа прислал 6 октября · 2:40', 'files'),
        file('Новая запись 53', 'сегодня, 19:10 · 4:02', 'memos is-filtered-out'),
      ].map((h) => h.replace('%I%', ui.icon('folder')).replace('%C%', ui.icon('check')))) }),
      ui.group({ label: 'Название', cells: [ui.cell({ title: input(snow.title, 'Название') })] }),
      ui.group({ label: 'Чей голос', cells: Object.values(voices).map((v) => ui.cell({ lead: ui.avatar(v.initial), title: v.title, check: v === snow.voice })) }),
      ui.group({ label: 'Обложка', cells: [
        ui.cell({ icon: 'images', title: 'Обложка из «Фото»', label: 'Обложка из «Фото»', sub: 'снимок Сони или любимой игрушки', ask: 'photos|pick|new' }),
      ] }),
      ui.section({ shownAfter: 'photos', children: ui.list([ui.row({ lead: `<span class="ui-thumb ${snow.picked}"></span>`, title: 'Обложка выбрана', sub: 'из альбома «Соня»' })]) }),
      ui.denied('photos'),
      ui.group({ cells: [ui.cell({ icon: 'moon', title: 'Добавить в сегодняшний вечер', toggle: false })] }),
      ui.actions(ui.button({ label: 'Сохранить', block: true, go: 'snow', primary: true })),
    ]),
  ],
});
