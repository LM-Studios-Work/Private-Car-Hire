# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-04-19 - Navbar Dropdowns and Mobile Menus Accessibility
**Learning:** The default "Services" dropdown toggles and mobile hamburger menus in this Next.js app lacked essential ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-label`) and visible keyboard focus states (`focus-visible`).
**Action:** Always add state-communicating ARIA attributes and `focus-visible` ring styling to interactive icon-only buttons or dropdown toggles to ensure screen reader and keyboard accessibility.
