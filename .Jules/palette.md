# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-04-07 - [Menu Focus States] **Learning:** Icon-only navigation buttons in custom components consistently lack programmatic accessible names and state (`aria-expanded`) and visual keyboard focus indicators, rendering them invisible to screen readers and difficult to use for keyboard navigators. **Action:** Always audit interactive elements in header/navigation components for `aria-label`, `aria-expanded` and `focus-visible` utility classes using the primary brand color (`#A4C639`).
