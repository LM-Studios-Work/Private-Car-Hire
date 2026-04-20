# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Next.js Link Structures & Accessible Icon Buttons
**Learning:** Found `<button>` nested inside Next.js `<Link>` components, which produces invalid HTML. Icon-only mobile menu toggles were missing `aria-label` attributes.
**Action:** When working with Next.js App Router, always apply button-like styling directly to the `<Link>` element instead of nesting interactive tags. Always add `aria-label` to standalone icon buttons like hamburger menus.
