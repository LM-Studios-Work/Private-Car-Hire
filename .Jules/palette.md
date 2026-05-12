# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Handling Hover Menus for Keyboard Access
**Learning:** When adding keyboard accessibility to hover-based dropdowns in React, do not attach the `onBlur` handler to the trigger element (e.g., `<button>`). Doing so causes it to prematurely lose focus when users tab into the actual menu items.
**Action:** Attach `onBlur` to the parent wrapper element and use `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu closes only when focus completely leaves the component tree. Keep `onClick` and `onFocus` on the trigger.
