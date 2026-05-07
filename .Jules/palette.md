# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-05-07 - [Dropdown Keyboard Accessibility] **Learning:** Hover-based dropdown menus without explicit 'onClick' toggles and 'onBlur' state management cannot be accessed or dismissed by keyboard users, resulting in trapped focus or inaccessible submenus. **Action:** Always add 'onClick' to the trigger and an 'onBlur' handler to the dropdown container checking '!e.currentTarget.contains(e.relatedTarget)' to ensure proper keyboard operability.
