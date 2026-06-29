# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-13 - Focus-Visible Ring Offset Pattern
**Learning:** For elements using the primary brand focus color or layered over bright backgrounds (like `#25D366` WhatsApp background), applying standard focus rings fails WCAG contrast checks.
**Action:** Always apply `ring-offset` utility classes (e.g., `focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] focus-visible:ring-white`) to ensure sufficient contrast and visibility of the keyboard focus ring against brightly colored floating elements.
