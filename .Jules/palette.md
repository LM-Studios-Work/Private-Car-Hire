# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-03-02 - Mobile Menu & Link Semantics
**Learning:** The mobile menu toggles frequently missed basic accessibility attributes (`aria-label`) and focus indicators (`focus-visible`). Additionally, the project uses a pattern of nesting `<button>` elements inside `<Link>` components, which is semantically invalid HTML and creates nested interactive elements.
**Action:** Always verify icon-only interactive elements for `aria-label` and `focus-visible` classes. When wrapping styled interactive elements in a Next.js `<Link>`, use `<span>` or `<div>` with appropriate styling instead of a `<button>`.
