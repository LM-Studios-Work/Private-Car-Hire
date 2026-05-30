# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2024-05-30 - Mouse user toggle fix for dropdowns **Learning:** Adding an onClick handler to toggle a dropdown that already opens on hover creates a frustrating side effect for mouse users (clicking immediately closes it). **Action:** Always check the previous state (e.g., `if (!isOpen) setIsOpen(true)`) or remove the click toggle entirely if hover covers mouse users and focus covers keyboard users.
