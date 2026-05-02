# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2024-05-02 - Accessible Hover Menus **Learning:** Hover-based dropdown menus in the Next.js App Router setup require an `onFocus` handler to open, but critically need an `onBlur` handler to check if focus has entirely left the container (using `!e.currentTarget.contains(e.relatedTarget)`) to close the menu properly, avoiding orphaned open menus when a keyboard user tabs away. **Action:** Always pair `onFocus` state updates with `onBlur` checks on parent containers for hover-based dropdowns.
