# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-13 - Keyboard Accessibility in Hover Dropdowns
**Learning:** Adding keyboard accessibility to a React hover-based dropdown requires a careful approach. Simply adding `onBlur` to the trigger button causes the menu to close immediately when the user tries to tab into the submenu items.
**Action:** Always attach `onBlur` to the parent wrapper component (e.g., the relative `div`) instead of the trigger itself. Inside the `onBlur` handler, check `if (!e.currentTarget.contains(e.relatedTarget))` to ensure the menu only closes when the focus has completely left the dropdown container, allowing users to safely navigate the submenu items.
