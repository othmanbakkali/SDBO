# Website Update Task Brief — SDBO

You are tasked with implementing the following improvements to the SDBO company website. Apply each change carefully and preserve the existing design system unless instructed otherwise.

---

## Task 1 — Responsiveness

Make the entire website fully responsive across all screen sizes (mobile, tablet, desktop).

- Audit every section and component for layout breakage on small screens.
- Fix any overflowing elements, unreadable text, or broken grid/flex layouts.
- Test at 375px, 768px, and 1280px breakpoints at minimum.

---

## Task 2 — Logo Sizing (Header & Footer)

Slightly increase the size of the logo in both the header and the footer.

- The current size feels too small; the new size should be more prominent without dominating the layout.
- Keep the aspect ratio intact — do not stretch or distort the logo.
- Adjust surrounding spacing if needed to maintain visual balance.

---

## Task 3 — Light / Dark Mode Toggle with System Preference Support

Implement a theme system that supports both light and dark modes.

- Add a toggle button (e.g., sun/moon icon) that allows the user to manually switch between light and dark mode.
- On first load, detect and apply the user's OS-level color scheme preference using `prefers-color-scheme`.
- Persist the user's manual choice (e.g., via `localStorage`) so it survives page reloads.
- Ensure all colors, backgrounds, and text remain readable in both modes.

---

## Task 4 — Partners Section — Convert to Carousel

Replace the current static partners display with an interactive carousel/slider.

- The carousel should auto-play and also support manual navigation (arrows or dots).
- Keep the design consistent with the rest of the site.
- Ensure it works correctly on both mobile and desktop.
- If a carousel library is already in the project, use it; otherwise integrate a lightweight one (e.g., Swiper.js or Embla).

---

## Task 5 — Redesign Overly Generic / AI-Looking UI

The current design looks like a generic AI-generated template — it lacks personality and feels interchangeable with thousands of other sites. Rework the visual design to feel more intentional, human, and specific to the SDBO brand.

- Identify and redesign sections that rely on clichéd layout patterns (e.g., hero with centered headline + subtitle + two buttons, generic icon grids, stock-style card rows).
- Replace overly symmetric, "too clean" layouts with more deliberate visual hierarchy and spacing choices.
- Avoid design decisions that feel like defaults: uniform padding everywhere, cookie-cutter section structures, generic gradient overlays, or hero images that look like Unsplash placeholders.
- Typography should feel considered — vary weight and size with intention, not just to fill space.
- The overall result should feel like a site designed for SDBO specifically, not a SaaS template that anyone could use.