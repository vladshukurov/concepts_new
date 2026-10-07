import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

/* Новый чат: название и участники из студии — группа проекта собирается за минуту */
const pick = [people.pasha, people.lera, people.olya, people.gosha, people.masha, people.stas, people.katya, people.dima, people.nastya, people.lyosha, people.sonya];
export default (ui) => ui.screen({
  id: 'newchat', theme: THEME,
  body: [
    ui.nav({ title: 'Новый чат', back: 'close', trailing: ui.textButton({ label: 'Создать', strong: true, toast: 'Чат «Тёплый дом · запуск» создан, 3 участника|chats' }) }),
    ui.scroll([
      ui.section({ children: `<label class="lt-field"><span>Название</span><input placeholder="Проект или тема" value="Тёплый дом · запуск" aria-label="Название чата"/></label>` }),
      ui.section({ children: ui.search({ placeholder: 'Кого добавить' }) }),
      ui.section({ title: 'Студия «Полдень»', meta: 'выбрано 2', children: ui.group({ cells: pick.map((p, i) => ui.cell({
        lead: ui.avatar(p.initial), title: p.name, sub: p.role, check: i === 3 || i === 5,
      })) }) }),
    ]),
  ],
});
