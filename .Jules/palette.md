# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Missing ARIA attributes and Focus States on Navbar
**Learning:** Found a recurring pattern where icon-only buttons (like mobile menu toggle) and dropdown buttons lacked `aria-label`, `aria-expanded`, `aria-haspopup`, and keyboard focus (`focus-visible`) classes.
**Action:** Consistently check interactive navigation elements for these missing accessibility attributes to ensure screen reader compatibility and keyboard navigation.
