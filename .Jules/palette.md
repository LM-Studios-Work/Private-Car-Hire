# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-04-21 - Floating widgets need ARIA and contrast-aware focus states **Learning:** Floating global widgets (like the WhatsApp floating button) frequently lack proper accessible names (`aria-label`) and focus states. Because these widgets are often placed over varied backgrounds and have distinct, non-brand colors (e.g., WhatsApp green), standard focus rings might lack contrast. **Action:** Always add an explicit `aria-label` to global floating interactive elements and ensure their `focus-visible` states include `ring-offset` utilities (like `focus-visible:ring-offset-2 focus-visible:ring-offset-white`) alongside the primary brand color (`#A4C639`) for guaranteed visibility.
