"use client";

import { useEffect, useRef, useState } from "react";

const doshas = [
  {
    key: "vata",
    title: "Vata",
    subtitle: "Air + Ether",
    desc:
      "Light, creative, quick-thinking. Governs movement, circulation & nervous system. Ground with warm routines, oil massage & nourishing meals.",
    colors: "from-purple-500/80 via-indigo-500/70 to-violet-400/60",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12c2-4 6-6 10-6s8 2 10 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 18c2-2 5-3 8-3s6 1 9 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "pitta",
    title: "Pitta",
    subtitle: "Fire + Water",
    desc:
      "Sharp, driven, metabolic. Controls digestion, energy & transformation. Balance with cooling foods, restful breaks & calming herbs.",
    colors: "from-rose-500/85 via-amber-500/70 to-yellow-400/60",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3c0 0 4 3 4 7 0 4-4 6-4 11-4-5-4-7-4-11 0-4 4-7 4-7z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="0.5" fill="white" />
      </svg>
    ),
  },
  {
    key: "kapha",
    title: "Kapha",
    subtitle: "Earth + Water",
    desc:
      "Stable, strong, calm. Governs structure, immunity & lubrication. Energize with light exercise, spice, and regular routines.",
    colors: "from-green-600/80 via-emerald-500/70 to-teal-400/60",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="10" rx="2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11h8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function DoshaShowcase() {
  const containerRef = useRef(null);
  const [visibleMap, setVisibleMap] = useState({ vata: false, pitta: false, kapha: false });

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".dosha-card") ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target.getAttribute("data-key");
          if (!key) return;
          if (entry.isIntersecting) {
            setVisibleMap((s) => ({ ...s, [key]: true }));
          } else {
            setVisibleMap((s) => ({ ...s, [key]: false }));
          }
        });
      },
      { root: null, rootMargin: "-10% 0px -40% 0px", threshold: 0.18 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[60vh] flex items-center justify-center py-12 px-6 overflow-x-hidden"
      aria-label="Three doshas showcase"
    >
      <div className="w-full max-w-[1400px]">
        <div className="flex flex-nowrap items-stretch gap-6">
          {doshas.map((d) => {
            const visible = visibleMap[d.key];
            return (
              <article
                key={d.key}
                data-key={d.key}
                className={`dosha-card flex-shrink-0 w-1/3 min-w-[300px] h-[60vh] rounded-3xl p-8 relative transform transition-all duration-700 ease-out
                  ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}
                  bg-gradient-to-br ${d.colors} shadow-2xl`}
                style={{
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-white/5 to-black/5 opacity-30 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-white/12 p-3 shadow-md">{d.icon}</div>
                      <div>
                        <h3 className="text-3xl font-extrabold text-white drop-shadow-md">{d.title}</h3>
                        <p className="text-sm text-white/90 mt-1">{d.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-white/90 text-sm px-3 py-1 rounded-full bg-white/10">Dosha</div>
                  </div>

                  <div className="mt-6 text-white/95 text-lg leading-relaxed flex-1">
                    {d.desc}
                  </div>

                  <div className="mt-6 flex gap-3 items-center">
                    <button className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold hover:scale-105 transition transform">
                      Learn More
                    </button>
                    <button className="px-4 py-2 rounded-full bg-white text-purple-700 font-semibold hover:scale-105 transition transform">
                      Quick Tips
                    </button>
                  </div>

                  <div className="mt-6 text-sm text-white/80 flex justify-between">
                    <span>Balance tips</span>
                    <span>Routine friendly</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        /* make horizontal row remain centered and let overflow hide nicely on larger screens */
        @media (min-width: 1024px) {
          .dosha-card { width: calc((100% - 12px) / 3); min-width: 320px; }
        }
        /* subtle parallax-like tilt on hover */
        .dosha-card:hover { transform: translateY(-6px) scale(1.015); }
      `}</style>
    </section>
  );
}
