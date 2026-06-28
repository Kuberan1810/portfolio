
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrushStroke from "../../../assets/images/skill-b.svg";

gsap.registerPlugin(ScrollTrigger);

interface SkillCardProps {
    title: string;
    headerBg: string;
    items: string[];
    rotateClass: string;
}

const SkillCard = ({ title, headerBg, items, rotateClass }: SkillCardProps) => {
    return (
        <div 
            className={`skills-card w-full max-w-[340px] rounded-[24px] flex flex-col overflow-hidden shadow-soft select-none ${rotateClass}`}
        >
            {/* Header */}
            <div className="flex flex-col px-5 py-4 text-[16px] font-semibold text-white tracking-wide" style={{ backgroundColor: headerBg }}>
                {title}
            </div>

            {/* List Items */}
            <div className="flex flex-col bg-white">
                {items.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="flex flex-col px-5 py-4 text-[16px] md:text-[20px] text-[#1a1a1a] font-semibold border-t border-[#1a1a1a12]"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const categories: SkillCardProps[] = [
        {
            title: "UI/UX design",
            headerBg: "#ff751a",
            rotateClass: "md:-rotate-[5deg]",
            items: [
                "User Research",
                "Wireframing",
                "User Research",
                "Visual Hierarchy",
                "Responsive Design"
            ]
        },
        {
            title: "Frontend Skills",
            headerBg: "#1a5fff",
            rotateClass: "md:rotate-[5deg]",
            items: [
                "React.tsx",
                "Next.js",
                "React Native",
                "Tailwind CSS",
                " API Integration"
            ]
        },
        {
            title: "Tools & platforms",
            headerBg: "#13b879",
            rotateClass: "md:-rotate-[5deg]",
            items: [
                "Figma",
                "TypeScript",
                "Git & GitHub",
                "Vercel",
                "Swagger"
            ]
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

        tl.fromTo(".skills-tag",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2 }
        );
        tl.fromTo(".skills-brush",
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.8, ease: "power3.inOut" },
            "-=0.9"
        );
        tl.fromTo(".skills-annotation",
            { opacity: 0, scale: 0.85, rotation: 0 },
            { opacity: 1, scale: 1, rotation: -6, duration: 1.2, ease: "back.out(1.4)" },
            "-=0.6"
        );
        tl.fromTo(".skills-title",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2 },
            "-=0.8"
        );

        // Staggered slide up of SkillCards
        tl.fromTo(".skills-card",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.1, stagger: 0.25 },
            "-=0.8"
        );
    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            className="relative w-full px-5 md:px-[120px] py-20 md:py-28 overflow-hidden "
        >
            {/* ── Heading Block ── */}
            <div className="relative w-full flex flex-col items-center mb-16 md:mb-20">
                
                {/* ── Subtitle / section tag ── */}
                <div className="skills-tag instrument-serif-regular-italic text-[#1a1a1a] text-[28px] md:text-[40px] mb-5 tracking-tight">
                    <span className="text-[#1a1a1a]">/</span>
                    <span className="relative inline-block">
                        Skills & Expertise
                        <img
                            src={BrushStroke}
                            alt=""
                            aria-hidden="true"
                            className="skills-brush absolute -left-2 w-full pointer-events-none select-none"
                        />
                    </span>
                </div>

                {/* ── Floating handwritten annotation ── */}
                <div
                    className="skills-annotation hidden md:block absolute left-[8%] top-6 caveat text-[20px] text-[#1a1a1a70] leading-tight text-start pointer-events-none select-none"
                    style={{ transform: "rotate(-6deg)" }}
                >
                    Crafting Experiences
                    <br />
                    With Design & Code
                </div>

                {/* ── Main title ── */}
                <h2 className="skills-title text-center font-normal leading-tight tracking-tight text-[32px] md:text-[54px] max-w-[800px]">
                    Creating Modern Products For Web & Mobile
                </h2>
            </div>

            {/* ── Skill Cards Layout ── */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start">
                {categories.map((cat, idx) => (
                    <SkillCard key={idx} {...cat} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
