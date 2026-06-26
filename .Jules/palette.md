# Palette's Journal

## 2025-02-12 - Initial Setup
**Learning:** This repository lacked a `eslint.config.js` making linting impossible out of the box.
**Action:** In future projects, always check for linter configuration existence before relying on `pnpm lint`. For this session, I will rely on `pnpm build` for verification.
## 2025-02-12 - Toggle Button UX
**Learning:** For React dropdown triggers supporting both hover/focus and touch interactions, avoid using a state toggle in the `onClick` handler (e.g., `setState(!state)`) if an `onFocus` handler also opens the menu (`setState(true)`). A tap event on touch devices may fire both consecutively, immediately closing the menu. Use `onClick={() => setState(!state)}` only if `onFocus` doesn't interfere, but `onClick={() => setState(true)}` or `onClick={() => setState(!state)}` with careful event handling is needed to avoid immediate closure. In this specific case, `setState(!state)` on the trigger might cause issues if a tap opens it via focus, then closes it via click immediately. A better approach is to simply open it via click/focus and let the `onBlur` handle the closing, or use a proper accessible dropdown primitive like Radix UI.
**Action:** Be mindful of overlapping `onClick` and `onFocus` handlers on dropdown triggers, especially for touch targets.
