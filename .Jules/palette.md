# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-04-25 - Navbar Accessibility
**Learning:** Adding an onClick handler to an element that previously only used mouse events (onMouseEnter/Leave) on its parent container enables keyboard interaction (Enter/Space) and makes the element properly actionable for screen readers. Using `focus-visible:ring-2 focus-visible:ring-[#A4C639]` is the preferred way to add a brand-colored focus ring that doesn't disrupt mouse users.
**Action:** When auditing dropdown menus, ensure that triggers have both mouse hover events on their containers *and* click events on the trigger elements themselves. Always pair interactive elements with `focus-visible` utility classes using the primary brand color (`#A4C639`).
