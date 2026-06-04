# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2024-06-04 - [React Hydration & Accessibility] **Learning:** Next.js `<Link>` components render as `<a>` tags by default. Nesting `<button>` elements directly inside them creates invalid HTML (interactive elements within interactive elements), which not only causes React hydration mismatch errors but also significantly disrupts screen reader navigation and keyboard focus management (the focus target and the click target are disconnected). **Action:** Always style the `<Link>` component directly to look like a button rather than nesting interactive elements. Ensure focus-visible classes are applied to the outermost interactive element.
