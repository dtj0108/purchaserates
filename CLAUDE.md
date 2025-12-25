# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PurchaseRates.com is a mortgage rate comparison marketing site built with Next.js 15 (App Router), React 19, and Tailwind CSS 4. It helps homebuyers compare mortgage rates and connect with loan experts.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm start` - Start production server

## Architecture

### Tech Stack
- **Next.js 15** (App Router with canary features)
- **React 19** with React Aria Components for accessible UI primitives
- **Tailwind CSS 4** with custom design system tokens
- **TypeScript** in strict mode

### Directory Structure
```
src/
├── app/           # Next.js App Router pages
├── components/
│   ├── base/      # Atomic UI primitives (Button, Badge, Avatar, Input)
│   ├── foundations/  # Design system elements (FeaturedIcon, Logo, RatingBadge)
│   ├── marketing/    # Marketing-specific components (Header)
│   ├── sections/     # Page sections (NewsSection, FeatureText)
│   ├── shared-assets/  # Shared visual elements
│   └── ui/           # Shadcn-style components (Card, Chart)
├── hooks/         # Custom React hooks
├── lib/           # Utilities and API functions
├── providers/     # React context providers
├── styles/        # Global CSS and theme tokens
└── utils/         # Utility functions (cx for class merging)
```

### Styling System

The project uses a comprehensive design token system:

- **Theme file**: `src/styles/theme.css` defines all design tokens (colors, spacing, typography, shadows)
- **Global styles**: `src/styles/globals.css` imports theme and configures Tailwind
- **Dark mode**: Uses `.dark-mode` class variant (not Tailwind's default `dark:`)
- **Class merging**: Use `cx()` from `@/utils/cx` (extended tailwind-merge) for conditional classes

Key Tailwind customizations:
- Custom text sizes: `text-display-xs` through `text-display-2xl`
- Semantic colors: `bg-primary`, `text-tertiary`, `border-secondary`, `bg-brand-solid`
- Custom utilities: `scrollbar-hide`, `transition-inherit-all`

### Path Aliases

- `@/*` maps to `./src/*`

### Component Patterns

- Use React Aria Components for accessible interactive elements
- Button component handles both `<button>` and `<a>` based on `href` prop
- Components are predominantly client-side (`"use client"`)

### Providers

The app wraps children with:
1. `RouteProvider` - Integrates Next.js router with React Aria
2. `ThemeProvider` - next-themes for light/dark mode switching
