# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-06-15 - Dropdown Focus Accessibility
**Learning:** Attaching `onBlur` directly to a dropdown toggle button prematurely closes the menu when the user tabs into the menu items themselves. Touch users tapping hover-menus require an `onClick` that sets state to true, since `onFocus` can fire consecutively causing the menu to immediately close if using `!state`.
**Action:** Always attach `onBlur` to the outer parent wrapper/container and check `if (!e.currentTarget.contains(e.relatedTarget))` to determine if focus has truly left the component tree.
