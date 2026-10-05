import { THEME } from './_shared.mjs';
import { journal } from '../model.mjs';

/* Своя запись целиком: заявка, её фото, голос и история — что ответила УК в чате */
export default (ui) => ui.screen({
  id: 'post', theme: THEME,
  body: [
    ui.nav({ title: 'Запись', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с записью', menu: ['Изменить', 'Отправить в чат подъезда>chat', 'Удалить'] }) }),
    ui.scroll([
      ui.entry({
        icon: 'wrench', title: journal.door.title, meta: `${journal.door.when} · заявка 4417-Б`,
        status: { label: journal.door.status, accent: true }, text: journal.door.text, photos: journal.door.photos,
        voice: { dur: '0:14' },
      }),
      ui.section({ title: 'История', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: '8:12' }), title: 'Создала заявку', sub: 'Два кадра с места и голосовое 0:14' }),
        ui.row({ lead: ui.leadIcon('', { text: '8:14' }), title: 'Отправила в чат УК', sub: 'Диспетчер Елена прочитала в 8:20', go: 'ukchat' }),
        ui.row({ lead: ui.leadIcon('', { text: '9:21' }), title: 'Ответ УК', sub: 'Мастер будет с 16:00, дверь откроет Марина из 48-й', subWrap: true, go: 'ukchat' }),
        ui.row({ lead: ui.leadIcon('clock'), title: 'Закрытие', sub: 'Ждём мастера сегодня с 16:00' }),
      ]) }),
      ui.section({ children: [
        ui.group({ cells: [ui.cell({ icon: 'bell', title: 'Сообщить, когда закроют', sub: 'Уведомление при смене статуса заявки', toggle: false, ask: 'push|post|post' })] }),
      ] }),
      ui.section({ children: ui.actions([ui.button({ label: 'Открыть чат УК', icon: 'message-circle', block: true, go: 'ukchat', primary: true })]) }),
    ]),
  ],
});
