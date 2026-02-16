import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Cobertura — Coach & Sailor",
    description:
        "Zonas de cobertura: 4 bases operativas en el Mediterráneo con más de 12 neumáticas profesionales.",
};

/* ── Destination card ── */
function DestinationCard({
    city, country, ribs, flag, img, features, available,
}: {
    city: string; country: string; ribs: string; flag: string; img: string;
    features: { icon: string; text: string }[];
    available: boolean;
}) {
    return (
        <div className="group bg-card-dark rounded-2xl border border-white/5 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300">
            <div className="relative h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={`${city} — base de neumáticas`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img} />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-card-dark/30 to-transparent" />
                <div className="absolute top-3 right-3">
                    <span className={`${available ? "bg-emerald-500/90" : "bg-amber-500/90"} backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg`}>
                        {available ? "Base activa" : "Solicitar"}
                    </span>
                </div>
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl">{flag}</span>
                    <div>
                        <h3 className="text-white font-bold text-lg leading-tight">{city}</h3>
                        <p className="text-gray-300 text-xs">{country}</p>
                    </div>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="material-icons text-primary text-base">directions_boat</span>
                    <span className="font-medium">{ribs}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {features.map((f) => (
                        <span key={f.text} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 text-xs font-medium">
                            <span className="material-icons text-xs text-primary">{f.icon}</span> {f.text}
                        </span>
                    ))}
                </div>
                <a href="/contacto" className="w-full mt-1 py-2.5 rounded-xl bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-all flex items-center justify-center gap-2">
                    Solicitar cobertura <span className="material-icons text-base">arrow_forward</span>
                </a>
            </div>
        </div>
    );
}

export default function CoberturaPage() {
    return (
        <>
            <Navbar active="/cobertura" />

            {/* ═══ 1) HERO ═══ */}
            <section className="relative w-full overflow-hidden" style={{ height: "clamp(260px, 40vh, 420px)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Mapa del Mediterráneo — cobertura Coach & Sailor" className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9rsDiITUAKkmNh6Mh63N9VyEFDBn_pQPrfGwhz0XDtW1sUKOOHJ6bZyqB99-8jn2LcAZFezt4WgaeOxHejvIhfNVA7BHzYWWQmjfeU4UfpoIW_DMkce1wGtjlQ8XYdxhD6GNkVMC7p8f1BvIAd58hWpxdOxMsDZn25N2EvQ-2k-pmGKwv36qRA85sMqNe-AXgxmpTLFCMFHWKm57qN0RGBEDo3WN1tK212vqmdMQd3iQCjEzPZ-9wBJ7zqceDKWqmVUcvxVeNI4" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark/60 to-transparent" />
                <div className="absolute bottom-0 inset-x-0">
                    <div className="max-w-[1280px] mx-auto px-6 pb-8">
                        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-primary/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-3">
                            <span className="material-icons text-sm mr-1">map</span> Cobertura Mediterráneo
                        </span>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2 max-w-2xl">
                            Donde tú entrenas, nosotros cubrimos
                        </h1>
                        <p className="text-gray-300 text-sm sm:text-base max-w-lg mb-5">
                            4 bases operativas con más de 12 neumáticas listas para desplegar en cualquier evento.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="/contacto" className="px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center gap-2">
                                Solicitar cobertura <span className="material-icons text-lg">arrow_forward</span>
                            </a>
                            <a href="#destinos" className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                                Explorar destinos <span className="material-icons text-lg">explore</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ 2) DESTINOS PRINCIPALES ═══ */}
            <section id="destinos" className="max-w-[1280px] mx-auto w-full px-6 py-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Destinos principales</h2>
                    <p className="text-gray-400 text-sm sm:text-base">Bases fijas con RIBs siempre disponibles</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <DestinationCard
                        city="Palma" country="Mallorca, España" flag="🇪🇸" ribs="12 RIBs · Base principal"
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuBs7TFXOZ8kR1b8TKYKCe2LTPj0lOBnnShljVAuDfLwYH2AqUpnKNVyysrFIRB_lIT3lrQ_8FYNuELc2fcyHGeAfpMkbUCI4C4nR3hKDTOVbckrvAOIvjECRxvlCn1pSHf9kV6NzunRqlWajwwf_-8MUHAgga9jWyDjNONNAtUqe3bY8DJ9tpgrJC7Qxslunwi1sJS8lhKf1ygm_6YGQzvbyVrBT6poIA_IH4W-NXOut696UAHbww5bC-2_hrfTFNFrPogdxhx8LDE"
                        available={true}
                        features={[
                            { icon: "emoji_events", text: "Trofeo Sofía" },
                            { icon: "pool", text: "Bahía de Palma" },
                            { icon: "local_shipping", text: "Logística propia" },
                        ]}
                    />
                    <DestinationCard
                        city="Barcelona" country="Cataluña, España" flag="🇪🇸" ribs="6 RIBs"
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuDgWUN4D00J15kDLudQCIM5DJwE6bf-FuzLHbIFnK4aUY4eWA5M1Uh0vYgL28o64acwTESjRRD0IhLnLHpb4yRtsfCd0kvDl-xZHDnOETgaBjOZapleJmyVaGaWnnDKcDoqqTzxdDGSImNRloH7GQy3A9YDqD1Iur9SYs1MPa1ERoR91pdV6mdo1mBcXkpDzlMmYbVhMkCC1A19pjKJTT7AdQwQXdDGuGR4J6odsVnLeh86bDEePmuvEPm-JC0VU104E5EiK7YPBE4"
                        available={true}
                        features={[
                            { icon: "emoji_events", text: "ORC Worlds" },
                            { icon: "school", text: "Club coaching" },
                        ]}
                    />
                    <DestinationCard
                        city="Valencia" country="Com. Valenciana, España" flag="🇪🇸" ribs="4 RIBs"
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuCESj5RjeO1e7soVVF3iih9ZcDD5IyglCB0kGpbIXYgxOunL_JNwaZoS6zc8MGv39XgVgoRDolPoyfiitQanD6hhXj-RemqgsL82oDHcjAQJEjyWAxFz9F1Mxkl4ZgSI2_iOlCOeb6EKTUw4bbSbseYx-revUHKyfuvxEPiiCZe6Zu-VWgWkEhVCxu5G50MO0WKPu5Cqs6fw4n0JCsa16Fw-lkALdI4N6xsdCtOf0qTnxlh5BejFojh_wR941z9nSDW6X51USVwW40"
                        available={true}
                        features={[
                            { icon: "emoji_events", text: "Sailing Week" },
                            { icon: "anchor", text: "Marina Real" },
                        ]}
                    />
                    <DestinationCard
                        city="Ibiza" country="Baleares, España" flag="🇪🇸" ribs="2 RIBs · Bajo demanda"
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuAs1YmzCLOeaB-6SPWNhL4bi2ZuVx94wnkF1oYByMjAhOBjcjpqOq87sD00b3gVVggT-pIEn06zP1-HAif4qo3OFGCUHPzyroas2GCUXdCrGahJN_gCRhb9l4ceS2s34SrbmgeacRCwuPjsLL6LNn36sxh_9BZLwKTdaUEBqxRJLRLzFUHH0jgBEJUcJHtSLdLUREq2or4ekjDNPujwpZl7mBGZ5-sxOb24UdGMUSIXcCo61uImpLIenakBHLKYB4NzYYhjvujPypM"
                        available={false}
                        features={[
                            { icon: "wb_sunny", text: "Temporada verano" },
                            { icon: "call", text: "Bajo petición" },
                        ]}
                    />
                </div>
            </section>

            {/* ═══ 3) MAPA INTERACTIVO ═══ */}
            <section className="max-w-[1280px] mx-auto w-full px-6 pb-16">
                <div className="bg-card-dark rounded-2xl border border-white/5 overflow-hidden relative" style={{ height: "320px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Mapa del Mediterráneo" className="w-full h-full object-cover opacity-60"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mediterranean_Sea_political_map-en.svg/1200px-Mediterranean_Sea_political_map-en.svg.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-card-dark/50 to-card-dark/30" />
                    {/* Map markers */}
                    <div className="absolute" style={{ top: "52%", left: "62%" }}>
                        <div className="relative w-4 h-4 bg-primary rounded-full shadow-[0_0_12px_rgba(19,127,236,0.5)] border-2 border-white animate-pulse" />
                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max bg-surface-dark px-4 py-3 rounded-xl shadow-2xl border border-white/10 hidden sm:block">
                            <p className="text-sm font-bold text-white mb-0.5">Palma de Mallorca</p>
                            <p className="text-xs text-gray-400 flex items-center gap-1"><span className="material-icons text-primary text-xs">directions_boat</span> 12 RIBs · Base principal</p>
                            <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-surface-dark rotate-45 border-r border-b border-white/10" />
                        </div>
                    </div>
                    <div className="absolute" style={{ top: "35%", left: "48%" }}>
                        <div className="relative w-3.5 h-3.5 bg-primary rounded-full shadow-[0_0_10px_rgba(19,127,236,0.4)] border-2 border-white animate-pulse" style={{ animationDelay: "0.3s" }} />
                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max bg-surface-dark px-3 py-2 rounded-lg shadow-xl border border-white/10 hidden sm:block">
                            <p className="text-xs font-bold text-white">Barcelona</p>
                            <p className="text-[10px] text-gray-400">6 RIBs</p>
                        </div>
                    </div>
                    <div className="absolute" style={{ top: "48%", left: "42%" }}>
                        <div className="relative w-3.5 h-3.5 bg-primary rounded-full shadow-[0_0_10px_rgba(19,127,236,0.4)] border-2 border-white animate-pulse" style={{ animationDelay: "0.6s" }} />
                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max bg-surface-dark px-3 py-2 rounded-lg shadow-xl border border-white/10 hidden sm:block">
                            <p className="text-xs font-bold text-white">Valencia</p>
                            <p className="text-[10px] text-gray-400">4 RIBs</p>
                        </div>
                    </div>
                    <div className="absolute" style={{ top: "50%", left: "52%" }}>
                        <div className="relative w-3 h-3 bg-primary/70 rounded-full shadow-[0_0_8px_rgba(19,127,236,0.3)] border-2 border-white/80 animate-pulse" style={{ animationDelay: "0.9s" }} />
                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max bg-surface-dark px-3 py-2 rounded-lg shadow-xl border border-white/10 hidden sm:block">
                            <p className="text-xs font-bold text-white">Ibiza</p>
                            <p className="text-[10px] text-gray-400">Bajo demanda</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ 4) CÓMO FUNCIONA ═══ */}
            <section className="bg-surface-dark border-y border-white/5">
                <div className="max-w-[1280px] mx-auto w-full px-6 py-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Cómo funciona</h2>
                        <p className="text-gray-400 text-sm sm:text-base">De la solicitud al agua en 3 pasos</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: "01", icon: "edit_note", title: "Solicita", desc: "Cuéntanos evento, fechas, ubicación y número de neumáticas que necesitas." },
                            { step: "02", icon: "handshake", title: "Confirmamos", desc: "En menos de 24 h te enviamos presupuesto cerrado con la disponibilidad confirmada." },
                            { step: "03", icon: "sailing", title: "Navegamos", desc: "Entregamos la neumática con todo el equipo en el puerto o rampa que elijas." },
                        ].map((s) => (
                            <div key={s.step} className="text-center">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                                    <span className="material-icons text-primary text-3xl">{s.icon}</span>
                                </div>
                                <span className="text-primary text-xs font-bold uppercase tracking-widest">Paso {s.step}</span>
                                <h3 className="text-lg font-bold text-white mt-1 mb-2">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ 5) POR QUÉ ELEGIRNOS ═══ */}
            <section className="max-w-[1280px] mx-auto w-full px-6 py-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">¿Por qué Coach&amp;Sailor?</h2>
                    <p className="text-gray-400 text-sm sm:text-base">Lo que nos diferencia</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        { icon: "speed", title: "Respuesta rápida", desc: "Presupuesto en menos de 24 horas.", color: "bg-primary/10 text-primary" },
                        { icon: "verified", title: "Flota premium", desc: "Neumáticas de alto rendimiento, mantenidas profesionalmente.", color: "bg-emerald-500/10 text-emerald-400" },
                        { icon: "public", title: "Cobertura amplia", desc: "4 bases en España + despliegue a toda Europa.", color: "bg-amber-500/10 text-amber-400" },
                        { icon: "support_agent", title: "Soporte dedicado", desc: "Punto de contacto único para toda la operación.", color: "bg-sky-500/10 text-sky-400" },
                    ].map((item) => (
                        <div key={item.title} className="bg-card-dark rounded-2xl border border-white/5 p-6 text-center hover:border-primary/20 transition-colors">
                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                                <span className="material-icons text-2xl">{item.icon}</span>
                            </div>
                            <h3 className="text-white font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══ 6) TRUST COUNTERS ═══ */}
            <section className="bg-surface-dark border-t border-white/5">
                <div className="max-w-[1280px] mx-auto w-full px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { value: "120+", label: "Eventos cubiertos", icon: "emoji_events" },
                            { value: "15+", label: "RIBs en flota", icon: "directions_boat" },
                            { value: "4", label: "Bases activas", icon: "location_on" },
                            { value: "8", label: "Años de experiencia", icon: "workspace_premium" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <span className="material-icons text-primary text-2xl mb-2 block">{stat.icon}</span>
                                <p className="text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</p>
                                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ 7) CTA ═══ */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-dark to-background-dark" />
                <div className="max-w-[1280px] mx-auto w-full px-6 py-20 relative z-10 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">¿Tu evento no está en la lista?</h2>
                    <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto mb-8">
                        Cubrimos toda Europa. Dinos dónde y cuándo y lo organizamos todo.
                    </p>
                    <a href="/contacto" className="inline-flex px-7 py-3.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all active:scale-[0.98] items-center gap-2">
                        Solicitar cobertura <span className="material-icons text-lg">arrow_forward</span>
                    </a>
                </div>
            </section>

            <Footer />
        </>
    );
}
