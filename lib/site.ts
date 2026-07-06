/**
 * Central site configuration — single source of truth for brand,
 * contact details, and environment-driven values (Design Bible Part 8).
 */
export const site = {
  name: "Key Fitness",
  tagline: "The Unisex Gym",
  slogan: "Train. Transform. Thrive.",
  description:
    "Join Key Fitness, a premium fully air-conditioned unisex gym offering CrossFit, cardio, personal training, steam bath, massage, and modern fitness equipment. Enquire today.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://keyfitness.example",

  // Contact — replace phone/email with real client details before launch (Part 13)
  phone: "+91 98765 43210",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+919876543210",
  email: "hello@keyfitness.in",
  address: "Sonar Pada, Dombivli East, Kalyan, Maharashtra 421203",
  addressParts: {
    street: "Sonar Pada, Dombivli East",
    city: "Dombivli",
    region: "Maharashtra",
    postalCode: "421203",
    country: "IN",
  },
  // Query used for the embedded map; mapsUrl is the shareable Google Maps pin.
  mapsQuery: "Sonar Pada, Dombivli East, Kalyan, Maharashtra 421203",
  mapsUrl: "https://maps.app.goo.gl/td5qA67W755AKgt17",
  hours: [
    { day: "Monday – Saturday", time: "5:30 AM – 11:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Membership", href: "/membership" },
  { label: "Trainers", href: "/trainers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
