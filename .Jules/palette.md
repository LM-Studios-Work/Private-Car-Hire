# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-12 - Next.js Link Components and Nested Buttons\n**Learning:** In Next.js App Router (v13+), `<Link>` components natively render as `<a>` tags without needing the `legacyBehavior` prop or nested `<a>`/`<button>` elements. Nesting a `<button>` inside a `<Link>` is invalid HTML and causes dual-focus issues for keyboard users. Applying `pointer-events-none` to the inner button to fix focus breaks hover interactions.\n**Action:** Always apply interactive styles (like hover, focus rings, padding, and background colors) directly to the `<Link>` component and treat it as the singular interactive element, utilizing `block` or `inline-block` layout properties to mimic button appearance.
