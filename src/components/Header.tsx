import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HambergerMenu } from "iconsax-react";
import { X } from "lucide-react"
import Profile from "../assets/images/profile-pic.svg"

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* ── Desktop Pill Navbar ── */}
            <nav className="fixed top-[40px] left-1/2 z-50 -translate-x-1/2 hidden md:block">
                <div className="flex items-center gap-2 rounded-full bg-[#1A1A1A10] p-2 border border-[#1a1a1a07] backdrop-blur-xs">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={(e) => {
                                if (window.location.pathname === "/") {
                                    e.preventDefault();
                                    const targetId = link.path === "/" ? "home" : link.path.replace("/", "");
                                    const element = document.getElementById(targetId);
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }
                            }}
                            className={({ isActive }) =>
                                `relative overflow-hidden rounded-full px-7.5 py-2.5 text-base font-medium transition-all duration-300 ${isActive
                                    ? "bg-[#1A1A1A] text-white"
                                    : "text-[#1a1a1a] hover:bg-[#1a1a1a10] hover:text-[#1a1a1a] hover:backdrop-blur-3xl"
                                }`
                            }
                            style={({ isActive }) =>
                                isActive
                                    ? { boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6), inset 0 1px 3px rgba(0,0,0,0.4)" }
                                    : {}
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <span
                                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20"
                                            style={{ width: "40px", height: "40px", filter: "blur(14px)" }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
            </nav>

            {/* ── Mobile Top Bar ── */}
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 md:hidden">
                {/* Brand / Profile pill */}
                <div className="flex items-center justify-center rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] text-[#1A1A1A] py-1.5 pl-1.5 pr-4 select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.05),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#EFEFEF] gap-2">
                    <img
                        src={Profile}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover border border-[#1a1a1a10]"

                    />
                    <div className="leading-tight">
                        <p className="text-sm font-semibold text-[#1a1a1a]">Kuberan</p>
                        <p className="text-xs text-[#1a1a1a80]">Frontend Developer</p>
                    </div>
                </div>

                {/* Hamburger button */}
                <button
                    id="mobile-menu-toggle"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open navigation menu"
                    className="flex items-center justify-center rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] text-[#1A1A1A] p-4 select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.05),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#EFEFEF]"
                >
                    <HambergerMenu size={22} color="#1a1a1a" variant="Linear" />
                </button>
            </div>

            {/* ── Mobile Fullscreen Drawer ── */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={closeMenu}
            />

            {/* Drawer panel */}
            <div
                className={`fixed inset-0 z-[70] flex flex-col bg-[#f5f5f3] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center justify-center rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] text-[#1A1A1A] py-1.5 pl-1.5 pr-4 select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.05),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#EFEFEF] gap-2">
                        <img
                            src={Profile}
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover border border-[#1a1a1a10]"

                        />
                        <div className="leading-tight">
                            <p className="text-sm font-semibold text-[#1a1a1a]">Kuberan</p>
                            <p className="text-xs text-[#1a1a1a80]">Frontend Developer</p>
                        </div>
                    </div>

                    {/* Close button */}
                    <button
                        id="mobile-menu-close"
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                        className="flex items-center justify-center rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] text-[#1A1A1A] p-4 select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.05),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#EFEFEF]"
                    >
                        <X size={22} color="#1a1a1a" />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-6">
                    {navLinks.map((link, i) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={(e) => {
                                if (window.location.pathname === "/") {
                                    e.preventDefault();
                                    const targetId = link.path === "/" ? "home" : link.path.replace("/", "");
                                    const element = document.getElementById(targetId);
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }
                                closeMenu();
                            }}
                            className={({ isActive }) =>
                                `w-full text-center text-5xl font-semibold py-3 transition-all duration-200 ${isActive
                                    ? "text-[#1a1a1a]"
                                    : "text-[#1a1a1a50] hover:text-[#1a1a1a]"
                                }`
                            }
                            style={{
                                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                                opacity: menuOpen ? 1 : 0,
                            }}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Footer */}
                <p className="text-center text-sm text-[#1a1a1a50] pb-8">
                    © 2026, Kuberan
                </p>
            </div>
        </>
    );
}