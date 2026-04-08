# frontend-agency

Репозиторий AI-агентства для фронтенд-разработки. Подключается в любой проект как git submodule.

Общая концепция — в [CONCEPT.md](./CONCEPT.md).

---

## Структура репо

```
frontend-agency/
  .agents/
    skills/                ← локальные навыки (источник)
  .claude/
    settings.json          ← настройки Claude Code
    skills/                ← symlink-обёртка над .agents/skills
  .mcp.json                ← MCP-конфиг агентства
  CONCEPT.md              ← общая концепция агентства
  README.md               ← этот файл
  CLAUDE.md               ← мета-инструкции (точка входа для Claude)
  setup.js                ← связывает agency с проектом через symlink
  skills-lock.json        ← lock-файл локальных навыков
  agents/
    architect.md          ← спецификация агента-архитектора
    engineer.md           ← спецификация агента-инженера
    qa.md                 ← спецификация агента QA/ревьюера
  rules/
    base-conventions.md   ← соглашения по коду (язык, именование, типы)
    fsd-structure.md      ← правила FSD-архитектуры
    rest-patterns.md      ← паттерны работы с REST API
  stack/                  ← pluggable модули под стек проекта
    state/
      jotai.md
      zustand.md
    ui/
      shadcn.md
    query/
      tanstack-query.md
    testing/
      vitest.md
```

---

## Подключение к проекту

```bash
# Добавить агентство как submodule
git submodule add https://github.com/YeLazzers/frontend-agency frontend-agency

# При клонировании проекта инициализировать
git submodule update --init

# Получить обновления агентства
git submodule update --remote
```

После подключения submodule выполнить:

```bash
node frontend-agency/setup.js
```

Скрипт создаёт symlink'и в корне проекта:

- `.claude/settings.json`
- `.claude/skills`
- `.claude/skills-lock.json`
- `.agents/skills`
- `.mcp.json`

После этого нужно перезапустить Claude Code, чтобы он перечитал конфиг.

---

## Настройка проекта (Project Adapter)

В корне проекта создать `CLAUDE.md` или `AGENTS.md`:

```markdown
# Project: [Name]

## Agency
@frontend-agency/CLAUDE.md

## Stack
state: jotai
ui: shadcn
query: tanstack-query
testing: vitest

## Context
- API base: /api/v1, REST
- Auth: [метод]
- Архитектура: FSD (упрощённый)
```

Claude Code читает `frontend-agency/CLAUDE.md`, а на основе `Stack` подгружает нужные `stack/*.md` модули.

---

## Статус реализации

- [ ] `CLAUDE.md` — мета-инструкции агентства
- [ ] `agents/architect.md`
- [ ] `agents/engineer.md`
- [ ] `agents/qa.md`
- [ ] `rules/base-conventions.md`
- [ ] `rules/fsd-structure.md`
- [ ] `rules/rest-patterns.md`
- [ ] `stack/state/jotai.md`
- [ ] `stack/ui/shadcn.md`
- [ ] `stack/query/tanstack-query.md`
- [ ] `stack/testing/vitest.md`
- [ ] Шаблон спецификации фичи (`FEATURE_SPEC_TEMPLATE.md`)
