# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-05-26 - Focus Ring Contrast over Bright Backgrounds
**Learning:** Adding standard focus rings using the primary brand color (#A4C639) over bright, similarly vibrant colors like the WhatsApp green (#25D366) results in poor contrast, making the focus state hard to perceive for keyboard users.
**Action:** Always use `ring-offset` utility classes (e.g., `focus-visible:ring-offset-2 focus-visible:ring-offset-white`) when applying focus rings to floating buttons or elements overlaid on distinct colored backgrounds.
