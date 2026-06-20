# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-06-20 - React Hover-Based Dropdown Keyboard Accessibility
**Learning:** Attaching `onBlur` directly to a hover dropdown trigger element (e.g. `<button>`) prematurely closes the menu when tabbing into its own submenu items, breaking keyboard accessibility.
**Action:** Always attach `onBlur` to the parent wrapper element and use `e.currentTarget.contains(e.relatedTarget)` to verify focus has completely left the component tree before closing the menu. Additionally, ensure `focus-visible` styling properly handles layered context using `ring-offset` classes.
