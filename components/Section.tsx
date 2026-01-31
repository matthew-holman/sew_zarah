import type { ReactNode } from "react";

type SectionSpacing = "default" | "tight" | "loose";

type SectionProps = {
    children: ReactNode;
    className?: string;
    id?: string;
    spacing?: SectionSpacing;
};

const spacingClassNameByVariant: Record<SectionSpacing, string> = {
    tight: "py-10 md:py-14",
    default: "py-16 md:py-24",
    loose: "py-20 md:py-32",
};

export default function Section({
                                    children,
                                    className = "",
                                    id,
                                    spacing = "default",
                                }: SectionProps) {
    return (
        <section id={id} className={className}>
            <div
                className={`mx-auto w-full max-w-5xl px-6 ${spacingClassNameByVariant[spacing]}`}
            >
                {children}
            </div>
        </section>
    );
}