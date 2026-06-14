import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

/* ----------------------------------------------------------------- */

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState("");

    // Live IST clock — small, useful detail rather than decoration
    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_3axwi0f",
                "template_jlxpa1i",
                form.current,
                "q5niYFVqmj_8Wb7-F"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                    setLoading(false);
                },
                (error) => {
                    console.error(error);
                    alert("Failed to send message");
                    setLoading(false);
                }
            );
    };

    const message = encodeURIComponent(
        "Hi Veer, I saw your portfolio and would like to connect."
    );

    const socialLinks = [
        {
            name: "WhatsApp",
            href: `https://wa.me/917496813276?text=${message}`,
            icon: WhatsAppIcon,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/veer-singh-190b9631b/",
            icon: LinkedInIcon,
        },
        {
            name: "Instagram",
            href: "https://instagram.com/devwithveer_",
            icon: InstagramIcon,
        },
    ];

    return (
        <section className="w-full pt-28 md:pt-36 pb-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="mb-16 md:mb-20 max-w-2xl">
                    <span className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
                        Contact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-black mt-3 mb-4 tracking-tight">
                        Let's create something together
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                        Have a project, an idea, or just want to say hi? My inbox
                        and DMs are always open.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

                    {/* LEFT */}
                    <div className="flex flex-col justify-between gap-12">

                        <div className="space-y-6">
                            {/* Live status */}
                            <div className="flex items-center gap-2.5 text-sm text-gray-500">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                </span>
                                <span>
                                    Based in India{time ? ` · ${time} IST` : ""}
                                </span>
                            </div>

                            <p className="text-gray-600 leading-relaxed max-w-md">
                                The fastest way to reach me is on WhatsApp, or
                                fill out the form and I'll get back to you
                                within a day.
                            </p>
                        </div>

                        {/* Social links */}
                        <div>
                            <h3 className="text-sm font-medium text-black mb-4 tracking-wide">
                                Find me on
                            </h3>
                            <div className="flex gap-3">
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

                    {/* RIGHT: Form */}
                    <form ref={form} onSubmit={sendEmail} className="space-y-7">
                        <div>
                            <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                placeholder="Your name"
                                className="w-full border-b border-gray-200 bg-transparent py-2.5 text-black placeholder:text-gray-300 outline-none transition-colors duration-300 focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                placeholder="you@example.com"
                                className="w-full border-b border-gray-200 bg-transparent py-2.5 text-black placeholder:text-gray-300 outline-none transition-colors duration-300 focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                placeholder="Tell me a bit about your project..."
                                className="w-full border-b border-gray-200 bg-transparent py-2.5 text-black placeholder:text-gray-300 outline-none transition-colors duration-300 focus:border-black resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                            {!loading && (
                                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            )}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;