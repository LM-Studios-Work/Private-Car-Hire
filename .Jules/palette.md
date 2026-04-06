# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Ensure focus ring contrast on bright backgrounds
**Learning:** Using the primary brand color (`#A4C639`) for focus rings layered over bright or similarly colored backgrounds (like the `#25D366` WhatsApp green) can result in low contrast and poor visibility for keyboard users.
**Action:** Always apply `ring-offset` utility classes (e.g., `focus-visible:ring-offset-2`) when adding focus rings to elements with bright background colors to ensure the focus state is clearly visible.
