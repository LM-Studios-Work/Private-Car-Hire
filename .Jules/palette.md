# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2024-05-08 - Fixing Next.js Link Elements
**Learning:** In Next.js App Router (v13+), `<Link>` components render natively as `<a>` tags. Developers frequently mistakenly nest `<button>` elements inside them to create button-like links, resulting in invalid HTML (interactive content inside interactive content).
**Action:** When auditing navigation or link components, actively look for and remove nested `<button>` elements inside `<Link>` components. Instead, move the visual styling classes directly to the `<Link>` element and enforce a block-level layout (`block` or `inline-block`) to preserve the button appearance.
