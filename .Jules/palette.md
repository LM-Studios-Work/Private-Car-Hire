# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-03-09 - Invalid HTML Semantics in Next.js Link
**Learning:** In Next.js, wrapping `<button>` elements within `<Link>` components produces invalid HTML semantics (since `<Link>` renders an `<a>` tag which cannot contain interactive elements like buttons).
**Action:** Use a styled `<span>` or `<div>` with `block` or `inline-block` display classes instead of a `<button>` inside a `<Link>` component to maintain visual structure and semantic validity.
