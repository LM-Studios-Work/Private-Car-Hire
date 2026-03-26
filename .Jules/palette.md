# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2026-03-26 - Fix Invalid Nesting of Button inside Next.js Link
**Learning:** This app's navigation components improperly nested `<button>` elements inside Next.js `<Link>` components (which render natively as `<a>` tags). This causes invalid HTML (block-level/interactive inside inline/interactive) and creates redundant, confusing roles for screen readers.
**Action:** Always apply the visual Tailwind styles directly to the `<Link>` component and set it to a block or inline-block layout (`block` or `inline-block`) instead of wrapping a nested button.
