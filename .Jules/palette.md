# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-04-30 - Prevent Invalid HTML Nesting in Next.js Links
**Learning:** In Next.js App Router, wrapping a button inside a Link creates invalid HTML markup since Link renders as an a tag, causing nested interactive elements. This breaks keyboard navigation and accessibility tree expectations.
**Action:** Apply button-like styling (padding, background, focus-visible states) directly to the Link element instead of using a nested button. Use inline-block or block utility classes to ensure it respects padding and width appropriately.
