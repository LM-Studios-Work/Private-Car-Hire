# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-03-03 - Accessible Mobile and Dropdown Menus
**Learning:** Found a pattern where interactive, icon-only buttons (like mobile hamburger menus and close buttons) and dropdown toggles in the `Navbar` component lacked accessible names (`aria-label`), `aria-expanded` attributes, and visual focus states (`focus-visible`).
**Action:** When working on navigation components or UI shells, actively check that all toggleable elements (like mobile menus and dropdowns) communicate their state and accessible name to screen readers, and provide clear keyboard focus indicators.
