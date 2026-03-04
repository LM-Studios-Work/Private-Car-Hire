# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-23 - Forms relying on Placeholders
**Learning:** This app heavily uses placeholders as visual labels for inputs in forms (like the booking form) which causes accessibility issues as placeholders disappear on typing and are often skipped by screen readers.
**Action:** When working on forms in this app, ensure `aria-label` attributes are added explicitly to `<Input>`, `<Textarea>`, and `<SelectTrigger>` components if visible `<label>` tags are missing, in order to maintain a clean UI without sacrificing a11y.
