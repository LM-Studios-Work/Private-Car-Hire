# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-07-07 - Mobile Menu Accessibility \n**Learning:** When using Radix UI/Lucide React icons inside functional toggle buttons, screen readers may announce decorative SVGs unnecessarily. Additionally, state-toggling buttons must use aria-expanded and explicit ID linkages (aria-controls) to orient screen reader users dynamically. \n**Action:** Always add aria-hidden="true" to inner SVGs on toggle buttons and verify aria-expanded/aria-controls properties exist during accessibility sweeps.
