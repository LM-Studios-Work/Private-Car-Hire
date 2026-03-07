# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2026-03-07 - Navbar Accessibility and HTML Semantics
**Learning:** The `components/ui/Navbar.tsx` lacked ARIA attributes (like `aria-label`, `aria-expanded`, `aria-haspopup`) and focus styles on icon-only mobile menu toggles and dropdown buttons. Additionally, there was invalid HTML semantics where `<button>` elements were nested inside Next.js `<Link>` components.
**Action:** Always ensure interactive elements, especially icon-only ones, have appropriate ARIA attributes and focus styles for keyboard accessibility. When using Next.js `<Link>` components for styled buttons, apply the styles directly to a `<span>` or `<div>` inside the `<Link>` instead of nesting a `<button>`.
