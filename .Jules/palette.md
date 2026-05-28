# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2024-05-28 - [Accessible React Hover Dropdowns] **Learning:** Attaching `onBlur` directly to a dropdown trigger `<button>` causes the menu to prematurely close when users Tab into the menu items because focus leaves the button itself. **Action:** Attach the `onBlur` handler to the parent wrapper element and use `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu only closes when keyboard focus completely leaves the parent component tree.
