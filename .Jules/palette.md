# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2024-06-13 - [Navbar and Global Widgets Focus states] **Learning:** Hover-based dropdowns need the `onBlur` event on a wrapper `<div>` with `!e.currentTarget.contains(e.relatedTarget)` to avoid closing prematurely when tabbing into the menu. Global floating widgets on colored backgrounds benefit greatly from `focus-visible:ring-offset` properties for strong visibility. **Action:** Always wrap hover dropdown trigger and content in a single blurred element and use `ring-offset` for elements layered on contrasting backgrounds.
