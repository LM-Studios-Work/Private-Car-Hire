# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-04-24 - [Link Nesting Pattern] **Learning:** In Next.js App Router, placing a <button> inside a <Link> creates invalid HTML nesting (an interactive element inside an <a> tag) which causes hydration and accessibility issues. **Action:** Apply button-like styling directly to the <Link> component instead of wrapping a <button>.
