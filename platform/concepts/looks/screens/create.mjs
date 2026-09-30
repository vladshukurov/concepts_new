import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'create', theme: THEME,
  body: [
    ui.nav({ title: 'Новая публикация', back: 'close', trailing: ui.textButton({ label: 'Готово', strong: true, toast: 'Публикация вышла|home' }) }),
    ui.scroll([
      ui.section({ children: ui.composerPrompt({ face: P.marina, placeholder: 'Расскажите об образе или задайте вопрос' }) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Снять', icon: 'camera', block: true, ask: 'camera|camera|create', primary: true }),
        ui.button({ label: 'Из Фото', icon: 'image', variant: 'secondary', block: true, ask: 'photos|media|create' }),
      ]) }),
      ui.denied('camera', 'Камера выключена — выберите снимок из Фото'),
      ui.denied('photos', 'Доступа к Фото нет — снимите новый кадр'),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'captions', title: 'Субтитры к клипу', sub: '1:12, без субтитров', ask: 'speech|subtitles|subtitles' }),
        ui.cell({ icon: 'tag', title: 'Отметить вещи', value: '4', toast: 'Отмечено 4 вещи' }),
        ui.cell({ icon: 'map-pin', title: 'Район', value: 'Петроградская', toast: 'Район: Петроградская' }),
        ui.cell({ icon: 'eye', title: 'Кто увидит', value: 'Все', toast: 'Видно всем' }),
      ] }) }),
    ]),
  ],
});
