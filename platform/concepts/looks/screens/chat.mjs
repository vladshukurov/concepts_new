import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ face: P.lera, name: 'Лера Савина', status: 'ведущая свопа · в сети', call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ text: 'Марина, привет! Жакет принимаю до 13:20', time: '13:05' }),
      ui.bubble({ out: true, attach: `<span class="lk-chat-photo ${P.marina}"></span>`, text: 'Вот он, шерсть, размер 46', time: '13:08', read: true }),
      ui.bubble({ text: 'Покажете жакет? Посмотрю подкладку и ярлык', time: '13:12' }),
      ui.voice({ dur: '0:09', time: '13:12' }),
    ])),
    ui.denied('voip', 'Звонки выключены — отправьте фото подкладки и ярлыка'),
    ui.composer({ attach: { go: 'media' }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
