#!/usr/bin/env node
/**
 * Пересборка таблиц в docs/*.md из concept.json.
 *
 *   node scripts/gen-docs.mjs petlya
 *
 * Обновляются только блоки между маркерами:
 *   <!-- @generated:<имя> -->  …  <!-- @end -->
 * Всё остальное в документе — ручной текст, его не трогаем.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { conceptDir, readSpec, readMarkup, RISK_LABEL, listConcepts } from './lib.mjs';
import { screenGraph, iaTreeMd, transitionTableMd, screenActionsMd } from './screen-map.mjs';
import { prepareEmailRegistration } from './build.mjs';
import { assess } from './access-strength.mjs';
import { KERNEL } from './paths.mjs';

/* Роли токенов оболочки .ui — подписи для таблицы дизайн-системы */
const TOKEN_ROLE = {
  '--ui-bg': 'фон страницы', '--ui-card': 'секция и карточка', '--ui-card-2': 'поле и плитка внутри секции',
  '--ui-text': 'основной текст', '--ui-text-2': 'второстепенный текст', '--ui-accent': 'акцент: главная кнопка, активная вкладка',
  '--ui-link': 'акцентный текст и значки', '--ui-accent-soft': 'вторичная кнопка, значок строки, аватар без фото',
  '--ui-danger': 'ошибка и удаление', '--ui-line': 'разделитель и обводка вложения', '--ui-ph': 'заглушка кадра',
  '--ui-page': 'заголовок корня вкладки', '--ui-h1': 'заголовок экрана', '--ui-h2': 'заголовок секции',
  '--ui-row-h': 'высота строки',
};
const themeVars = (theme) => {
  const css = readFileSync(join(KERNEL, 'base.css'), 'utf8');
  const vars = {};
  for (const m of css.matchAll(/^(\.ui(?:\.[a-z-]+)?(?:,\s*\.ui\.[a-z-]+)*)\s*\{([^}]*)\}/gm)) {
    const sel = m[1];
    if (sel !== '.ui' && !sel.split(',').map((x) => x.trim()).includes(`.ui.${theme}`)) continue;
    for (const d of m[2].matchAll(/(--ui-[a-z0-9-]+)\s*:\s*([^;]+);/g)) vars[d[1]] = d[2].trim();
  }
  return vars;
};

const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/<code>|<\/code>/g, '`');
const effectiveConcept = (slug) => {
  const sourceSpec = readSpec(slug);
  return prepareEmailRegistration(sourceSpec, readMarkup(slug, sourceSpec));
};

const BLOCKS = {
  /* Дерево IA и таблица переходов — из разметки экранов: рукописная карта
     расходится с прототипом первой же правкой, эта расходиться не умеет. */
  'ia-tree': (spec, g) => iaTreeMd(g),
  'transitions': (spec, g) => transitionTableMd(g),

  /* Каждый элемент каждого экрана: что делает и куда ведёт. Нужен разработке,
     чтобы не выяснять назначение кнопок и вкладок по разметке руками. */
  'actions': (spec, g, markup) => screenActionsMd(spec, markup),

  /* Таблица концептов в корневом README: держалась руками, отставала от кода
     на десяток концептов и врала числами. Выводим из спек. */
  'concepts': () => {
    const rows = listConcepts().map((slug) => effectiveConcept(slug).spec);
    return [
      '| Концепт | Слаг | Целевой набор | Доступов | Экранов | Прототипов | УТП |',
      '|---|---|---|---|---|---|---|',
      ...rows.map((c) => `| ${cell(c.name)} | \`${c.slug}\` | \`${c.targetSet}\` | ${c.permissions.length} | ${c.screens.length} | ${(c.prototypes || []).length} | ${cell(c.tagline || '')} |`),
    ];
  },

  'screen-map': (spec) => [
    '| ID | Название | Тип | Доступы |',
    '|---|---|---|---|',
    ...spec.screens.map((s) => {
      const on = spec.permissions.filter((p) => p.screen === s.id)
        .map((p) => p.key + (p.activate ? ' (activate)' : '')).join(', ') || '—';
      return `| \`${s.id}\` | ${cell(s.title)} | ${cell(s.type)} | ${cell(on)} |`;
    }),
  ],
  'perm-matrix': (spec) => [
    '| Ключ | Жест пользователя | Экран | Если отказ | Риск Review |',
    '|---|---|---|---|---|',
    ...spec.permissions.map((p) => {
      const screen = spec.screens.find((s) => s.id === p.screen)?.title || p.screen;
      const risk = p.conditional ? `**Условный** — ${cell(p.requires)}` : RISK_LABEL[p.risk] || p.risk;
      return `| \`${p.plist}\` | ${cell(p.gesture)} | ${cell(screen)} | ${cell(p.fallback)} | ${risk} |`;
    }),
  ],
  'store-meta': (spec) => {
    const a = spec.appStore;
    const row = (k, v, limit) => `| ${k} | ${cell(v)} | ${limit ? `${[...String(v)].length} / ${limit}` : '—'} |`;
    return [
      '| Поле | Значение | Знаков |',
      '|---|---|---|',
      row('App Name', a.name, 30),
      row('Subtitle', a.subtitle, 30),
      row('Promotional Text', a.promo, 170),
      row('Keywords', a.keywords, 100),
      row('Primary Category', a.category.primary),
      row('Secondary Category', a.category.secondary),
      row('Age Rating', a.ageRating),
      row('Price', a.price),
      row('Support URL', a.urls.support),
      row('Marketing URL', a.urls.marketing),
      row('Privacy Policy URL', a.urls.privacy),
      row('Encryption', a.encryption),
    ];
  },

  'store-privacy': (spec) => [
    '| Что собираем | Тип в App Privacy | Зачем | Связано с пользователем | Трекинг |',
    '|---|---|---|---|---|',
    ...spec.appStore.privacy.map((p) =>
      `| ${cell(p.type)} | \`${p.apple}\` | ${cell(p.why)} | ${p.linked ? 'Да' : 'Нет'} | ${p.tracking ? '**Да**' : 'Нет'} |`),
  ],

  'store-review': (spec) => [
    '| Ключ | Что написать ревьюеру |',
    '|---|---|',
    ...spec.permissions.filter((p) => p.reviewNote).map((p) => `| \`${p.plist}\` | ${cell(p.reviewNote)} |`),
  ],

  /* Сущности продукта из model.mjs концепта: что это, как меняется, где видно.
     Экраны берут данные оттуда же — таблица не может разойтись с прототипом. */
  'domain-model': (spec, g, markup, model) => model?.entities ? [
    '| Сущность | Что это | Состояния | Экраны |',
    '|---|---|---|---|',
    ...model.entities.map((e) => `| ${cell(e.name)} | ${cell(e.what)} | ${cell(e.states.join(' → '))} | ${e.screens.map((x) => `\`${x}\``).join(', ')} |`),
  ] : ['_У концепта пока нет `model.mjs`._'],

  /* Чем заслужен каждый доступ и что видно после разрешения — по модели доступов */
  'access-strength': (spec) => {
    const { rows } = assess(spec.slug);
    return [
      `Сильных доступов: **${rows.filter((r) => !r.issues.length).length} из ${rows.length}** (\`npm run access -- ${spec.slug}\`).`,
      '',
      '| Ключ | Жест | Экран | Оценка |',
      '|---|---|---|---|',
      ...rows.map((r) => {
        const p = spec.permissions.find((x) => x.key === r.key);
        return `| \`${r.key}\`${r.anchor ? ' ⚓' : ''} | ${cell(p.gesture)} | \`${r.screen}\` | ${r.issues.length ? cell(r.issues.join('; ')) : 'заслужен'} |`;
      }),
    ];
  },

  /* Токены темы оболочки .ui — прямо из kernel/base.css */
  'theme-tokens': (spec) => {
    const theme = spec.brand?.theme;
    if (!theme) return ['_Концепт ещё не на оболочке `.ui`._'];
    const vars = themeVars(theme);
    return [
      `Тема \`${theme}\`, интерфейс набран системным SF Pro. Значения — из \`kernel/base.css\`, в концепте не переопределяются.`,
      '',
      '| Токен | Значение | Роль |',
      '|---|---|---|',
      ...Object.keys(TOKEN_ROLE).filter((k) => vars[k]).map((k) => `| \`${k}\` | \`${cell(vars[k])}\` | ${TOKEN_ROLE[k]} |`),
    ];
  },

  /* Какие компоненты ядра собирают экраны — по вызовам ui.* в screens/*.mjs */
  'kernel-components': (spec) => {
    const dir = join(conceptDir(spec.slug), 'screens');
    const counts = {};
    if (existsSync(dir)) for (const f of readdirSync(dir).filter((x) => x.endsWith('.mjs'))) {
      for (const m of readFileSync(join(dir, f), 'utf8').matchAll(/\bui\.([a-zA-Z]+)\(/g)) counts[m[1]] = (counts[m[1]] || 0) + 1;
    }
    const rows = Object.entries(counts).filter(([k]) => !['screen', 'icon', 'scroll'].includes(k)).sort((a, b) => b[1] - a[1]);
    if (!rows.length) return ['_Экраны ещё не на компонентах ядра._'];
    return [`Экраны собраны из компонентов \`kernel/components.mjs\`: ${rows.map(([k, n]) => `\`${k}\` ×${n}`).join(', ')}.`];
  },

  /* Свои компоненты концепта — по заголовкам-комментариям styles.css */
  'domain-components': (spec) => {
    const f = join(conceptDir(spec.slug), 'styles.css');
    if (!existsSync(f)) return ['_Своих компонентов нет._'];
    const css = readFileSync(f, 'utf8').replace(/^\/\*[\s\S]*?\*\/\s*/, '');
    const out = ['| Компонент | Классы |', '|---|---|'];
    for (const part of css.split(/\n(?=\/\* )/)) {
      const title = part.match(/^\/\*\s*([\s\S]*?)\s*\*\//)?.[1].replace(/\s+/g, ' ');
      if (!title) continue;
      const classes = [...new Set([...part.matchAll(/^\.([a-z][a-z0-9-]*)/gm)].map((m) => m[1]))].slice(0, 6);
      if (classes.length) out.push(`| ${cell(title)} | ${classes.map((c) => `\`.${c}\``).join(' ')} |`);
    }
    return out;
  },

  navigation: (spec) => [(spec.tabs || []).map((t) => t.label).join(' · ')],

  backendless: (spec) => [
    '| Требовало бы сервера | Решение без сервера |',
    '|---|---|',
    ...spec.backendless.map((b) => `| ${cell(b.needs)} | ${cell(b.solution)} |`),
  ],
};

async function loadModel(slug) {
  const f = join(conceptDir(slug), 'model.mjs');
  return existsSync(f) ? import(pathToFileURL(f).href + `?t=${Date.now()}`) : null;
}

export async function sync(slug) {
  const model = await loadModel(slug);
  const sourceSpec = readSpec(slug);
  const sourceMarkup = readMarkup(slug, sourceSpec);
  const { spec, markup } = prepareEmailRegistration(sourceSpec, sourceMarkup);
  const graph = screenGraph(spec, markup);
  const dir = join(conceptDir(slug), 'docs');
  if (!existsSync(dir)) return [];
  const touched = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const path = join(dir, file);
    const src = readFileSync(path, 'utf8');
    let out = src;
    for (const [name, build] of Object.entries(BLOCKS)) {
      const re = new RegExp(`(<!-- @generated:${name} -->\\n)[\\s\\S]*?(<!-- @end -->)`, 'g');
      out = out.replace(re, (_m, head, tail) => head + build(spec, graph, markup, model).join('\n') + '\n' + tail);
    }
    if (out !== src) { writeFileSync(path, out); touched.push(file); }
  }
  return touched;
}

/* Корневой README живёт вне концептов, но таблица в нём — те же данные. */
function syncRoot() {
  const path = join(conceptDir('_template'), '..', '..', '..', 'README.md');
  if (!existsSync(path)) return false;
  const src = readFileSync(path, 'utf8');
  const re = /(<!-- @generated:concepts -->\n)[\s\S]*?(<!-- @end -->)/g;
  const out = src.replace(re, (_m, head, tail) => head + BLOCKS.concepts().join('\n') + '\n' + tail);
  if (out === src) return false;
  writeFileSync(path, out);
  return true;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const slugs = process.argv[2] ? [process.argv[2]] : listConcepts();
  for (const slug of slugs) {
    const touched = await sync(slug);
    console.log(`${slug}: ${touched.length ? 'обновлены ' + touched.join(', ') : 'таблицы уже в актуальном виде'}`);
  }
  if (!process.argv[2]) console.log(syncRoot() ? 'README: таблица концептов обновлена' : 'README: таблица уже в актуальном виде');
}
