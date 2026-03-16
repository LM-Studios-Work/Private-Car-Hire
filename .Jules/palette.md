# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-23 - Navigation Accessibility Patterns
**Learning:** Found a recurring anti-pattern where dropdown toggles lacked `aria-haspopup` and `aria-expanded` attributes, and `<button>` tags were unnecessarily nested inside `<Link>` components for styling purposes.
**Action:** When implementing or reviewing navigation components, always verify that interactive state elements declare their accessibility roles, and that styles for linked actions are applied directly to the semantic Next.js `<Link>` component instead of nesting interactive tags.