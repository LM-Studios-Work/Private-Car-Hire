# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2026-05-21 - Navbar Keyboard Navigation Focus Management
**Learning:** When adding keyboard accessibility to hover-based dropdowns in React, do not attach `onBlur` to the trigger element (e.g., `<button>`), as it prematurely loses focus when users tab into the menu items. Instead, attach `onBlur` to the parent wrapper element and check `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu closes only when focus leaves the entire component tree. `onClick` and `onFocus` should still be on the trigger.
**Action:** Use this `onBlur` event strategy on the parent container whenever making custom React hover dropdowns keyboard accessible.
