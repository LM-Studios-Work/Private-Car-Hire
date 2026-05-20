# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2024-05-20 - High-Contrast Focus Rings on Bright Global Widgets **Learning:** Brightly colored global widgets (like the #25D366 WhatsApp button) require specific high-contrast focus rings to ensure keyboard accessibility is clearly visible. The default focus ring may blend in with the background. **Action:** Apply `ring-offset` utility classes (e.g., `focus-visible:ring-offset-2 focus-visible:ring-offset-white`) when styling global interactive widgets over bright backgrounds to guarantee sufficient contrast.
