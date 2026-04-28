# Portfolio Design Specification

## 1. Sitemap Structure

```
/ (Home/Landing)
├── #hero (Hero Section - Anchor)
├── #about (About Me - Anchor)
├── #case-studies (Case Studies - Anchor)
│   └── /case-studies/multipay (Individual Case Study - Future)
│   └── /case-studies/kasirku (Individual Case Study - Future)
│   └── /case-studies/tap-on-bus (Individual Case Study - Future)
├── #tech-stack (Tech Stack - Anchor)
├── #contact (Contact - Anchor)
└── /resume (Resume PDF - External Link)
```

**Notes:**
- Single-page scrollable layout with smooth anchor navigation
- Future expansion: Individual case study pages with deep-dive architectural diagrams

---

## 2. Wireframe Descriptions

### 2.1 Hero Section

**Layout:** Full viewport height (100vh), centered content

```
┌─────────────────────────────────────────┐
│                                         │
│     ○ ○ ○       [Mini decorative      │
│    ○ ○ ○       dots or code bits]      │
│     ○ ○ ○                              │
│                                         │
│         Hi, I'm Wahyudi                │
│                                         │
│    AI Mastery in Software              │
│    Developer & Systems                 │
│          Architect                     │
│                                         │
│  ───────────────────────               │
│                                         │
│  I build robust digital ecosystems,  │
│  scalable backends, and high-         │
│  performance infrastructure           │
│           from the ground up.         │
│                                         │
│     [ View My Work ]  [ Contact Me ]  │
│                                         │
│               ↓                        │
│          (scroll indicator)            │
└─────────────────────────────────────────┘
```

**Design Specs:**
- Display text in large mono font (24px-32px for main tagline)
- Two CTAs: Primary (filled), Secondary (ghost/outline)
- Animated scroll indicator (pulsing chevron or mouse icon)
- Subtle animated background (grid lines or binary rain)

---

### 2.2 About Me Section

**Layout:** Two-column, offset grid (60/40 split)

```
┌─────────────────────────────────────────────────┐
│  ABOUT                                          │
│  ──────────────                                 │
│                                                 │
│  "I am a developer and system administrator     │
│  passionate about creating seamless digital    │
│  experiences supported by unshakeable         │
│  infrastructure..."                           │
│                                                 │
│  [Profile Image - Circular or Brutalist]     │
│        ······                                 │
│        ·                                     │
│                                                 │
│  At PT. Multidaya Dinamika, I have had the    │
│  privilege of architecting and building out   │
│  the company's comprehensive product lineup. │
│  My expertise spans across modern             │
│  programming languages, complex database     │
│  management, and enterprise-grade            │
│  networking and virtualization.               │
└─────────────────────────────────────────────────┘
```

**Design Specs:**
- Quote/accent paragraph in larger italic/serif font
- Monospace font for technical details
- Keep it concise (3-4 paragraphs max)

---

### 2.3 Case Studies Section

**Layout:** Three-column masonry or horizontal scroll

```
┌─────────────────────────────────────────────────┐
│  CASE STUDIES                                    │
│  ──────────────                                  │
│                                                 │
│  ┌─────────────────┐ ┌─────────────────┐        │
│  │                │ │                │        │
│  │  [DIAGRAM      │ │  [DIAGRAM      │        │
│  │   PREVIEW]     │ │   PREVIEW]     │        │
│  │                │ │                │        │
│  └─────────────────┘ └─────────────────┘        │
│                                                 │
│  Fintech & POS        Smart Mobility          │
│  ──────────────────  ────────────────────        │
│                                                 │
│  Multipay              Tap On Bus              │
│  Kasirku / Kasirku     Mobile Reader           │
│  Prime                Parkour                 │
│                                                 │
│  PostgreSQL            Real-time Transit      │
│  High Availability     Processing             │
│                                                 │
│     [ View Case Study → ]                     │
└─────────────────────────────────────────────────┘
```

**Design Specs:**
- Each card features:
  - **Mini wireframe/diagram** (SVG or CSS-drawn architecture)
  - **Product name** (bold)
  - **Sub-products** (tag list)
  - **Key metrics** (bullet points)
  - **Tech tags** (pill badges)
- Cards hover: slight elevation, diagram animates
- "View More" expands to full case study with architectural diagrams

---

### 2.4 Tech Stack Section

**Layout:** Categorized grid (4-col desktop, 2-col tablet, 1-col mobile)

```
┌─────────────────────────────────────────────────┐
│  TECH STACK                                      │
│  ────────────                                   │
│                                                 │
│  LANGUAGES     BACKEND         INFRASTRUCTURE   │
│  ─────────    ────────       ────────────     │
│  ┌────────┐  ┌──────────┐  ┌─────────────┐   │
│  │   Go   │  │ Laravel  │  │  Proxmox    │   │
│  │  2023  │  │   REST    │  │   Docker    │   │
│  └────────┘  └──────────┘  └─────────────┘   │
│  ┌────────┐  ┌──────────┐  ┌─────────────┐   │
│  │  PHP   │  │   REST    │  │   Linux     │   │
│  │  2019  │  │   APIs    │  │  (Ubuntu,   │   │
│  └────────┘  └──────────┘  │  Debian,    │   │
│  ┌──���─��───┐  DATABASES      │  CentOS)     │   │
│  │ Python │  ─────────      └─────────────┘   │
│  │  2020  │  ┌──────────┐  ┌─────────────┐   │
│  └────────┘  │PostgreSQL │  │  MikroTik   │   │
│  ┌────────┐  │  MySQL   │  │  (NAT,      │   │
│  │  Dart   │  └──────────┘  │ Firewall)   │   │
│  └────────┘                 └─────────────┘   │
│  + JavaScript, Zig                            │
└─────────────────────────────────────────────────┘
```

**Design Specs:**
- Each tech item: Icon + Name + Year started (optional)
- Categories:
  - **Languages** (mono font)
  - **Backend & Frameworks**
  - **Infrastructure & Cloud**
  - **Networking**
  - **Databases**
- Grid: 4 columns on desktop, responsive down to 1 column on mobile

---

### 2.5 Contact Section

**Layout:** Minimal centered block

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  LET'S CONNECT                                  │
│  ────────────                                   │
│                                                 │
│  Interested in collaborating or want to      │
│  learn more about my architectural approach?   │
│                                                 │
│          fitrah.wahyudi.imam@gmail.com          │
│                                                 │
│     [LinkedIn]        [GitHub]        [CV]      │
│                                                 │
│  ───────────────────────                        │
│                                                 │
│      © 2024 Wahyudi. Built with care.           │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 3. Color Palette

### Primary Dark Mode Palette

| Role | Color | Hex |
|------|-------|-----|
| Background (Primary) | Off-black | `#0A0A0B` |
| Background (Secondary) | Dark charcoal | `#141416` |
| Background (Tertiary) | Elevated dark | `#1C1C1F` |
| Text (Primary) | Off-white | `#F4F4F5` |
| Text (Secondary) | Muted gray | `#A1A1AA` |
| Text (Tertiary) | Dim gray | `#71717A` |
| Accent (Primary) | Electric cyan | `#22D3EE` |
| Accent (Secondary) | Neon green | `#4ADE80` |
| Accent (Tertiary) | Warm orange | `#FB923C` |
| Border | Subtle gray | `#27272A` |

### Use Cases

| Element | Color |
|---------|-------|
| Page background | `#0A0A0B` |
| Card background | `#141416` |
| Code/tech names | `#22D3EE` (cyan) |
| Links/CTA hover | `#4ADE80` (green) |
| Active states | `#FB923C` (orange) |
| Borders | `#27272A` |

---

## 4. Typography

### Font Selection

| Role | Font | Weight | Size (Desktop) |
|------|------|--------|----------------|
| Headings (H1) | **JetBrains Mono** | 700 | 48px-64px |
| Headings (H2) | **JetBrains Mono** | 600 | 32px-40px |
| Headings (H3) | **JetBrains Mono** | 500 | 24px |
| Body | **Inter** or **Geist** | 400 | 16px-18px |
| Code/Tech | **JetBrains Mono** | 400 | 14px-16px |
| Accents | **JetBrains Mono** | 400 | 12px-14px |

### Font Sources

- **JetBrains Mono** (Google Fonts, FREE): https://fonts.google.com/specimen/JetBrains+Mono
- **Inter** (Google Fonts, FREE): https://fonts.google.com/specimen/Inter
- **Geist** (Vercel, FREE): https://vercel.com/font

### Usage Guidelines

- **Hero tagline**: JetBrains Mono, 700, uppercase, letter-spacing: -0.02em
- **Section headings**: JetBrains Mono, 600, with decorative line prefix
- **Body text**: Inter/Geist, clean and readable
- **Tech stack labels**: JetBrains Mono, mono-spaced for code aesthetic
- **Code snippets or years**: JetBrains Mono, accent color

---

## 5. Component States & Interactions

### Buttons
- **Default**: Transparent background, accent border
- **Hover**: Accent fill with dark text
- **Active**: Slight scale down (0.98)
- **Focus**: Visible focus ring (2px cyan outline)

### Cards (Case Studies)
- **Default**: Subtle border, dark background
- **Hover**: Border brightens to accent, diagram animates
- **Active**: Slight lift (translateY -4px)

### Navigation
- **Sticky header**: Blur backdrop on scroll
- **Active section**: Accent color underline

---

## 6. Responsive Breakpoints

| Breakpoint | Width | Grid Columns |
|------------|-------|--------------|
| Mobile | < 640px | 1 column |
| Tablet | 640px - 1024px | 2 columns |
| Desktop | > 1024px | 3-4 columns |

---

## 7. Visual Effects Summary

- **Background**: Subtle dot grid pattern (`#22D3EE` at 3% opacity)
- **Cards**: 1px border, minimal shadow on hover
- **Transitions**: 200ms ease-out for all interactions
- **Micro-animations**:
  - Typing effect on hero tagline
  - Staggered fade-in for case study cards
  - Scroll-triggered slide-up for sections
- **Dark mode default**: No toggle needed, dark-first design

---

## 8. Implementation Notes

1. **Framework**: Next.js or pure HTML/CSS with minimal JS
2. **Animations**: CSS transitions + Intersection Observer for scroll animations
3. **Diagrams**: Mermaid.js or custom SVG for architecture diagrams
4. **Icons**: Lucide or Phosphor icons (light/thin stroke style)
5. **Performance**: Static generation, minimal JS, optimized fonts