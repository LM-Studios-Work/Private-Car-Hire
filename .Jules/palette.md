# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2025-02-12 - Next.js Link & ARIA Pattern in Navbars
**Learning:** The project's navigation components (like `Navbar.tsx`) frequently nest `<button>` elements inside Next.js `<Link>` components, which is invalid semantic HTML in Next.js 13+. They also lack proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`) for mobile menu toggles and dropdowns.
**Action:** Always apply Tailwind styling directly to the `<Link>` element instead of a nested `<button>`, and ensure all interactive mobile and dropdown toggles have explicit `aria-` state attributes.
