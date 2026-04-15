# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-13 - Focus Styles on Bright Backgrounds
**Learning:** When applying brand color focus rings (like `#A4C639`) onto similarly bright brand backgrounds (like WhatsApp `#25D366`), standard focus rings lack sufficient contrast.
**Action:** Always pair `focus-visible:ring-offset-2` and `focus-visible:ring-offset-white` with the focus ring class on floating colored widgets to ensure the ring is distinctly separated from both the button and the underlying page background.
