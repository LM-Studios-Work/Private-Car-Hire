# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2024-04-26 - Keyboard Focus on Contrast-Heavy Backgrounds
**Learning:** Adding standard `focus-visible:ring-2 focus-visible:ring-[#A4C639]` to elements layered over bright backgrounds (like a green WhatsApp button) results in poor keyboard focus visibility due to insufficient contrast.
**Action:** Always append `ring-offset` utilities (e.g., `focus-visible:ring-offset-2 focus-visible:ring-offset-white`) when applying focus rings over visually complex or matching colored backgrounds to ensure the focus state remains accessible and clearly distinguishable.
