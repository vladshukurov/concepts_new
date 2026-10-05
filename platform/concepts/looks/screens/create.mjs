import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'create', theme: THEME,
  body: [
    ui.nav({ title: 'Новый образ', back: 'close', trailing: ui.textButton({ label: 'Готово', strong: true, toast: 'Образ в лукбуке|home' }) }),
    ui.scroll([
      ui.section({ children: ui.composerPrompt({ face: P.marina, placeholder: 'Куда и в чём — пара слов для себя' }) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Снять', icon: 'camera', block: true, ask: 'camera|camera|create', primary: true }),
        ui.button({ label: 'Из медиатеки', icon: 'image', variant: 'secondary', block: true, ask: 'photos|media|create' }),
      ]) }),
      ui.denied('camera'),
      ui.denied('photos'),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'captions', title: 'Субтитры к клипу', sub: '1:12, без субтитров', ask: 'speech|subtitles|subtitles' }),
        ui.cell({ icon: 'tag', title: 'Отметить вещи', value: '4', toast: 'Отмечено 4 вещи' }),
        ui.cell({ icon: 'cloud-sun', title: 'Погода', value: '+14°, солнце' }),
        ui.cell({ icon: 'calendar', title: 'Повод', value: 'Своп', menu: ['Работа', 'Своп', 'Встреча', 'Дом'] }),
      ] }) }),
    ]),
  ],
});
