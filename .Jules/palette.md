# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - [Accessible React Dropdowns]
**Learning:** When adding keyboard accessibility to hover-based dropdowns in React, placing the `onBlur` handler directly on the toggle button causes the menu to collapse prematurely as soon as the user tabs into the dropdown items.
**Action:** Attach `onBlur` to the parent wrapper element and use `!e.currentTarget.contains(e.relatedTarget)` to ensure the menu only closes when keyboard focus completely leaves the parent component tree.
