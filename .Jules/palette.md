# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2024-05-18 - [Add Context to Floating Buttons] **Learning:** Floating icon-only global buttons often lack visual context on hover and discernible focus rings, compromising accessibility for keyboard users and clear intent for mouse users. **Action:** Always wrap floating action buttons (like WhatsApp widgets) in Tooltips and apply high-contrast `focus-visible` offset rings.
