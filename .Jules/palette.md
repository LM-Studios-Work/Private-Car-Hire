# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-13 - [Focus Management in React Dropdowns]
**Learning:** When implementing keyboard accessibility for dropdown menus in React, attaching `onBlur` to the trigger `<button>` fails when a user tabs past the last dropdown item, because the button already lost focus when the user tabbed *into* the dropdown. This leaves the dropdown permanently open for keyboard users.
**Action:** Always attach the `onBlur` event handler to the parent wrapper element (e.g., `<div className="relative">`) and use `if (!e.currentTarget.contains(e.relatedTarget))` to check if focus has truly left the entire component tree before closing the menu.
