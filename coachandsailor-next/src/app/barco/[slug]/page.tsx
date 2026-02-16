"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createBrowserClient } from "@/lib/supabase/client";
import { getBoatBySlug, type BoatData } from "@/data/boats";

/* ── Types matching Supabase row ── */
interface BoatRow {
    slug: string;
    name: string;
    category: string;
    tagline: string | null;
    description: string | null;
    length_m: number | null;
    capacity: number | null;
    max_speed_kn: number | null;
    engine: string | null;
    price_from: string | null;
    image_url: string | null;
    gallery: string[];
    specs: Record<string, string>;
    is_featured: boolean;
}

/* ── Map a Supabase row to the BoatData shape used by the UI ── */

const SHARED_INCLUDES = [
    "Patrón profesional incluido",
    "Combustible para la jornada",
    "Equipo de seguridad homologado",
    "Seguro a todo riesgo",
];

const SHARED_SAFETY_GEAR: { icon: string; text: string }[] = [
    { icon: "health_and_safety", text: "Chalecos salvavidas homologados" },
    { icon: "flare", text: "Bengalas de emergencia" },
    { icon: "medical_services", text: "Botiquín de primeros auxilios" },
    { icon: "cell_tower", text: "Radio VHF" },
    { icon: "anchor", text: "Ancla y cabo de fondeo" },
    { icon: "local_fire_department", text: "Extintor" },
    { icon: "light", text: "Luces de navegación" },
    { icon: "notifications_active", text: "Bocina de señalización" },
];

function mapRowToBoatData(row: BoatRow): BoatData {
    const categoryLabels: Record<string, string> = {
        coaching: "Coaching",
        support: "Support",
        "470": "Velero",
    };
    const categoryBadges: Record<string, string> = {
        coaching: "Coaching RIB",
        support: "Support RIB",
        "470": "Olympic Class Sailboat",
    };

    // Build heroKpis from row fields
    const heroKpis: { icon: string; label: string; value: string }[] = [];
    if (row.category === "470") {
        heroKpis.push({ icon: "sailing", label: "Clase", value: "470" });
    } else {
        heroKpis.push({ icon: "speed", label: "Motor", value: row.engine ?? "N/A" });
    }
    heroKpis.push({ icon: "straighten", label: "Eslora", value: row.length_m ? `${row.length_m} m` : "N/A" });
    heroKpis.push({ icon: "group", label: row.category === "470" ? "Tripulación" : "Capacidad", value: row.capacity ? `${row.capacity} Pax` : "N/A" });

    // Build specs array
    const specs: { icon: string; label: string; value: string }[] = [];
    if (row.specs) {
        const iconMap: Record<string, string> = {
            eslora: "straighten",
            manga: "open_in_full",
            peso: "fitness_center",
            peso_casco: "fitness_center",
            motor: "engineering",
            superficie_velica: "sailing",
        };
        for (const [key, val] of Object.entries(row.specs)) {
            specs.push({
                icon: iconMap[key] ?? "info",
                label: key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
                value: val,
            });
        }
    }
    // Ensure core specs are represented
    if (!specs.find((s) => s.label.toLowerCase().includes("motor")) && row.engine) {
        specs.unshift({ icon: "speed", label: "Motor", value: row.engine });
    }
    if (!specs.find((s) => s.label.toLowerCase().includes("capacidad")) && row.capacity) {
        specs.push({ icon: "group", label: "Capacidad", value: `${row.capacity} Pax` });
    }
    if (row.max_speed_kn) {
        specs.push({ icon: "speed", label: "Vel. Máx.", value: `${row.max_speed_kn} kn` });
    }

    return {
        slug: row.slug,
        name: row.name,
        tagline: row.tagline ?? "",
        category: categoryLabels[row.category] ?? row.category,
        categoryBadge: categoryBadges[row.category] ?? row.category,
        heroImage: row.image_url ?? "",
        locations: [],       // Will be enriched separately if needed
        locationString: "",
        pricePerDay: (row.price_from ?? "Consultar").replace(/\/día$/i, "").trim(),
        heroKpis,
        idealFor: [],
        description: row.description ?? "",
        specs,
        techDetails: [],
        safetyGear: SHARED_SAFETY_GEAR,
        gallery: row.gallery?.length ? row.gallery : row.image_url ? [row.image_url] : [],
        includes: SHARED_INCLUDES,
    };
}

export default function BoatDetailPage() {
    const params = useParams();
    const slug = typeof params.slug === "string" ? params.slug : "";

    const [boat, setBoat] = useState<BoatData | null>(null);
    const [loading, setLoading] = useState(true);

    /* ── Accordion state ── */
    const [techOpen, setTechOpen] = useState(true);
    const [safetyOpen, setSafetyOpen] = useState(false);

    /* ── Lightbox ── */
    const [lbOpen, setLbOpen] = useState(false);
    const [lbIdx, setLbIdx] = useState(0);

    /* ── Request modal ── */
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function fetchBoat() {
            setLoading(true);
            const supabase = createBrowserClient();

            if (supabase) {
                const { data, error } = await supabase
                    .from("boats")
                    .select("*")
                    .eq("slug", slug)
                    .single();

                if (!cancelled && data && !error) {
                    setBoat(mapRowToBoatData(data as BoatRow));
                    setLoading(false);
                    return;
                }
            }

            // Fallback to static data
            if (!cancelled) {
                const staticBoat = getBoatBySlug(slug);
                if (staticBoat) {
                    // Enrich with shared defaults if empty
                    if (!staticBoat.includes.length) staticBoat.includes = SHARED_INCLUDES;
                    if (!staticBoat.safetyGear.length) staticBoat.safetyGear = SHARED_SAFETY_GEAR;
                }
                setBoat(staticBoat ?? null);
                setLoading(false);
            }
        }

        fetchBoat();
        return () => { cancelled = true; };
    }, [slug]);

    /* ── Helpers ── */
    const GALLERY = boat?.gallery ?? [];
    function openLightbox(idx: number) { setLbIdx(idx); setLbOpen(true); }
    function closeLightbox() { setLbOpen(false); }
    function lbPrev() { setLbIdx((lbIdx - 1 + GALLERY.length) % GALLERY.length); }
    function lbNext() { setLbIdx((lbIdx + 1) % GALLERY.length); }
    function openRequestModal() { setModalOpen(true); setSending(false); }
    function closeRequestModal() { setModalOpen(false); }
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSending(true);
        setTimeout(() => { closeRequestModal(); setConfirmOpen(true); }, 1200);
    }

    /* ── Loading state ── */
    if (loading) {
        return (
            <>
                <Navbar active="/flota" />
                <div className="flex-1 flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <span className="material-icons text-primary text-4xl animate-spin">sync</span>
                        <p className="text-gray-400 mt-3 text-sm">Cargando embarcación…</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    /* ── Not found ── */
    if (!boat) {
        return (
            <>
                <Navbar active="/flota" />
                <div className="flex-1 flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <span className="material-icons text-gray-600 text-5xl mb-3">sailing</span>
                        <h2 className="text-xl font-bold text-white mb-2">Embarcación no encontrada</h2>
                        <p className="text-gray-400 text-sm mb-6">No hemos encontrado una embarcación con el slug &ldquo;{slug}&rdquo;</p>
                        <a href="/flota" className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
                            <span className="material-icons text-lg">arrow_back</span> Ver toda la flota
                        </a>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    /* ── Derived values ── */
    const hasLocations = boat.locations.length > 0;
    const locString = hasLocations ? boat.locationString : "";
    const price = boat.pricePerDay;
    const isConsultar = price === "Consultar" || price.toLowerCase().includes("consultar");

    return (
        <>
            <Navbar active="/flota" />



            {/* ═══ HERO ═══ */}
            <section className="relative w-full h-[50vh] md:h-[420px] lg:h-[480px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={`${boat.name} — ${boat.category}`} className="w-full h-full object-cover"
                    src={boat.heroImage} />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0">
                    <div className="max-w-[1280px] mx-auto px-6 pb-8">
                        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-primary/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-3">
                            {boat.categoryBadge}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-tight">{boat.name}</h1>
                        {locString && (
                            <p className="text-gray-300 text-base flex items-center gap-1.5 mb-5">
                                <span className="material-icons text-primary text-lg">location_on</span>
                                {locString}
                            </p>
                        )}
                        {/* Hero KPI chips */}
                        <div className="flex flex-wrap gap-3">
                            {boat.heroKpis.map((kpi) => (
                                <div key={kpi.label} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <span className="material-icons text-primary text-xl">{kpi.icon}</span>
                                    <div>
                                        <p className="text-[10px] uppercase text-gray-400 tracking-wider font-bold">{kpi.label}</p>
                                        <p className="text-sm font-bold text-white">{kpi.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ BREADCRUMB ═══ */}
            <div className="max-w-[1280px] mx-auto w-full px-6 pt-6 pb-2">
                <div className="flex items-center justify-between">
                    <nav className="text-sm text-gray-500 flex items-center gap-1">
                        <a href="/flota" className="hover:text-white transition-colors">Flota</a>
                        <span className="material-icons text-xs">chevron_right</span>
                        <span className="text-gray-400">{boat.category}</span>
                        <span className="material-icons text-xs">chevron_right</span>
                        <span className="text-white font-medium">{boat.name}</span>
                    </nav>
                    <a href="/flota" className="hidden md:flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
                        <span className="material-icons text-base">arrow_back</span> Volver a flota
                    </a>
                </div>
            </div>

            {/* ═══ MAIN LAYOUT ═══ */}
            <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 pb-28 lg:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">

                    {/* ─── LEFT COLUMN ─── */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* 1. Ideal para… */}
                        {(boat.tagline || boat.idealFor.length > 0) && (
                            <section className="bg-card-dark rounded-2xl p-6 border border-white/5">
                                <h2 className="text-lg font-bold text-white mb-3">Ideal para…</h2>
                                {boat.tagline && (
                                    <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
                                        {boat.tagline}
                                    </p>
                                )}
                                {boat.idealFor.length > 0 && (
                                    <ul className="space-y-2">
                                        {boat.idealFor.map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                                                <span className="material-icons text-primary text-lg">check_circle</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        )}

                        {/* 2. Description */}
                        {boat.description && (
                            <section>
                                <h2 className="text-lg font-bold text-white mb-3">Descripción</h2>
                                <p className="text-gray-300 text-[15px] leading-relaxed">
                                    {boat.description}
                                </p>
                            </section>
                        )}

                        {/* 3. Key Specs */}
                        {boat.specs.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold text-white mb-4">Especificaciones</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {boat.specs.map((spec) => (
                                        <div key={spec.label} className="bg-card-dark p-4 rounded-xl border border-white/5 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                                                <span className="material-icons">{spec.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-[11px] text-gray-500 uppercase font-bold">{spec.label}</p>
                                                <p className="text-white font-bold">{spec.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* 4. Technical Details (Accordion) — only if data present */}
                        {boat.techDetails.length > 0 && (
                            <section>
                                <button onClick={() => setTechOpen(!techOpen)} className="w-full flex items-center justify-between py-4 border-b border-white/10 group">
                                    <h2 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Detalles técnicos</h2>
                                    <span className={`material-icons text-gray-500 group-hover:text-primary transition-all ${techOpen ? "rotate-180" : ""}`}>expand_more</span>
                                </button>
                                <div className={`overflow-hidden transition-[max-height] duration-350 ease-in-out ${techOpen ? "max-h-[600px]" : "max-h-0"}`}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                        {boat.techDetails.map((d) => (
                                            <div key={d.label} className="flex items-center gap-3 p-3 rounded-xl bg-card-dark border border-white/5">
                                                <span className="material-icons text-primary text-lg">{d.icon}</span>
                                                <div>
                                                    <p className="text-[11px] text-gray-500 uppercase font-bold">{d.label}</p>
                                                    <p className="text-white font-semibold text-sm">{d.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* 5. Safety Gear (Accordion) — only if data present */}
                        {boat.safetyGear.length > 0 && (
                            <section>
                                <button onClick={() => setSafetyOpen(!safetyOpen)} className="w-full flex items-center justify-between py-4 border-b border-white/10 group">
                                    <h2 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Equipo de seguridad incluido</h2>
                                    <span className={`material-icons text-gray-500 group-hover:text-primary transition-all ${safetyOpen ? "rotate-180" : ""}`}>expand_more</span>
                                </button>
                                <div className={`overflow-hidden transition-[max-height] duration-350 ease-in-out ${safetyOpen ? "max-h-[600px]" : "max-h-0"}`}>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                        {boat.safetyGear.map((item) => (
                                            <li key={item.text} className="flex items-center gap-3 p-3 rounded-xl bg-card-dark border border-white/5">
                                                <span className="material-icons text-primary text-lg">{item.icon}</span>
                                                <span className="text-sm text-gray-300">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )}

                        {/* 6. Gallery */}
                        {GALLERY.length > 0 && (
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold text-white">En el agua</h2>
                                    <button onClick={() => openLightbox(0)} className="text-sm text-primary font-semibold hover:text-blue-400 transition-colors flex items-center gap-1">
                                        Ver todas <span className="material-icons text-base">photo_library</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]" onClick={() => openLightbox(0)}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img alt={`${boat.name} en acción`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src={GALLERY[0]} />
                                    </div>
                                    {GALLERY.length > 1 && (
                                        <div className="relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]" onClick={() => openLightbox(1)}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img alt={`${boat.name} detalle`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src={GALLERY[1]} />
                                        </div>
                                    )}
                                    {GALLERY.length > 2 && (
                                        <div className="relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] group" onClick={() => openLightbox(2)}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img alt={`${boat.name} galería`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={GALLERY[2]} />
                                            {GALLERY.length > 2 && (
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold flex items-center gap-1">
                                                        <span className="material-icons text-lg">photo_library</span> +{GALLERY.length} fotos
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* ─── RIGHT COLUMN (booking sidebar) — DESKTOP ─── */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-[80px]">
                            <div className="bg-card-dark rounded-2xl border border-white/10 p-6 shadow-xl space-y-5">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-gray-400 font-medium">Desde</span>
                                    <span className="text-3xl font-extrabold text-white">{price}</span>
                                    {!isConsultar && <span className="text-gray-400 font-medium">/ día</span>}
                                </div>
                                {hasLocations && (
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">Ubicaciones disponibles</p>
                                        <div className="flex flex-wrap gap-2">
                                            {boat.locations.map((loc) => (
                                                <span key={loc} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold">{loc}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {boat.includes.length > 0 && (
                                    <div className="space-y-2">
                                        {boat.includes.map((inc) => (
                                            <div key={inc} className="flex items-center gap-2 text-sm text-gray-300">
                                                <span className="material-icons text-emerald-400 text-lg">check_circle</span>
                                                {inc}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <hr className="border-white/5" />
                                <button onClick={openRequestModal} className="w-full py-3.5 rounded-xl bg-primary hover:bg-blue-600 active:bg-blue-700 text-white font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm">
                                    Solicitar disponibilidad <span className="material-icons text-lg">arrow_forward</span>
                                </button>
                                <a href="/contacto" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors text-sm flex items-center justify-center gap-2">
                                    <span className="material-icons text-base">mail</span> Contactar
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Tablet booking card */}
            <div className="hidden md:block lg:hidden px-6 pb-8">
                <div className="max-w-[1280px] mx-auto bg-card-dark rounded-2xl border border-white/10 p-6 shadow-xl">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-extrabold text-white">{price}</span>
                                {!isConsultar && <span className="text-gray-400 font-medium">/ día</span>}
                            </div>
                            {hasLocations && (
                                <div className="flex gap-2">
                                    {boat.locations.map((l) => (
                                        <span key={l} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold">{l}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button onClick={openRequestModal} className="py-3 px-8 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center gap-2 text-sm">
                            Solicitar disponibilidad <span className="material-icons text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ═══ MOBILE BOTTOM BAR ═══ */}
            <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-background-dark/90 backdrop-blur-xl border-t border-white/10 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-500">Desde</p>
                        <p className="text-xl font-extrabold text-white">{price} {!isConsultar && <span className="text-sm font-normal text-gray-400">/ día</span>}</p>
                    </div>
                    <button onClick={openRequestModal} className="py-3 px-6 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] text-sm flex items-center gap-2">
                        Solicitar disponibilidad <span className="material-icons text-lg">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* ═══ REQUEST MODAL ═══ */}
            {modalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} onClick={(e) => { if (e.target === e.currentTarget) closeRequestModal(); }}>
                    <div className="bg-surface-dark border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-6 pb-0">
                            <h2 className="text-xl font-bold text-white">Solicitar disponibilidad</h2>
                            <button onClick={closeRequestModal} className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                                <span className="material-icons text-xl">close</span>
                            </button>
                        </div>
                        <div className="mx-6 mt-4 p-4 rounded-xl bg-background-dark border border-white/5">
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Embarcación</p>
                            <p className="text-white font-bold text-lg">{boat.name}</p>
                            {hasLocations && (
                                <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                                    <span className="material-icons text-sm text-gray-600">location_on</span> {boat.locations.join(", ")}
                                </p>
                            )}
                        </div>
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
                                <select required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors cursor-pointer">
                                    <option disabled value="">Seleccionar clase…</option>
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
                                <textarea rows={2} placeholder="Necesidades especiales, ubicación preferida…" className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" />
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
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} onClick={(e) => { if (e.target === e.currentTarget) setConfirmOpen(false); }}>
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

            {/* ═══ LIGHTBOX ═══ */}
            {lbOpen && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center" style={{ background: "rgba(0,0,0,0.92)" }} onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}>
                    <button onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
                        <span className="material-icons">close</span>
                    </button>
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-semibold z-10">
                        {lbIdx + 1} / {GALLERY.length}
                    </div>
                    <button onClick={lbPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
                        <span className="material-icons text-2xl">chevron_left</span>
                    </button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="max-w-[90vw] max-h-[80vh] rounded-xl object-contain shadow-2xl" src={GALLERY[lbIdx]} alt="" />
                    <button onClick={lbNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
                        <span className="material-icons text-2xl">chevron_right</span>
                    </button>
                </div>
            )}

            <Footer />
        </>
    );
}
