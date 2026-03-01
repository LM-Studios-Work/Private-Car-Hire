# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Accessibility of Icon-Only and Next.js Nested Elements
**Learning:** Next.js `<Link>` components strictly expect text, `<a>`, or un-nested interactable tags. Using a `<button>` tag inside a `<Link>` is semantically invalid. Furthermore, floating icon-only interactive elements commonly lack both `aria-label`s for screen-reader usability and `focus-visible` styling for keyboard navigability.
**Action:** When creating Next.js specific links that look like buttons, style `<span>` or `<div>` elements to look like buttons inside `<Link>` elements. For icon-only components, enforce `aria-label` and `focus-visible` ring styles.
