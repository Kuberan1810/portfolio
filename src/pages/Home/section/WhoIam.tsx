import { useState } from "react";
import BrushStroke from "../../../assets/images/hallo.svg";
import ProfileImg from "../../../assets/images/whoAm.svg";
import Linkdin from "../../../assets/images/linkdin.svg"
import { Instagram, Dribbble, ArrowDown3 } from "iconsax-react";

interface AccordionItem {
    id: string;
    title: string;
    date: string;
    content: string;
}

export const WhoIam = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    const accordionItems: AccordionItem[] = [
        {
            id: "sr-dev",
            title: "Senior Frontend Developer",
            date: "2026 → Now",
            content: "Leading frontend architecture, optimizing React and React Native applications, and implementing modern design systems to bridge the gap between design and high-performance engineering."
        },
        {
            id: "lead-dev",
            title: "Lead Frontend Developer",
            date: "2026",
            content: "Managed development teams, drove technical decisions for client web solutions, and established robust frontend coding standards and component libraries."
        },
        {
            id: "frontend-dev",
            title: "Frontend Developer",
            date: "2025 → 2026",
            content: "Developed responsive web interfaces using modern frameworks, integrated complex APIs, and closely collaborated with product designers to implement pixel-perfect layouts."
        },
        {
            id: "certifications",
            title: "Professional Certifications",
            date: "2025 → 2026",
            content: "Acquired credentials in UI/UX Design, Advanced React Development, and Mobile Application architecture to stay at the cutting edge of industry practices."
        },
        {
            id: "education",
            title: "BSc Computer Science",
            date: "2022 → 2025",
            content: "Graduated with a Bachelor of Science in Computer Science, gaining a deep understanding of software engineering, database management, and web technology fundamentals."
        }
    ];

    return (
        <section className="relative w-full px-5 md:px-[120px] py-20 md:py-28 overflow-hidden font-urbanist bg-[#fcfcfc]">
            {/* ── Heading block ── */}
            <div className="relative w-full flex flex-col items-center mb-12 md:mb-16">

                {/* ── Subtitle / greeting ── */}
                <div className="instrument-serif-regular-italic text-[#1a1a1a] text-[28px] md:text-[40px] mb-4 tracking-tight">
                    <span className="text-[#1a1a1a]">/</span>
                    <span className="relative inline-block">
                        Who Am I
                        <img
                            src={BrushStroke}
                            alt=""
                            aria-hidden="true"
                            className="absolute -left-2 bottom-[-6px] w-full pointer-events-none select-none"
                        />
                    </span>
                </div>

                {/* ── Floating annotation ── */}
                <div
                    className="hidden md:block absolute right-[10%] top-6 caveat text-[20px] text-[#1a1a1a70] leading-tight text-start pointer-events-none select-none"
                    style={{ transform: "rotate(6deg)" }}
                >
                    Driven by design,
                    <br />
                    powered by code.
                </div>

                {/* ── Main title ── */}
                <h2 className="text-center font-normal leading-tight tracking-tight text-[32px] md:text-[54px] max-w-[800px]">
                    Building Digital Experiences <span className="text-[#1a1a1a50]">Since 2025</span>
                </h2>
            </div>

            {/* ── Columns layout ── */}
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10 items-center">

                {/* ── Left Column: Profile Card & Socials ── */}
                <div className="col-span-1 md:col-span-5 flex flex-col items-center">

                    {/* Tilt container */}
                    <div
                        className="-rotate-[2deg] "
                    >
                        <img
                            src={ProfileImg}
                            alt="Kuberan S"
                            className="w-full h-full "
                        />
                    </div>

                    {/* Socials & Info block */}
                    <div className="w-full flex items-center justify-between mt-10 px-2">
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://dribbble.com"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] text-[#1A1A1A] p-4 select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.05),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#EFEFEF]"
                            >
                                <Dribbble size={26} color="#1a1a1a" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kuberan-s-145439296/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-[#1A1A1A] text-white px-6 md:px-7 py-3.5 md:py-4 text-sm md:text-base select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.15),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#2A2A2A]"
                            >
                                {/* <img src={Linkdin} alt="Linkdin" /> */}
                                <p className="text-white  text-xl font-bold" >in</p>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#1a1a1a70] hover:text-[#1a1a1a] transition-colors rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] text-[#1A1A1A] p-4 select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.05),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#EFEFEF]"
                            >
                                <Instagram size={26} color="#1a1a1a" />
                            </a>
                        </div>

                        {/* Name & Title */}
                        <div className="text-right">
                            <p className="text-[20px] font-semibold text-[#1a1a1a]">Kuberan S</p>
                            <p className="text-[15px] text-[#1a1a1a90]">UI/UX Designer & Frontend Developer</p>
                        </div>
                    </div>
                </div>

                {/* ── Right Column: Description & Accordion ── */}
                <div className="col-span-1 md:col-span-7 flex flex-col gap-10">

                    {/* Paragraph description */}
                    <p className="text-[16px] md:text-[20px] leading-relaxed text-[#1a1a1a70] font-medium ">
                        I'm <strong className="font-semibold text-[#1a1a1a]">Kuberan</strong>, a Frontend Developer and UI/UX Designer passionate about building modern web and mobile experiences. With a background in Computer Science and hands-on industry experience, I focus on creating intuitive interfaces, scalable applications, and impactful digital products.
                    </p>

                    {/* Accordion / List */}
                    <div className="flex flex-col gap-3 w-full">
                        {accordionItems.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className="w-full rounded-[24px] border border-[#1a1a1a10] bg-white shadow-[0_12px_12px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
                                >
                                    {/* Header / Button */}
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="group w-full flex items-center justify-between p-5 text-left rounded-[24px] border border-[#1a1a1a10] bg-white transition-all duration-500 ease-in-out shadow-[0_12px_12px_rgba(0,0,0,0.04),inset_0_4px_6px_rgba(255,255,255,0.8)] hover:bg-[#FAFAFA] hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),inset_0_6px_8px_rgba(255,255,255,0.9)] active:scale-[0.995] cursor-pointer h-[68px]"
                                    >
                                        <span className="text-[16px] md:text-[20px]  font-medium text-[#1a1a1a]">
                                            {item.title}
                                        </span>

                                        <div className="flex items-center gap-3">
                                            <span className="text-base md:text-lg text-[#1a1a1a60] font-medium transition-colors duration-300 group-hover:text-[#1a1a1a]">
                                                {item.date}
                                            </span>

                                            <div
                                                className={`rounded-full p-2 border transition-all duration-500 shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_6px_8px_rgba(255,255,255,0.35)] ] ${isOpen
                                                        ? "rotate-180 bg-[#1A1A1A] border-[#1A1A1A]"
                                                        : "bg-white border-[#1a1a1a10]"
                                                    }`}
                                            >
                                                <ArrowDown3
                                                    size={20}
                                                    color={isOpen ? "#ffffff" : "#1a1a1a70"}
                                                    variant="Bulk"
                                                />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Expanded Content wrapper with clean height transition */}
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[200px] " : "max-h-0"
                                            } overflow-hidden`}
                                    >
                                        <p className="p-5 text-sm md:text-base text-[#1a1a1a70] leading-relaxed">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhoIam;
