import { THEME } from './_shared.mjs';
import { parts, me } from '../model.mjs';

/* Мои партии: записи альтов из переписки — от регента, свои и присланные. Слушаются подряд с погашенным экраном */
const rows = (ui, list, accent) => ui.list(list.map(([title, sub, who]) => ui.row({
  lead: ui.leadIcon('audio-lines', { round: true, accent }), title, wrap: true, sub: `${sub} · ${who}`,
  end: { icon: 'play', toast: `Играет «${title}», ${sub.split(' · ')[0]}`, label: `Слушать: ${title}` },
})));
export default (ui) => ui.screen({
  id: 'parts', theme: THEME,
  body: [
    ui.nav({ title: 'Мои партии', trailing: ui.iconButton({ icon: 'plus', label: 'Добавить запись', menu: ['Записать свою партию>record', 'Из Диктофона>share'] }) }),
    ui.scroll([
      ui.section({ children: [
        `<div class="sp-sum"><small>${me.voice[0].toUpperCase() + me.voice.slice(1)} · Осенний концерт</small><strong>${parts.count} записей</strong><span>${parts.minutes} минут · свои и присланные в чате альтов</span></div>`,
        ui.actions([
          ui.button({ label: 'Слушать мою партию подряд', icon: 'headphones', block: true, activate: 'audio|nowplaying', primary: true }),
          ui.button({ label: 'Записать свою партию', icon: 'mic', variant: 'secondary', block: true, go: 'record' }),
        ]),
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('download', { round: true }), title: 'Партии скачаны для офлайна ночью', sub: `${parts.count} записей, ${parts.size} · в зале слушаются без сети` }),
      ]) }),
      ui.section({ title: 'От регента', meta: String(parts.regent.length), children: rows(ui, parts.regent, true) }),
      ui.section({ title: 'Мои записи', meta: String(parts.mine.length), children: rows(ui, parts.mine, false) }),
      ui.section({ title: 'Прислали альты', meta: String(parts.sent.length), children: rows(ui, parts.sent, false) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('message-circle', { round: true, accent: true }), title: 'Альты · партии', sub: 'Чат, где регент и альты присылают записи', go: 'altos' }),
      ]) }),
    ]),
  ],
});
