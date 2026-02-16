"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { SailingEvent } from "@/types";

/* ── Availability badge ── */
function AvailabilityBadge({ availability }: { availability: string }) {
    if (availability === "available") {
        return (
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="material-icons text-xs">check_circle</span> Disponible
            </span>
        );
    }
    if (availability === "few_spots") {
        return (
            <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="material-icons text-xs">warning</span> Últimas plazas
            </span>
        );
    }
    return (
        <span className="px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
            <span className="material-icons text-xs">build</span> Sólo soporte técnico
        </span>
    );
}

/* ── Event type badge ── */
function TypeBadge({ type }: { type: string }) {
    const map: Record<string, { bg: string; text: string; label: string }> = {
        olympic: { bg: "bg-amber-500/20", text: "text-amber-400", label: "Olímpico" },
        major: { bg: "bg-primary/20", text: "text-primary", label: "Mayor" },
        world: { bg: "bg-purple-500/20", text: "text-purple-400", label: "Mundial" },
    };
    const { bg, text, label } = map[type] ?? map.major;
    return (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${bg} ${text}`}>
            {label}
        </span>
    );
}

/* ── Main component ── */
export default function EventsPageClient({ events }: { events: SailingEvent[] }) {
    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("all");
    const [seasonFilter, setSeasonFilter] = useState("all");
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<SailingEvent | null>(null);
    const [showConfirm, setShowConfirm] = useState(false);

    const locations = useMemo(
        () => Array.from(new Set(events.map((e) => e.hub_slug))),
        [events]
    );
    const seasons = useMemo(
        () => Array.from(new Set(events.map((e) => e.season))),
        [events]
    );

    const filteredEvents = useMemo(() => {
        return events.filter((e) => {
            if (search && !e.name.toLowerCase().includes(search.toLowerCase())) return false;
            if (locationFilter !== "all" && e.hub_slug !== locationFilter) return false;
            if (seasonFilter !== "all" && e.season !== seasonFilter) return false;
            return true;
        });
    }, [events, search, locationFilter, seasonFilter]);

    const handleRequestSpot = (ev: SailingEvent) => {
        setSelectedEvent(ev);
        setShowModal(true);
    };

    const handleSubmitRequest = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(false);
        setShowConfirm(true);
        setTimeout(() => setShowConfirm(false), 3000);
    };

    return (
        <>
            <Navbar active="/eventos" />

            {/* Header */}
            <section className="max-w-[1280px] mx-auto w-full px-6 pt-10 pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Eventos</h1>
                        <p className="text-gray-400 text-sm">Calendario de regatas con cobertura Coach&amp;Sailor</p>
                    </div>
                    <p className="text-sm font-semibold text-primary">{filteredEvents.length} eventos encontrados</p>
                </div>

                {/* Filter bar */}
                <div className="flex flex-wrap gap-3 items-center bg-surface-dark rounded-2xl p-4 border border-white/5">
                    {/* Search */}
                    <div className="relative flex-1 min-w-[200px]">
                        <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">search</span>
                        <input
                            type="text"
                            placeholder="Buscar evento..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card-dark border border-white/5 text-white text-sm placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        />
                    </div>

                    {/* Location pills */}
                    <div className="flex gap-2 flex-wrap">
                        <button
                            onClick={() => setLocationFilter("all")}
                            className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${locationFilter === "all" ? "bg-primary text-white" : "bg-white/5 text-gray-400 hover:text-white"
                                }`}
                        >
                            Todos
                        </button>
                        {locations.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => setLocationFilter(loc)}
                                className={`px-3 py-2 rounded-lg text-xs font-semibold capitalize transition-colors ${locationFilter === loc ? "bg-primary text-white" : "bg-white/5 text-gray-400 hover:text-white"
                                    }`}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>

                    {/* Season dropdown */}
                    <select
                        value={seasonFilter}
                        onChange={(e) => setSeasonFilter(e.target.value)}
                        className="px-3 py-2.5 rounded-xl bg-card-dark border border-white/5 text-white text-sm outline-none focus:border-primary"
                    >
                        <option value="all">Todas las temporadas</option>
                        {seasons.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
            </section>

            {/* Events grid */}
            <section className="max-w-[1280px] mx-auto w-full px-6 py-8">
                {filteredEvents.length === 0 ? (
                    <div className="text-center py-20">
                        <span className="material-icons text-gray-600 text-5xl mb-4">event_busy</span>
                        <p className="text-gray-400 text-lg font-semibold">No se han encontrado eventos</p>
                        <p className="text-gray-500 text-sm mt-1">Prueba a ajustar los filtros</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredEvents.map((evt) => (
                            <div
                                key={evt.slug}
                                className="group bg-card-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={evt.image_url}
                                        alt={evt.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark/80 to-transparent" />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <TypeBadge type={evt.event_type} />
                                        <AvailabilityBadge availability={evt.availability} />
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-white mb-2">{evt.name}</h3>
                                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4">
                                        <span className="flex items-center gap-1">
                                            <span className="material-icons text-primary text-sm">calendar_today</span> {evt.date_label}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-icons text-primary text-sm">location_on</span> {evt.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-icons text-primary text-sm">timer</span> {evt.duration_days} días
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 text-xs font-semibold">{evt.level}</span>
                                        <span className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 text-xs font-semibold">{evt.spots} plazas</span>
                                    </div>
                                    <button
                                        onClick={() => handleRequestSpot(evt)}
                                        className="w-full py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
                                    >
                                        Solicitar plaza <span className="material-icons text-base">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* ═══ REQUEST MODAL ═══ */}
            {showModal && selectedEvent && (
                <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
                    <div className="bg-card-dark rounded-2xl w-full max-w-md p-6 border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-lg font-bold text-white">Solicitar plaza</h3>
                            <button onClick={() => setShowModal(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                                <span className="material-icons text-lg">close</span>
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            <span className="font-semibold text-white">{selectedEvent.name}</span> · {selectedEvent.date_label}
                        </p>
                        <form onSubmit={handleSubmitRequest} className="space-y-3">
                            <input type="text" placeholder="Nombre completo" required className="form-input w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white text-sm placeholder-gray-500 outline-none" />
                            <input type="email" placeholder="Email" required className="form-input w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white text-sm placeholder-gray-500 outline-none" />
                            <input type="text" placeholder="Club / Organización" className="form-input w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white text-sm placeholder-gray-500 outline-none" />
                            <textarea placeholder="Notas adicionales" rows={3} className="form-input w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white text-sm placeholder-gray-500 outline-none resize-none" />
                            <button type="submit" className="w-full py-3.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2">
                                Enviar solicitud <span className="material-icons text-lg">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* ═══ CONFIRMATION TOAST ═══ */}
            {showConfirm && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl bg-emerald-500/90 text-white font-bold text-sm shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5">
                    <span className="material-icons">check_circle</span>
                    Solicitud enviada correctamente
                </div>
            )}

            <Footer />
        </>
    );
}
