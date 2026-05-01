# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2024-05-01 - Dropdown Menu State Visibility
**Learning:** Dropdown toggle buttons for services menus often lack `aria-haspopup` and `aria-expanded` attributes, making it difficult for screen reader users to understand their interactive nature and current state.
**Action:** Always ensure dropdown toggles communicate their popup behavior and expanded/collapsed state to assistive technologies.
