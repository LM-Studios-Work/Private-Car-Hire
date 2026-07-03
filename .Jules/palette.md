# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-07-03 - React Hover Dropdown Accessibility and Nesting `<button>` in Next.js `<Link>`
**Learning:**
1) In Next.js app router, wrapping a `<button>` inside `<Link>` triggers invalid HTML nesting since `<Link>` creates an `<a>`. It also hurts semantic accessibility. Instead, apply styling and interaction handlers directly to the `<Link>`.
2) For hover-based dropdowns (like the Services menu), relying solely on `onMouseEnter` / `onMouseLeave` excludes keyboard users and causes glitchy behavior on touch devices.
**Action:**
1) Refactor `<Link><button>` to `<Link className="[button-classes]">`.
2) For dropdowns, use `onFocus` alongside `onMouseEnter` to open, and `onClick` to safely support touch devices. Apply `onBlur` to the wrapper element with a check `if (!e.currentTarget.contains(e.relatedTarget))` to ensure focus leaving inner elements doesn't erroneously close the menu. Add `aria-haspopup="true"` and `aria-expanded` to the toggle for screen readers.
