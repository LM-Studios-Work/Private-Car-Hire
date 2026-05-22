# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-05-22 - [Next.js App Router Semantic Links] **Learning:** Next.js <Link> components now render as <a> tags by default, making nested <button> elements inside <Link> tags an invalid semantic HTML pattern. **Action:** Always style <Link> components directly using Tailwind classes like inline-block, block, or flex to visually mimic buttons instead of nesting actual button tags.
