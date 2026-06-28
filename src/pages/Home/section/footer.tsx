import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram } from "iconsax-react";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Connect submission:", { name, email, message });
    };

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 95%",
                end: "bottom 95%",
                scrub: 2.0,
            }
        });

        // Top CTA Banner
        tl.fromTo(".footer-cta-banner",
            { opacity: 0, y: 40, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 1.2 }
        );

        // Left navigation card
        tl.fromTo(".footer-nav-card",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 1.2 },
            "-=0.9"
        );

        // Staggered navigation links inside left card
        tl.fromTo(".footer-nav-link",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
            "-=0.7"
        );

        // Staggered social capsules at the bottom of left card
        tl.fromTo(".footer-social-btn",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, stagger: 0.12, ease: "back.out(1.4)" },
            "-=0.5"
        );

        // Right contact form
        tl.fromTo(".footer-form-card",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 1.2 },
            "-=1.2"
        );

        // Staggered form fields inside contact form
        tl.fromTo(".footer-form-field",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
            "-=0.7"
        );

        // Copyright bar
        tl.fromTo(".footer-copyright",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.9 },
            "-=0.4"
        );
    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            className="relative w-full px-5 md:px-[120px] py-16 md:py-20 font-urbanist bg-[#fcfcfc] flex flex-col gap-6"
        >

            {/* ── Top CTA Banner ── */}
            <div className="footer-cta-banner w-full flex flex-col md:flex-row items-center justify-between p-6 md:p-8 bg-white border border-[#1a1a1a08] rounded-[32px] shadow-[0_16px_20px_0_rgba(0,0,0,0.05)] gap-6">
                <h3 className="text-[24px] md:text-[32px] font-semibold text-[#1a1a1a] tracking-tight text-center md:text-left">
                    Let's Build Something<br />Amazing Together.
                </h3>
                <div className="flex items-center gap-4">
                    <a
                        href="mailto:kuberan1810@gmail.com"
                        className=" rounded-full bg-[#1A1A1A] text-white px-8 md:px-10 py-3.5 md:py-4.5 text-base md:text-lg font-medium select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.15),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#2A2A2A] cursor-pointer"
                    >
                        <span
                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20"
                            style={{ width: "40px", height: "40px", filter: "blur(14px)" }}
                        />
                        <span className="relative z-10">Hire Me</span>
                    </a>

                    <button
                        className="rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] text-[#1A1A1A] px-6 md:px-7 py-3.5 md:py-4.5 text-base md:text-lg font-medium select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.05),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#EFEFEF] cursor-pointer"
                    >
                        View Resume
                    </button>
                </div>
            </div>

            {/* ── Main Grid (Links vs Form) ── */}
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Left Card: Navigation Links & Contacts */}
                <div className="footer-nav-card col-span-1 md:col-span-5 bg-[#1A1A1A] rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[420px] md:min-h-[460px] shadow-[0_16px_20px_0_rgba(0,0,0,0.15),inset_0_4px_6px_0_rgba(255,255,255,0.35)]">
                    {/* Links list */}
                    <div className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="footer-nav-link text-[20px] md:text-[32px] font-semibold text-[#ffffff] hover:text-[#7F7F7F] transition-colors duration-300 w-fit"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Bottom Contacts */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                        {/* Email capsule */}
                        <a
                            href="mailto:kuberan1810@gmail.com"
                            className="footer-social-btn flex items-center gap-2 rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] text-[#1A1A1A] px-6 md:px-7 py-3.5 md:py-4.5 text-base md:text-lg font-medium select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_8px_16px_rgba(0,0,0,0.08),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.05),inset_0_6px_10px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.02)] hover:bg-[#EFEFEF] cursor-pointer"
                        >
                            <span>kuberan1810@gmail.com</span>
                        </a>

                        {/* LinkedIn Circle */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-social-btn rounded-full border border-[#1a1a1a10] bg-[#f5f5f5] text-[#1a1a1a] px-6 md:px-7 py-3.5 md:py-4 text-sm md:text-base select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_8px_16px_rgba(0,0,0,0.08),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.05),inset_0_6px_10px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.02)] hover:bg-[#EFEFEF] cursor-pointer"
                        >
                            <p className="text-[#1a1a1a]  text-xl font-bold" >in</p>
                        </a>
                        
                        {/* Instagram Circle */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-social-btn text-[#1a1a1a70] hover:text-[#1a1a1a] transition-colors rounded-full border border-[#1a1a1a10] bg-[#f5f5f5] p-4 select-none duration-500 ease-in-out overflow-hidden relative shadow-[0_8px_16px_rgba(0,0,0,0.08),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.05),inset_0_6px_10px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.02)] hover:bg-[#EFEFEF] cursor-pointer"
                        >
                            <Instagram size={26} color="#1a1a1a" />
                        </a>
                    </div>
                </div>

                {/* Right Card: Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="footer-form-card col-span-1 md:col-span-7 bg-[#1A1A1A] rounded-[32px] p-8 md:p-10 flex flex-col justify-between gap-6 shadow-[0_16px_20px_0_rgba(0,0,0,0.15),inset_0_4px_6px_0_rgba(255,255,255,0.35)]"
                >
                    <div className="flex flex-col gap-5 w-full">
                        <h4 className="footer-form-field text-[22px] md:text-[32px] font-semibold text-white">
                            Let's Connect
                        </h4>

                        {/* Name field */}
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="footer-form-field w-full bg-[#FFFFFF12] text-white placeholder-[#ffffff40] border border-[#ffffff10] focus:ring-[#ffffff60] focus:ring-1 outline-none px-5 py-6 rounded-[20px] transition-all text-[15px] font-medium capitalize"
                        />

                        {/* Email field */}
                        <input
                            type="email"
                            placeholder="Company Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="footer-form-field w-full bg-[#FFFFFF12] text-white placeholder-[#ffffff40] border border-[#ffffff10] focus:ring-[#ffffff60] focus:ring-1 outline-none px-5 py-6 rounded-[20px] transition-all text-[15px] font-medium "
                        />

                        {/* Textarea */}
                        <textarea
                            placeholder="Tell me about the opportunity..."
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="footer-form-field w-full bg-[#FFFFFF12] text-white placeholder-[#ffffff40] border border-[#ffffff10] focus:ring-[#ffffff60] focus:ring-1 outline-none px-5 py-6 rounded-[20px] transition-all text-[15px] font-medium  resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="footer-form-field w-full bg-white text-[#1a1a1a] py-4.5 rounded-full text-base font-semibold select-none transition-all duration-500 ease-in-out shadow-[0_12px_24px_rgba(255,255,255,0.06)] hover:bg-[#FAFAFA] active:scale-[0.99] cursor-pointer text-center text-lg"
                    >
                        Let's Connect
                    </button>
                </form>

            </div>

            {/* ── Copyright Bar ── */}
            <div className="footer-copyright w-full bg-[#1A1A1A] rounded-[24px] py-10 px-8 text-center md:text-left">
                <p className="text-[16px] text-[#ffffff50] font-medium">
                    © 2026 Kuberan. All Rights Reserved.
                </p>
            </div>

        </section>
    );
};

export default Footer;
