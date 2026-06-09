# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-12 - Next.js Link Tag Validation
**Learning:** Next.js `Link` tags automatically render as `a` tags in the App router. Nesting `button` elements directly inside them is common legacy practice but introduces invalid HTML semantics and breaks sequential keyboard navigation.
**Action:** When working in Next.js 13+ codebases, remove nested `button` wrappers inside `Link` elements and apply the button-like utility classes directly to the `Link` component, utilizing `block` or `inline-block` layout properties to preserve the visual appearance.
