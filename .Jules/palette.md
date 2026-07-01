# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - [Dropdown Keyboard Accessibility] **Learning:** When adding keyboard accessibility to hover-based dropdowns, attaching `onBlur` directly to the trigger button causes premature closing when tabbing to menu items. **Action:** Attach `onBlur` to the parent wrapper element and use `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu only closes when focus leaves the entire component tree.
