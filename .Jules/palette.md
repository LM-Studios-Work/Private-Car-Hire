# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-04-13 - Navbar Accessibility Enhancements
**Learning:** Found navigation toggles (mobile menu and dropdowns) lacking sufficient ARIA attributes and focus styles. The `focus-visible:ring-[#A4C639]` combined with `focus-visible:ring-offset-2` provides high-visibility keyboard focus against various backgrounds.
**Action:** Always verify `aria-expanded`, `aria-controls`, and `aria-haspopup` on interactive disclosure components. Apply explicit `focus-visible` ring styles utilizing brand colors for accessibility without compromising visual design.
