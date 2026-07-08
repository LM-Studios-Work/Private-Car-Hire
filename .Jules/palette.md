# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-13 - Accessible Hover Dropdowns
**Learning:** Hover-based dropdown triggers that open on hover but don't close easily with keyboard navigation cause accessibility traps. If `onBlur` is placed directly on the trigger button, it closes immediately when tabbing into the menu, trapping the user or forcing mouse usage.
**Action:** Always wrap the trigger and the dropdown menu in a parent container (`<div className="relative">`). Attach the `onBlur` event to this parent and check `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu only closes when keyboard focus leaves the *entire* component tree (both trigger and menu items). Keep `onFocus` and `onClick` handlers on the trigger button itself.
