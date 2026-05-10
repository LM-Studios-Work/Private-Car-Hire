# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-05-10 - [High-Contrast Focus Rings] **Learning:** When adding focus rings to brightly colored components layered over non-white backgrounds (e.g. WhatsApp button), a standard focus ring might blend in or clash. **Action:** Apply `focus-visible:ring-offset-white` (along with `ring-offset-2`) to create a clear visual boundary between the colored component and the focus ring, ensuring the focus state is highly visible and accessible regardless of the background.
