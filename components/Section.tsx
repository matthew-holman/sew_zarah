import type { ReactNode } from "react";

type SectionSpacing = "default" | "tight" | "loose";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: SectionSpacing;
  pattern?: boolean;
};

const spacingClassNameByVariant: Record<SectionSpacing, string> = {
  tight: "py-2 md:py-14",
  default: "py-16 md:py-24",
  loose: "py-20 md:py-32",
};

export default function Section({
  children,
  className = "",
  id,
  spacing = "tight",
  pattern = true,
}: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {pattern && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-conic-gradient(rgba(255, 255, 255, 0.04) 0% 25%, transparent 0% 50%)",
            backgroundSize: "10px 10px",
          }}
        />
      )}
      <div
        className={`relative mx-auto w-full max-w-5xl px-6 border-x border-black/10 bg-black/10 ${spacingClassNameByVariant[spacing]}`}
      >
        {children}
      </div>
    </section>
  );
}
