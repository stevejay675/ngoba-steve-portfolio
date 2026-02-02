# Copilot Instructions for ngoba-steve-portfolio

## Architecture Overview

This is a **Next.js 16 portfolio website** using React 19 with Tailwind CSS, displaying Ngoba Steve Jones' professional work and skills. The app is a single-page portfolio with smooth scrolling between sections (Home, Projects, About, Skills, Contact). No backend API or database—purely frontend with static content and client-side interactions.

### Component Structure
- **Single-page layout** (`src/app/page.js`): Routes all sections through anchor links (`#home`, `#about`, `#projects`, `#skills`, `#contact`)
- **Feature components** in `src/components/`: Each major section (Hero, Projects, Skills, About, ContactSection, Navbar) is a separate JSX component
- **Styling**: Tailwind CSS with custom colors (primary accent: `#FFAF3F` orange)
- **Icons**: `lucide-react` (social, UI icons) + `react-icons` (tech skill icons)

## Critical Dependencies & Patterns

### Animation & Motion
- **framer-motion**: Used in `Navbar.jsx` with `motion.div`, `AnimatePresence` for hamburger menu and scroll-triggered animations
- **react-intersection-observer**: Installed but check if actually used for scroll-based triggers
- **floating-ui**: Advanced tooltip positioning in `Projects.jsx` using `useFloating` hook with multiple middleware (offset, flip, shift, arrow)

### Styling Conventions
- Tailwind utility-first approach with responsive prefixes (`md:`, `sm:`, `lg:`)
- Custom accent color `#FFAF3F` (orange) used in buttons, borders, text highlights
- Reusable layout containers: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (padding pattern)
- Section wrappers use full-width backgrounds with centered content

### Client Components
- Use `'use client'` directive at top of components with interactivity (Navbar, Projects, Skills)
- State management via `useState` hooks for UI toggles (menu, tooltips, mobile overlays)
- Effects for scroll listeners and event cleanup patterns

## Key Development Workflows

### Running the Project
```bash
npm run dev          # Start Next.js dev server (uses --webpack flag)
npm run build        # Production build (uses --webpack flag)
npm run start        # Start production server
npm run lint         # Run ESLint using eslint-config-next/core-web-vitals
```

### Build Considerations
- Webpack is explicitly specified (`--webpack` flag) in dev/build scripts
- ESLint config uses `eslint-config-next/core-web-vitals` baseline
- Common ignore patterns: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Component Patterns & Conventions

### Section Structure Pattern
Each major section follows this pattern (see Hero, Projects, About):
```jsx
<section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="sectionId">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Skill Display
- `SkillCategory.jsx` uses `SiXxx` icons from `react-icons/si` (tech brand icons)
- Skills array maps over objects with `icon`, `name`, and `color` props
- Uses reusable `SkillItem` component for consistent rendering

### Navigation Scroll Behavior
- Navbar sticky positioning based on scroll threshold (`window.scrollY > 150`)
- Transitions from full-width white to fixed pill-shaped dark navbar on scroll
- Active link tracking via `setActiveLink(href)`
- Mobile menu prevents body scroll with `document.body.style.overflow`

## Important Notes

- **No API/Backend**: All data is hardcoded in components; no database or fetch calls
- **Image Assets**: Uses `/images/` for background shapes and project thumbnails
- **Link Placeholders**: Social links in Hero use `yourusername` placeholders—update with actual URLs
- **Commented Code**: Footer component is commented out in main page layout
- **Test/Config Files**: `components/te.txt` and `test.jsx` appear to be dev/test files—exclude from production

## When Adding New Features
1. **Sections**: Create JSX component, add to `src/app/page.js`, use consistent section ID pattern
2. **Styling**: Use Tailwind utilities + custom accent color `#FFAF3F`
3. **Interactions**: Apply `'use client'` directive if using hooks/state
4. **Icons**: Import from `lucide-react` (general) or `react-icons/si` (tech skills)
5. **Testing**: Run `npm run lint` before commits to catch Next.js violations
