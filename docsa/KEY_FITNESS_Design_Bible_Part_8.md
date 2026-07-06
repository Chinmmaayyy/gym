# KEY FITNESS --- Website Design Bible

# Part 8 --- Technical Architecture & Development Blueprint

## Objective

Build a production-ready, scalable website that is fast, maintainable,
SEO-friendly, and ready for future expansion into a complete gym
management platform.

------------------------------------------------------------------------

# Core Stack

-   Next.js 15 (App Router)
-   React 19
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Framer Motion
-   Lucide React Icons
-   React Hook Form
-   Zod Validation

------------------------------------------------------------------------

# Project Structure

``` text
app/
components/
  ui/
  layout/
  home/
  about/
  services/
  membership/
  gallery/
  contact/
lib/
hooks/
types/
constants/
public/
  images/
  videos/
  icons/
styles/
```

------------------------------------------------------------------------

# Component Philosophy

-   Reusable components
-   Single responsibility
-   Typed props
-   Composition over duplication

Examples: - Button - Card - SectionHeading - CTA - PricingCard -
TrainerCard - TestimonialCard - GalleryGrid

------------------------------------------------------------------------

# Routing

-   /
-   /about
-   /services
-   /membership
-   /trainers
-   /gallery
-   /contact

Future: - /locations - /blog - /dashboard - /admin

------------------------------------------------------------------------

# Styling Rules

-   Tailwind utility-first
-   Shared design tokens
-   No inline styles
-   Centralized color palette
-   Consistent spacing scale

------------------------------------------------------------------------

# Images

-   next/image
-   WebP or AVIF
-   Lazy loading
-   Blur placeholders
-   Responsive sizes

------------------------------------------------------------------------

# SEO

Each page must include:

-   Unique title
-   Meta description
-   Open Graph tags
-   Twitter cards
-   Canonical URL
-   Structured data
-   Sitemap
-   robots.txt

------------------------------------------------------------------------

# Performance

Targets:

-   Lighthouse ≥95
-   Tree shaking
-   Dynamic imports
-   Route-based code splitting
-   Font optimization
-   Image optimization

------------------------------------------------------------------------

# Forms

Use: - React Hook Form - Zod

Validation: - Name - Phone - Email - Message

Future: - Backend API - Email notifications - CRM integration

------------------------------------------------------------------------

# Environment Variables

``` env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP=
NEXT_PUBLIC_GOOGLE_MAPS=
NEXT_PUBLIC_GA_ID=
```

Future backend values:

``` env
API_URL=
JWT_SECRET=
DATABASE_URL=
```

------------------------------------------------------------------------

# Future Backend

Architecture should allow:

-   Spring Boot or Node.js API
-   PostgreSQL
-   Authentication
-   JWT
-   Role-based access
-   Admin dashboard
-   Member dashboard

------------------------------------------------------------------------

# Multi-Branch Ready

Support future:

-   Branch listing
-   Individual branch pages
-   Branch-specific trainers
-   Branch-specific pricing
-   Shared design system

------------------------------------------------------------------------

# Deployment

Frontend: - Vercel

Future Backend: - Render - Railway - VPS

Domain: - Custom domain - HTTPS - CDN enabled

------------------------------------------------------------------------

# Analytics

Prepare integration for:

-   Google Analytics
-   Google Search Console
-   Meta Pixel (optional)

------------------------------------------------------------------------

# Security

-   Security headers
-   Form validation
-   Sanitized inputs
-   HTTPS only
-   Rate limiting (future API)

------------------------------------------------------------------------

# Code Quality

-   ESLint
-   Prettier
-   Strict TypeScript
-   Modular architecture
-   Clean naming conventions

------------------------------------------------------------------------

# Documentation

Include:

-   README
-   Setup instructions
-   Environment setup
-   Deployment guide
-   Folder overview

------------------------------------------------------------------------

# Success Criteria

The project should be clean enough that another developer can continue
building it, and scalable enough to evolve into a complete multi-branch
fitness platform without major restructuring.
