
import BrushStroke from "../../../assets/images/skill-b.svg";

interface SkillCardProps {
    title: string;
    headerBg: string;
    items: string[];
    rotateClass: string;
}

const SkillCard = ({ title, headerBg, items, rotateClass }: SkillCardProps) => {
    return (
        <div 
            className={`w-full max-w-[340px] rounded-[24px] flex flex-col overflow-hidden shadow-soft select-none  ${rotateClass}`}
           
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

    return (
        <section className="relative w-full px-5 md:px-[120px] py-20 md:py-28 overflow-hidden ">
            {/* ── Heading Block ── */}
            <div className="relative w-full flex flex-col items-center mb-16 md:mb-20">
                
                {/* ── Subtitle / section tag ── */}
                <div className="instrument-serif-regular-italic text-[#1a1a1a] text-[28px] md:text-[40px] mb-5 tracking-tight">
                    <span className="text-[#1a1a1a]">/</span>
                    <span className="relative inline-block">
                        Skills & Expertise
                        <img
                            src={BrushStroke}
                            alt=""
                            aria-hidden="true"
                            className="absolute -left-2  w-full pointer-events-none select-none"
                        />
                    </span>
                </div>

                {/* ── Floating handwritten annotation ── */}
                <div
                    className="hidden md:block absolute left-[8%] top-6 caveat text-[20px] text-[#1a1a1a70] leading-tight text-start pointer-events-none select-none"
                    style={{ transform: "rotate(-6deg)" }}
                >
                    Crafting Experiences
                    <br />
                    With Design & Code
                </div>

                {/* ── Main title ── */}
                <h2 className="text-center font-normal leading-tight tracking-tight text-[32px] md:text-[54px] max-w-[800px]">
                    Creating Modern Products For Web & Mobile
                </h2>
            </div>

            {/* ── Skill Cards Layout ── */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start ">
                {categories.map((cat, idx) => (
                    <SkillCard key={idx} {...cat} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
