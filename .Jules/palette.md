# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-03-06 - [Semantic Links] **Learning:** Next.js `<Link>` components naturally render as anchor tags (`<a>`). Nesting a `<button>` directly inside causes invalid semantic HTML. **Action:** Apply button-like styling directly to the `<Link>` element or use a styled `<span>` wrapper to maintain both valid HTML and proper accessibility.
