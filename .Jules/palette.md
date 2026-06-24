# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Accessible hover-based dropdowns
**Learning:** Attaching `onBlur` directly to a dropdown trigger `<button>` causes the menu to immediately close when a keyboard user tabs from the trigger into the menu items.
**Action:** When adding keyboard accessibility to hover-based dropdowns, attach `onFocus` and `onBlur` to the parent wrapper element, using `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu only closes when focus leaves the entire component tree.
