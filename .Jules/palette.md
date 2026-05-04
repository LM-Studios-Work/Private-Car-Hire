# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-05-04 - Nested Button in Next.js Link
**Learning:** Next.js `<Link>` components naturally render as `<a>` tags in App Router. Nesting a `<button>` inside a `<Link>` creates invalid HTML (`<button>` inside `<a>`) which causes React hydration errors and accessibility issues.
**Action:** Always apply button-like styling (padding, background colors, and `inline-block`/`block` utilities) directly to the Next.js `<Link>` component itself rather than nesting a `<button>` element.
