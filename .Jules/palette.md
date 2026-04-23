# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2023-10-25 - [Brand Context Focus Rings]
**Learning:** High-contrast backgrounds (like WhatsApp's `#25D366` green) swallow standard brand-colored focus rings (`#A4C639` green) entirely, creating an accessibility failure for keyboard users despite standard utility application.
**Action:** When applying brand-colored focus rings over similarly saturated or bright backgrounds, always pair `focus-visible:ring-offset-2` with an explicit contrasting offset color like `focus-visible:ring-offset-white` to ensure the focus ring remains distinguishable against the container bounds.
