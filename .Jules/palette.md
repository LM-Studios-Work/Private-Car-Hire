# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-13 - Form Accessibility Pattern
**Learning:** This app's forms rely heavily on placeholder text instead of labels, which is a significant accessibility issue for screen readers. They also lack clear `focus-visible` styles for keyboard navigation.
**Action:** When working on any form in this codebase, immediately audit for missing `aria-label`s on inputs/selects and add `focus-visible:ring-2 focus-visible:ring-[#A4C639]` to improve keyboard accessibility. Also ensure icon-only buttons (like floating WhatsApp buttons) have proper `aria-label` attributes and hide the SVG itself from screen readers using `aria-hidden="true"`.
