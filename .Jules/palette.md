# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-12 - Invalid Nested Anchors and Dropdown Focus
**Learning:** Next.js `<Link>` components naturally render as anchor tags. Nesting a `<button>` inside `<Link>` breaks HTML semantics (`<a><button></button></a>`) and creates redundant focus rings. Additionally, when attaching keyboard blur handlers (`onBlur`) to React elements that toggle dropdown menus, putting the handler on the trigger button prematurely closes the menu when tabbing down to the sub-items.
**Action:** When migrating "button-like" links in Next.js, always move the Tailwind class styles directly to the `className` of the `<Link>` element, enforcing layout with `inline-block` or `block`. When managing focus loss in custom dropdowns, apply the `onBlur` listener to a parent wrapper and use `!e.currentTarget.contains(e.relatedTarget)` to only close the menu when focus fully leaves the wrapper and its children.
