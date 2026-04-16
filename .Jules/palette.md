# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-04-16 - Nested Buttons in Next.js Links **Learning:** Nested button tags within Next.js Link components cause invalid HTML nesting (hydration errors) and accessibility issues because the Link tag naturally renders as an anchor tag. **Action:** Always style the Link component directly using block or inline-block utility classes to achieve a button appearance instead of nesting button elements.
