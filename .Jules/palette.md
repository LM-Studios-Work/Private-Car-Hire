# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2024-05-18 - Semantic Anchor Nesting in Next.js
**Learning:** Next.js 13+ `<Link>` components automatically render as standard `<a>` tags. Nesting `<button>` or custom `<a>` tags directly inside `<Link>` elements creates invalid HTML ("interactive element inside interactive element"), which severely breaks screen reader navigation, causes hydration errors, and violates semantic web standards.
**Action:** When converting links to look like buttons in Next.js, never nest a `<button>` inside a `<Link>`. Instead, apply utility classes (e.g., padding, background colors, and `inline-block` or `block`) directly to the Next.js `<Link>` component to achieve the visual button appearance while maintaining valid semantics.
