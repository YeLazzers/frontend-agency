# frontend-agency

Репозиторий AI-агентства для фронтенд-разработки. Подключается в любой проект как git submodule.

Общая концепция — в [CONCEPT.md](./CONCEPT.md).

---

## Структура репо

```
frontend-agency/
  CONCEPT.md              ← общая концепция агентства
  README.md               ← этот файл
  CLAUDE.md               ← мета-инструкции (точка входа для Claude)
  skills/
    architect.md          ← агент-архитектор
    engineer.md           ← агент-инженер
    qa.md                 ← агент QA/ревьюер
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
git submodule add https://github.com/YeLazzers/frontend-agency .claude/frontend-agency

# При клонировании проекта инициализировать
git submodule update --init

# Получить обновления агентства
git submodule update --remote
```

---

## Настройка проекта (Project Adapter)

В корне проекта создать `CLAUDE.md`:

```markdown
# Project: [Name]

## Agency
@.claude/frontend-agency/CLAUDE.md

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

Claude читает agency CLAUDE.md и на основе `Stack` подгружает нужные `stack/*.md` модули.

---

## Статус реализации

- [ ] `CLAUDE.md` — мета-инструкции агентства
- [ ] `skills/architect.md`
- [ ] `skills/engineer.md`
- [ ] `skills/qa.md`
- [ ] `rules/base-conventions.md`
- [ ] `rules/fsd-structure.md`
- [ ] `rules/rest-patterns.md`
- [ ] `stack/state/jotai.md`
- [ ] `stack/ui/shadcn.md`
- [ ] `stack/query/tanstack-query.md`
- [ ] `stack/testing/vitest.md`
- [ ] Шаблон спецификации фичи (`FEATURE_SPEC_TEMPLATE.md`)
