# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2024-05-18 - Navbar Accessibility Polish **Learning:** When adding focus states to icon-only buttons or mobile menus, relying on default focus outlines can result in invisible or unappealing focus rings, especially over complex or colored backgrounds. Explicitly defining `focus-visible:ring-2 focus-visible:ring-[color]` ensures consistent, visible keyboard accessibility without affecting mouse hover states. **Action:** Apply explicit `focus-visible` ring utility classes alongside `aria-label`s on all custom icon buttons to guarantee clear keyboard navigation feedback.
