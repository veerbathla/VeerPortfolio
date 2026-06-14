import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // ── On mount: prevent browser from restoring scroll position and jump to top
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // ── Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ── Scroll-spy: highlight whichever section is near the center of the viewport
  useEffect(() => {
    const ids = [...navLinks.map((link) => link.id), "hire-me"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // ── Smooth-scroll helper
  const scrollTo = (id, callback) => (e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    callback?.();
  };

  // ── Shared NavLink component
  const NavLink = ({ id, label, onClickExtra, className = "" }) => (
    <a
      href={`#${id}`}
      onClick={scrollTo(id, onClickExtra)}
      className={`group relative inline-block pb-1 transition-colors duration-300 ${
        active === id ? "text-black" : "text-gray-500 hover:text-black"
      } ${className}`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-0.5 h-px bg-black transition-all duration-300 ${
          active === id ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );

  return (
    <>
      <nav className="fixed top-4 left-0 w-full z-50 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200">
          {/* Logo — clicking it smoothly scrolls back to home */}
          <h1
            className="text-base sm:text-lg md:text-xl font-bold shrink-0 whitespace-nowrap cursor-pointer"
            onClick={scrollTo("home")}
          >
            Veer Singh
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.id} id={link.id} label={link.label} />
            ))}
          </div>

          {/* Desktop Button */}
          <a
            href="#hire-me"
            onClick={scrollTo("hire-me")}
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-black text-white hover:scale-105 transition-all shrink-0"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1 hover:opacity-75 transition-opacity shrink-0"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-[100dvh] w-[min(85vw,320px)] bg-white z-50 shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b shrink-0">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setOpen(false)} className="p-1" aria-label="Close menu">
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 text-lg overflow-y-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              id={link.id}
              label={link.label}
              onClickExtra={() => setOpen(false)}
            />
          ))}

          <a
            href="#hire-me"
            onClick={scrollTo("hire-me", () => setOpen(false))}
            className="mt-4 px-5 py-3 rounded-full bg-black text-white text-center shrink-0"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;