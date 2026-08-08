const Project = [
  {
    id:"1",
    image:"vybz.png",
    title: "Vybz",
    description:
      "A real-time chat application where users can connect, send friend requests, and communicate through messaging and calls.",
    techStack: {
      Frontend: ["React.js", "Tailwind CSS", "DaisyUI"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB"],
      State: ["Zustand"],
      DataFetching: ["React Query"],
      Realtime: ["Socket.io / Stream"],
    },
    features: [
      "Authentication system",
      "Friend requests",
      "Real-time messaging",
      "Audio/Video calls",
      "Notifications",
    ],
     featured: true, 
    live: "https://vybz-chatapp.onrender.com/",
    github: "https://github.com/veerbathla/Vybz",
  },

  {
    id:"2",
    image:"hostex.png",
    title: "HosteX",
    description:
      "A full-stack hostel management SaaS platform designed to streamline hostel operations.\n\n",
    techStack: {
      Frontend: ["React.js", "Tailwind CSS", "ShadCN UI"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB"],
      State: ["Zustand"],
      DataFetching: ["React Query"],
      Authentication: ["JWT", "Role-Based Access Control"],
    },
    features: [
      "Role-based authentication system",
      "Admin & Super Admin dashboards",
      "Hostel and room management",
      "Student registration and approvals",
      "Real-time data updates",
    ],
     featured: true, 
    live: "https://hoste-x.vercel.app/",
    github: "https://github.com/veerbathla/HosteX",
  },
  {
  id: "3",
  image: "zaflora.png",
  title: "ZaFlora Petals",
  description:
    "A fully functional e-commerce flower store built with WordPress and WooCommerce, designed to provide a seamless online shopping experience with secure payments, product management, and a responsive user interface.",

  techStack: {
    CMS: ["WordPress"],
    Ecommerce: ["WooCommerce"],
    Builder: ["Elementor"],
    Theme: ["Blocksy"],
    Forms: ["WPForms"],
    Payments: ["Razorpay"],
    Hosting: ["Hostinger"],
  },

  features: [
    "Product catalog",
    "Category-based shopping",
    "Shopping cart & checkout",
    "Secure online payments",
    "Responsive design",
    "Customer contact form",
    "Order management",
    "Shipping configuration",
    "Discount coupons",
    "SEO-friendly structure",
  ],
   featured: true, 

  live: "https://zaflorapetals.xo.je",
  github: "",
},
  {
    id:"4",
    image:"kmom.png",
    title: "K Mom's Bakehouse",
    description:
      "An elegant and modern bakery website crafted to showcase premium baked goods.\n",

    techStack: {
      Frontend: ["React.js", "Tailwind CSS", "Vite"],
      UI: ["Framer Motion", "Swiper", "AOS", "React Icons"],
      Routing: ["React Router DOM"],
      Communication: ["EmailJS", "WhatsApp Integration"],
      Typography: [
        "Playfair Display",
        "Plus Jakarta Sans",
        "Poppins",
      ],
    },

    features: [
      "Product showcase",
      "WhatsApp ordering",
      "Contact form",
      "Responsive design",
    ],
     featured: false, 

    live: "https://kmomsbakehouse.vercel.app",
    github: "https://github.com/veerbathla/kmoms-bakehouse",
  },
  {
  id: "5",
  image: "alferedo.png",
  title: "Cafe Alferedo",
  description:
    "A modern and visually engaging café website built with React, featuring elegant UI animations, interactive menu sections, smooth navigation, and responsive design to deliver a premium dining experience.",

  techStack: {
    Frontend: ["React.js", "Tailwind CSS", "Vite"],
    UI: [
      "Framer Motion",
      "Embla Carousel",
      "AOS",
      "React Icons",
      "Lucide React",
    ],
    Routing: ["React Router DOM"],
    Communication: ["EmailJS"],
    Utilities: [
      "Class Variance Authority",
      "clsx",
      "tailwind-merge",
    ],
  },

  features: [
    "Interactive menu showcase",
    "Animated hero section",
    "Smooth scrolling navigation",
    "Image carousel",
    "Contact & reservation form",
    "Responsive design",
    "Scroll animations",
    "Modern UI/UX",
  ],
  featured: false,

  live: "https://cafe-alferedoo.vercel.app/",
  github:"https://github.com/veerbathla/cafe-alferedoo",
},
{
  id: "6",
  image: "city-healthcare.png",
  title: "City Healthcare",
  description:
    "A comprehensive hospital website built to provide patients with easy access to healthcare information, doctors, departments, specialties, services, and hospital resources through a modern and responsive digital platform.",
  techStack: {
    Frontend: ["React.js", "Tailwind CSS"],
    UI: ["Lucide React", "React Icons"],
    State: ["React Hooks"],
    Internationalization: ["i18next", "react-i18next"],
    Data: ["Structured JSON-based data architecture"],
    Backend: ["Node.js", "Express.js"],
  },
  features: [
    "Responsive hospital website with modern healthcare-focused UI",
    "Doctor listing and individual doctor profile pages",
    "Department and specialty management",
    "Dynamic department detail pages",
    "Medical services and diagnostic information sections",
    "Doctor search and navigation functionality",
    "Multi-language support for English, Hindi, and Punjabi",
    "Responsive navigation with mobile menu",
    "Hospital contact and appointment-oriented sections",
    "Reusable component-based React architecture",
    "Structured data architecture for doctors and departments",
    "FAQ, facilities, diagnostics, treatments, and healthcare information sections",
  ],
  featured: false,
  live: "https://www.cityhealthcaresirsa.in/",
  github: "",
},
{
  id: "7",
  image: "shree-ram-building-masters.png",
  title: "Shree Ram Building Masters",
  description:
    "A modern architecture and construction company website built to present projects, services, and company information through a visually engaging and premium digital experience.",
  techStack: {
    Frontend: ["React.js", "Tailwind CSS"],
    UI: ["Framer Motion", "AOS", "Lucide React"],
    Animation: ["AOS", "Framer Motion"],
    Interaction: ["Embla Carousel", "Lenis"],
    Deployment: ["Vercel"],
  },
  features: [
    "Modern architecture-focused UI design",
    "Fully responsive website",
    "Animated hero section with dynamic content",
    "Smooth scrolling and scroll-based interactions",
    "Project and service showcase sections",
    "Animated statistics and counters",
    "Responsive navigation and mobile menu",
    "Reusable and component-based React architecture",
    "Premium visual presentation with interactive animations",
  ],
  featured: false,
  live: "https://shree-ram-building-masters-zytu.vercel.app/",
  github: "",
},
{
  id: "8",
  image: "royalfamilies.png",
  title: "Royal Families",
  description:
    "A premium family-focused website designed to showcase royal heritage, family information, and related services through a modern and elegant digital experience.",
  techStack: {
    Frontend: ["React.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js"],
    Services: ["Nodemailer"],
    Deployment: ["Vercel"],
  },
  features: [
    "Premium and responsive user interface",
    "Royal family and heritage information sections",
    "Responsive layouts across desktop, tablet, and mobile",
    "Contact form with email integration using Nodemailer",
    "Reusable React components",
    "Modern navigation and interactive UI sections",
  ],
  featured: false,
  live: "https://royalfamilies.in/",
  github: "",
},
];
export default Project;