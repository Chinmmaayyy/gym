import {
  Dumbbell,
  Flame,
  HeartPulse,
  UserRound,
  Waves,
  HandHeart,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import { formatINR } from "@/lib/utils";
import { IMG } from "@/lib/images";

/* ---------------------------------------------------------------
   Services (Bible Parts 2, 3, 4, 12)
--------------------------------------------------------------- */
export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  benefits: string[];
  image?: StaticImageData;
};

export const SERVICES: Service[] = [
  {
    slug: "gym-training",
    title: "Gym Training",
    icon: Dumbbell,
    short: "Build strength, improve endurance, and achieve your fitness goals.",
    description:
      "A complete strength and conditioning experience with high-quality machines and free weights, guided by certified trainers who help you train with proper form and purpose.",
    benefits: ["Full free-weight & machine floor", "Structured strength programs", "Expert form correction"],
    image: IMG.weights,
  },
  {
    slug: "crossfit",
    title: "CrossFit",
    icon: Flame,
    short: "High-intensity functional workouts designed to improve overall fitness.",
    description:
      "Functional training for strength, endurance, and agility. Our dedicated CrossFit zone delivers energetic, challenging sessions that push your limits and keep you coming back.",
    benefits: ["Dedicated CrossFit zone", "Coached group sessions", "Strength, endurance & agility"],
    image: IMG.crossfit,
  },
  {
    slug: "cardio",
    title: "Cardio",
    icon: HeartPulse,
    short: "Burn calories, strengthen your heart, and improve stamina.",
    description:
      "A dedicated cardio area with modern equipment to improve stamina, torch calories, and build a stronger, healthier heart at your own pace.",
    benefits: ["Modern cardio equipment", "Fat-burning programs", "Improved heart health"],
    image: IMG.cardio,
  },
  {
    slug: "personal-training",
    title: "Personal Training",
    icon: UserRound,
    short: "Receive one-on-one coaching tailored to your goals.",
    description:
      "Whether your goal is weight loss, muscle gain, or athletic performance, our certified trainers build personalised programs that keep you motivated and accountable.",
    benefits: ["1-on-1 certified coaching", "Personalised programming", "Accountability & motivation"],
    image: IMG.hero,
  },
  {
    slug: "steam-bath",
    title: "Steam Bath",
    icon: Waves,
    short: "Recover faster and relax your body after training.",
    description:
      "Unwind and recover after intense workouts in our clean, relaxing steam bath — supporting muscle recovery and overall wellness.",
    benefits: ["Post-workout recovery", "Muscle relaxation", "Hygienic facilities"],
  },
  {
    slug: "massage",
    title: "Massage",
    icon: HandHeart,
    short: "Support muscle recovery and reduce stress.",
    description:
      "Professional massage services that support muscle recovery, reduce stress, and keep your body performing at its best.",
    benefits: ["Reduces muscle soreness", "Lowers stress", "Enhances wellness"],
  },
];

/* ---------------------------------------------------------------
   Why Choose Key Fitness (Bible Part 3 & 12)
--------------------------------------------------------------- */
export const WHY_CHOOSE = [
  { icon: ShieldCheck, title: "Certified Trainers", text: "Experienced professionals to guide every workout." },
  { icon: Dumbbell, title: "Modern Equipment", text: "Train using high-quality machines and free weights." },
  { icon: Flame, title: "CrossFit Zone", text: "Functional training for strength, endurance, and agility." },
  { icon: HeartPulse, title: "Cardio Area", text: "Improve stamina with dedicated cardio equipment." },
  { icon: Waves, title: "Steam Bath", text: "Relax and recover after intense workouts." },
  { icon: HandHeart, title: "Massage", text: "Support recovery and overall wellness." },
];

/* ---------------------------------------------------------------
   Trust indicators (Bible Part 3 & 9)
--------------------------------------------------------------- */
export const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Certified Trainers" },
  { icon: Wind, label: "Fully Air Conditioned" },
  { icon: Dumbbell, label: "Premium Equipment" },
  { icon: Sparkles, label: "Hygiene Focused" },
  { icon: UserRound, label: "Personal Training" },
  { icon: Snowflake, label: "Steam & Recovery" },
];

/* ---------------------------------------------------------------
   Hero stats / animated counters (Bible Part 3 & 6)
--------------------------------------------------------------- */
export const STATS = [
  { value: 1500, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Certified Trainers" },
  { value: 20, suffix: "+", label: "Modern Machines" },
  { value: 6, suffix: "", label: "Premium Services" },
];

/* ---------------------------------------------------------------
   Membership plans (Bible Part 3 — brochure pricing)
--------------------------------------------------------------- */
export type Plan = {
  name: string;
  featured?: boolean;
  tiers: { period: string; price: number }[];
  inclusions: string[];
};

export const PLANS: Plan[] = [
  {
    name: "Gym",
    tiers: [
      { period: "3 Months", price: 3000 },
      { period: "6 Months", price: 5000 },
      { period: "1 Year", price: 8000 },
    ],
    inclusions: ["Full gym floor access", "Free weights & machines", "Certified trainer guidance", "Fully AC facility"],
  },
  {
    name: "Gym + CrossFit",
    tiers: [
      { period: "3 Months", price: 3500 },
      { period: "6 Months", price: 5500 },
      { period: "1 Year", price: 8500 },
    ],
    inclusions: ["Everything in Gym", "Dedicated CrossFit zone", "Functional training", "Group sessions"],
  },
  {
    name: "Gym + Cardio",
    featured: true,
    tiers: [
      { period: "3 Months", price: 4000 },
      { period: "6 Months", price: 7500 },
      { period: "1 Year", price: 11500 },
    ],
    inclusions: ["Everything in Gym", "Full cardio area access", "Fat-loss programming", "Stamina building"],
  },
  {
    name: "Gym + Cardio + CrossFit",
    tiers: [
      { period: "3 Months", price: 4500 },
      { period: "6 Months", price: 8000 },
      { period: "1 Year", price: 12000 },
    ],
    inclusions: ["Complete access", "Cardio + CrossFit + Gym", "All training zones", "Best overall value"],
  },
];

export const PERSONAL_TRAINING_TIERS = [
  { period: "1 Month", price: 3000 },
  { period: "3 Months", price: 8000 },
  { period: "6 Months", price: 15000 },
  { period: "1 Year", price: 28000 },
];

export const formatPrice = formatINR;

/* ---------------------------------------------------------------
   Trainers (Bible Part 4) — placeholder professionals
--------------------------------------------------------------- */
export type Trainer = {
  name: string;
  initials: string;
  role: string;
  experience: string;
  specialization: string;
  certifications: string;
  instagram?: string;
};

export const TRAINERS: Trainer[] = [
  {
    name: "Arjun Mehta",
    initials: "AM",
    role: "Head Strength Coach",
    experience: "10+ years",
    specialization: "Strength & Powerlifting",
    certifications: "ACE CPT, NSCA-CSCS",
    instagram: "https://instagram.com",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "CrossFit Lead",
    experience: "7 years",
    specialization: "Functional & HIIT",
    certifications: "CrossFit L2, K11",
    instagram: "https://instagram.com",
  },
  {
    name: "Rahul Verma",
    initials: "RV",
    role: "Personal Trainer",
    experience: "8 years",
    specialization: "Fat Loss & Transformation",
    certifications: "ISSA CPT, Nutrition L1",
    instagram: "https://instagram.com",
  },
  {
    name: "Neha Kapoor",
    initials: "NK",
    role: "Cardio & Endurance Coach",
    experience: "6 years",
    specialization: "Conditioning & Mobility",
    certifications: "ACSM, Pre/Post-natal",
    instagram: "https://instagram.com",
  },
];

/* ---------------------------------------------------------------
   Testimonials (Bible Part 3 & 12 — placeholders)
--------------------------------------------------------------- */
export const TESTIMONIALS = [
  {
    name: "Vikram S.",
    duration: "1 Year Member",
    rating: 5,
    review:
      "The trainers are supportive, the equipment is excellent, and the atmosphere keeps me motivated every single day.",
  },
  {
    name: "Ananya R.",
    duration: "6 Month Member",
    rating: 5,
    review: "A clean, professional gym with everything I need for my fitness journey. Truly premium experience.",
  },
  {
    name: "Karan D.",
    duration: "CrossFit Member",
    rating: 5,
    review: "CrossFit sessions are energetic, challenging, and fun. I've never been in better shape.",
  },
  {
    name: "Meera J.",
    duration: "3 Month Member",
    rating: 5,
    review: "The steam bath and massage recovery options make this so much more than an ordinary gym.",
  },
  {
    name: "Rohit P.",
    duration: "PT Client",
    rating: 5,
    review: "My personal trainer built a plan around my goals. Down 12kg and stronger than ever.",
  },
];

/* ---------------------------------------------------------------
   FAQ (Bible Part 3, 4, 9, 12)
--------------------------------------------------------------- */
export const FAQS = [
  {
    q: "Do you offer personal training?",
    a: "Yes. Certified personal trainers are available for customised fitness plans tailored to your goals — whether that's weight loss, muscle gain, or athletic performance.",
  },
  {
    q: "Is CrossFit available?",
    a: "Absolutely. We have a dedicated CrossFit zone with coached group sessions focused on strength, endurance, and agility.",
  },
  {
    q: "Do you have steam bath facilities?",
    a: "Yes. Clean, hygienic steam bath facilities are available for eligible memberships to help you relax and recover.",
  },
  {
    q: "Is the gym air-conditioned?",
    a: "Key Fitness is a fully air-conditioned unisex gym, so you can train comfortably all year round.",
  },
  {
    q: "What are your gym timings?",
    a: "We're open Monday to Saturday, 5:30 AM – 11:00 PM. We're closed on Sundays. Contact us for the latest hours.",
  },
  {
    q: "How can I join?",
    a: "Simply tap Join Now, fill in the enquiry form, or chat with us on WhatsApp. Our team will guide you through membership options and a free facility tour.",
  },
];

/* ---------------------------------------------------------------
   Gallery categories & placeholder items (Bible Part 4)
--------------------------------------------------------------- */
export const GALLERY_CATEGORIES = [
  "All",
  "Interior",
  "Equipment",
  "Cardio",
  "CrossFit",
  "Personal Training",
  "Members",
] as const;

export type GalleryItem = {
  id: number;
  category: (typeof GALLERY_CATEGORIES)[number];
  label: string;
};

/** Placeholder photo per gallery category (swap for real shots later). */
export const CATEGORY_IMAGE: Partial<Record<(typeof GALLERY_CATEGORIES)[number], StaticImageData>> = {
  Interior: IMG.gymInterior,
  Equipment: IMG.weights,
  Cardio: IMG.cardio,
  CrossFit: IMG.crossfit,
  "Personal Training": IMG.hero,
  Members: IMG.functional,
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, category: "Interior", label: "Main Training Floor" },
  { id: 2, category: "Equipment", label: "Free Weights Zone" },
  { id: 3, category: "CrossFit", label: "Functional Rig" },
  { id: 4, category: "Cardio", label: "Cardio Deck" },
  { id: 5, category: "Personal Training", label: "1-on-1 Coaching" },
  { id: 6, category: "Members", label: "Community Session" },
  { id: 7, category: "Interior", label: "Reception & Lounge" },
  { id: 8, category: "Equipment", label: "Machine Floor" },
  { id: 9, category: "CrossFit", label: "Box Jumps" },
  { id: 10, category: "Cardio", label: "Treadmill Row" },
  { id: 11, category: "Members", label: "Group Energy" },
  { id: 12, category: "Personal Training", label: "Form Coaching" },
];
