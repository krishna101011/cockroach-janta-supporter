// Single source of truth for site-wide copy, nav structure, and launch placeholders.
// Update the PLACEHOLDERS block before going live.

export const SITE = {
  name: "Cockroach Janta Supporter",
  tagline: "Together for Change, Together for People",
  url: "https://cockroachjantasupporter.org", // TODO: {{SITE_URL}}
  defaultDescription:
    "An independent, volunteer-run initiative providing food and drinking water to people at the protest. 100% of contributions go to food and water.",
};

// Leave any of these empty until the real value exists. Components render an
// honest "coming soon" state rather than a dead link or a dummy value that
// could be mistaken for real — never ship a fake UPI ID or example link.
export const PLACEHOLDERS = {
  UPI_ID: "Q389569986@ybl", // {{UPI_ID}}
  QR_IMAGE: "/qr-code.png", // {{QR_IMAGE}} — path under /public, e.g. "/qr-code.png"
  TELEGRAM_LINK: "https://t.me/+N7LvDWdKFvs0YzJl", // {{TELEGRAM_LINK}}
  WHATSAPP_LINK: "", // {{WHATSAPP_LINK}} — not used for this initiative
  INSTAGRAM_LINK: "https://instagram.com/Cockroachjantasupporter_", // {{INSTAGRAM_LINK}}
  CONTACT_EMAIL: "", // {{CONTACT_EMAIL}}
  OG_IMAGE: "/og-default.svg", // {{OG_IMAGE}}
};

export type NavLink = {
  label: string;
  id: string; // section id on the homepage
  standalone: string; // standalone page path
};

export const NAV_LINKS: NavLink[] = [
  { label: "Mission", id: "mission", standalone: "/mission" },
  { label: "How We Help", id: "how-we-help", standalone: "/#how-we-help" },
  { label: "Contribute", id: "contribute", standalone: "/contribute" },
  { label: "Telegram", id: "telegram", standalone: "/telegram" },
  { label: "FAQ", id: "faq", standalone: "/faq" },
  { label: "Contact", id: "contact", standalone: "/contact" },
];

export const FOOTER_EXTRA_LINKS = [
  { label: "Transparency", href: "/transparency" },
];

export const HERO = {
  h1: "Food and Water for Everyone Standing Up",
  subhead:
    "We're an independent group of volunteers making sure people at the protest don't go hungry or thirsty. If you can help, every contribution — big or small — goes straight into that.",
  primaryCta: "Join Telegram",
  secondaryCta: "Contribute Now",
  trustBadge: "Independent · Volunteer-Run · 100% for Food & Water",
};

export const MISSION = {
  h2: "What We Actually Do",
  body: "We don't organize the protest and we don't speak for it. We do one thing: make sure the people showing up have food, clean water, and someone looking out for them. That's the whole mission — nothing more, nothing less.",
};

export const HOW_WE_HELP = {
  h2: "How We Help",
  cards: [
    {
      icon: "food",
      title: "Food Support",
      description: "Meals and food packets delivered to wherever people are gathered.",
    },
    {
      icon: "water",
      title: "Water Support",
      description: "Clean drinking water, especially through long hours and heat.",
    },
    {
      icon: "volunteers",
      title: "On-the-Ground Volunteers",
      description: "Real people distributing supplies directly, not through a middleman.",
    },
    {
      icon: "transparency",
      title: "Full Transparency",
      description: "Every contribution is tracked to food and water — nothing else.",
    },
  ],
};

export const CONTRIBUTE = {
  h2: "Contribute",
  subhead:
    "This is completely voluntary. Nobody is asked to pay, and nothing is expected in return. If you choose to help, every rupee goes toward food and water for the people at the protest.",
  steps: [
    "Scan the QR code, or use the UPI ID below",
    "Enter any amount you're comfortable with",
    "Send your contribution",
    "That's it — you've helped feed and hydrate someone today",
  ],
  trustLine:
    "This is run by independent volunteers. We're not raising money on behalf of any party or organization — just people helping people.",
  shareLabel: "Share This Page",
};

export const TELEGRAM = {
  h2: "Join Our Telegram Group",
  subhead:
    "This is where we coordinate — who needs food, where water is running low, how you can help beyond money.",
  welcomeLine: "You're welcome here whether you want to volunteer, contribute, or just stay updated.",
  button: "Join Telegram",
};

export const TRANSPARENCY = {
  h2: "Where Your Contribution Goes",
  body: "Every contribution goes toward one thing: food and water for people at the protest. We don't take a cut, and we don't use it for anything else. As this grows, we'll keep sharing openly how funds are used.",
  breakdown: ["Food purchases", "Drinking water", "Getting it to people", "Nothing else"],
};

// Real numbers only — this section is left out of the build entirely (rather
// than filled with placeholder stats) until there is at least one real figure
// to show. Add entries here to make the Community section appear on the
// homepage automatically.
export const COMMUNITY_STATS: { label: string; value: string }[] = [];

export const FAQ_ITEMS = [
  {
    question: "What is this for?",
    answer: "We provide food and drinking water to people at the protest. That's the entire scope of what we do.",
  },
  {
    question: "Are you officially affiliated with the movement?",
    answer:
      "No. We're independent supporters, not organizers, and we don't speak for the movement or any party.",
  },
  {
    question: "How do I contribute?",
    answer: "Scan the QR code or use the UPI ID on the Contribute page. There's no minimum and no obligation.",
  },
  {
    question: "Where does the money go?",
    answer: "Only food, water, and the cost of getting them to people. Nothing else.",
  },
  {
    question: "Is contributing mandatory?",
    answer: "No — entirely voluntary. Nobody is asked or pressured.",
  },
  {
    question: "How do I join Telegram?",
    answer: 'Tap "Join Telegram" anywhere on the site — you\'ll land straight in the group.',
  },
];

export const CONTACT = {
  h2: "Reach Us",
  subhead: "Questions, want to volunteer, or something doesn't look right? Tell us.",
};

export const FOOTER_DISCLAIMER =
  "Cockroach Janta Supporter is an independent, volunteer-run initiative providing food and water to people at the protest. We are not an official channel of, and are not affiliated with, any political party or organization, and we do not organize or speak for the movement. Contributions are entirely voluntary and are used solely for food, water, and the cost of delivering them. This site does not constitute legal, tax, or financial advice.";
