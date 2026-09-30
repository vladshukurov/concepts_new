import { THEME, who } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'parents', theme: THEME,
  body: [
    ui.nav({ title: 'Соседи' }),
    ui.scroll([
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('search', { accent: true }), title: 'Найти соседей', sub: 'Сверим номера из книги с участниками', ask: 'contacts|match|parents', primary: true }),
        ui.row({ lead: ui.leadIcon('link', { accent: true }), title: 'Пригласить ссылкой', sub: 'Ссылка на 7 дней', go: 'invite' }),
      ]) }),
      ui.denied('contacts', 'Без записной книжки соседа зовут ссылкой'),
      ui.section({ title: 'В приложении', meta: '24', children: ui.list([
        who(ui, 'АВ', 'Анна Викторовна', 'Председатель · пишет каждый вечер', { go: 'classroom' }),
        who(ui, 'ЕС', 'Елена Соколова', 'Участок 24 · секретарь правления', { go: 'classroom' }),
        who(ui, 'ИМ', 'Илья Макаров', 'Участок 18 · записывает собрания', { go: 'classroom' }),
        who(ui, 'НЧ', 'Наталья Чернова', 'Участок 31 · общая клумба', { go: 'classroom' }),
      ]) }),
      ui.section({ title: 'Ещё не позвали', meta: '4', children: ui.list([
        ui.row({ lead: ui.leadIcon('user'), title: 'Участок Лебедевых', sub: 'Вера вступила в сентябре', end: { value: 'Позвать', go: 'invite', label: 'Позвать Лебедевых' } }),
        ui.row({ lead: ui.leadIcon('user'), title: 'Участок Юрченко', sub: 'Приглашение открыли, вход не завершили', end: { value: 'Позвать', go: 'invite', label: 'Позвать Юрченко' } }),
      ]) }),
    ]),
  ],
});
