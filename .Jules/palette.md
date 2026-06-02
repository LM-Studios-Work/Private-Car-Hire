# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2024-06-02 - [Safe React Dropdown Blur Pattern] **Learning:** Attached `onBlur` to a dropdown trigger prematurelly loses focus when navigating options. **Action:** Attach `onBlur` to the parent wrapper and conditionally check `if (!e.currentTarget.contains(e.relatedTarget))` to close menu only when focus leaves the component tree entirely.
