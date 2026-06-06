export const siteConfig = {
  name: "DevStudio",
  tagline: "Custom software solutions built around your business. If you can imagine it, we can build it.",
  description:
    "DevStudio is a software development team specializing in modern websites and Flutter mobile applications. From concept to launch, we help clients bring their digital products to life.",
  url: "https://devstudio-website.vercel.app",
  locale: "en_US",
  keywords: [
    "web development",
    "flutter app development",
    "mobile app development",
    "freelance software developer",
    "custom website",
    "UI UX design",
    "software development agency",
  ],
  email: "seifhish1118@gmail.com",
  phone: "+20 105 568 6490",
  social: {
    tiktok: "https://tiktok.com/@devstudio",
    instagram: "https://instagram.com/devstudio",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#portfolio" },
    { label: "Team", href: "#team" },
    { label: "Contact Us", href: "#contact" },
  ],
  stats: [
    { value: "12", label: "Projects delivered", progress: 0.75 },
    { value: "4", label: "Team members", progress: 0.6 },
    { value: "2", label: "Core platforms", progress: 0.5 },
  ],
  services: [
    {
      title: "Web",
      subtitle: "Development",
      description:
        "Fast, responsive websites and web apps built with modern frameworks. Landing pages, dashboards, and full-stack products tailored to your brand.",
    },
    {
      title: "Flutter",
      subtitle: "Mobile",
      description:
        "Cross-platform iOS and Android apps from a single codebase. We handle UI, APIs, and app store deployment so you can focus on your business.",
    },
    {
      title: "UI / UX",
      subtitle: "Design",
      description:
        "Clean interfaces and thoughtful user flows. We design experiences that look sharp on social media and convert visitors into clients.",
    },
    {
      title: "Ongoing",
      subtitle: "Support",
      description:
        "Maintenance, updates, and feature additions after launch. Your product keeps growing without you needing to hire in-house.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Consult",
      description:
        "We learn your goals, audience, and timeline. A short call or message thread is enough to scope the project.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Wireframes and visual direction aligned with your brand. You approve before we write a line of code.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "Iterative development with regular check-ins. Web or Flutter — we ship in focused sprints.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "Deploy, test, and hand off. We stay available for support and the next version of your product.",
    },
  ],
  portfolio: [
    {
      title: "Ridey - Car Rental App",
      category: "Flutter",
      description:
        "Ridey is a car rental app that allows users to rent a car from a nearby location. It is a cross-platform app built with Flutter and Dart.",
    },
    {
      title: "Boutique E-Commerce",
      category: "Web",
      description:
        "Custom storefront with checkout, inventory sync, and mobile-first product pages.",
    },
    {
      title: "ERP System for a Home Cleaning Company",
      category: "Web",
      description:
        "ERP System for a Home Cleaning Company that allows users to manage their customers, orders, and inventory.",
    },
  ],
  team: [
    {
      name: "Seif Hisham",
      role: "Lead Developer",
      bio: "Full-stack Software Developer. Turns client ideas into shipped products.",
    },
    {
      name: "Ahmed Hossam",
      role: "Software Developer",      
      bio: "Flutter specialist focused on performance and app store releases.",
    },
    {
      name: "Mohammed Said",
      role: "Data Analyst",
      bio: "turning complex data into actionable business insights.",
    },
    {
      name: "Mahmoud Ossama",
      role: "Oracle Developer",
      bio: "Oracle Developer specializing in building scalable ERP systems and business solutions.",
    },
  ],
  testimonials: [
    {
      quote:
        "DevStudio delivered our app on time and on budget. Communication was clear every step of the way.",
      author: "Ramy ElSaid",
      role: "Small business owner",
    },
    {
      quote:
        "Our new website looks professional and loads fast. We started getting inquiries within the first week.",
      author: "Shaimaa",
      role: "Startup founder",
    },
    {
      quote:
        "They understood our Flutter requirements immediately and shipped a polished MVP in six weeks.",
      author: "Marwan ElKahky",
      role: "Product Owner",
    },
  ],
} as const;
