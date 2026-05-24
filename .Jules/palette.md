## 2024-05-24 - Dropdown Menu Keyboard Accessibility
**Learning:** Hover-based dropdown menus using standard `onMouseEnter`/`onMouseLeave` are not natively accessible via keyboard, trapping users who tab through links. Attaching `onBlur` directly to a toggle button prematurely closes the dropdown as focus moves to the inner links.
**Action:** Always wrap hover-based dropdowns with `onFocus` (to open) and attach `onBlur` (with `!e.currentTarget.contains(e.relatedTarget)` check) on the parent container to keep the menu open while keyboard users navigate its children. Focusable dropdown toggle triggers (`button`) should also clearly indicate keyboard interactivity with `focus-visible:ring-2 focus-visible:ring-offset-2`.

## 2024-05-24 - Invalid Nested Elements
**Learning:** Next.js `<Link>` components render as `<a>` tags. Nesting a `<button>` inside them leads to invalid HTML and accessibility issues, as interactive elements shouldn't be nested.
**Action:** Always apply interactive button styling (including `inline-block` or `block`) directly to the `<Link>` element instead of using an internal `<button>` tag when a link needs to look like a call-to-action button.
