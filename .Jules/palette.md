# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Next.js Link Button Semantic Fix
**Learning:** Next.js 13+ App Router `<Link>` components inherently render as `<a>` tags. Wrapping a `<button>` inside `<Link>` creates invalid HTML markup which fails accessibility audits.
**Action:** Always migrate styles from the inner `<button>` to the `<Link>` component directly, using `inline-block` or `block` layout utilities as necessary to maintain the visual appearance of a button while preserving semantic correctness and focus behaviors.
