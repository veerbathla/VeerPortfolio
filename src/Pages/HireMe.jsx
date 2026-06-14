import React, { useEffect, useState } from "react";

/* ---------- Inline icons (no extra dependency needed) ---------- */

const WhatsAppIcon = ({ className }) => (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 224.1 32 100.1 32 0 132.1 0 256c0 47.6 14.1 92.4 38.4 130.9L0 480l97.5-37.1c34.3 18.6 73 28.5 113.4 28.5 124 0 224.1-100.1 224.1-224.1 0-59.9-22.9-115.7-65.1-159.7zM224.1 438.9c-35.7 0-70.4-9.9-100.6-28.4l-7.2-4.3-72.5 27.6 27.7-71.5-4.7-7.5C49.7 326.2 38.4 291.6 38.4 256c0-101.8 82.7-184.5 184.5-184.5 49.3 0 95.6 19.2 130.5 54.1 34.9 34.9 54.1 81.2 54.1 130.5 0 101.9-82.7 184.8-184.4 184.8zm103.5-138.5c-5.6-2.8-33.2-16.4-38.4-18.3-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.4 18.3-17.7 22-3.3 3.7-6.5 4.2-12.1 1.4-32.5-16.2-53.8-29-75.1-65.7-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.6.9-6.7-.4-9.5-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.5 19.1-19.5 46.6 0 27.5 20 54.1 22.8 57.8 2.8 3.7 38.7 59.1 95.3 80.5 47.4 17.9 57.1 14.4 67.5 12.1 10.4-2.3 33.2-13.6 37.9-26.7 4.6-13.1 4.6-24.3 3.2-26.7-1.3-2.5-5-3.9-10.6-6.6z" />
    </svg>
);

const LinkedInIcon = ({ className }) => (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor">
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-303.5c-29.71 0-53.84-24.13-53.84-53.84S24.13 36.82 53.84 36.82s53.84 24.13 53.84 53.84-24.13 53.84-53.84 53.84zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.5-58.4-23.7 0-37.8 16-44 31.4-2.3 5.6-2.9 13.4-2.9 21.3V448h-92.7s1.2-241.3 0-266.4h92.7v37.8c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.4-46.2 83.8-46.2 61.2 0 107.3 40 107.3 126.1V448z" />
    </svg>
);

const InstagramIcon = ({ className }) => (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
);

const ArrowIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
);

/* Service icons — simple outline style, deliberately distinct from the brand glyphs above */

const DesignIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 2-2 2 2 0 0 1 2-2h1a2 2 0 0 0 2-2A9 9 0 0 0 12 3z" />
        <circle cx="7.5" cy="10.5" r="1.25" fill="currentColor" stroke="none" />
        <circle cx="10.5" cy="7" r="1.25" fill="currentColor" stroke="none" />
        <circle cx="15.5" cy="8" r="1.25" fill="currentColor" stroke="none" />
    </svg>
);

const CodeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18 3 12l6-6" />
        <path d="M15 6l6 6-6 6" />
    </svg>
);

const BoltIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
);

const RefreshIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-2.64-6.36" />
        <path d="M21 3v6h-6" />
    </svg>
);

/* ----------------------------------------------------------------- */

const services = [
    {
        icon: DesignIcon,
        title: "UI & Web Design",
        description:
            "Wireframes, visual design and clean, well-thought-out interfaces that turn ideas into something people enjoy using.",
    },
    {
        icon: CodeIcon,
        title: "Frontend Development",
        description:
            "Responsive, accessible interfaces built with React and Tailwind CSS — fast to load and easy to maintain.",
    },
    {
        icon: BoltIcon,
        title: "Landing Pages & Portfolios",
        description:
            "Focused, single-page sites for personal brands, products or campaigns — built to load quickly and make an impression.",
    },
    {
        icon: RefreshIcon,
        title: "Website Redesigns",
        description:
            "Giving an existing site a modern, performance-minded refresh without losing what already works.",
    },
];

const process = [
    {
        step: "01",
        title: "Discover",
        description: "We talk through your goals, audience and scope to get a clear picture of what's needed.",
    },
    {
        step: "02",
        title: "Design",
        description: "Wireframes and a visual direction come first, with feedback rounds before any code is written.",
    },
    {
        step: "03",
        title: "Build",
        description: "Development happens in clear milestones, with regular updates so there are no surprises.",
    },
    {
        step: "04",
        title: "Launch",
        description: "Testing, deployment and a quick handover — plus support if anything needs tweaking after.",
    },
];

const openTo = ["Freelance Projects", "Internships", "Open Source & Collabs"];

const HireMe = () => {

    const whatsappMessage = encodeURIComponent(
        "Hi Veer, I came across your portfolio and would like to talk about working together."
    );
    const whatsappLink = `https://wa.me/917496813276?text=${whatsappMessage}`;

    const socialLinks = [
        { name: "WhatsApp", href: whatsappLink, icon: WhatsAppIcon },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/veer-singh-190b9631b/", icon: LinkedInIcon },
        { name: "Instagram", href: "https://instagram.com/devwithveer_", icon: InstagramIcon },
    ];

    return (
        <div className="w-full">

            {/* Hero */}
            <section className="w-full pt-28 md:pt-40 pb-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl">
                        <span className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
                            Availability
                        </span>

                        <h1 className="text-4xl md:text-6xl font-semibold text-black mt-3 mb-5 tracking-tight leading-[1.1]">
                            Open for freelance work, internships &amp; collabs
                        </h1>

                        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
                            I design and build clean, fast, responsive websites. Whether
                            it's a short-term project, an internship, or an open-source
                            collaboration — if it involves building something for the
                            web, I'd love to hear about it.
                        </p>

                        {/* Open to */}
                        <div className="flex flex-wrap gap-2.5 mb-10">
                            {openTo.map((label) => (
                                <span
                                    key={label}
                                    className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-600"
                                >
                                    {label}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
                            >
                                <WhatsAppIcon className="h-4 w-4" />
                                Chat on WhatsApp
                            </a>
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:border-black"
                            >
                                Send a message
                                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>

                       
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="w-full py-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-12">
                        <span className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
                            Services
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-black mt-3 tracking-tight">
                            What I can help with
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {services.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-gray-200 p-7 transition-colors duration-300 hover:border-black"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 mb-5">
                                    <Icon className="h-5 w-5 text-black" />
                                </div>
                                <h3 className="text-lg font-medium text-black mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="w-full py-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-12">
                        <span className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
                            Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-black mt-3 tracking-tight">
                            How we'd work together
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden">
                        {process.map(({ step, title, description }) => (
                            <div key={step} className="bg-white p-7">
                                <span className="text-sm font-medium text-gray-400 tracking-widest">
                                    {step}
                                </span>
                                <h3 className="text-lg font-medium text-black mt-3 mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="w-full py-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-3xl border border-gray-200 px-8 py-16 md:px-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight mb-4">
                            Have something in mind?
                        </h2>
                        <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
                            Tell me about your project, role or idea — freelance,
                            internship or just a collab, I'm happy to chat.
                        </p>

                        <div className="flex justify-center gap-3">
                            {socialLinks.map(({ name, href, icon: Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    title={name}
                                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                                >
                                    <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HireMe;