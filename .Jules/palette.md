# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-23 - Floating Action Button Focus States over Bright Backgrounds **Learning:** When adding focus states (`focus-visible`) to brightly colored elements (like the #25D366 WhatsApp green), the default brand focus ring (`#A4C639` green) can blend in and fail contrast requirements. **Action:** Always pair `focus-visible:ring-*` with `focus-visible:ring-offset-*` (e.g., `ring-offset-2 ring-offset-white`) on floating elements to ensure the focus ring remains distinctly visible against any underlying background content or the button's own color.

## 2025-02-23 - Accessible CSS Tooltips **Learning:** Tooltips can be implemented entirely with Tailwind CSS using `group`, `group-hover`, and `group-focus-visible` without needing external Javascript/React dependencies, which helps keep the bundle size small and satisfies the constraint to avoid adding new UI dependencies. **Action:** Use `pointer-events-none` on the tooltip element so it doesn't interfere with the trigger element's hover/focus area.
