# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Handling Focus Contrast on Bright Elements
**Learning:** When layering elements that use a primary brand focus color (like `#A4C639`) over bright or similarly colored backgrounds (like the `#25D366` WhatsApp background), the focus ring can lose contrast and become invisible.
**Action:** Use `ring-offset-white` (or a similar high-contrast offset color depending on the background) in addition to `ring-offset-2` to guarantee sufficient contrast and visibility of the keyboard focus ring across different backdrops.
