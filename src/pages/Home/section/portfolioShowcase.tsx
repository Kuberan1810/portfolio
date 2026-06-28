import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrushStroke from "../../../assets/images/skill-b.svg";
import heroDp from "../../../assets/images/image.png";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
    id: string;
    bgColor: string;
    name: string;
    category: string;
    img?: string;
    href?: string;
}

const ProjectCard = ({ bgColor, name, category, img, href = "#" }: ProjectCardProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-center items-center w-full h-[420px] md:h-[520px] rounded-[32px] overflow-hidden cursor-pointer select-none shadow-[0_16px_24px_0_rgba(0,0,0,0.10),inset_0_4px_6px_0_rgba(255,255,255,0.35)] hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.10),inset_0_8px_12px_0_rgba(255,255,255,0.35)] duration-500 ease-in-out "
            style={{ backgroundColor: bgColor }}
        >
            {/* Image — always visible, shifts UP on hover */}
            {img && (
                <div className="absolute inset-0 flex items-center justify-center px-8 pt-8 transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
                    <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-contain rounded-[20px] drop-shadow-2xl"
                    />
                </div>
            )}

            {/* Tag pills — slide up from bottom on hover */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 px-8 pb-0 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:pb-8 transition-all duration-500 ease-out pointer-events-none">
                {/* Project name pill */}
                <span className="inline-flex items-center bg-white text-[#1a1a1a] px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap shadow-[0_16px_24px_0_rgba(0,0,0,0.10),inset_0_4px_6px_0_rgba(255,255,255,0.35)]">
                    {name}
                </span>
                {/* Category pill with dot */}
                <span className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap shadow-[0_16px_24px_0_rgba(0,0,0,0.10),inset_0_4px_6px_0_rgba(255,255,255,0.35)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] flex-shrink-0" />
                    {category}
                </span>
            </div>
        </a>
    );
};

export const PortfolioShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const projects: ProjectCardProps[] = [
        {
            id: "tnstc",
            bgColor: "#FF7D24",
            name: "Tnstc",
            category: "Bus Booking",
            img: heroDp
        },
        {
            id: "fintech",
            bgColor: "#1E64FF",
            name: "Fintech",
            category: "E-Wallet App",
            img: heroDp
        },
        {
            id: "saas",
            bgColor: "#14B876",
            name: "SaaS",
            category: "CRM Platform",
            img: heroDp
        },
        {
            id: "ecommerce",
            bgColor: "#621E39",
            name: "E-Commerce",
            category: "Fashion Store",
            img: heroDp
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 95%",
                end: "bottom 40%",
                scrub: 2.0,
            }
        });

        tl.fromTo(".proj-tag",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2 }
        );
        tl.fromTo(".proj-brush",
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.8, ease: "power3.inOut" },
            "-=0.9"
        );
        tl.fromTo(".proj-annotation",
            { opacity: 0, scale: 0.85, rotation: 0 },
            { opacity: 1, scale: 1, rotation: 6, duration: 1.2, ease: "back.out(1.4)" },
            "-=0.6"
        );
        tl.fromTo(".proj-title",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2 },
            "-=0.8"
        );

        // Staggered slide up of ProjectCards
        tl.fromTo(".proj-card-wrapper",
            { opacity: 0, y: 60, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 1.1, stagger: 0.25 },
            "-=0.8"
        );

        // Explore button
        tl.fromTo(".proj-explore-btn",
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 1.0 },
            "-=0.8"
        );
    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            className="relative w-full px-5 md:px-[120px] py-20 md:py-28 overflow-hidden bg-[#fcfcfc]"
        >
            {/* ── Heading Block ── */}
            <div className="relative w-full flex flex-col items-center mb-16 md:mb-20">

                {/* ── Subtitle / section tag ── */}
                <div className="proj-tag instrument-serif-regular-italic text-[#1a1a1a] text-[28px] md:text-[40px] mb-5 tracking-tight">
                    <span className="text-[#1a1a1a]">/</span>
                    <span className="relative inline-block">
                        Portfolio Showcase
                        <img
                            src={BrushStroke}
                            alt=""
                            aria-hidden="true"
                            className="proj-brush absolute -left-2 w-full pointer-events-none select-none"
                        />
                    </span>
                </div>

                {/* ── Floating handwritten annotation ── */}
                <div
                    className="proj-annotation hidden md:block absolute right-[10%] top-6 caveat text-[20px] text-[#1a1a1a70] leading-tight text-start pointer-events-none select-none"
                    style={{ transform: "rotate(6deg)" }}
                >
                    Some of my
                    <br />
                    favorite projects
                </div>

                {/* ── Main title ── */}
                <h2 className="proj-title text-center font-normal leading-tight tracking-tight text-[32px] md:text-[54px] max-w-[800px]">
                    A collection of my best work.
                </h2>
            </div>

            {/* ── 2-column grid ── */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((proj) => (
                    <div key={proj.id} className="proj-card-wrapper w-full">
                        <ProjectCard {...proj} />
                    </div>
                ))}
            </div>

            {/* ── Explore Button ── */}
            <div className="w-full flex justify-center mt-16 md:mt-20">
                <button
                    className="proj-explore-btn flex items-center justify-center rounded-full bg-[#1A1A1A] text-white px-8 md:px-10 py-3.5 md:py-4.5 text-lg md:text-xl font-medium select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.15),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#2A2A2A] cursor-pointer"
                >
                    <span
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20"
                        style={{ width: "40px", height: "40px", filter: "blur(14px)" }}
                    />
                    <span className="relative z-10">Explore My Work</span>
                </button>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
