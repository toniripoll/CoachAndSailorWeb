"use client";

import type { Hub } from "@/types";

export default function CoverageMap({ hubs }: { hubs: Hub[] }) {
    return (
        <section className="relative bg-surface-dark border-y border-white/5">
            <div className="max-w-[1280px] mx-auto w-full px-6 py-12">
                <div className="text-center mb-8">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">Mapa de cobertura</h2>
                    <p className="text-gray-400 text-sm">Haz clic en un marcador para ver la base</p>
                </div>

                {/* Map container */}
                <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] bg-background-dark/50 rounded-2xl border border-white/5 overflow-hidden">
                    {/* Map background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background-dark to-surface-dark" />

                    {/* Grid lines for map feel */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

                    {/* "Spain" label */}
                    <span className="absolute top-[35%] left-[25%] text-gray-600 text-xs font-bold uppercase tracking-widest select-none">ESPAÑA</span>

                    {/* Hub markers */}
                    {hubs.map((hub) => (
                        <button
                            key={hub.slug}
                            onClick={() => {
                                const el = document.getElementById(`card-${hub.slug}`);
                                el?.scrollIntoView({ behavior: "smooth", block: "center" });
                                el?.classList.add("card-highlight");
                                setTimeout(() => el?.classList.remove("card-highlight"), 2000);
                            }}
                            className="map-marker absolute z-10 cursor-pointer group"
                            style={{ top: hub.map_position.top, left: hub.map_position.left, transform: "translate(-50%, -50%)" }}
                        >
                            {/* Marker dot */}
                            <div className={`relative w-4 h-4 rounded-full shadow-lg border-2 border-white ${hub.is_main_base ? "bg-primary pulse-ring shadow-primary/40" : "bg-primary/70"}`} />

                            {/* Tooltip */}
                            <div className="map-tip absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max bg-card-dark px-4 py-2.5 rounded-xl shadow-xl border border-white/10">
                                <p className="text-sm font-bold text-white">{hub.name}</p>
                                <p className="text-xs text-gray-400">{hub.rib_count} RIBs disponibles</p>
                                <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-card-dark rotate-45 border-r border-b border-white/10" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
