# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BlankOn Foundation Website is a multilingual static website built with modern web technologies to showcase the mission, projects, and activities of Yayasan Penggiat Sumber Terbuka (BlankOn Foundation), a non-profit organization dedicated to advancing open source technology in Indonesia.

## Technology Stack

- **Framework**: TanStack Start (React-based full-stack framework)
- **Router**: TanStack Router with file-based routing
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Fumadocs UI for layouts and components
- **Type Safety**: TypeScript
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages (via Wrangler)

## Architecture & Project Structure

```
src/
├── routes/                    # File-based routing
│   ├── __root.tsx            # Root layout component
│   ├── index.tsx             # Language redirect handler
│   ├── $lang/                # Language-specific routes
│   │   ├── index.tsx         # Home page (main landing)
│   │   ├── membership.tsx    # Membership/Keanggotaan page
│   │   ├── donate.tsx        # Donation page
│   │   ├── download.tsx      # Download page
│   │   ├── docs/$.tsx        # Documentation catch-all route
│   │   └── dev/$.tsx         # Developer wiki catch-all route
│   └── api/                  # API routes
│       └── search.ts         # Search functionality
├── lib/
│   ├── layout.shared.tsx     # Shared layout configuration & i18n translations
│   ├── i18n.ts              # i18n configuration (language definitions)
│   ├── source.ts            # Documentation source configuration
│   ├── github.ts            # GitHub integration utilities
│   └── utils.ts             # Shared utilities
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── mdx/                 # MDX components
│   └── feedback.tsx         # Feedback component
└── router.tsx               # Router configuration

public/                      # Static assets
├── logo-black.png
├── logo-white.png
└── ...

content/                     # MDX content files (if applicable)
```

## Core Concepts

### File-Based Routing

Routes are defined by the file structure in `src/routes/`:
- `$lang` indicates a dynamic route parameter for language (id/en)
- `$.tsx` is a catch-all route (splat route)
- Each route exports a `Route` object created with `createFileRoute()`

### Language Support

The website supports **bilingual content** (Indonesian and English):
- Default language: `id` (Indonesian)
- Supported languages: `id`, `en`
- Language configuration: `src/lib/i18n.ts`
- All routes are prefixed with `/$lang` (e.g., `/id`, `/en`)

## Internationalization (i18n) Requirements

**CRITICAL**: All user-facing text, labels, and UI elements MUST be internationalized.

### i18n Implementation Guidelines

1. **Translation Location**: All translations are defined in `src/lib/layout.shared.tsx` in the `translations` object

2. **Translation Structure**:
   ```typescript
   const translations = {
     id: {
       // Indonesian translations
       home: 'Beranda',
       membership: 'Keanggotaan',
       // ... nested objects for complex content
     },
     en: {
       // English translations
       home: 'Home',
       membership: 'Membership',
       // ... corresponding English content
     }
   }
   ```

3. **Using Translations in Components**:
   ```typescript
   const { lang } = Route.useLoaderData()
   const t = getTranslations(lang)

   return <h1>{t.home}</h1>
   ```

4. **Page-Specific Content**: For pages with extensive content (like membership.tsx, donate.tsx), define content objects within the component file:
   ```typescript
   const pageContent = {
     id: { /* Indonesian content */ },
     en: { /* English content */ }
   }

   const content = pageContent[lang as keyof typeof pageContent]
   ```

5. **Navigation Links**:
   - Always include language parameter in URLs: `/${locale}/path`
   - Use TanStack Router's `Link` component with proper params or regular `<a>` tags with interpolated language

### i18n Checklist for New Features

When adding new features or pages:

- [ ] Add all text strings to the translations object
- [ ] Ensure both Indonesian (`id`) and English (`en`) translations are complete
- [ ] Test the feature in both languages
- [ ] Verify navigation links include language parameter
- [ ] Check that dynamic content (if any) supports both languages
- [ ] Ensure error messages and validation text are translated
- [ ] Verify date/time formatting if applicable

### Common i18n Mistakes to Avoid

❌ **DON'T** hardcode text in JSX:
```typescript
<h1>Welcome</h1>  // WRONG
```

✅ **DO** use translations:
```typescript
<h1>{t.welcome}</h1>  // CORRECT
```

❌ **DON'T** create routes without language parameter:
```typescript
<Link to="/membership">  // WRONG
```

✅ **DO** include language in all routes:
```typescript
<Link to={`/${lang}/membership`}>  // CORRECT
```

## Development Workflow

### Setup
```bash
npm install          # Install dependencies
```

### Development
```bash
npm run dev          # Start dev server on port 3000
```

### Building
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run format       # Run Prettier
npm run check        # Format and lint fix
npx tsc --noEmit     # Type check without emitting files
```

### Deployment
```bash
npm run deploy       # Deploy to Cloudflare Pages via Wrangler
```

## Design System & Styling

### Tailwind Configuration
- Using Tailwind CSS v4 with Vite plugin
- Custom design tokens from Fumadocs UI
- Theme variables:
  - `fd-background` - Background color
  - `fd-foreground` - Primary text color
  - `fd-muted-foreground` - Secondary text color
  - `fd-border` - Border color
  - `fd-card` - Card background

### Color Palette
- Primary: Blue shades (`blue-600`, `blue-700`, `blue-950`)
- Gradients: `from-slate-900 via-blue-950 to-slate-900`
- Dark mode support via `dark:` variants

### Layout Patterns
- Container: `container mx-auto max-w-5xl px-6`
- Sections: `py-20` for vertical spacing
- Grids: `grid gap-6 md:grid-cols-2` (responsive 2-column layout)
- Cards: `rounded-2xl border border-fd-border bg-fd-card p-6`

### Cultural Design Elements
- Batik patterns in hero sections using SVG data URLs
- Indonesian cultural motifs (concentric circles, curved paths)
- Maintains dark blue aesthetic with subtle white strokes

## Component Patterns

### Page Structure
```typescript
export const Route = createFileRoute('/$lang/page-name')({
  component: PageComponent,
  loader: ({ params }) => ({ lang: params.lang }),
})

function PageComponent() {
  const { lang } = Route.useLoaderData()
  const content = pageContent[lang as keyof typeof pageContent]

  return (
    <HomeLayout {...baseOptions(lang)}>
      <main className="flex flex-1 flex-col">
        {/* Page sections */}
      </main>
    </HomeLayout>
  )
}
```

### Section Structure
```typescript
<section className="bg-fd-background py-20">
  <div className="container mx-auto max-w-5xl px-6">
    {/* Centered title */}
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl font-bold text-fd-foreground md:text-4xl">
        {content.title}
      </h2>
      <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
    </div>

    {/* Content */}
  </div>
</section>
```

### Icon Usage
- Use Heroicons (outlined) via inline SVG
- Consistent sizing: `h-6 w-6` for section icons, `h-4 w-4` for inline icons
- Gradient backgrounds for icon containers: `bg-gradient-to-br from-blue-600 to-blue-400`

## Navigation Structure

Current site navigation (as of latest update):
- **Beranda / Home** (`/$lang`) - Landing page
- **Keanggotaan / Membership** (`/$lang/membership`) - Membership information
- **Donasi / Donate** (`/$lang/donate`) - Donation page

Legacy routes (still accessible but not in main nav):
- `/$lang/download` - Download page
- `/$lang/docs` - Documentation (catch-all)
- `/$lang/dev` - Developer wiki (catch-all)

## Adding New Pages

1. Create route file in `src/routes/$lang/new-page.tsx`
2. Define page content in both languages within the component
3. Add navigation link to `src/lib/layout.shared.tsx` if needed
4. Follow the established section structure and styling patterns
5. Ensure full i18n support (see i18n checklist above)
6. Test in both Indonesian and English

## Content Guidelines

### Tone & Voice
- Professional yet approachable
- Focus on community and collaboration
- Emphasize Indonesian context and local needs
- Highlight open source values (transparency, inclusivity, sustainability)

### Section Ordering (Home Page)
1. Hero About - Foundation introduction
2. Mission - Core mission statements
3. Donate CTA - Call to action for donations
4. Projects & Activities - Showcasing work

### Writing Style
- Clear, concise descriptions
- Use active voice
- Bullet points for lists and benefits
- Consistent terminology across languages

## Special Considerations

### Logo Handling
- Two logo variants: `logo-black.png` (light mode), `logo-white.png` (dark mode)
- Logo component in `src/lib/layout.shared.tsx`
- Responsive sizing: `h-6` for light mode, `h-4` for dark mode

### Background Patterns
- Hero sections use SVG data URL patterns
- Batik-inspired designs for cultural relevance
- Low opacity (`0.08` - `0.6`) to maintain readability
- Always test pattern visibility in both light and dark modes

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Stack layouts vertically on mobile, grid on desktop
- Test on various screen sizes

## Common Tasks

### Updating Navigation
Edit `src/lib/layout.shared.tsx`:
1. Add translation keys to `translations` object
2. Update `links` array in `baseOptions()` function

### Adding a New Project/Activity
Edit `src/lib/layout.shared.tsx`:
1. Add item to `hero.products.items` array in both `id` and `en`
2. Include: `name`, `description`, `cta`, `url` (optional)
3. Update icon logic in `src/routes/$lang/index.tsx` if needed

### Modifying Hero Background Pattern
Edit the SVG data URL in hero section's background div:
- Adjust stroke opacity for visibility
- Modify pattern size and complexity
- Test with dark blue gradient background

## Testing Checklist

Before committing changes:
- [ ] Test in both Indonesian and English
- [ ] Verify responsive design on mobile and desktop
- [ ] Check dark mode appearance
- [ ] Run TypeScript type checking (`npx tsc --noEmit`)
- [ ] Test all navigation links
- [ ] Verify external links open in new tab (`target="_blank" rel="noopener noreferrer"`)
- [ ] Check accessibility (semantic HTML, alt text, ARIA labels if needed)
- [ ] Preview build locally (`npm run build && npm run preview`)

## Troubleshooting

### TypeScript Errors
- Check route paths match file structure
- Verify `params` types in route loaders
- Ensure translation keys exist in both languages

### Styling Issues
- Verify Tailwind classes are valid
- Check dark mode variants (`dark:`)
- Ensure responsive breakpoints are applied correctly

### i18n Issues
- Confirm translation keys exist in both `id` and `en`
- Check language parameter is passed to all routes
- Verify `getTranslations()` is called with correct locale

## Resources

- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Start Docs](https://tanstack.com/start)
- [Fumadocs UI](https://fumadocs.vercel.app/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Project-Specific Notes

- This is a foundation/non-profit website, so emphasis on transparency, community, and impact
- Indonesian context is primary, English is for international reach
- Open source values guide all content and design decisions
- Keep donation and membership CTAs prominent but not aggressive
