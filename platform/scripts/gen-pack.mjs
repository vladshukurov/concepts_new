#!/usr/bin/env node
/**
 * Пакет мимикрии из первоисточника: npm run pack:gen
 *
 * Токены ВКонтакте для iOS берутся из @vkontakte/vkui-tokens (темы
 * vkontakteIOS и vkontakteIOSDark), а не переписываются руками из памяти:
 * так и всплыло, что акцент приложения — #2688EB, а не #0077FF логотипа.
 * Пакет — kernel/packs/vk.json; по нему сверяет экраны `npm run conform`.
 *
 * Макеты экранов (как устроены список чатов, плеер, профиль) из токенов
 * не выводятся — они лежат в kernel/packs/<pack>/refs и пополняются
 * скриншотами настоящих приложений.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { KERNEL } from './paths.mjs';

const require = createRequire(import.meta.url);
const root = dirname(require.resolve('@vkontakte/vkui-tokens/package.json'));
const version = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')).version;
const theme = (name) => JSON.parse(readFileSync(join(root, 'themes', name, 'index.json'), 'utf8'));
const plain = (v) => (v && typeof v === 'object' ? v.regular ?? v.normal ?? null : v);

/* Цвета: только значения-строки, состояния hover/active не нужны — экран статичен */
const colors = (t) => Object.fromEntries(Object.entries(t)
  .filter(([k]) => k.startsWith('color'))
  .map(([k, v]) => [k, plain(v)])
  .filter(([, v]) => typeof v === 'string' && /^(#|rgba?\()/i.test(v)));

const light = theme('vkontakteIOS');
const dark = theme('vkontakteIOSDark');

const type = Object.fromEntries(Object.entries(light)
  .filter(([k, v]) => k.startsWith('font') && !k.startsWith('fontFamily') && v?.regular?.fontSize)
  .map(([k, v]) => [k, { size: v.regular.fontSize, line: v.regular.lineHeight, weight: Number(v.regular.fontWeight) }]));

const sizes = Object.fromEntries(Object.entries(light)
  .filter(([k]) => /^(size|spacing)/.test(k))
  .map(([k, v]) => [k, plain(v)])
  .filter(([, v]) => typeof v === 'number'));

const pack = {
  id: 'vk',
  name: 'ВКонтакте для iOS',
  source: `@vkontakte/vkui-tokens@${version} · vkontakteIOS / vkontakteIOSDark`,
  themes: { light: colors(light), dark: colors(dark) },
  type,
  sizes,
  /* Сопоставление ядра с компонентами VKUI: что меряем и с каким токеном сверяем */
  components: {
    '.ui-nav': { vkui: 'PanelHeader', height: 'sizePanelHeaderHeight', minusSafeTop: true },
    '.ui-cell': { vkui: 'SimpleCell', minHeight: 'sizeCellHeight' },
    '.ui-btn:not(.is-m):not(.is-s)': { vkui: 'Button size=l', height: 'sizeButtonLargeHeight' },
    '.ui-btn.is-m': { vkui: 'Button size=m', height: 'sizeButtonMediumHeight' },
    '.ui-btn.is-s': { vkui: 'Button size=s', height: 'sizeButtonSmallHeight' },
    '.ui-search': { vkui: 'Search', height: 'sizeSearchHeight' },
    '.ui-switch': { vkui: 'Switch', width: 'sizeSwitchWidth', height: 'sizeSwitchHeight' },
  },
};

mkdirSync(join(KERNEL, 'packs'), { recursive: true });
writeFileSync(join(KERNEL, 'packs', 'vk.json'), JSON.stringify(pack, null, 2) + '\n');
console.log(`пакет vk: ${Object.keys(pack.themes.light).length} цветов светлой темы, ${Object.keys(pack.themes.dark).length} тёмной, ${Object.keys(type).length} кеглей, ${Object.keys(sizes).length} размеров · ${pack.source}`);
