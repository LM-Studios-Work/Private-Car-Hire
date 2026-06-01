# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-12 - Invalid Button Nesting in Next.js Link
**Learning:** Found `<button>` tags improperly nested inside Next.js `<Link>` components for CTAs. In Next.js App Router, `<Link>` inherently renders an `<a>` tag, meaning nesting a `<button>` inside results in invalid HTML (interactive content inside interactive content), which can break hydration and cause accessibility issues.
**Action:** When designing button-like links in Next.js, always apply styling directly to the `<Link>` component using `inline-block` or `block` layout classes to simulate button appearance without invalid HTML nesting.
