# Regression Checklist

Use this checklist after any refactor to confirm UI/UX behavior is unchanged.

## 1) Scene Navigation
- [ ] Mouse wheel scroll transitions scenes in the expected order.
- [ ] Scene transition delay behavior remains intact where applicable.
- [ ] Right arrow moves to next scene and left arrow moves to previous scene.
- [ ] On first scene, previous arrow visibility behavior is correct.
- [ ] On last scene, next arrow visibility behavior is correct.
- [ ] Touch swipe up/down transitions scenes correctly on mobile/tablet.
- [ ] Scene-specific internal scroll areas do not accidentally force scene transitions.

## 2) Menu Open/Close Behavior
- [ ] Brand menu opens on click/tap for the active scene.
- [ ] Menu closes when selecting a menu item.
- [ ] Menu closes when clicking/tapping outside the menu.
- [ ] Menu closes on `Esc` key.
- [ ] Anchor menu items scroll to the correct section in the current scene.
- [ ] Cross-scene menu links transition to the right scene, then scroll to the right section.

## 3) Modals
- [ ] Contact modal opens from all entry points (global/footer buttons).
- [ ] Contact modal closes via close button, backdrop click, and `Esc` key.
- [ ] Interview modal opens correctly from interview media trigger.
- [ ] Interview modal closes via close button, backdrop click, and `Esc` key.
- [ ] Fellows modal opens/closes correctly (button, backdrop, `Esc`).
- [ ] Foundation modal opens/closes correctly (button, backdrop, `Esc`).
- [ ] Modal focus/interaction does not break background scene state.

## 4) Carousels and Auto-Rotation
- [ ] Wocstar Universe showcase auto-rotates and manual prev/next controls work.
- [ ] Academy Alumni carousel auto-rotates and manual prev/next controls work.
- [ ] Fund portfolio carousel auto-rotates and manual prev/next controls work.
- [ ] Capital interview rotation timing works and switching does not break links.
- [ ] Academy curriculum Founder/Investor switching works (manual button + timed auto-switch).
- [ ] Auto-rotation pauses/resumes correctly on hover where implemented.

## 5) Profile Scroll Behavior
- [ ] Profile scene text area scrolls independently when content exceeds available height.
- [ ] Profile scene does not transition away while user is actively scrolling inside profile copy.
- [ ] Scene transition from profile happens only at top/bottom boundaries as intended.
- [ ] Read Bio entry points land on profile scene reliably.

## 6) Quick Smoke Validation
- [ ] All scene hero videos still autoplay muted loop (where configured).
- [ ] Footer actions/buttons still function and route correctly.
- [ ] No console errors during normal navigation flow.
