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
    live: "https://hoste-x.vercel.app/",
    github: "https://github.com/veerbathla/HosteX",
  },

  {
    id:"3",
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

    live: "https://kmomsbakehouse.vercel.app",
    github: "https://github.com/veerbathla/kmoms-bakehouse",
  },
];
export default Project;