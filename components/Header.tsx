"use client";

import { useEffect, useMemo, useState } from "react";

const ACTIVE_LINK_CLASS_NAME =
  "flex-none whitespace-nowrap rounded-full bg-white/15 px-3 py-2 text-sm font-medium text-white transition md:px-4 md:py-2";
const INACTIVE_LINK_CLASS_NAME =
  "flex-none whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white md:px-4 md:py-2";
const CTA_LINK_CLASS_NAME =
  "flex-none whitespace-nowrap rounded-full bg-white px-3 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-white/90 md:px-4 md:py-2";

export default function Header() {
  const navItems = useMemo(
    () => [
      { id: "how-it-works", label: "Så fungerar det", href: "#how-it-works" },
      { id: "pricing", label: "Priser & bedömning", href: "#pricing" },
      { id: "about-me", label: "Om mig", href: "#about-me" },
      {
        id: "contact",
        label: "Få en bedömning",
        href: "#contact",
        isCta: true,
      },
    ],
    [],
  );

  const [activeSectionId, setActiveSectionId] = useState<string>(
    navItems[0].id,
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const targetElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (targetElements.length === 0) {
      return;
    }

    const visibilityById = new Map<
      string,
      { ratio: number; isIntersecting: boolean }
    >();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) {
            return;
          }

          visibilityById.set(id, {
            ratio: entry.intersectionRatio,
            isIntersecting: entry.isIntersecting,
          });
        });

        const visibleSections = navItems
          .map((item) => {
            const state = visibilityById.get(item.id);
            if (!state?.isIntersecting) {
              return null;
            }
            return { id: item.id, ratio: state.ratio };
          })
          .filter((item): item is { id: string; ratio: number } =>
            Boolean(item),
          );

        if (visibleSections.length === 0) {
          return;
        }

        visibleSections.sort((first, second) => second.ratio - first.ratio);
        const nextActiveId = visibleSections[0].id;

        setActiveSectionId((previous) =>
          previous === nextActiveId ? previous : nextActiveId,
        );
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    targetElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-white"
        >
          Sew Zarah
        </a>
        <nav className="flex items-center gap-2 overflow-x-auto px-4 -mx-4 md:overflow-visible md:px-0 md:mx-0">
          {navItems.map((item) => {
            const isActive = item.id === activeSectionId;
            const className = item.isCta
              ? CTA_LINK_CLASS_NAME
              : isActive
                ? ACTIVE_LINK_CLASS_NAME
                : INACTIVE_LINK_CLASS_NAME;
            return (
              <a
                key={item.id}
                href={item.href}
                className={className}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
