# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.

## 2024-05-23 - Focus handling for Hover-based Dropdowns
**Learning:** Attaching an `onBlur` handler directly to the dropdown toggle button (`<button>`) breaks keyboard accessibility, as the menu instantly closes when focus moves to a menu item.
**Action:** Attach `onBlur` to the parent wrapper (`<div>`) containing both the trigger and menu items, and use `e.currentTarget.contains(e.relatedTarget)` to only close the dropdown when focus fully leaves the component tree.

## 2024-05-23 - Next.js <Link> Nested Buttons Pattern
**Learning:** Nesting a `<button>` tag inside a `<Link>` component results in invalid HTML (`<button>` inside `<a>`) which is poor for semantics and screen readers.
**Action:** Remove the nested `<button>`, and apply the button-like styling directly to the `<Link>` component using utility classes like `inline-block` or `block`.
