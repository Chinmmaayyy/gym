# KEY FITNESS --- Website Design Bible

# Part 6 --- Animation & Interaction Bible

## Objective

Animations should enhance the premium experience without distracting the
user. Every motion should feel smooth, intentional, and
performance-friendly.

------------------------------------------------------------------------

# Animation Principles

-   Smooth, subtle, and purposeful
-   60 FPS target
-   Never animate everything at once
-   Respect reduced-motion preferences
-   Prioritize clarity over spectacle

------------------------------------------------------------------------

# Global Motion Tokens

  Property      Value
  ------------- ---------------------------------------
  Duration      0.5--0.8s
  Hover         0.2--0.3s
  Easing        easeOut / cubic-bezier(0.22,1,0.36,1)
  Scale Hover   1.02--1.04

------------------------------------------------------------------------

# Page Load

Sequence:

1.  Navbar fades down.
2.  Hero background fades in.
3.  Headline reveals line-by-line.
4.  Subtitle fades upward.
5.  CTA buttons slide up.
6.  Statistics count in.

------------------------------------------------------------------------

# Navbar

-   Transparent initially
-   Blur + solid background after scroll
-   Active link underline animation
-   CTA button glow on hover

------------------------------------------------------------------------

# Hero

-   Parallax background
-   Floating gradient overlays
-   CTA buttons scale slightly on hover
-   Scroll indicator pulse

------------------------------------------------------------------------

# Scroll Animations

Use Intersection Observer / Framer Motion.

Effects: - Fade Up - Fade Left - Fade Right - Scale In - Stagger
Children - Image Reveal - Number Counter

Animate only once unless explicitly interactive.

------------------------------------------------------------------------

# Card Interactions

Hover: - Translate Y: -6px - Scale: 1.02 - Soft cyan glow - Icon rotates
3--5°

Active: - Slight compression

------------------------------------------------------------------------

# Buttons

Hover: - Brighten gradient - Lift 2px - Glow

Click: - Ripple - Scale 0.98

Loading: - Spinner - Disabled state

------------------------------------------------------------------------

# Gallery

-   Hover zoom
-   Dark overlay
-   View icon fade in
-   Lightbox with fade transition

------------------------------------------------------------------------

# Pricing Cards

-   Recommended plan gently pulses on load
-   Hover elevates card
-   CTA remains visible

------------------------------------------------------------------------

# Testimonials

-   Auto-slide every 5 seconds
-   Pause on hover
-   Swipe support on mobile

------------------------------------------------------------------------

# FAQ

-   Accordion expand/collapse
-   Chevron rotates 180°
-   Smooth height animation

------------------------------------------------------------------------

# Counters

Animate: - Members - Trainers - Years - Facilities

Count once when entering viewport.

------------------------------------------------------------------------

# Page Transitions

-   Fade between routes
-   Preserve scroll restoration
-   Avoid long delays

------------------------------------------------------------------------

# Mobile Interactions

-   Bottom-safe spacing
-   Large tap targets (44px+)
-   Swipe-friendly gallery
-   Sticky Join button optional

------------------------------------------------------------------------

# Micro-interactions

-   Form success checkmark
-   Input focus glow
-   Smooth error messages
-   Copy phone number feedback (future)

------------------------------------------------------------------------

# Accessibility

-   Respect prefers-reduced-motion
-   Never rely on animation alone to convey information
-   Keep focus indicators visible

------------------------------------------------------------------------

# Performance

-   GPU-friendly transforms
-   Animate opacity and transform only
-   Avoid layout thrashing
-   Lazy-load media before animation

------------------------------------------------------------------------

# Success Criteria

Every interaction should reinforce the feeling that Key Fitness is a
premium, modern, luxury fitness brand. Motion should feel polished,
fast, and elegant rather than flashy.
