# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Keyboard Accessible Hover Dropdown Pattern
**Learning:** Attaching `onBlur` directly to a hover dropdown trigger button breaks keyboard navigation when tabbing into the menu items because focus leaves the button. A state toggle in `onClick` can conflict with `onFocus` for touch devices.
**Action:** When making hover dropdowns keyboard accessible, attach `onBlur` to the parent wrapper checking `!e.currentTarget.contains(e.relatedTarget)`. Keep `onFocus` and `onClick={() => setDropdownOpen(true)}` (not toggle) on the trigger button.
