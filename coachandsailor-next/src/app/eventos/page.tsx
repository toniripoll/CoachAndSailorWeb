"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Event data ── */
const EVENTS = [
    {
        id: 1,
        name: "Trofeo Princesa Sofía",
        location: "palma",
        locationLabel: "Palma de Mallorca, España",
        season: "2024",
        date: "1 – 6 Abr 2024",
        type: "olympic",
        typeLabel: "Olympic Class",
        badge: { text: "RIBs Disponibles", color: "bg-emerald-500/90" },
        extraChips: ["Soporte técnico", "6 plazas"],
        duration: "6 días",
        level: "Nivel olímpico",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCESj5RjeO1e7soVVF3iih9ZcDD5IyglCB0kGpbIXYgxOunL_JNwaZoS6zc8MGv39XgVgoRDolPoyfiitQanD6hhXj-RemqgsL82oDHcjAQJEjyWAxFz9F1Mxkl4ZgSI2_iOlCOeb6EKTUw4bbSbseYx-revUHKyfuvxEPiiCZe6Zu-VWgWkEhVCxu5G50MO0WKPu5Cqs6fw4n0JCsa16Fw-lkALdI4N6xsdCtOf0qTnxlh5BejFojh_wR941z9nSDW6X51USVwW40",
    },
    {
        id: 2,
        name: "Copa del Rey MAPFRE",
        location: "palma",
        locationLabel: "Palma de Mallorca, España",
        season: "2024",
        date: "27 Jul – 3 Ago 2024",
        type: "major",
        typeLabel: "Major Event",
        badge: { text: "Soporte Técnico", color: "bg-primary/90" },
        extraChips: ["RIB disponible", "4 plazas"],
        duration: "8 días",
        level: "Alta competición",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDgWUN4D00J15kDLudQCIM5DJwE6bf-FuzLHbIFnK4aUY4eWA5M1Uh0vYgL28o64acwTESjRRD0IhLnLHpb4yRtsfCd0kvDl-xZHDnOETgaBjOZapleJmyVaGaWnnDKcDoqqTzxdDGSImNRloH7GQy3A9YDqD1Iur9SYs1MPa1ERoR91pdV6mdo1mBcXkpDzlMmYbVhMkCC1A19pjKJTT7AdQwQXdDGuGR4J6odsVnLeh86bDEePmuvEPm-JC0VU104E5EiK7YPBE4",
    },
    {
        id: 3,
        name: "ORC World Championship",
        location: "barcelona",
        locationLabel: "Barcelona, España",
        season: "2024",
        date: "20 – 27 Sep 2024",
        type: "world",
        typeLabel: "World Championship",
        badge: { text: "Pocas Plazas", color: "bg-amber-500/90" },
        extraChips: ["Soporte técnico"],
        limitedChip: "2 plazas",
        duration: "8 días",
        level: "Campeonato mundial",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAs1YmzCLOeaB-6SPWNhL4bi2ZuVx94wnkF1oYByMjAhOBjcjpqOq87sD00b3gVVggT-pIEn06zP1-HAif4qo3OFGCUHPzyroas2GCUXdCrGahJN_gCRhb9l4ceS2s34SrbmgeacRCwuPjsLL6LNn36sxh_9BZLwKTdaUEBqxRJLRLzFUHH0jgBEJUcJHtSLdLUREq2or4ekjDNPujwpZl7mBGZ5-sxOb24UdGMUSIXcCo61uImpLIenakBHLKYB4NzYYhjvujPypM",
    },
    {
        id: 4,
        name: "Valencia Sailing Week",
        location: "valencia",
        locationLabel: "Valencia, España",
        season: "2024",
        date: "15 – 20 Oct 2024",
        type: "major",
        typeLabel: "Major Event",
        badge: { text: "RIBs Disponibles", color: "bg-emerald-500/90" },
        extraChips: ["RIB disponible", "8 plazas"],
        duration: "6 días",
        level: "Alta competición",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCESj5RjeO1e7soVVF3iih9ZcDD5IyglCB0kGpbIXYgxOunL_JNwaZoS6zc8MGv39XgVgoRDolPoyfiitQanD6hhXj-RemqgsL82oDHcjAQJEjyWAxFz9F1Mxkl4ZgSI2_iOlCOeb6EKTUw4bbSbseYx-revUHKyfuvxEPiiCZe6Zu-VWgWkEhVCxu5G50MO0WKPu5Cqs6fw4n0JCsa16Fw-lkALdI4N6xsdCtOf0qTnxlh5BejFojh_wR941z9nSDW6X51USVwW40",
    },
] as const;

const LOCATIONS = [
    { value: "all", label: "Todos" },
    { value: "palma", label: "Palma" },
    { value: "barcelona", label: "Barcelona" },
    { value: "valencia", label: "Valencia" },
    { value: "ibiza", label: "Ibiza" },
];

type EventType = (typeof EVENTS)[number];

export default function EventosPage() {
    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("all");
    const [seasonFilter, setSeasonFilter] = useState("2024");

    /* ── Modal state ── */
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEvent, setModalEvent] = useState<EventType | null>(null);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [sending, setSending] = useState(false);

    /* ── Filter logic ── */
    const filtered = useMemo(() => {
        return EVENTS.filter((e) => {
            const matchLoc = locationFilter === "all" || e.location === locationFilter;
            const matchSeason = seasonFilter === "all" || e.season === seasonFilter;
            const matchSearch = !search || e.name.toLowerCase().includes(search.toLowerCase());
            return matchLoc && matchSeason && matchSearch;
        });
    }, [search, locationFilter, seasonFilter]);

    function openModal(ev: EventType) {
        setModalEvent(ev);
        setModalOpen(true);
        setSending(false);
    }
    function closeModal() {
        setModalOpen(false);
    }
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            closeModal();
            setConfirmOpen(true);
        }, 1200);
    }

    return (
        <>
            <Navbar active="/eventos" />

            {/* ═══ PAGE HEADER + FILTER BAR ═══ */}
            <section className="border-b border-white/5 bg-surface-dark/50">
                <div className="max-w-[1280px] mx-auto px-6 pt-8 pb-6">
                    <div className="mb-6">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Calendario de Eventos</h1>
                        <p className="text-gray-400">Encuentra tu próxima regata y solicita plaza para nuestras neumáticas.</p>
                    </div>
                    {/* Filter row */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        {/* Search */}
                        <div className="relative flex-1 max-w-sm">
                            <span className="material-icons text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 text-xl">search</span>
                            <input
                                type="text" placeholder="Buscar evento…"
                                value={search} onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background-dark border border-white/10 text-white text-sm placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                            />
                        </div>
                        {/* Location pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar">
                            {LOCATIONS.map((loc) => (
                                <button
                                    key={loc.value}
                                    onClick={() => setLocationFilter(loc.value)}
                                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${locationFilter === loc.value
                                            ? "bg-primary text-white font-semibold"
                                            : "bg-white/5 text-gray-400 border border-white/10 hover:border-primary/30 hover:text-white"
                                        }`}
                                >
                                    {loc.label}
                                </button>
                            ))}
                        </div>
                        {/* Season */}
                        <select
                            value={seasonFilter} onChange={(e) => setSeasonFilter(e.target.value)}
                            className="px-4 py-2.5 rounded-xl bg-background-dark border border-white/10 text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors cursor-pointer"
                        >
                            <option value="all">Todas las temporadas</option>
                            <option value="2025">Temporada 2025</option>
                            <option value="2024">Temporada 2024</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* ═══ EVENTS GRID ═══ */}
            <main className="flex-1 py-8 px-6">
                <div className="max-w-[1280px] mx-auto">
                    <p className="text-sm text-gray-500 mb-5">
                        Mostrando {filtered.length} evento{filtered.length !== 1 ? "s" : ""}
                    </p>
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {filtered.map((ev) => (
                                <div key={ev.id} className="group">
                                    <div className="flex flex-col bg-card-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300">
                                        {/* Image */}
                                        <div className="relative aspect-[2/1] overflow-hidden">
                                            <div
                                                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                                                style={{ backgroundImage: `url("${ev.image}")` }}
                                            />
                                            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-card-dark to-transparent" />
                                            <span className={`absolute top-3 right-3 ${ev.badge.color} backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg`}>
                                                {ev.badge.text}
                                            </span>
                                        </div>
                                        {/* Content */}
                                        <div className="p-5 flex flex-col gap-3">
                                            {/* Chips */}
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                                    {ev.typeLabel}
                                                </span>
                                                {ev.extraChips.map((c) => (
                                                    <span key={c} className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 text-xs font-semibold">{c}</span>
                                                ))}
                                                {"limitedChip" in ev && ev.limitedChip && (
                                                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-semibold">{ev.limitedChip}</span>
                                                )}
                                            </div>
                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white leading-tight">{ev.name}</h3>
                                            {/* Meta */}
                                            <div className="flex flex-col gap-1.5">
                                                <div className="flex items-center gap-2 text-gray-300">
                                                    <span className="material-icons text-base text-gray-500">calendar_today</span>
                                                    <span className="text-sm font-medium">{ev.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-300">
                                                    <span className="material-icons text-base text-gray-500">location_on</span>
                                                    <span className="text-sm font-medium">{ev.locationLabel}</span>
                                                </div>
                                            </div>
                                            {/* Key info */}
                                            <div className="flex items-center gap-4 text-sm text-gray-400 pt-2 border-t border-white/5">
                                                <span className="flex items-center gap-1"><span className="material-icons text-base">schedule</span> {ev.duration}</span>
                                                <span className="flex items-center gap-1"><span className="material-icons text-base">emoji_events</span> {ev.level}</span>
                                            </div>
                                            {/* CTA */}
                                            <button
                                                onClick={() => openModal(ev)}
                                                className="w-full mt-1 py-3 rounded-xl bg-primary hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/15"
                                            >
                                                <span>Solicitar plaza</span>
                                                <span className="material-icons text-base">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                                <span className="material-icons text-3xl text-gray-600">search_off</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">No se encontraron eventos</h3>
                            <p className="text-gray-500 mb-5">Prueba con otros filtros o palabras clave.</p>
                            <button
                                onClick={() => { setSearch(""); setLocationFilter("all"); setSeasonFilter("2024"); }}
                                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* ═══ REQUEST MODAL ═══ */}
            {modalOpen && modalEvent && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
                    onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
                >
                    <div className="bg-surface-dark border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 pb-0">
                            <h2 className="text-xl font-bold text-white">Solicitar plaza</h2>
                            <button onClick={closeModal} className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                                <span className="material-icons text-xl">close</span>
                            </button>
                        </div>
                        {/* Event summary */}
                        <div className="mx-6 mt-4 p-4 rounded-xl bg-background-dark border border-white/5">
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Solicitud para</p>
                            <p className="text-white font-bold text-lg">{modalEvent.name}</p>
                            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-400">
                                <span className="flex items-center gap-1"><span className="material-icons text-sm text-gray-600">calendar_today</span> {modalEvent.date}</span>
                                <span className="flex items-center gap-1"><span className="material-icons text-sm text-gray-600">location_on</span> {modalEvent.locationLabel}</span>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="p-6 flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-1.5">Fecha inicio *</label>
                                    <input type="date" required className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-1.5">Fecha fin *</label>
                                    <input type="date" required className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Nº de lanchas *</label>
                                <input type="number" min="1" defaultValue={1} required className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Clase *</label>
                                <select required className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors cursor-pointer">
                                    <option value="">Seleccionar clase…</option>
                                    <option value="optimist">Optimist</option>
                                    <option value="laser">ILCA (Laser)</option>
                                    <option value="420">420</option>
                                    <option value="470">470</option>
                                    <option value="49er">49er / 49erFX</option>
                                    <option value="nacra17">Nacra 17</option>
                                    <option value="windsurf">Windsurf / iQFOiL</option>
                                    <option value="kite">Kite / Formula Kite</option>
                                    <option value="other">Otra / No estoy seguro</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Comentarios (opcional)</label>
                                <textarea rows={2} placeholder="Necesidades especiales, nº participantes…" className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" />
                            </div>
                            <button type="submit" disabled={sending} className="w-full py-3.5 rounded-xl bg-primary hover:bg-blue-600 active:bg-blue-700 text-white font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70">
                                <span>{sending ? "Enviando…" : "Enviar solicitud"}</span>
                                <span className="material-icons text-lg">{sending ? "hourglass_empty" : "send"}</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* ═══ CONFIRMATION MODAL ═══ */}
            {confirmOpen && (
                <div
                    className="fixed inset-0 z-[110] flex items-center justify-center p-4"
                    style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
                    onClick={(e) => { if (e.target === e.currentTarget) setConfirmOpen(false); }}
                >
                    <div className="bg-surface-dark border border-white/10 rounded-2xl w-full max-w-sm p-8 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                            <span className="material-icons text-3xl text-emerald-400">check_circle</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">¡Solicitud enviada!</h3>
                        <p className="text-gray-400 text-sm mb-6">Te contactaremos en menos de 24 horas para confirmar disponibilidad y presupuesto.</p>
                        <button onClick={() => setConfirmOpen(false)} className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
