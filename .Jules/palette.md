# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - [Accessible Hover Dropdowns] **Learning:** When adding keyboard accessibility to hover-based dropdowns in React, attaching `onBlur` to the trigger element causes premature focus loss when users tab into the menu items. **Action:** Attach `onBlur` to the parent wrapper element and check `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu closes only when focus leaves the entire component tree. `onClick` and `onFocus` should still be on the trigger.
