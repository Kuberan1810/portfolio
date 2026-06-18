import { useEffect, useRef, useState } from "react";
import BrushStroke from "../../../assets/images/hallo.svg";
import  Lightening from "../../../assets/images/lighting.svg";
import {Zap} from "lucide-react"

/* ─── Types ─────────────────────────────────────────────────── */
interface PillProps {
    label: string;
    dotColor: string;
    rotate?: string;
}

/* ─── Word segment type ─────────────────────────────────────── */
interface WordSegment {
    text: string;
    bold?: boolean;
}

/* ─── Skill / Tech Pill ─────────────────────────────────────── */
const Pill = ({ label, dotColor, rotate }: PillProps) => (
    <div 
        className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] p-2 pr-6.5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-sm font-medium text-[#1a1a1a] whitespace-nowrap select-none transition-transform duration-300"
        style={rotate ? { transform: `rotate(${rotate})` } : undefined}
    >
        <span
            className="flex items-center justify-center w-8.5 h-8.5 rounded-full text-white shrink-0 "
            style={{ backgroundColor: dotColor }}
        >
            <img src={Lightening} alt="lightening" className="" />
        </span>
        <span className="text-[16px]">  {label}</span>
    </div>
);

/* ─── Scroll-reveal word renderer ───────────────────────────── */
const RevealText = ({ segments }: { segments: WordSegment[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight;

            const start = vh * 0.75;
            const end = vh * 0.1;

            const raw = (start - rect.top) / (start - end);
            setProgress(Math.min(1, Math.max(0, raw)));
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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

    segments.forEach(({ text }) => {
        let currentWordChars: CharInfo[] = [];

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

    const total = globalCharCount;

    return (
        <div
            ref={containerRef}
            className="flex flex-wrap justify-center text-center"
        >
            {tokens.map((token, tokenIdx) => {
                if (token.type === "space") {
                    const threshold = token.globalIndex / total;
                    const charProgress = Math.min(
                        1,
                        Math.max(0, (progress - threshold) / (1 / total))
                    );

                    const startAlpha = 0x40; // #40
                    const endAlpha = 0xff;   // #ff
                    const alpha = Math.round(
                        startAlpha + charProgress * (endAlpha - startAlpha)
                    );
                    const hex = alpha.toString(16).padStart(2, "0");
                    const color = `#1a1a1a${hex}`;

                    return (
                        <span
                            key={`space-${token.globalIndex}`}
                            style={{
                                color,
                                transition: "color 0.15s linear",
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
                                const threshold = charObj.globalIndex / total;
                                const charProgress = Math.min(
                                    1,
                                    Math.max(0, (progress - threshold) / (1 / total))
                                );

                                const startAlpha = 0x40; // #40
                                const endAlpha = 0xff;   // #ff
                                const alpha = Math.round(
                                    startAlpha + charProgress * (endAlpha - startAlpha)
                                );
                                const hex = alpha.toString(16).padStart(2, "0");
                                const color = `#1a1a1a${hex}`;

                                return (
                                    <span
                                        key={charObj.globalIndex}
                                        style={{
                                            color,
                                            fontWeight: 400, // all text is regular weight
                                            transition: "color 0.15s linear",
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

    // Statement broken into segments — bold = true means 700 weight
    const statementSegments: WordSegment[] = [
        { text: "My focus is on blending" },
        { text: "creative design, modern frontend development," },
        { text: "and mobile innovation to build digital products that users genuinely enjoy" },
    ];

    return (
        <section className="relative w-full px-5 md:px-[120px] py-20 md:py-28 overflow-hidden">

            {/* ── Handwritten annotation — desktop only ── */}
            <div
                className="hidden md:block absolute left-[310px] top-30 caveat text-[20px] text-[#1a1a1a70] leading-snug text-start pointer-events-none select-none"
                style={{ transform: "rotate(-7deg)" }}
            >
                Blending clear strategy, thoughtful
                <br />
                design, and user empathy...
            </div>

            {/* ── Main content wrapper ── */}
            <div className="relative flex flex-col items-center">

                {/* ── /Hallo! greeting ── */}
                <div className="instrument-serif-regular-italic text-[#1a1a1a] text-[28px] md:text-[40px] mb-8 md:mb-10 tracking-tight">
                    <span className="text-[#1a1a1a]">/</span>
                    <span className="relative inline-block">
                        Hallo!
                        <img
                            src={BrushStroke}
                            alt=""
                            aria-hidden="true"
                            className="absolute -left-2 bottom-[-6px] w-full pointer-events-none select-none"
                        />
                    </span>
                </div>

                {/* ── Desktop layout: pills + statement ── */}
                <div className="w-full flex items-center gap-6 h-full ">

                    {/* Left pills — desktop only */}
                    <div className="hidden md:flex flex-col justify-between shrink-0 max-w-[180px] self-stretch">
                        {leftPills.map((p) => (
                            <Pill key={p.label} {...p} />
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
                            <Pill key={p.label} {...p} />
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
