import HeroDp from "../../../assets/images/heroDp.svg";
import BrushStroke from "../../../assets/images/Vector.svg";
import HeroBg from "../../../assets/images/heroBg.svg";

/* ─── Inline Avatar ─────────────────────────────────────────── */
interface AvatarProps {
    className?: string;
    alt?: string;
}

const Avatar = ({ className = "", alt = "Kuberan" }: AvatarProps) => (
    <span className={`inline-block shrink-0 ${className}`}>
        <img
            src={HeroDp}
            alt={alt}
            className="w-full h-full object-cover"
        />
    </span>
);

/* ─── Brush-stroke underline SVG ────────────────────────────── */
const BrushUnderline = () => (
    <img src={BrushStroke} alt="underline" />
);

/* ─── Hero Section ───────────────────────────────────────────── */
export const Hero = () => {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center text-center px-5 pt-[120px] pb-16 md:pt-[250px] md:pb-25 md:px-10">

            {/* ── Background image ── */}
            <img
                src={HeroBg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
            />

            {/* ── Content (above bg) ── */}
            <div className="z-10 flex flex-col items-center w-full">

                {/* ── Handwritten annotation — hidden on mobile, shown on md+ ── */}
                <div
                    className="hidden md:block absolute right-100 caveat top-[180px] text-[20px] text-[#1a1a1a99] leading-snug font-regular max-w-fit text-start"
                    style={{ transform: "rotate(7deg)" }}
                >
                    Creating user-first experiences
                    <br />
                    for web and mobile.
                </div>

                {/* ── Main heading ── */}
                <div
                    className="instrument-serif-regular-italic mx-auto w-full text-[#1a1a1a] leading-[1.15] tracking-tight"
                    style={{ fontSize: "clamp(36px, 7vw, 82px)" }}
                >
                    {/* Line 1 */}
                    <div className="flex items-center justify-center flex-wrap gap-x-1">
                        <span>I'm&nbsp;</span>
                        <span className="text-[#1A1A1A90]">Kuberan&nbsp;</span>
                        <Avatar
                            className="w-[0.75em] sm:w-fit h-[0.75em] sm:h-fit"
                            alt="Kuberan"
                        />
                        <span>,</span>
                    </div>

                    {/* Line 2 */}
                    <div className="flex items-center justify-center flex-wrap gap-x-1">
                        <span>a&nbsp;UI/UX&nbsp;</span>
                        <Avatar
                            className="w-[0.75em] sm:w-fit h-[0.75em] sm:h-fit"
                            alt="Kuberan"
                        />
                        <span className="text-[#1A1A1A90]">&nbsp;Designer,</span>
                    </div>

                    {/* Line 3 */}
                    <div className="flex items-center justify-center flex-wrap gap-x-1">
                        <span className="whitespace-nowrap">Frontend&nbsp;&amp;&nbsp;</span>
                        <span className="text-[#1a1a1a90] whitespace-nowrap">React Native&nbsp;</span>
                        <span className="relative top-[0.12em] inline-block whitespace-nowrap">
                            Developer
                            <BrushUnderline />
                        </span>
                    </div>
                </div>

                {/* ── Subtitle ── */}
                <p className="mx-auto mt-6 max-w-[600px] md:max-w-[990px] text-[16px] md:text-[22px] text-[#1a1a1a70] font-medium px-2 md:px-0">
                    I design intuitive user experiences and build high-performance web
                    and mobile applications using modern technologies.
                </p>

                {/* ── CTA Buttons ── */}
                <div className="mt-[36px] md:mt-[50px] flex items-center justify-center gap-3 flex-wrap mb-[24px] md:mb-[30px]">

                    {/* View Projects — filled dark pill */}
                    <a
                        href="/projects"
                        className="flex items-center justify-center rounded-full bg-[#1A1A1A] text-white px-6 md:px-7 py-3.5 md:py-4.5 text-base md:text-lg font-medium select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.15),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#2A2A2A]"
                    >
                        View Projects
                    </a>

                    {/* Download Resume — outlined pill */}
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center justify-center rounded-full border border-[#1a1a1a10] bg-[#F5F5F5] text-[#1A1A1A] px-6 md:px-7 py-3.5 md:py-4.5 text-base md:text-lg font-medium select-none transition-all duration-500 ease-in-out overflow-hidden relative shadow-[0_12px_12px_rgba(0,0,0,0.05),inset_0_4px_6px_rgba(255,255,255,0.35)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_6px_8px_rgba(255,255,255,0.35)] hover:bg-[#EFEFEF]"
                    >
                        Download Resume
                    </a>
                </div>

                {/* ── Open to Work badge ── */}
                <div className="caveat inline-flex items-center gap-2 text-[18px] md:text-[24px] text-[#1a1a1a70] font-medium">
                    <span
                        className="inline-block w-2.5 h-2.5 rounded-full bg-[#13B879] shrink-0"
                        style={{ boxShadow: "0 0 6px #13B879" }}
                    />
                    Open to Work
                </div>

            </div>
        </section>
    );
};

export default Hero;
