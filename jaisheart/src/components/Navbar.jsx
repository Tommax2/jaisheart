import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "/logo.jpeg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const closeMenu = () => setToggle(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const renderLink = (link) => {
    const baseClasses =
      "text-[15px] font-semibold tracking-wide transition-all duration-300";
    const isActive = active === link.title;
    const activeClasses = isActive
      ? "text-white"
      : "text-secondary hover:text-white";

    if (link.id === "download") {
      return (
        <a
          href="https://drive.google.com/uc?export=download&id=1TVUyKPTItME5uOSKFyY_QAT7XvH3O85d"
          className={`${baseClasses} rounded-full border border-cyan-200/20 bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 px-4 py-2 text-white shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:from-cyan-300/30 hover:to-indigo-300/30`}
        >
          {link.title}
        </a>
      );
    }

    return (
      <a href={`#${link.id}`} className={`${baseClasses} ${activeClasses}`}>
        {link.title}
      </a>
    );
  };

  const renderMobileLink = (link) => {
    if (link.id === "download") {
      return (
        <a
          href="https://drive.google.com/uc?export=download&id=1TVUyKPTItME5uOSKFyY_QAT7XvH3O85d"
          className="group flex items-center justify-center gap-3 rounded-xl border border-cyan-300/30 bg-gradient-to-r from-cyan-400/25 to-indigo-400/25 px-4 py-3 text-center text-white shadow-[0_0_18px_rgba(34,211,238,0.2)] transition-all duration-300 hover:from-cyan-300/35 hover:to-indigo-300/35"
        >
          <span className="text-[14px] font-semibold tracking-wide">{link.title}</span>
          <span className="text-[18px] transition-transform duration-300 group-hover:translate-x-1">
            >
          </span>
        </a>
      );
    }

    const isActive = active === link.title;
    return (
      <a
        href={`#${link.id}`}
        className={`group flex items-center justify-center gap-3 rounded-xl border px-4 py-3 text-center transition-all duration-300 ${
          isActive
            ? "border-white/20 bg-white/10 text-white"
            : "border-white/10 bg-white/[0.03] text-secondary hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
        }`}
      >
        <span className="text-[14px] font-semibold tracking-wide">{link.title}</span>
        <span className="text-[18px] transition-transform duration-300 group-hover:translate-x-1">
          >
        </span>
      </a>
    );
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-30 w-screen max-w-[100vw] overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 h-20 bg-gradient-to-r from-[#050816]/95 via-[#151030]/95 to-[#050816]/95 backdrop-blur-xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[78px] h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="relative w-full px-4 xs:px-6 sm:px-16">
        <div className="flex h-20 w-full items-center justify-between">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 pr-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 rounded-full border border-cyan-300/40 object-cover shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          />
          <p className="max-w-[45vw] cursor-pointer truncate bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-[16px] font-bold text-transparent xs:max-w-none xs:text-[18px]">
            Jaistechworld
          </p>
        </Link>
        <ul className="hidden list-none flex-row items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-2 shadow-[0_8px_40px_rgba(0,0,0,0.45)] sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer rounded-full px-4 py-2 ${
                active === link.title
                  ? "bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
                  : ""
              }`}
              onClick={() => setActive(link.title)}
            >
              {renderLink(link)}
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center justify-end sm:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={toggle}
            className="flex h-11 w-11 flex-col justify-center gap-1.5 rounded-xl border border-white/15 bg-white/10 p-2 backdrop-blur transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/15"
            onClick={() => setToggle(!toggle)}
          >
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${toggle ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${toggle ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${toggle ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
      </div>

      <div
        onClick={() => setToggle(false)}
        className={`${
          toggle ? "opacity-100" : "pointer-events-none opacity-0"
        } absolute left-0 top-20 h-[calc(100vh-5rem)] w-full bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 sm:hidden`}
      />

      <div
        className={`${
          !toggle
            ? "pointer-events-none translate-y-2 opacity-0"
            : "pointer-events-auto translate-y-0 opacity-100"
        } absolute inset-x-4 top-20 rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f172a]/95 via-[#111827]/95 to-[#020617]/95 px-5 pb-5 pt-4 shadow-2xl transition-all duration-300 sm:hidden`}
      >
        <div className="mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70">
            Navigation
          </p>
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
        </div>
        <ul className="flex list-none flex-col gap-2">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => {
                setToggle(false);
                setActive(link.title);
              }}
            >
              {renderMobileLink(link)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
