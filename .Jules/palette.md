# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-13 - Next.js Nav & Dropdown Accessibility
**Learning:** Custom dropdown menus frequently miss `aria-haspopup` and `aria-expanded` pairs. Additionally, Next.js `<Link>` components natively render as `<a>` tags in the App Router, making nested `<button>` tags invalid HTML that can cause accessibility issues.
**Action:** Always verify custom dropdown toggles have `aria-haspopup="true"` and a dynamic `aria-expanded` attribute. Never nest `<button>` inside `<Link>`; instead, apply button styles directly to the `<Link>` component and add `focus-visible` utility classes.
