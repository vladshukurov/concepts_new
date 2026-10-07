import { THEME } from './_shared.mjs';
import { family, me, people, home, pickup } from '../model.mjs';

/* Ссылка-приглашение открылась в приложении: чат семьи до вступления — кто в нём и что там */
export default (ui) => ui.screen({
  id: 'join', theme: THEME,
  body: [
    ui.nav({ title: 'Приглашение', back: 'close' }),
    ui.scroll([
      `<div class="sv-head">${ui.avatar(family.initial, { large: true })}<h1 class="ui-title">${family.name}</h1><p class="ui-sub">чат семьи · ${family.members} участников · пригласила ${me.name}</p></div>`,
      ui.section({ children: [
        ui.usersStack({ faces: [me.initial, people.timur.initial, people.danya.initial], text: 'Алина, Тимур, Даня и ещё 3 в чате' }),
        ui.actions([
          ui.button({ label: 'Вступить в чат семьи', block: true, go: 'family', primary: true }),
          ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
        ]),
      ] }),
      ui.section({ children: ui.miniInfo([
        { icon: 'house', text: `${people.danya.short} дома с ${home.danyaSince}, ${people.mila.short} на рисовании до ${pickup.to}` },
        { icon: 'images', text: `${family.photos} фото и видео внуков в альбоме` },
        { icon: 'calendar-days', text: 'Расписание кружков Дани и Милы на неделю' },
      ]) }),
    ]),
  ],
});
