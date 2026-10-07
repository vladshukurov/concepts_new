import { THEME } from './_shared.mjs';
import { regent, people } from '../model.mjs';

/* Новый чат: название и участники из хора — например, чат своей партии */
const pick = [regent, people.vera, people.anya, people.yulia, people.marina, people.lena];
export default (ui) => ui.screen({
  id: 'newchat', theme: THEME,
  body: [
    ui.nav({ title: 'Новый чат', back: 'close', trailing: ui.textButton({ label: 'Создать', strong: true, toast: 'Чат «Альты · второй куплет» создан, 4 участника|chats' }) }),
    ui.scroll([
      ui.section({ children: '<label class="sp-field"><span>Название</span><input placeholder="Партия или тема" value="Альты · второй куплет" aria-label="Название чата"/></label>' }),
      ui.section({ children: ui.search({ placeholder: 'Кого добавить' }) }),
      ui.section({ title: 'Хор «Камертон»', meta: 'выбрано 3', children: ui.group({ cells: pick.map((p, i) => ui.cell({
        lead: ui.avatar(p.initial), title: p.name, sub: p.role || p.voice, check: [0, 1, 4].includes(i),
      })) }) }),
    ]),
  ],
});
