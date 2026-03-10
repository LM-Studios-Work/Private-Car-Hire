# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-03-10 - [Next.js Link Semantics]
**Learning:** Next.js `<Link>` components (App Router) render as `<a>` tags by default. Nesting interactive elements like `<button>` or using deprecated props like `legacyBehavior` causes React hydration errors or development warnings.
**Action:** Always apply button-like Tailwind classes directly to the `<Link>` component itself to ensure semantic HTML without adding invalid nested structure.
