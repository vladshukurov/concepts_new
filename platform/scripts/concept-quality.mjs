import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './paths.mjs';

const readJson = (file) => JSON.parse(readFileSync(join(ROOT, 'kernel', file), 'utf8'));
const RECIPES = readJson('screen-recipes.json');
const ARCHETYPES = Object.fromEntries(['vk-music', 'vk-video', 'vkontakte', 'ok', 'messenger'].map((id) => [id, readJson(`archetypes/${id}.json`)]));
const TARGET_SETS = readJson('target-sets.json').sets;
const ACCESS = readJson('access-model.json').keys;

/* Ключи режимов остались прежними, смысл уточнён: полная мимикрия — категория референса
   (соцсеть, музыка, видео, мессенджер), частичная — наш интерфейс, но другая категория */
export const POSITIONING_MODES = {
  mimicry: { label: 'Полная мимикрия', description: 'Категория референса — соцсеть, музыка, видео или мессенджер — в его же грамматике' },
  differentiation: { label: 'Частичная мимикрия', description: 'Интерфейс референса, но своя категория: садоводам, бегунам, мастерам' },
};

/**
 * Модель контента (контракт 4): только то, что создаёт сам человек, и оно остаётся у него.
 * Готовый контент из библиотек — курсы, стриминг, каталоги — не годится: доступ
 * тогда заслуживает чужой контент, а не фича. Ленты нет: ни публикаций для других,
 * ни комментариев, ни подписок. Переписка и звонки с людьми остаются в любом концепте;
 * у набора «Мессенджер» переписка — сам контент (kind: messages).
 */
export const CONTENT_KINDS = {
  diary: 'дневник',
  'av-notes': 'видео- и аудиозаметки',
  todo: 'список дел',
  editor: 'простой редактор',
  messages: 'переписка (только набор «Мессенджер»)',
};

/** Название начинается с одного из префиксов набора; пустой список — без правила. */
export const namePrefixes = (targetSet) => TARGET_SETS[targetSet]?.namePrefixes || [];
export const targetSetKeys = (targetSet) => TARGET_SETS[targetSet] || null;

export const archetypeFor = (targetSet) => ARCHETYPES[targetSet] || null;
/* Контракт 4 судит по профилям без ленты; контракты 1–3 ещё принимают прежние паттерны и вкладки */
const isV4 = (spec) => (spec.qualityContractVersion || 1) >= 4;
export const archetypePatterns = (archetype, spec) => (isV4(spec) ? archetype.patterns : { ...archetype.patterns, ...archetype.legacyPatterns });
const archetypeNavRoles = (archetype, spec) => (isV4(spec) ? archetype.requiredNavigationRoles : archetype.legacyNavigationRoles || archetype.requiredNavigationRoles) || [];

const nonEmptyList = (value, min = 1) => Array.isArray(value)
  && value.length >= min
  && value.every((item) => typeof item === 'string' && item.trim());

/* «пример» — только отдельным словом: «примерка» и «примерить» — живые слова продукта */
const PLACEHOLDER = /(?:заполн|статическая\s+замена|замени(?:те)?(?![а-яё])|(?<![а-яё])пример(?:ы)?(?![а-яё])|паттерн\s*\d|как\s+пользователь\s+узна[её]т\s+паттерн|причина\s+вернуться\s*\d|шаг\s*\d|ось\s+отстройки|одна\s+фраза|кто\s+конкретно|в\s+какой\s+наблюдаемой|что\s+сейчас|какой\s+наблюдаемый|почему\s+это|что\s+продукт\s+сознательно|какая\s+соседняя\s+задача|действие,\s+которому|в\s+какой\s+момент\s+дня\s+и\s+сценария|почему\s+без\s+этого\s+доступа|что\s+оста[её]тся\s+у\s+человека\s+после|что\s+именно\s+создаёт\s+человек)/i;
const vague = (value) => typeof value !== 'string' || value.trim().length < 18 || PLACEHOLDER.test(value);
const itemList = (value, min = 1) => Array.isArray(value) && value.length >= min && value.every((item) => item && typeof item === 'object');

/**
 * Один внешний seam для приёмки готовности. Структурный validate отвечает на
 * «можно ли прочитать спеку», readiness — на «имеем ли мы право назвать её
 * готовым продуктом». Это позволяет собирать draft, но не публиковать его.
 */
export function assessConceptReadiness(spec, ids = new Set((spec.screens || []).map((screen) => screen.id))) {
  if ((spec.qualityContractVersion || 1) < 2) return { issues: [], summary: { contract: 'legacy' } };
  const issues = [];
  const add = (message) => issues.push(message);
  const product = spec.product || {};
  for (const field of ['audience', 'situation', 'problem', 'promise', 'differentiator']) {
    if (vague(product[field])) add(`product.${field}: нужна конкретная проверяемая формулировка, не placeholder`);
  }
  for (const [field, min] of [['returnReasons', 3], ['coreLoop', 3], ['nonGoals', 2]]) {
    if (!nonEmptyList(product[field], min) || product[field].some(vague)) add(`product.${field}: нужно минимум ${min} конкретных пунктов без шаблонного текста`);
  }

  const readiness = spec.readiness || {};
  if (readiness.status !== 'reviewed') add('readiness.status: перед публикацией ожидается reviewed');
  if (!itemList(readiness.referenceResearch, 2)) add('readiness.referenceResearch: нужно минимум 2 наблюдения из первичных источников');
  else readiness.referenceResearch.forEach((row, index) => {
    for (const field of ['source', 'observation', 'decision']) if (vague(row[field])) add(`readiness.referenceResearch[${index}].${field}: недостаточно конкретно`);
  });
  if (!itemList(readiness.productCritique, 3)) add('readiness.productCritique: нужно минимум 3 возражения с решениями и экранами-доказательствами');
  else readiness.productCritique.forEach((row, index) => {
    if (vague(row.objection) || vague(row.resolution)) add(`readiness.productCritique[${index}]: возражение и решение должны быть конкретными`);
    if (!nonEmptyList(row.evidenceScreens, 1)) add(`readiness.productCritique[${index}].evidenceScreens пуст`);
    else row.evidenceScreens.forEach((id) => { if (!ids.has(id)) add(`readiness.productCritique[${index}]: экран «${id}» не существует`); });
  });
  /* v3 заменяет самодекларацию visualPasses hash-bound review bundle.
     Актуальность и lifecycle проверяет quality-review seam, а не spec. */
  if ((spec.qualityContractVersion || 1) < 3) {
    if (!itemList(readiness.visualPasses, 2)) add('readiness.visualPasses: нужны минимум 2 полных визуальных прохода');
    else readiness.visualPasses.forEach((pass, index) => {
      if (pass.screensReviewed !== 'all') add(`readiness.visualPasses[${index}]: screensReviewed должен быть all`);
      for (const field of ['found', 'fixed', 'blockersOpen', 'majorOpen']) if (!Number.isInteger(pass[field]) || pass[field] < 0) add(`readiness.visualPasses[${index}].${field}: ожидается неотрицательное целое`);
      if (pass.fixed < pass.found) add(`readiness.visualPasses[${index}]: исправлено меньше дефектов, чем найдено`);
      if (pass.blockersOpen || pass.majorOpen) add(`readiness.visualPasses[${index}]: остались blocker/major дефекты`);
    });
  }

  /* Контракт 4 — требование готовности: черновик собирается, proof и публикация — нет */
  if (spec.qualityContractVersion >= 4) validateContract4(spec).forEach(add);

  const archetype = archetypeFor(spec.targetSet);
  if (spec.positioning?.mode === 'mimicry' && archetype) {
    const evidence = spec.positioning.referenceEvidence;
    if (!itemList(evidence, 3)) add('positioning.referenceEvidence: для мимикрии нужно минимум 3 связи pattern → screen → behavior');
    else evidence.forEach((row, index) => {
      if (!archetypePatterns(archetype, spec)[row.pattern]) add(`positioning.referenceEvidence[${index}].pattern: «${row.pattern}» отсутствует в архетипе`);
      if (!ids.has(row.screen)) add(`positioning.referenceEvidence[${index}].screen: «${row.screen}» не существует`);
      if (vague(row.behavior)) add(`positioning.referenceEvidence[${index}].behavior: нужно наблюдаемое поведение`);
    });
    const navRoles = new Set((spec.tabs || []).map((tab) => tab.role));
    for (const role of archetypeNavRoles(archetype, spec)) if (!navRoles.has(role)) add(`tabs: мимикрия ${spec.targetSet} не покрывает обязательную роль «${role}»`);
  }
  return { issues, summary: { contract: spec.qualityContractVersion, research: readiness.referenceResearch?.length || 0, critiques: readiness.productCritique?.length || 0, passes: spec.qualityContractVersion >= 3 ? 'evidence' : (readiness.visualPasses?.length || 0) } };
}

/** Контракт 4: модель контента, правило названия, обоснование доступов и полнота набора. Входит в readiness. */
function validateContract4(spec) {
  const err = [];
  const content = spec.product?.content || {};
  const messenger = spec.targetSet === 'messenger';
  if (!CONTENT_KINDS[content.kind]) err.push(`product.content.kind: ожидается одно из ${Object.keys(CONTENT_KINDS).join(', ')}`);
  else if ((content.kind === 'messages') !== messenger) err.push(messenger ? 'product.content.kind: у мессенджера контент — переписка (messages)' : 'product.content.kind: переписка допустима только в наборе «Мессенджер»');
  if (content.library !== false) err.push('product.content.library: готового контента из библиотек нет — ожидается false');
  if (content.feed !== false) err.push('product.content.feed: ленты нет — ожидается false');
  if (!messenger && content.sharing !== false) err.push('product.content.sharing: свои записи не публикуются для других — ожидается false');
  if (vague(content.what)) err.push('product.content.what: что именно создаёт человек — конкретно');

  const prefixes = namePrefixes(spec.targetSet);
  const name = String(spec.name || '');
  if (prefixes.length && !prefixes.some((p) => name.toLowerCase().startsWith(p.toLowerCase()))) {
    err.push(`name «${name}»: в наборе ${spec.targetSet} название начинается с ${prefixes.map((p) => `«${p}»`).join(', ')}`);
  }

  const set = targetSetKeys(spec.targetSet);
  const keys = new Set((spec.permissions || []).map((p) => p.key));
  if (set) {
    for (const key of set.must) if (!keys.has(key)) err.push(`permissions: набор ${spec.targetSet} требует ${key}`);
    for (const key of Object.keys(set.excluded || {})) if (keys.has(key)) err.push(`permissions: ${key} не заявляем — ${set.excluded[key]}`);
  }
  /* Обоснование — четыре ответа, без которых доступ не защитить на ревью */
  for (const p of spec.permissions || []) {
    const r = p.rationale || {};
    for (const [field, question] of [['who', 'кто'], ['moment', 'в какой момент'], ['need', 'почему без доступа фича не работает'], ['without', 'что остаётся без него']]) {
      if (vague(r[field])) err.push(`permissions.${p.key}.rationale.${field}: ${question} — конкретно`);
    }
    if (!ACCESS[p.key]) err.push(`permissions.${p.key}: ключа нет в access-model.json`);
  }
  return err;
}

export function validateConceptQuality(spec, ids) {
  const err = [];
  const product = spec.product || {};
  if (![1, 2, 3, 4].includes(spec.qualityContractVersion)) err.push('qualityContractVersion: ожидается 1–4');
  if (!nonEmptyList(product.returnReasons, 3)) err.push('product.returnReasons: нужно минимум 3 конкретные причины вернуться');

  const slice = product.verticalSlice;
  if (!slice) err.push('product.verticalSlice отсутствует');
  else {
    const sliceIds = ['entry', 'action', 'result'].map((role) => slice[role]);
    for (const [index, role] of ['entry', 'action', 'result'].entries()) {
      if (!ids.has(sliceIds[index])) err.push(`product.verticalSlice.${role}: экран «${sliceIds[index]}» не существует`);
    }
    if (new Set(sliceIds).size < 3) err.push('product.verticalSlice: нужны три разных экрана');
  }

  const positioning = spec.positioning;
  if (!positioning) return err;
  if (!POSITIONING_MODES[positioning.mode]) err.push(`positioning.mode «${positioning.mode}» не поддерживается`);
  if (!positioning.categoryFit?.trim()) err.push('positioning.categoryFit пуст');
  for (const field of ['familiarPatterns', 'distinctions']) {
    if (!nonEmptyList(positioning[field], 3)) err.push(`positioning.${field}: нужно минимум 3 непустых пункта`);
  }
  if (!nonEmptyList(positioning.evidenceScreens, 3)) err.push('positioning.evidenceScreens: нужно минимум 3 экрана-доказательства');
  else for (const id of positioning.evidenceScreens) if (!ids.has(id)) err.push(`positioning.evidenceScreens: экран «${id}» не существует`);

  const archetype = archetypeFor(spec.targetSet);
  if (positioning.mode === 'mimicry') {
    const categories = [spec.appStore?.category?.primary, spec.appStore?.category?.secondary];
    if (!archetype) err.push(`для мимикрии неизвестен продукт-референс ${spec.targetSet}`);
    else {
      if (!categories.includes(archetype.category)) err.push(`мимикрия под ${spec.targetSet}: категория App Store должна включать ${archetype.category}`);
      if (!nonEmptyList(positioning.referencePatterns, 3)) err.push('positioning.referencePatterns: для мимикрии нужно минимум 3 паттерна референса');
      else for (const pattern of positioning.referencePatterns) if (!archetypePatterns(archetype, spec)[pattern]) err.push(`positioning.referencePatterns: «${pattern}» отсутствует в профиле ${spec.targetSet}`);
    }
  }
  return err;
}

export function validateUiContract(spec) {
  const err = [];
  if (spec.uiContractVersion == null) return err;
  if (![1, 2, 3].includes(spec.uiContractVersion)) return [`uiContractVersion ${spec.uiContractVersion} не поддерживается`];
  const states = new Set(['default', 'empty', 'loading', 'error', 'denied', 'success', 'offline']);
  for (const screen of spec.screens || []) {
    const ui = screen.ui;
    if (!ui) { err.push(`${screen.id}: нет ui-контракта`); continue; }
    const recipe = RECIPES[ui.pattern];
    if (!recipe) err.push(`${screen.id}: неизвестный ui.pattern «${ui.pattern}»`);
    if (!ui.purpose?.trim()) err.push(`${screen.id}: ui.purpose пуст`);
    if (ui.primaryAction !== null && !ui.primaryAction?.trim()) err.push(`${screen.id}: ui.primaryAction должен быть строкой или null`);
    if (!Array.isArray(ui.states) || !ui.states.length) err.push(`${screen.id}: ui.states пуст`);
    else for (const state of ui.states) if (!states.has(state)) err.push(`${screen.id}: неизвестное ui-состояние «${state}»`);
    if (spec.uiContractVersion >= 2) {
      if (!recipe?.densities.includes(ui.density)) err.push(`${screen.id}: density «${ui.density}» не подходит рецепту ${ui.pattern}`);
      for (const state of recipe?.requiredStates || []) if (!ui.states?.includes(state)) err.push(`${screen.id}: рецепт ${ui.pattern} требует состояние «${state}»`);
      if (spec.uiContractVersion === 2 && !nonEmptyList(ui.contentCases, 3)) err.push(`${screen.id}: ui.contentCases — нужно минимум 3 случая данных`);
    }
    if (spec.uiContractVersion >= 3) {
      if (!['root', 'push', 'modal', 'fullscreen', 'system'].includes(ui.navigation)) err.push(`${screen.id}: ui.navigation должен быть root/push/modal/fullscreen/system`);
      if (!ui.hierarchy || vague(ui.hierarchy.primary) || vague(ui.hierarchy.secondary)) err.push(`${screen.id}: ui.hierarchy должен называть primary и secondary regions`);
      const cases = ui.contentCases;
      if (!itemList(cases, 3)) err.push(`${screen.id}: UI v3 требует объектные contentCases typical/stress/failure`);
      else {
        const kinds = new Set(cases.map((item) => item.kind));
        for (const kind of ['typical', 'stress', 'failure']) if (!kinds.has(kind)) err.push(`${screen.id}: contentCases не содержит ${kind}`);
        cases.forEach((item, index) => { if (vague(item.example)) err.push(`${screen.id}: contentCases[${index}].example недостаточно конкретен`); });
      }
    }
  }
  return err;
}

export function qualitySummary(spec) {
  const archetype = archetypeFor(spec.targetSet);
  return {
    mode: POSITIONING_MODES[spec.positioning.mode]?.label || spec.positioning.mode,
    reference: archetype?.label || spec.targetSet,
    category: spec.appStore?.category?.primary,
    returnReasons: spec.product.returnReasons.length,
    verticalSlice: spec.product.verticalSlice,
    evidenceScreens: spec.positioning.evidenceScreens.length,
    referencePatterns: spec.positioning.referencePatterns?.length || 0,
    uiContract: spec.uiContractVersion || 'legacy',
    readiness: spec.qualityContractVersion >= 2 ? assessConceptReadiness(spec).summary : null,
  };
}
