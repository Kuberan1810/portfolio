import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrushStroke from "../../../assets/images/hallo.svg";
import Lightening from "../../../assets/images/lighting.svg";

gsap.registerPlugin(ScrollTrigger);

/* ─── Types ─────────────────────────────────────────────────── */
interface PillProps {
    label: string;
    dotColor: string;
    rotate?: string;
    className?: string;
}

/* ─── Word segment type ─────────────────────────────────────── */
interface WordSegment {
    text: string;
    bold?: boolean;
}

/* ─── Skill / Tech Pill ─────────────────────────────────────── */
const Pill = ({ label, dotColor, rotate, className = "" }: PillProps) => (
    <div 
        className={`inline-flex items-center gap-2 rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] p-2 pr-6.5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-sm font-medium text-[#1a1a1a] whitespace-nowrap select-none transition-transform duration-300 ${className}`}
        style={rotate ? { transform: `rotate(${rotate})` } : undefined}
    >
        <span
            className="flex items-center justify-center w-8.5 h-8.5 rounded-full text-white shrink-0 "
            style={{ backgroundColor: dotColor }}
        >
            <img src={Lightening} alt="lightening" />
        </span>
        <span className="text-[16px]">  {label}</span>
    </div>
);

/* ─── Scroll-reveal word renderer ───────────────────────────── */
const RevealText = ({ segments }: { segments: WordSegment[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const chars = containerRef.current?.querySelectorAll(".reveal-char");
        if (!chars || chars.length === 0) return;

        gsap.fromTo(
            chars,
            { color: "#1a1a1a40" },
            {
                color: "#1a1a1a",
                stagger: 0.03,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 30%",
                    scrub: 2.0,
                },
            }
        );
    }, { scope: containerRef });

    // Tokenize into words and spaces to preserve word-wrapping while keeping letter-by-letter index
    interface CharInfo {
        char: string;
        globalIndex: number;
    }

    interface WordToken {
        type: "word";
        chars: CharInfo[];
    }

    interface SpaceToken {
        type: "space";
        char: string;
        globalIndex: number;
    }

    type Token = WordToken | SpaceToken;

    const tokens: Token[] = [];
    let globalCharCount = 0;

    segments.forEach(({ text }, segmentIdx) => {
        let currentWordChars: CharInfo[] = [];

        // Prepend space token between segments if needed
        if (segmentIdx > 0 && text.length > 0 && !text.startsWith(" ")) {
            tokens.push({
                type: "space",
                char: " ",
                globalIndex: globalCharCount++,
            });
        }

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === " ") {
                if (currentWordChars.length > 0) {
                    tokens.push({
                        type: "word",
                        chars: currentWordChars,
                    });
                    currentWordChars = [];
                }
                tokens.push({
                    type: "space",
                    char: " ",
                    globalIndex: globalCharCount++,
                });
            } else {
                currentWordChars.push({
                    char,
                    globalIndex: globalCharCount++,
                });
            }
        }

        if (currentWordChars.length > 0) {
            tokens.push({
                type: "word",
                chars: currentWordChars,
            });
        }
    });

    return (
        <div
            ref={containerRef}
            className="flex flex-wrap justify-center text-center"
        >
            {tokens.map((token, tokenIdx) => {
                if (token.type === "space") {
                    return (
                        <span
                            key={`space-${token.globalIndex}`}
                            className="reveal-char"
                            style={{
                                color: "#1a1a1a40",
                                whiteSpace: "pre",
                            }}
                        >
                            {" "}
                        </span>
                    );
                } else {
                    return (
                        <span
                            key={`word-${tokenIdx}`}
                            className="inline-block whitespace-nowrap"
                        >
                            {token.chars.map((charObj) => {
                                return (
                                    <span
                                        key={charObj.globalIndex}
                                        className="reveal-char"
                                        style={{
                                            color: "#1a1a1a40",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {charObj.char}
                                    </span>
                                );
                            })}
                        </span>
                    );
                }
            })}
        </div>
    );
};

/* ─── About Section ─────────────────────────────────────────── */
export const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const leftPills: PillProps[] = [
        { label: "UI/UX Design", dotColor: "#FF5F06", rotate: "1.66deg" },
        { label: "User Research", dotColor: "#FFD700", rotate: "2.69deg" },
        { label: "Prototyping", dotColor: "#1a1a1a", rotate: "-2.52deg" },
    ];

    const rightPills: PillProps[] = [
        { label: "React.tsx", dotColor: "#06ABFF", rotate: "-3.34deg" },
        { label: "React Native", dotColor: "#FE62BB", rotate: "5.31deg" },
        { label: "API Integration", dotColor: "#4FFE68", rotate: "3.57deg" },
    ];

    const statementSegments: WordSegment[] = [
        { text: "My focus is on blending" },
        { text: "creative design, modern frontend development," },
        { text: "and mobile innovation to build digital products that users genuinely enjoy" },
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

        tl.fromTo(".about-greeting",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2 }
        );

        // Brush stroke line reveal
        tl.fromTo(".about-brush",
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.8, ease: "power3.inOut" },
            "-=0.9"
        );

        tl.fromTo(".about-annotation",
            { opacity: 0, scale: 0.85, rotation: -12 },
            { opacity: 1, scale: 1, rotation: -7, duration: 1.2, ease: "back.out(1.4)" },
            "-=0.6"
        );

        tl.fromTo(".about-pill-left",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 1.0, stagger: 0.15 },
            "-=0.8"
        );

        tl.fromTo(".about-pill-right",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 1.0, stagger: 0.15 },
            "-=0.8"
        );

    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            className="relative w-full px-5 md:px-[120px] py-20 md:py-28 overflow-hidden"
        >

            {/* ── Handwritten annotation — desktop only ── */}
            <div
                className="about-annotation hidden md:block absolute left-[310px] top-30 caveat text-[20px] text-[#1a1a1a70] leading-snug text-start pointer-events-none select-none"
                style={{ transform: "rotate(-7deg)" }}
            >
                Blending clear strategy, thoughtful
                <br />
                design, and user empathy...
            </div>

            {/* ── Main content wrapper ── */}
            <div className="relative flex flex-col items-center">

                {/* ── /Hallo! greeting ── */}
                <div className="about-greeting instrument-serif-regular-italic text-[#1a1a1a] text-[28px] md:text-[40px] mb-8 md:mb-10 tracking-tight">
                    <span className="text-[#1a1a1a]">/</span>
                    <span className="relative inline-block">
                        Hallo!
                        <img
                            src={BrushStroke}
                            alt=""
                            aria-hidden="true"
                            className="about-brush absolute -left-2 bottom-[-6px] w-full pointer-events-none select-none"
                        />
                    </span>
                </div>

                {/* ── Desktop layout: pills + statement ── */}
                <div className="w-full flex items-center gap-6 h-full ">

                    {/* Left pills — desktop only */}
                    <div className="hidden md:flex flex-col justify-between shrink-0 max-w-[180px] self-stretch">
                        {leftPills.map((p) => (
                            <Pill key={p.label} {...p} className="about-pill-left" />
                        ))}
                    </div>

                    {/* ── Statement heading with scroll reveal ── */}
                    <div
                        className="text-center leading-[1.3] tracking-tight flex-1  "
                        style={{ fontSize: "clamp(26px, 4.5vw, 62px)" }}
                    >
                        <RevealText segments={statementSegments} />
                    </div>

                    {/* Right pills — desktop only */}
                    <div className="hidden md:flex flex-col justify-between shrink-0 max-w-[180px] self-stretch">
                        {rightPills.map((p) => (
                            <Pill key={p.label} {...p} className="about-pill-right" />
                        ))}
                    </div>
                </div>

                {/* ── Mobile pills — below statement ── */}
                <div className="flex md:hidden flex-wrap justify-center gap-2 mt-8">
                    {[...leftPills, ...rightPills].map((p) => (
                        <Pill key={p.label} {...p} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
