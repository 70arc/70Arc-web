# 70Arc - Zero-G Spatial Interface

A Next.js 14 website with floating glass panes, anti-gravity physics, and momentum-based scrolling. Content exists in an infinite white void, drifting slowly upward as the user scrolls.

## Design System

- **Background**: #FAFAF9 (Warm White Void)
- **Accent Primary**: #FF4F00 (Safety Orange)
- **Accent Secondary**: #2C3E50 (Wet Plate Blue)
- **Glass**: backdrop-filter blur(40px), white transparency
- **Typography**: Instrument Serif (display), Inter (body), JetBrains Mono (tech specs)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **3D**: React Three Fiber (ferrofluid effects)
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Homepage with all Zero-G sections
│   ├── globals.css         # Design system and glass effects
│   └── layout.tsx          # Root layout with fonts and scroll
├── components/
│   ├── SmoothScroll.tsx    # Lenis wrapper
│   ├── GlassCursor.tsx     # Custom floating cursor
│   ├── GlassPane.tsx       # Reusable glass card with 3D tilt
│   ├── Compass.tsx         # Magnetic compass navigation
│   └── sections/
│       ├── HeroVector.tsx      # Entry with 3 floating panes
│       ├── Capabilities.tsx    # 5 parallax monoliths
│       ├── Atmosphere.tsx      # 12 floating photo bubbles
│       ├── Telemetry.tsx       # Rotating about monolith
│       ├── Transmission.tsx    # Glass teletype contact
│       └── ExitVector.tsx      # Safety Orange exit fade
```

## Sections

1. **Hero Vector** - Three glass panes enter at 70° trajectory: Logo, orange pill badge, tagline
2. **Capabilities** - 5 floating monoliths at different Z-depths with parallax
3. **Atmosphere** - 12 circular bubbles with hover labels
4. **Telemetry** - Rotating glass about section with ferrofluid background
5. **Transmission** - Contact form with launching sphere animation
6. **Exit Vector** - Safety Orange gradient footer

## Deployment

```bash
npm run build  # Test production build
```

Push to GitHub and import in [Vercel](https://vercel.com) for instant deployment.

## License

All rights reserved © 70Arc
