# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-13 - Navbar Dropdown and Mobile Menu Accessibility Focus States
**Learning:** For interactive UI elements lacking distinct keyboard focus indicators, standard `focus-visible:ring-2` styling should be paired with `outline-none` to override native browser styling artifacts and achieve a unified focus ring look consistent with the primary `#A4C639` brand color.
**Action:** When adding accessible focus states to components, remember to include `outline-none` if custom ring styles are applied via Tailwind to prevent visual clashes.
