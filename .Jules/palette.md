# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-06-17 - Dropdown Keyboard Accessibility
**Learning:** For React dropdown triggers supporting both hover/focus and touch interactions, wrapping `onBlur` around the parent container and checking `e.currentTarget.contains(e.relatedTarget)` effectively prevents premature closing when a user tabs into the dropdown's inner menu items.
**Action:** Consistently apply this pattern for accessible custom dropdown menus to ensure keyboard navigability without sacrificing pointer/touch interactions.
