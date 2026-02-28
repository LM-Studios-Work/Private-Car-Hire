# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Missing Accessible Names on Interactive Elements
**Learning:** Found multiple instances (e.g., Mobile menu toggles, floating action buttons) where icon-only interactive elements lacked `aria-label` attributes and visible keyboard focus styles (`focus-visible`).
**Action:** Always verify that interactive elements with only icons receive proper accessible names and that standard outline/ring classes are added to ensure clear visibility for keyboard navigators.
