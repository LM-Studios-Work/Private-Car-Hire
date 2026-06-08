# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Next.js Link Tag Nesting and Button Semantics
**Learning:** In Next.js, the `<Link>` component renders as an `<a>` element out of the box. Nesting a `<button>` inside a `<Link>` creates invalid HTML markup since interactive elements should not be nested. This also causes hydration warnings and unpredictable behaviors in React.
**Action:** When a button-like visual style is required for a navigation item, apply the utility classes (e.g., bg, text, padding, border-radius) directly to the `<Link>` component and use `inline-block` or `block text-center` to enforce the shape rather than wrapping a `<button>` tag inside it.
