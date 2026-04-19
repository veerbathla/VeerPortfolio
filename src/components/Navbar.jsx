import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        const offset = 70;

        const y =
            element.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });

        setOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"];
            let current = "home";

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (!section) return;

                const sectionTop = section.offsetTop - 100;

                if (window.scrollY >= sectionTop) {
                    current = id;
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="
w-full h-20 flex items-center justify-between 
px-6 md:px-8 
bg-[#0f0f0f]

sticky top-0 z-50
">

            {/* Logo */}
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-[#f5f5f5]">
                Veer Singh
            </h2>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-8 text-[#a1a1aa] font-medium">

                {["home", "about", "projects"].map((item) => (
                    <li
                        key={item}
                        className="relative group cursor-pointer capitalize hover:text-white transition-colors"
                        onClick={() => scrollToSection(item)}
                    >
                        {item}
                        <span
                            className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${active === item
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}
                        ></span>
                    </li>
                ))}
            </ul>

            {/* Contact Button */}
            <div className="hidden md:block">
                <button
                    onClick={() => scrollToSection("contact")}
                    className="
px-5 py-2 
border border-[#27272a] 
rounded-md 
bg-white text-black 
transition-all duration-300 
hover:bg-[#e5e5e5] hover:scale-105 active:scale-100
"
                >
                    Contact
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setOpen(!open)}
                    className="text-2xl text-[#f5f5f5]"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="
absolute top-20 left-0 w-full 
bg-[#0f0f0f] 
border-t border-[#27272a]
flex flex-col items-center py-6 gap-6 
md:hidden text-[#a1a1aa]
">

                    {["home", "about", "projects"].map((item) => (
                        <div
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="hover:text-white transition-colors cursor-pointer capitalize"
                        >
                            {item}
                        </div>
                    ))}

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="
px-5 py-2 
border border-[#27272a] 
rounded-md 
bg-white text-black
"
                    >
                        Contact
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;