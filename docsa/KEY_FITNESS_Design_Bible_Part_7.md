# KEY FITNESS --- Website Design Bible

# Part 7 --- Responsive Design, Mobile Experience & Accessibility

## Objective

Ensure the Key Fitness website delivers a premium experience on every
screen size while maintaining excellent usability, accessibility, and
performance.

------------------------------------------------------------------------

# Responsive Philosophy

-   Mobile First
-   Progressive Enhancement
-   Touch-Friendly
-   Fast Loading
-   Consistent Design Language

Every component should adapt gracefully without sacrificing aesthetics
or functionality.

------------------------------------------------------------------------

# Breakpoints

  Device          Width
  --------------- --------------
  Mobile          \< 640px
  Small Tablet    640--767px
  Tablet          768--1023px
  Laptop          1024--1279px
  Desktop         1280--1535px
  Large Desktop   1536px+

------------------------------------------------------------------------

# Layout Guidelines

## Desktop

-   Maximum content width: 1440px
-   Multi-column layouts
-   Spacious margins
-   Large hero imagery
-   Side-by-side content sections

------------------------------------------------------------------------

## Tablet

-   Two-column layout where appropriate
-   Reduced spacing
-   Simplified navigation
-   Cards resize proportionally

------------------------------------------------------------------------

## Mobile

-   Single-column layout
-   Full-width buttons
-   Stacked cards
-   Simplified hero section
-   Sticky CTA button (optional)

------------------------------------------------------------------------

# Navigation

## Desktop

-   Transparent sticky navbar
-   Centered navigation
-   CTA button on right

------------------------------------------------------------------------

## Mobile

-   Hamburger menu
-   Full-screen slide-in navigation
-   Large menu items
-   Fixed Join Now button

------------------------------------------------------------------------

# Typography Scaling

## Desktop

Hero: 72px

H1: 56px

H2: 48px

Body: 18px

------------------------------------------------------------------------

## Tablet

Hero: 56px

H1: 44px

H2: 36px

Body: 17px

------------------------------------------------------------------------

## Mobile

Hero: 40--42px

H1: 32px

H2: 28px

Body: 16px

Buttons: 16px

------------------------------------------------------------------------

# Images

-   Responsive sizing
-   Next.js Image optimization
-   Lazy loading
-   Maintain aspect ratios
-   Prevent layout shift

------------------------------------------------------------------------

# Cards

Desktop: 3--4 cards per row

Tablet: 2 cards per row

Mobile: 1 card per row

------------------------------------------------------------------------

# Forms

Desktop: Two-column layout when appropriate.

Mobile: Single-column inputs.

Large touch-friendly fields.

------------------------------------------------------------------------

# Buttons

Minimum height: 48px

Minimum touch target: 44×44px

Primary CTA always visible.

------------------------------------------------------------------------

# Tables

Convert complex tables into responsive cards on mobile.

Avoid horizontal scrolling where possible.

------------------------------------------------------------------------

# Gallery

Desktop: Masonry grid

Tablet: 2--3 columns

Mobile: 2 columns

Lightbox fully responsive.

------------------------------------------------------------------------

# Membership Pricing

Desktop: 4-column pricing layout

Tablet: 2-column

Mobile: Horizontal swipe or stacked cards

Highlight recommended plan consistently.

------------------------------------------------------------------------

# Performance Targets

-   Lighthouse Performance ≥ 95
-   Accessibility ≥ 95
-   SEO ≥ 95
-   Best Practices ≥ 95

Core Web Vitals:

-   Largest Contentful Paint \< 2.5s
-   Cumulative Layout Shift \< 0.1
-   First Input Delay / INP optimized

------------------------------------------------------------------------

# Accessibility

## Color Contrast

Meet WCAG AA minimum.

------------------------------------------------------------------------

## Keyboard Navigation

All interactive elements must be keyboard accessible.

Visible focus states.

Logical tab order.

------------------------------------------------------------------------

## Screen Readers

-   Semantic HTML
-   Proper heading hierarchy
-   Alt text for every image
-   ARIA labels where required

------------------------------------------------------------------------

## Motion

Respect prefers-reduced-motion.

Disable non-essential animations when requested.

------------------------------------------------------------------------

## Forms

-   Associated labels
-   Error messages
-   Required field indicators
-   Accessible validation

------------------------------------------------------------------------

# Touch Experience

-   Comfortable spacing
-   Swipe support in gallery
-   Smooth scrolling
-   No accidental tap zones

------------------------------------------------------------------------

# Orientation

Landscape and portrait support for tablets and mobile devices.

------------------------------------------------------------------------

# Browser Support

Target latest versions of:

-   Chrome
-   Edge
-   Firefox
-   Safari

Graceful degradation for older browsers.

------------------------------------------------------------------------

# Quality Assurance Checklist

-   No horizontal overflow
-   Responsive images
-   Responsive typography
-   Functional forms
-   Working navigation
-   Fast page load
-   Accessible interactions
-   Consistent spacing
-   Pixel-perfect alignment

------------------------------------------------------------------------

# Success Criteria

The website should feel as polished on a mobile phone as it does on a 4K
desktop monitor, ensuring every visitor enjoys a seamless, premium
experience regardless of device or ability.
