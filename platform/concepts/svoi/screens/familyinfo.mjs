import { THEME } from './_shared.mjs';
import { family, people, me, video, shopping, docsCount } from '../model.mjs';

/* Сведения о чате семьи: кто в нём, сеть дома, альбом и приглашение для второй бабушки */
const crew = [
  [me.initial, me.name, 'мама · создала чат'],
  [people.timur.initial, people.timur.name, 'папа · был в 16:01'],
  [people.danya.initial, people.danya.name, '11 лет · на бассейне до 18:00'],
  [people.mila.initial, people.mila.name, '7 лет · пишет голосовыми'],
  [people.roza.initial, people.roza.name, 'бабушка · в сети'],
  [people.oksana.initial, people.oksana.name, 'няня · по будням с 12:30'],
];
export default (ui) => ui.screen({
  id: 'familyinfo', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.textButton({ label: 'Изменить', toast: 'Открыт режим правки' }) }),
    ui.scroll([
      `<div class="sv-head">${ui.avatar(family.initial, { large: true })}<h1 class="ui-title">${family.name}</h1><p class="ui-sub">${family.members} участников · чат семьи с 2024 года</p></div>`,
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'wifi', title: 'Wi‑Fi дома', sub: 'Добавил Тимур для Оксаны и гостей', value: family.ssid, go: 'wifi' }),
        ui.cell({ icon: 'images', title: 'Альбом семьи', sub: `Видео прошлой недели готово, ${video.last.dur}`, value: `${family.photos} фото`, go: 'album' }),
        ui.cell({ icon: 'lock', title: 'Документы семьи', sub: 'Паспорта, полисы, свидетельства', value: `${docsCount} файлов`, ask: 'faceid|docs|familyinfo' }),
        ui.cell({ icon: 'shopping-basket', title: 'Список покупок', sub: 'Общий, правит вся семья', value: `${shopping.bought} из ${shopping.total}`, go: 'shopping' }),
        ui.cell({ icon: 'link', title: 'Ссылка-приглашение', sub: family.link, value: 'Галине', go: 'invite' }),
      ] }) }),
      ui.section({ title: 'Участники', meta: String(family.members), children: ui.list([
        ...crew.map(([ini, name, sub]) => ui.row({ lead: ui.avatar(ini), title: name, sub, ...(name === people.roza.name ? { go: 'mama' } : name === people.danya.name ? { go: 'danya' } : name === people.timur.name ? { go: 'timur' } : {}) })),
        ui.row({ lead: ui.leadIcon('user-plus', { round: true, accent: true }), title: 'Добавить участника', sub: 'Из контактов или по ссылке', go: 'contacts' }),
      ]) }),
    ]),
  ],
});
