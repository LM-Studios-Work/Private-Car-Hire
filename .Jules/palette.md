# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-06-12 - [Navbar Accessibility] **Learning:** When fixing invalid nested `<button>` tags inside Next.js `<Link>` components (which render as `<a>`), applying block-level utility classes (e.g., `block`, `w-full`, `text-center`) to the `<Link>` itself is necessary to preserve the previous visual layout and full-width click area of the original button, especially in mobile menus. **Action:** Always check the visual layout after removing invalid nested `<button>` elements and apply equivalent display/layout utilities directly to the `<Link>` component.
