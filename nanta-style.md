# 🎨 Full Design & Animation Prompt

## Design System Reference: Nanta Tech Style

---

## 🎨 COLOR PALETTE (Replace with your logo colors)

**From Logo — Nanta uses:**
- Brand Primary: `#D6112A` (Crimson Red) → **Replace with your logo's primary color**
- Brand Primary Hover: `#B80E22` → **Your color darkened ~15%**
- Brand Soft/Tint: `#FEE7E9` (Light blush) → **Your color at ~8% opacity on white**
- Brand Ink (deep): `#7A0816` → **Your color darkened ~50%**

**Neutral/Surface (keep these):**
- Background: `#F4F2ED` (warm off-white/linen)
- Background Alt: `#EDEBE4`
- Surface (cards): `#FFFFFF`
- Surface Sunken: `#E8E5DD`
- Theater Dark BG: `#08080A` (near-black, for dark sections)
- Theater Dark 2: `#101013`
- Dark Section Line: `#1F1F22`

**Text:**
- Ink Primary: `#0A0A0B`
- Ink Secondary: `#2A2A2E`
- Ink Tertiary: `#5A5A5F`
- Ink Muted: `#9A9A9F`
- Ink on Dark: `#F4F2ED`

**Dividers:**
- Line: `#DDDAD0`
- Line Soft: `#E8E5DC`
- Line Strong: `#C9C4B5`

---

## 🔤 TYPOGRAPHY

**Three-font system:**

| Role | Font | Usage |
|---|---|---|
| Display / Headlines | **Bricolage Grotesque** (Google Fonts) | Hero headings, section titles |
| Serif Accent | **Instrument Serif** (Google Fonts) | Italic accent words within headlines |
| Body / UI | **Geist** (Vercel) | Body copy, nav, buttons, labels |
| Mono | **Geist Mono** | Tags, specs, card labels, code-style labels |

**Type Scale (fluid/clamp):**
- `xs`: 0.75rem
- `sm`: 0.875rem
- `base`: 1rem
- `md`: 1.125rem
- `lg`: `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)`
- `xl`: `clamp(1.5rem, 1.3rem + 1vw, 2rem)`
- `2xl`: `clamp(2rem, 1.6rem + 2vw, 3rem)`
- `3xl`: `clamp(3rem, 2.2rem + 4vw, 5rem)`
- `4xl`: `clamp(4rem, 3rem + 5vw, 7rem)` (hero)

**Key typography rules:**
- Mix Bricolage Grotesque (sans) and Instrument Serif (italic) **within the same headline** for editorial contrast
- Use ALL-CAPS Geist Mono in `letter-spacing: 0.1em` for labels/tags/captions
- Headings are bold-weight Bricolage; accent italic words use Instrument Serif
- Hero text has a red period `.` at the end as a brand mark

---

## 📐 LAYOUT & SPACING

- Max content width: `~1200px`, centered with horizontal padding
- Grid: CSS Grid 12-column, sections alternate full-bleed and contained
- Section padding: `clamp(80px, 10vw, 160px)` top/bottom
- Corner bracket decoration: thin `1px` L-shaped corner marks in the 4 corners of full-bleed sections (like a camera viewfinder)
- **Sticky navbar**: white/linen background, blur on scroll, `height: 64px`
- Logo: inline with wordmark (icon left, bold sans wordmark right)

---

## 🃏 UI COMPONENTS

### Navigation
- Transparent → frosted glass on scroll
- Active link has a red underline `2px` with brand color
- Dropdown menus with subtle shadow and smooth slide-down
- Mobile: full-screen overlay menu

### Hero Section
- **Left column**: editorial multi-line headline mixing serif italic accent word with sans display font
- **Right column**: floating product card/image with subtle 3D tilt on hover (CSS perspective transform)
- Small label above headline: `— TAGLINE · DETAIL · LOCATION` in Geist Mono uppercase, brand red
- CTA button: pill-shaped, solid black fill, white text, arrow `→` icon, hover lifts with shadow
- Slide counter: `01 / 04  BRAND NAME` in Geist Mono uppercase bottom-left
- Prev/Next nav: circular black buttons bottom-right

### Marquee / Logo Ticker
- Horizontal auto-scrolling logos row — infinite loop, constant speed (~30s)
- Logo + all-caps name beneath, monochrome grayscale logos
- Background: linen `#F4F2ED`

### Data/Stat Cards (Dark Section)
- Full-bleed dark background (`#08080A`)
- Multiple floating cards in a staggered 3D perspective grid
- Cards have: thin border `#1F1F22`, corner bracket marks, product label (mono caps), large number stat, red dot `●` accent, spec tags in mono caps
- Cards alternate between dark (dark bg, white text) and light (white bg, dark text)
- Central featured card is larger and centered; flanking cards partially visible

### Capabilities / Services List
- Accordion-style numbered list with left red vertical line
- Each row: `— 01` number tag (mono), large heading (display font), description, tag pills, arrow button
- Left border of section has a brand-red `3px` left border line
- Tags: rounded pill, outlined style, uppercase mono font, small size

### Stats Counter Section
- 3–4 stat cards in a horizontal row
- Light cards, large number + label in mono caps
- Numbers animate count-up on scroll into view

### Product Cards (Catalog Grid)
- 2-col grid on desktop, 1-col on mobile
- Card: white background, rounded `16px–20px` corners, product image centered, category tag (mono caps), model number, heading (display font), short description, spec tags
- On hover: subtle scale-up `scale(1.02)` + shadow deepens
- "Explore →" CTA in brand red

### Case Study / Feature Block
- Full-width split layout: left = large editorial image (real stock photo), right = dark panel with white headline + italic serif accent word + body text + stats
- Stats shown as large numbers with `— description` labels in mono
- Image has subtle parallax on scroll

### Footer
- Dark linen background (`#F4F2ED`)
- 4-column grid: Logo + tagline + social icons | Products | Company | Contact
- Social icons: circle outline buttons
- Bottom bar: copyright left, legal links center, "Made in [City]" right — all mono caps

---

## ✨ ANIMATIONS & INTERACTIONS

### Page Load
- Body fades in with `opacity: 0 → 1`, `transition: 0.2s ease-in`
- Navbar slides down from top: `translateY(-100%) → translateY(0)` with `0.4s ease-out`

### Scroll-Triggered Reveals (use Intersection Observer)
- Elements enter with: `translateY(40px) opacity:0 → translateY(0) opacity:1`
- Duration: `0.6s`, easing: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out)
- Stagger delay between sibling elements: `80ms`
- Headlines: words or lines split and animate in individually (use GSAP SplitText or CSS clip-path per word)

### Hero Floating Card
- 3D tilt on mouse move: CSS `perspective: 1400px`, `rotateX` and `rotateY` ±6°
- Ease: `cubic-bezier(0.18, 0.9, 0.32, 1.15)` (tilt ease with slight overshoot)
- Returns to center on mouse leave with `transition: 0.5s`
- Subtle floating idle animation: `translateY(0 → -8px → 0)` loop, `3s ease-in-out infinite`

### Dark Data Section (Floating Cards)
- Cards appear at scroll with staggered perspective transforms
- Each card has a subtle parallax scroll rate (different `translateY` speeds per card)
- Cards rotate slightly in 3D space as you scroll (15–20° initial tilt normalizing to 0°)

### Stats Count-Up
- Numbers count up from 0 when section enters viewport
- Duration: `1.2s`, easing: `easeOutExpo`

### Marquee (Logo Ticker)
- `animation: marquee 30s linear infinite`
- `@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`
- Duplicate logos for seamless loop
- Pause on hover

### Buttons / CTAs
- Hover: background darkens, subtle `translateY(-1px)` lift, box-shadow `0 4px 12px rgba(0,0,0,0.15)`
- Active press: `translateY(0)`, shadow reduces
- Arrow icon translates `4px` right on hover

### Navigation Links
- Active state: brand-red 2px underline with `scaleX(0→1)` animation from left
- Hover: text transitions to brand color, `0.15s ease`

### Product Cards
- Hover: `transform: translateY(-4px) scale(1.01)`, `box-shadow` increases
- Image subtly scales `scale(1.05)` inside card
- "Explore" text slides right by 4px

### Cursor (Optional Premium Touch)
- Custom cursor: small red dot that follows mouse with slight lag (lerp/lerp interpolation)
- Enlarges to `40px` ghost circle when hovering interactive elements

---

## 🖼️ STOCK IMAGE GUIDELINES

Use these types of images (all from Unsplash/Pexels with proper licensing):

- **Hero product mockup**: Clean product on neutral/gradient background, slightly floating with drop shadow
- **Conference/boardroom**: Modern boardroom with large display screens, clean architecture
  - Search: `"modern boardroom AV" / "conference room LED display"`
- **Dark abstract tech**: Bokeh tech backgrounds for dark sections
  - Search: `"dark technology abstract" / "circuit board close-up dark"`
- **Robotics/automation**: Service robots in hospitality or retail settings
  - Search: `"service robot hotel" / "humanoid robot office"`
- **Case study image**: Clean interior architecture with mounted display
  - Search: `"mounted TV wall modern interior" / "hotel room technology"`

**Image treatment:**
- Product images: isolated on white or light gradient, no background
- Lifestyle images: slightly desaturated `saturate(0.85)` for editorial feel
- All images have `border-radius: 16px` when in cards
- Featured images use `object-fit: cover` in a fixed-ratio container

---

## 🏗️ RECOMMENDED TECH STACK

- **Framework**: Next.js (App Router) or Astro
- **Styling**: Tailwind CSS + CSS custom properties (as above)
- **Animations**: GSAP (ScrollTrigger + SplitText) for headlines; Framer Motion for React component transitions
- **Fonts**: Google Fonts (Bricolage Grotesque, Instrument Serif) + Vercel Geist CDN
- **Icons**: Lucide React or custom SVGs

---

## 🧩 SECTION ORDER (Homepage)

1. **Sticky Navbar** — Logo + nav links + active underline
2. **Hero** — Split layout, editorial headline, floating product card, slide counter
3. **Marquee** — Client logo ticker on linen
4. **Dark Showcase** — Full-bleed black, floating stat/product cards in 3D grid
5. **Capabilities List** — Accordion numbered list with red left border
6. **Stats Row** — Count-up numbers on light background
7. **Product Catalog Grid** — 2-col cards with hover effects
8. **Case Study Block** — Split image + dark panel with editorial type
9. **Footer** — 4-col grid + bottom bar