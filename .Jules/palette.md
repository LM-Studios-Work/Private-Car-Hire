# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-12 - Layered Brand Focus Color Contrast
**Learning:** When applying focus rings using the primary brand focus color (`#A4C639`) on interactive UI elements layered over bright or similarly colored backgrounds (like the `#25D366` WhatsApp background), the focus ring can suffer from poor visibility and insufficient contrast.
**Action:** Always apply `ring-offset` utility classes (e.g., `focus-visible:ring-offset-2`) in conjunction with `focus-visible:ring` to maintain sufficient keyboard focus ring contrast and accessibility.
