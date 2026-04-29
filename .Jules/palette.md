# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2026-04-29 - Navbar Keyboard Navigation and Screen Reader Parity
**Learning:** Dropdowns functioning natively on hover often lack true keyboard interactivity since 'focus' and 'hover' are distinct states. Relying solely on hover for  submenus completely isolates keyboard and screen reader users from accessing nested links.
**Action:** When adding hover-based interactions on structural components like Navbars, explicitly ensure an  toggle pattern, alongside proper  attributes, is tethered to the triggering element to grant simultaneous keyboard accessibility and screen-reader awareness.
## 2025-02-12 - Navbar Keyboard Navigation and Screen Reader Parity
**Learning:** Dropdowns functioning natively on hover often lack true keyboard interactivity since 'focus' and 'hover' are distinct states. Relying solely on hover for `Navbar` submenus completely isolates keyboard and screen reader users from accessing nested links.
**Action:** When adding hover-based interactions on structural components like Navbars, explicitly ensure an `onClick` toggle pattern, alongside proper `aria-expanded` attributes, is tethered to the triggering element to grant simultaneous keyboard accessibility and screen-reader awareness.
