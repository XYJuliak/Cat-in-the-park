# Cat in the Park Tarot — Manual QA Checklist

Use this checklist to manually verify the current end-to-end flow:

`homepage → spread selection → draw cards → reading result`

## 0) Setup
- Run the app with `npm run dev`.
- Open `http://localhost:3000`.

---

## 1) Homepage (`/`)
Verify:
- The page loads with the mystical visual style (dark navy background, red/gold glow accents).
- The title **Cat in the Park Tarot** is visible.
- The short description text appears under the title.
- Two entry buttons are present:
  - **I already drew cards**
  - **Draw cards online**
- Hover/focus effects are visible on buttons.
- Mobile layout remains readable and spacing is not broken.

Expected navigation:
- Clicking **Draw cards online** goes to `/draw`.

---

## 2) Spread Selection (`/draw`)
Verify:
- The page displays three spread options:
  1. **One-card reading**
  2. **Three-card reading**
  3. **Celtic Cross reading**
- Each spread card includes:
  - spread name
  - number of cards
  - best-use scenario
  - short description
- Hover/focus effects appear on spread cards.
- Layout is responsive (single column on small screens, multi-column on larger screens).

Expected navigation:
- One-card card links to `/draw/one-card`
- Three-card card links to `/draw/three-card`
- Celtic Cross card links to `/draw/celtic-cross`

---

## 3) Draw Page (`/draw/[spread]`)
Run this section for each spread route:
- `/draw/one-card`
- `/draw/three-card`
- `/draw/celtic-cross`

Verify:
- The selected spread name is shown at the top.
- A question textarea is present and editable.
- The draw button label matches spread count:
  - one-card: **Draw 1 card**
  - three-card: **Draw 3 cards**
  - celtic-cross: **Draw 10 cards**
- Clicking draw reveals the correct number of cards.
- Each revealed card shows:
  - spread position label
  - card name
  - orientation (**upright** or **reversed**)
- Before drawing, **Continue to reading result** is visually disabled.
- After drawing, **Continue to reading result** becomes active.

---

## 4) Reading Result (`/reading/result`)
Navigate via the Continue button from a draw page.

Verify report content:
- The page renders as a single polished report view.
- **Selected spread** matches the previous draw page.
- **Deck** placeholder is shown as **Mystic Arcana (mock deck)**.
- **Your question** matches what was entered on draw page.
- Drawn cards are listed and each card shows:
  - card name
  - orientation
  - spread position label
  - **Guidebook meaning (mock)** section
  - **Contextual interpretation (mock)** section
- A **Final advice** section is present with one sentence.
- **Start a new reading** button is visible and links back to `/draw`.

---

## 5) Regression / Edge Checks
- Directly open `/reading/result` without query params and confirm the page still renders with fallback mock report data.
- Confirm no runtime crash when refreshing `/draw/[spread]` or `/reading/result`.
- Confirm styling remains consistent across the full flow (mystical navy/red/gold theme).
