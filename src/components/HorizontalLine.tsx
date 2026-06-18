import type { CSSProperties } from "react";

interface HorizontalLineProps {
    className?: string;
    opacity?: string;
    style?: CSSProperties;
}

const HorizontalLine = ({
    className = "",
    opacity = "opacity-[0.06]",
    style,
}: HorizontalLineProps) => {
    return (
        <div
            className={`w-full h-px bg-[#1a1a1a] ${opacity} ${className}`}
            style={style}
        />
    );
};

export default HorizontalLine;
