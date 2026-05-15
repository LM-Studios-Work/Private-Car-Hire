# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-05-15 - Accessible Dropdown Keyboard Navigation Pattern
**Learning:** When adding keyboard accessibility to hover-based dropdowns in React/Next.js, attaching the `onBlur` handler to the trigger element causes premature focus loss when users tab into the menu items. Also, nesting a `<button>` inside a Next.js `<Link>` is invalid HTML and disrupts semantic navigation.
**Action:** Always attach `onBlur` to the parent wrapper element and check `if (!e.currentTarget.contains(e.relatedTarget))` to close the menu only when focus leaves the component tree. Always apply interactive styles directly to the `<Link>` element instead of using an inner button.
