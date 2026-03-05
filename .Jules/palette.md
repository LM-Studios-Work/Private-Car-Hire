# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-12 - Missing Accessibility in Interactive UI Elements
**Learning:** Interactive components like mobile hamburger menus, close buttons, and dropdown toggles frequently lack proper accessible names (`aria-label`) and state attributes (`aria-expanded`, `aria-haspopup`). Also, explicit `focus-visible` styles are not always present, degrading keyboard navigation.
**Action:** Always verify that icon-only buttons have descriptive `aria-label`s, toggles use `aria-expanded`/`aria-haspopup`, and add `focus-visible:ring-2 focus-visible:outline-none` with brand colors to ensure screen reader and keyboard accessibility.
