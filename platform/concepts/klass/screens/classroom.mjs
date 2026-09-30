import { THEME, who } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'classroom', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.iconButton({ icon: 'user-plus', label: 'Позвать соседа', go: 'invite' }) }),
    ui.scroll([
      `<div class="kl-snt"><span class="kl-snt-logo">${ui.icon('trees')}</span><h1>СНТ «Берёзка»</h1><p class="ui-sub">Председатель Анна Викторовна · дом правления у въезда</p>${ui.stats([['28', 'участков'], ['24', 'в приложении'], ['18', 'едут на ярмарку']])}</div>`,
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('images'), title: 'Альбом товарищества', sub: '312 снимков и 9 видео', go: 'album' }),
        ui.row({ lead: ui.leadIcon('message-circle'), title: 'Обсуждения', sub: '9 тем за месяц', go: 'discussions' }),
      ]) }),
      ui.section({ title: 'Заходили сегодня', meta: '9', children: ui.list([
        who(ui, 'ЕС', 'Елена Соколова', 'Участок 24 · председатель комитета', { go: 'profile', primary: true }),
        who(ui, 'ИМ', 'Илья Макаров', 'Участок 18 · записывает собрания', { go: 'profile' }),
        who(ui, 'НЧ', 'Наталья Чернова', 'Участок 31 · ухаживает за клумбой', { go: 'profile' }),
        who(ui, 'МП', 'Марина Петрова', 'Участок 7 · приезжает по пятницам', { go: 'profile' }),
      ]) }),
      ui.section({ title: 'Не в приложении', meta: '4', children: ui.list([
        ui.row({ lead: ui.leadIcon('user'), title: 'Участок Лебедевых', sub: 'Номера нет в списке', end: { value: 'Позвать', go: 'invite', label: 'Позвать Лебедевых' } }),
        ui.row({ lead: ui.leadIcon('user'), title: 'Участок Юрченко', sub: 'Вход не завершили', end: { value: 'Позвать', go: 'invite', label: 'Позвать Юрченко' } }),
      ]) }),
    ]),
  ],
});
