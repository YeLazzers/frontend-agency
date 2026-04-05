# Skills — Навыки агентства

## Маркетплейсы

- [skills.sh](https://skills.sh/) — основной каталог навыков для Claude Code
- [secondsky/claude-skills MARKETPLACE.md](https://github.com/secondsky/claude-skills/blob/main/MARKETPLACE.md) — большой маркетплейс с тематическими пакетами (frontend-skills, testing-skills, ai-skills и др.)

---

## Установлены

### tailwind-v4-shadcn
Архитектура конфига Tailwind v4 + shadcn/ui. CSS-переменные, темы, dark mode, миграция с v3, анти-паттерны.
- Источник: `secondsky/claude-skills@tailwind-v4-shadcn`
- Кому: Engineer
- Путь: `.agents/skills/tailwind-v4-shadcn`

### tailwindcss-advanced-layouts
Сложные лейауты на Tailwind: CSS Grid, Flexbox, Container Queries, sticky/fixed позиционирование, scroll snap.
- Источник: `josiahsiegel/claude-plugin-marketplace@tailwindcss-advanced-layouts`
- Кому: Engineer
- Путь: `.agents/skills/tailwindcss-advanced-layouts`

### jotai-expert
Экспертные паттерны Jotai: типы атомов, выбор хуков, оптимизация через splitAtom/loadable, анти-паттерны.
- Источник: `s-hiraoku/skills-factory@jotai-expert`
- Кому: Engineer
- Путь: `.agents/skills/jotai-expert`

---

## Отложены — потенциально полезны

### vitest-testing-patterns
Паттерны написания тестов на Vitest, не просто синтаксис.
- Источник: `erichowens/some_claude_skills@vitest-testing-patterns`
- Кому: QA + Engineer
- Когда: при написании `agents/qa.md`

### web-accessibility
A11y-аудит: WCAG, ARIA, keyboard navigation, screen reader совместимость.
- Источник: `supercent-io/skills-template@web-accessibility`
- Кому: QA
- Когда: при написании `agents/qa.md`

### tanstack-query
Паттерны работы с TanStack Query v5: кэширование, инвалидация, мутации, optimistic updates.
- Источник: `secondsky/claude-skills` (пакет `frontend-skills`)
- Кому: Engineer
- Когда: когда проверим формат установки из secondsky-маркетплейса

### react-hook-form-zod
Формы с React Hook Form + валидация через Zod.
- Источник: `secondsky/claude-skills` (пакет `frontend-skills`)
- Кому: Engineer
- Когда: когда появятся формы в проекте

---

## Не нужны

### claude-agent-sdk
Построение агентов через Anthropic API с токенами. Для автоматизации вне Claude Code — не наш случай.

### multi-ai-consultant
Консультации через несколько AI с оплатой за запросы. Платная модель, не подходит под архитектуру агентства.

### mcp-dynamic-orchestrator
Динамическая оркестрация через MCP. Преждевременно — у нас мало MCP-серверов пока.
