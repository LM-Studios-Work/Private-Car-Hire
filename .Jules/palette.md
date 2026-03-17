# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-03-17 - Button Nesting in Next.js Links
**Learning:** Found `<button>` tags nested inside Next.js `<Link>` components in the Navbar (a common anti-pattern that produces invalid HTML since Links render as `<a>` tags). This breaks screen reader expectations.
**Action:** When finding CTA buttons wrapped in Links, remove the `<button>` tag completely and apply its classes (plus focus-visible states) directly to the `<Link>` component.
