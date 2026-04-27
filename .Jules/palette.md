# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2024-04-27 - Navbar Dropdown and Menu Accessibility **Learning:** Hover-based dropdown triggers and icon-only menu buttons in standard implementations often fail to be focusable or readable by screen readers, creating barriers for keyboard users. **Action:** Apply `onClick` handlers mapped to state inversions on hover-only dropdown triggers, and ensure all icon-only buttons include `aria-label`, `aria-expanded`/`aria-haspopup`, and clear `focus-visible` styles with sufficient offset.
