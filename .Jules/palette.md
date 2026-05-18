# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2026-05-18 - Focus Ring Visibility on Bright Backgrounds
**Learning:** Using standard focus rings on bright, floating elements (like the WhatsApp green background) can result in low contrast making the focus state invisible.
**Action:** Always apply `focus-visible:ring-offset-2 focus-visible:ring-offset-white` on brightly colored elements that don't sit against a dark background to ensure sufficient contrast.
