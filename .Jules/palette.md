# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2024-06-14 - Keyboard accessible Hover Menus
**Learning:** React hover-based dropdowns lose focus prematurely when users tab into their links because `onBlur` on the trigger `<button>` fires immediately when focus moves to a `<Link>` element, closing the menu before the user can interact.
**Action:** Attach `onBlur` to a parent wrapper element that contains both the trigger and the dropdown content, and check `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu only closes when focus leaves the entire component tree.
