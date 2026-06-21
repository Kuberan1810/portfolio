import { Calendar2 } from "iconsax-react";
import BrushStroke from "../../../assets/images/skill-b.svg";
// import Line from "../../../assets/images/line.svg"

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

    return (
        <section className="relative w-full px-5 md:px-[120px] py-20 md:py-28 overflow-hidden font-urbanist bg-[#fcfcfc]">
            {/* ── Heading Block ── */}
            <div className="relative w-full flex flex-col items-center mb-28 md:mb-48">

                {/* ── Subtitle / section tag ── */}
                <div className="instrument-serif-regular-italic text-[#1a1a1a] text-[28px] md:text-[40px] mb-4 tracking-tight">
                    <span className="text-[#1a1a1a]">/</span>
                    <span className="relative inline-block">
                        Career Journey
                        <img
                            src={BrushStroke}
                            alt=""
                            aria-hidden="true"
                            className="absolute -left-2 w-full pointer-events-none select-none"
                        />
                    </span>
                </div>

                {/* ── Floating handwritten annotation ── */}
                <div
                    className="hidden md:block absolute right-[15%] top-4 caveat text-[20px] text-[#1a1a1a70] leading-tight text-start pointer-events-none select-none"
                    style={{ transform: "rotate(6deg)" }}
                >
                    From Frontend Developer
                    <br />
                    to Senior Frontend Developer.
                </div>

                {/* ── Main title ── */}
                <h2 className="text-center font-normal leading-tight tracking-tight text-[32px] md:text-[54px] max-w-[800px]">
                    Growing Through Design,<br />Development & Leadership.
                </h2>
            </div>

            {/* ── Desktop Timeline (Horizontal wave) ── */}
            <div className="hidden md:block relative w-full h-[500px] select-none">
                {/* <img 
                    src={Line} 
                    alt="Timeline curve" 
                    className="absolute inset-0 w-full h-full pointer-events-none select-none" 
                /> */}
                <style>
                    {`
                    @keyframes drawPath {
                        from { stroke-dashoffset: 100; }
                        to { stroke-dashoffset: 0; }
                    }
                    .animate-path {
                        stroke-dasharray: 100;
                        animation: drawPath 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    }
                    `}
                </style>

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
                        className="animate-path"
                    />
                </svg>

                {/* Render Nodes and Events */}
                {events.map((event) => (
                    <div key={event.id}>
                        {/* Event Card */}
                        <div
                            className="absolute flex flex-col gap-2 max-w-[400px]"
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
                            className="absolute z-10 w-[30px] h-[30px] border-[3px] border-[#1a1a1a]  rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110 cursor-pointer"
                            style={{ left: event.nodeLeft, top: event.nodeTop }}
                        >
                            <div className="w-[17px] h-[17px] bg-[#1a1a1a] rounded-full" />
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Mobile Timeline (Vertical Stack) ── */}
            <div className="md:hidden relative w-full flex flex-col gap-12 pl-6">
                {/* Vertical line indicator */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#1a1a1a15]" />

                {events.map((event) => (
                    <div key={event.id} className="relative flex flex-col gap-2 pl-6">
                        {/* Timeline node */}
                        <div className="absolute left-[-24px] top-1.5 w-[14px] h-[14px] border-[2.5px] border-[#1a1a1a] bg-white rounded-full flex items-center justify-center">
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
