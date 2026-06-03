# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2024-05-18 - Keyboard Navigation in React Hover Dropdowns
**Learning:** Attaching `onBlur` directly to a dropdown trigger button causes the menu to close prematurely when tabbing into the menu items themselves, making the submenu completely inaccessible via keyboard.
**Action:** Always attach the `onBlur` event to the parent wrapper element containing both the trigger and the menu, and use `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu only closes when focus leaves the entire component tree.
