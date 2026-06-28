import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar2 } from "iconsax-react";
import BrushStroke from "../../../assets/images/skill-b.svg";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
    id: string;
    date: string;
    role: string;
    description: string;
    // Positioning percentages for desktop
    left: string;
    top: string;
    nodeLeft: string;
    nodeTop: string;
    isAbove: boolean;
}

export const CareerTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const events: TimelineEvent[] = [
        {
            id: "frontend",
            date: "Oct 2025 – Jan 2026",
            role: "Frontend Developer",
            description: "Built a strong foundation in software development, databases, and modern web technologies.",
            left: "3%",
            top: "40%",
            nodeLeft: "27.92%",
            nodeTop: "91.4%",
            isAbove: true
        },
        {
            id: "lead",
            date: "Jan 2026 – Mar 2026",
            role: "Lead Frontend Developer",
            description: "Led frontend development efforts, improved user experiences, and delivered high-quality web solutions.",
            left: "60%",
            top: "80%",
            nodeLeft: "59.92%",
            nodeTop: "64.31%",
            isAbove: false
        },
        {
            id: "senior",
            date: "Mar 2026 – Present",
            role: "Senior Frontend Developer",
            description: "Driving scalable frontend architecture, collaborating across teams, and building modern digital experiences.",
            left: "65%",
            top: "-30%",
            nodeLeft: "85.75%",
            nodeTop: "6.38%",
            isAbove: true
        }
    ];

    useGSAP(() => {
        // Headers animations
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 95%",
                end: "bottom 40%",
                scrub: 2.0,
            }
        });

        tl.fromTo(".journey-tag",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2 }
        );
        tl.fromTo(".journey-brush",
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.8, ease: "power3.inOut" },
            "-=0.9"
        );
        tl.fromTo(".journey-annotation",
            { opacity: 0, scale: 0.85, rotation: 0 },
            { opacity: 1, scale: 1, rotation: 6, duration: 1.2, ease: "back.out(1.4)" },
            "-=0.6"
        );
        tl.fromTo(".journey-title",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2 },
            "-=0.8"
        );

        // Desktop path draw animation
        gsap.fromTo(".timeline-svg-path",
            { strokeDashoffset: 100 },
            {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-desktop-container",
                    start: "top 75%",
                    end: "bottom 25%",
                    scrub: 2.0,
                }
            }
        );

        // Desktop nodes pop in
        const nodes = containerRef.current?.querySelectorAll(".timeline-event-node");
        if (nodes && nodes.length > 0) {
            nodes.forEach((node) => {
                gsap.fromTo(node,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.9,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: node,
                            start: "top 95%",
                            end: "top 70%",
                            scrub: 2.0
                        }
                    }
                );
            });
        }

        // Desktop cards slide in
        const cards = containerRef.current?.querySelectorAll(".timeline-event-card");
        if (cards && cards.length > 0) {
            cards.forEach((card) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            end: "top 70%",
                            scrub: 2.0
                        }
                    }
                );
            });
        }

        // Mobile Line drawing down
        gsap.fromTo(".timeline-mobile-line",
            { scaleY: 0 },
            {
                scaleY: 1,
                transformOrigin: "top center",
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-mobile-container",
                    start: "top 85%",
                    end: "bottom 55%",
                    scrub: 2.0
                }
            }
        );

        // Mobile events slide in
        gsap.fromTo(".timeline-mobile-event",
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.9,
                stagger: 0.25,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".timeline-mobile-container",
                    start: "top 95%",
                    end: "bottom 75%",
                    scrub: 2.0
                }
            }
        );

    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            className="relative w-full px-5 md:px-[120px] py-20 md:py-28 overflow-hidden font-urbanist bg-[#fcfcfc]"
        >
            {/* ── Heading Block ── */}
            <div className="relative w-full flex flex-col items-center mb-28 md:mb-48">

                {/* ── Subtitle / section tag ── */}
                <div className="journey-tag instrument-serif-regular-italic text-[#1a1a1a] text-[28px] md:text-[40px] mb-4 tracking-tight">
                    <span className="text-[#1a1a1a]">/</span>
                    <span className="relative inline-block">
                        Career Journey
                        <img
                            src={BrushStroke}
                            alt=""
                            aria-hidden="true"
                            className="journey-brush absolute -left-2 w-full pointer-events-none select-none"
                        />
                    </span>
                </div>

                {/* ── Floating handwritten annotation ── */}
                <div
                    className="journey-annotation hidden md:block absolute right-[15%] top-4 caveat text-[20px] text-[#1a1a1a70] leading-tight text-start pointer-events-none select-none"
                    style={{ transform: "rotate(6deg)" }}
                >
                    From Frontend Developer
                    <br />
                    to Senior Frontend Developer.
                </div>

                {/* ── Main title ── */}
                <h2 className="journey-title text-center font-normal leading-tight tracking-tight text-[32px] md:text-[54px] max-w-[800px]">
                    Growing Through Design,<br />Development & Leadership.
                </h2>
            </div>

            {/* ── Desktop Timeline (Horizontal wave) ── */}
            <div className="timeline-desktop-container hidden md:block relative w-full h-[500px] select-none">
                {/* Animated SVG Curve Path exactly matching line.svg */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1200 347"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1.08602 254.165C1.08602 254.165 129.265 337.243 199.586 341.665C253.361 345.047 256.893 347.134 291.586 337.665C343.84 323.404 356.64 281.862 405.586 258.665C453.891 235.772 492.41 223.339 537.086 220.665C599.501 216.93 635.803 224.55 719.586 225.165C810.705 225.835 840.683 165.064 904.586 106.665C948.041 66.9531 975.112 44.218 1030.09 23.1652C1085.89 1.7942 1140.04 -0.837714 1199.59 4.16309"
                        stroke="#1a1a1a"
                        strokeWidth="4"
                        fill="none"
                        pathLength="100"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                        className="timeline-svg-path"
                    />
                </svg>

                {/* Render Nodes and Events */}
                {events.map((event) => (
                    <div key={event.id}>
                        {/* Event Card */}
                        <div
                            className="timeline-event-card absolute flex flex-col gap-2 max-w-[400px]"
                            style={{ left: event.left, top: event.top }}
                        >
                            {/* Date info with icon */}
                            <div className="flex items-center gap-2 text-[#1a1a1a90] text-lg font-medium">
                                <Calendar2 color="currentColor" size={24} className="text-[#1a1a1a90]" />
                                <span>{event.date}</span>
                            </div>
                            {/* Role */}
                            <h3 className="text-[#1a1a1a] text-[24px] font-semibold">
                                {event.role}
                            </h3>
                            {/* Description */}
                            <p className="text-[#1a1a1a90] text-lg font-medium leading-relaxed">
                                {event.description}
                            </p>
                        </div>

                        {/* Interactive Node */}
                        <div
                            className="timeline-event-node absolute z-10 w-[30px] h-[30px] border-[3px] border-[#1a1a1a] bg-white rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110 cursor-pointer shadow-md"
                            style={{ left: event.nodeLeft, top: event.nodeTop }}
                        >
                            <div className="w-[17px] h-[17px] bg-[#1a1a1a] rounded-full" />
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Mobile Timeline (Vertical Stack) ── */}
            <div className="timeline-mobile-container md:hidden relative w-full flex flex-col gap-12 pl-6">
                {/* Vertical line indicator */}
                <div className="timeline-mobile-line absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#1a1a1a] origin-top scale-y-0" />

                {events.map((event) => (
                    <div key={event.id} className="timeline-mobile-event relative flex flex-col gap-2 pl-6">
                        {/* Timeline node */}
                        <div className="absolute left-[-24px] top-1.5 w-[14px] h-[14px] border-[2.5px] border-[#1a1a1a] bg-white rounded-full flex items-center justify-center shadow-sm">
                            <div className="w-[4px] h-[4px] bg-[#1a1a1a] rounded-full" />
                        </div>

                        {/* Date with icon */}
                        <div className="flex items-center gap-2 text-[#1a1a1a70] text-sm font-medium">
                            <Calendar2 color="#1a1a1a" size={14} className="text-[#1a1a1a]" />
                            <span>{event.date}</span>
                        </div>
                        {/* Role */}
                        <h3 className="text-[#1a1a1a] text-[18px] font-semibold">
                            {event.role}
                        </h3>
                        {/* Description */}
                        <p className="text-[#1a1a1a60] text-sm leading-relaxed">
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerTimeline;
