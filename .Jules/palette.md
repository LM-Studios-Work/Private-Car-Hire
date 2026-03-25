# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Accessibility states and nested buttons in Next.js
**Learning:** Next.js `<Link>` components map natively to `<a>` tags. Nesting a `<button>` inside `<Link>` breaks HTML specifications and accessibility guidelines (especially in Next.js 13+ App router). Additionally, dynamic components like dropdown toggles and hamburger menus often lack state indicators like `aria-expanded` and `aria-haspopup`.
**Action:** When inspecting navigation components, always verify `<Link>` tags do not contain nested `<button>` or `<a>` tags, and move styling directly to the `<Link>`. Also verify dynamic interactive components use `aria-expanded` for toggles and `focus-visible` to clearly indicate focus state for keyboard navigation.
