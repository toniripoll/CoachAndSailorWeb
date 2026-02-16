import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Flota — Coach & Sailor",
    description:
        "Flota profesional para coaching y regata: RIBs optimizadas y 470 Ziegelmayer 2020 en perfectas condiciones.",
};

/* ── Boat card sub-component ── */
function BoatCard({
    name, desc, img, capacity, speed, length, location, price, chips, detailHref,
}: {
    name: string; desc: string; img: string;
    capacity: string; speed: string; length: string;
    location: string; price: string;
    chips: { label: string; color: string }[];
    detailHref: string;
}) {
    return (
        <div className="group bg-card-dark rounded-2xl border border-white/5 overflow-hidden card-glow transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={`${name} — RIB`} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src={img} />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark/70 to-transparent" />
                {/* Fav button */}
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors" title="Añadir a favoritos">
                    <span className="material-symbols-outlined text-white text-xl">favorite</span>
                </button>
                {/* Chips on image */}
                <div className="absolute bottom-3 left-4 flex gap-2">
                    {chips.map((c) => (
                        <span key={c.label} className={`px-2.5 py-1 rounded-lg ${c.color} backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider`}>
                            {c.label}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
                <p className="text-gray-400 text-xs mb-3">{desc}</p>
                {/* Specs */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><span className="material-icons text-primary text-sm">group</span> {capacity}</span>
                    <span className="flex items-center gap-1"><span className="material-icons text-primary text-sm">speed</span> {speed}</span>
                    <span className="flex items-center gap-1"><span className="material-icons text-primary text-sm">straighten</span> {length}</span>
                </div>
                {/* Location */}
                <div className="flex items-center gap-1 mb-4 text-xs text-gray-500">
                    <span className="material-icons text-xs">pin_drop</span> {location}
                </div>
                {/* Price + CTAs */}
                <div className="mt-auto flex items-center justify-between">
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Desde</p>
                        <p className="text-lg font-bold text-primary">{price}<span className="text-sm font-normal text-gray-500">/día</span></p>
                    </div>
                    <div className="flex gap-2">
                        <a href={detailHref} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold text-xs hover:bg-white/10 transition-colors">Ver detalles</a>
                        <a href="/contacto" className="px-3 py-2 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-xs transition-colors flex items-center gap-1">Solicitar <span className="material-icons text-sm">arrow_forward</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FlotaPage() {
    return (
        <>
            <Navbar active="/flota" />

            {/* ═══ 1) HERO ═══ */}
            <section className="relative w-full overflow-hidden" style={{ height: "clamp(260px, 40vh, 420px)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="RIB profesional de coaching en aguas de regata" className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs7TFXOZ8kR1b8TKYKCe2LTPj0lOBnnShljVAuDfLwYH2AqUpnKNVyysrFIRB_lIT3lrQ_8FYNuELc2fcyHGeAfpMkbUCI4C4nR3hKDTOVbckrvAOIvjECRxvlCn1pSHf9kV6NzunRqlWajwwf_-8MUHAgga9jWyDjNONNAtUqe3bY8DJ9tpgrJC7Qxslunwi1sJS8lhKf1ygm_6YGQzvbyVrBT6poIA_IH4W-NXOut696UAHbww5bC-2_hrfTFNFrPogdxhx8LDE" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark/60 to-transparent" />
                <div className="absolute bottom-0 inset-x-0">
                    <div className="max-w-[1280px] mx-auto px-6 pb-8">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2 max-w-2xl">
                            Flota profesional para entrenos y regata
                        </h1>
                        <p className="text-gray-300 text-sm sm:text-base max-w-xl mb-5">
                            RIBs optimizadas para coaches + 470 Ziegelmayer (2020) en condiciones perfectas.
                        </p>
                        {/* Chips */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-semibold text-gray-200 flex items-center gap-1.5">
                                <span className="material-icons text-primary text-sm">groups</span> Coaching
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-semibold text-gray-200 flex items-center gap-1.5">
                                <span className="material-icons text-primary text-sm">build</span> Soporte técnico
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-semibold text-gray-200 flex items-center gap-1.5">
                                <span className="material-icons text-primary text-sm">emoji_events</span> Racing
                            </span>
                        </div>
                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <a href="/contacto" className="px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center gap-2">
                                Solicitar disponibilidad <span className="material-icons text-lg">arrow_forward</span>
                            </a>
                            <a href="#seccion-470" className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                                Ver el 470 <span className="material-icons text-lg">sailing</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ 2) FEATURED / RECOMENDADO ═══ */}
            <section className="max-w-[1280px] mx-auto w-full px-6 py-10">
                <div className="bg-card-dark rounded-2xl border border-white/5 overflow-hidden flex flex-col lg:flex-row card-glow transition-all duration-300 lg:max-h-[260px]">
                    {/* Image */}
                    <div className="lg:w-2/5 h-44 sm:h-48 lg:h-auto relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="Tornado Coach 6.0m — RIB recomendada para coaching profesional"
                            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpYXBNrygjGNeOaDA83DzdrYP9s8oc8lcq1U_O42wJ7-T4qIqayrUglp6l2GNNMGnyMxlIFoseaq9FswR3IRwhLBK3FOFL5j262R8PpFtgRcU6y1SxrVoV7B_JfITfm1NlbVVWkXnoJwwl7CITrKRbXj2CdjxicoxazoFnoPrbxAt8cRMohsnssfFMxOd_qqyr8B_oz-LOySmE5rCqL1syCOVsFzC3b5AS92NGuqDFuC2O_fRLfXMAsvJ4kM979V8FDH92EFucmCs" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card-dark/60 hidden lg:block" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                            <span className="material-icons text-xs">star</span> Recomendado
                        </span>
                    </div>
                    {/* Content */}
                    <div className="lg:w-3/5 p-5 lg:p-6 flex flex-col justify-center">
                        <h2 className="text-lg sm:text-xl font-extrabold text-white mb-1">Tornado Coach 6.0m</h2>
                        <p className="text-gray-400 text-xs mb-3">Ideal para seguimiento de flotas y jornadas largas. Motor potente, mínima estela.</p>
                        {/* KPIs */}
                        <div className="flex flex-wrap gap-4 mb-3">
                            <div className="flex items-center gap-1.5 text-gray-300">
                                <span className="material-icons text-primary text-base">straighten</span>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold">Eslora</p>
                                    <p className="text-xs font-bold">6.0 m</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-300">
                                <span className="material-icons text-primary text-base">group</span>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold">Plazas</p>
                                    <p className="text-xs font-bold">8 pers.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-300">
                                <span className="material-icons text-primary text-base">speed</span>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold">Velocidad</p>
                                    <p className="text-xs font-bold">42 kn</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-primary font-bold mb-3 flex items-center gap-1">
                            <span className="material-icons text-xs">check_circle</span> Desde €200/día
                        </p>
                        {/* CTAs */}
                        <div className="flex flex-wrap gap-2">
                            <a href="/contacto" className="px-4 py-2 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-xs transition-colors flex items-center gap-1.5">
                                Solicitar disponibilidad <span className="material-icons text-sm">arrow_forward</span>
                            </a>
                            <a href="/barco/tornado-coach-6m" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold text-xs hover:bg-white/10 transition-colors">
                                Ver detalles
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ 3) COACHING RIBs ═══ */}
            <section className="max-w-[1280px] mx-auto w-full px-6 pb-14">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-1">RIBs para Coaching</h2>
                    <p className="text-gray-400 text-sm">Estables, maniobrables y pensadas para jornadas largas.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <BoatCard
                        name="Vorteq 5.2m"
                        desc="Perfecta para seguimiento cercano y coaching de parejas de 470 y ILCA."
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuCm6HGrRiIv7gAikvGOmXLSC0GZkan-75Fh3Cfj3bNJyZF4huMnCC6K22cNPhHb87udoQdIo1GqnQsh2WoOp2eGHksBHpOo0R2N3cnz2u2zLxFXGZQLucOo7nQsS8Wr38kLRPwPiyRu7XX9mSSPQjKw8DxBrFu5DLpBHyOaSCaJmbFPkiLyuBHXM7kFNjSCuqzBIFB5Xg0SOynEyE7lpQI5HlMMwaIuhiJ2L1PRc585Gp6ClBlEMFknE0ZJo-FrPPHPjBGSWtPExSc"
                        capacity="6 pers." speed="25 kn" length="5.2 m" location="Palma · Barcelona" price="€170"
                        chips={[{ label: "Coaching", color: "bg-primary/80" }, { label: "Disponible", color: "bg-emerald-500/80" }]}
                        detailHref="/barco/vorteq-5-2m"
                    />
                    <BoatCard
                        name="Tornado Coach 6.0m"
                        desc="Ideal para seguimiento de flota y jornadas largas. Motor potente, mínima estela."
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuBpYXBNrygjGNeOaDA83DzdrYP9s8oc8lcq1U_O42wJ7-T4qIqayrUglp6l2GNNMGnyMxlIFoseaq9FswR3IRwhLBK3FOFL5j262R8PpFtgRcU6y1SxrVoV7B_JfITfm1NlbVVWkXnoJwwl7CITrKRbXj2CdjxicoxazoFnoPrbxAt8cRMohsnssfFMxOd_qqyr8B_oz-LOySmE5rCqL1syCOVsFzC3b5AS92NGuqDFuC2O_fRLfXMAsvJ4kM979V8FDH92EFucmCs"
                        capacity="8 pers." speed="42 kn" length="6.0 m" location="Palma · Barcelona · Valencia" price="€200"
                        chips={[
                            { label: "Coaching", color: "bg-primary/80" },
                            { label: "Popular", color: "bg-amber-500/80" },
                        ]}
                        detailHref="/barco/tornado-coach-6m"
                    />
                </div>
            </section>

            {/* ═══ 4) HIGH-SPEED / SUPPORT ═══ */}
            <section className="max-w-[1280px] mx-auto w-full px-6 pb-14">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-1">RIBs High-Speed / Support</h2>
                    <p className="text-gray-400 text-sm">Para soporte rápido, cambios de zona y seguimiento dinámico.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <BoatCard
                        name="AVA 6.3m"
                        desc="Versatil y robusta para soporte técnico, con espacio para material y buena estabilidad."
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuC2WYsF15sIN7Z7_HUF0kpeUBCiRGR5lwM9yI_8uNOEP4vj883unYw0BZKLf_NIe4eplf9fB-2EbNEAijpF26ti5WA0EeIyzg-zOmgNoJvXCSsfpq3wwxZZR4eHirzyYKVgMv2EZT-vdTXLnzsgx-efcvl4n8rbYk7rGubVgFlgg4UCdBRdlTpRR8aI9Wa2xdl863Maif0ShGeHvuf1eAdgFZ1G9K7yHc31mGI_THzrx_51I8aMYa741ZKVqwynQXNQb5JSV3J1css"
                        capacity="10 pers." speed="38 kn" length="6.3 m" location="Palma · Valencia" price="€220"
                        chips={[{ label: "Support", color: "bg-sky-500/80" }, { label: "Disponible", color: "bg-emerald-500/80" }]}
                        detailHref="/barco/ava-6-3m"
                    />
                    <BoatCard
                        name="VSR 6.5m"
                        desc="Máxima velocidad para desplazamientos entre zonas y soporte dinámico en regata."
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuBpYXBNrygjGNeOaDA83DzdrYP9s8oc8lcq1U_O42wJ7-T4qIqayrUglp6l2GNNMGnyMxlIFoseaq9FswR3IRwhLBK3FOFL5j262R8PpFtgRcU6y1SxrVoV7B_JfITfm1NlbVVWkXnoJwwl7CITrKRbXj2CdjxicoxazoFnoPrbxAt8cRMohsnssfFMxOd_qqyr8B_oz-LOySmE5rCqL1syCOVsFzC3b5AS92NGuqDFuC2O_fRLfXMAsvJ4kM979V8FDH92EFucmCs"
                        capacity="8 pers." speed="42 kn" length="6.5 m" location="Palma · Barcelona" price="€240"
                        chips={[{ label: "High-Speed", color: "bg-orange-500/80" }, { label: "Disponible", color: "bg-emerald-500/80" }]}
                        detailHref="/barco/vsr-6-5m"
                    />
                </div>
            </section>

            {/* ═══ 5) SECCIÓN ESPECIAL: 470 ZIEGELMAYER ═══ */}
            <section id="seccion-470" className="bg-surface-dark border-y border-white/5">
                <div className="max-w-[1280px] mx-auto w-full px-6 py-16">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* LEFT: Image + Mini gallery */}
                        <div className="lg:w-1/2 w-full">
                            <div className="rounded-2xl overflow-hidden mb-3 relative group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="470 Ziegelmayer 2020 — velero en perfectas condiciones" className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs1bAuUJkFSFJ3EGpahb4oC6bQwYq5lOIHchj-tcdbGtIqa8uozAgUGWB8kCUC4idE1uCPG0Bk0EuXkMB4apZWIpCeeTJPkdNmdP5EiVw9oxUou1RhHaE6zYiu1ALj-zlWm8DGQ7j4veMTQNbGxthIqq57FcWP2ErBJOuVKNZicgIqr_Oet98Ej8bh51Da6eWc604y7LP7SJnaB3ad26FqiW0kTAAUMiEvfZ-2wL4qWOOUaJ9Gb7xAM4v9a1Y57QB5_11sYiAUtJY" />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/40 to-transparent" />
                                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                                    <span className="material-icons text-xs">verified</span> Perfectas condiciones
                                </span>
                            </div>
                            {/* Thumbnails */}
                            <div className="grid grid-cols-4 gap-2">
                                {[
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1bAuUJkFSFJ3EGpahb4oC6bQwYq5lOIHchj-tcdbGtIqa8uozAgUGWB8kCUC4idE1uCPG0Bk0EuXkMB4apZWIpCeeTJPkdNmdP5EiVw9oxUou1RhHaE6zYiu1ALj-zlWm8DGQ7j4veMTQNbGxthIqq57FcWP2ErBJOuVKNZicgIqr_Oet98Ej8bh51Da6eWc604y7LP7SJnaB3ad26FqiW0kTAAUMiEvfZ-2wL4qWOOUaJ9Gb7xAM4v9a1Y57QB5_11sYiAUtJY",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2sBRFxc6Y3Jmo4plrhKtq3u8IX1FcBMZfpjuTuPHz8Hth1hL5BzwnO2G6VhfKODPwJa6WmquSQWLg3WsLXVNXQSoT2KgP1Zf8AKitalHWXf5NH1b2DG8YgzTWDTyQhPZPj6L5fawVLc8dDHBDF9hU_LapIQz3TGPiRZkpSIFuvVRlQw_EmTBZK8UA-Ypwf_h4uKXyy8QEjbPDlnxk-DlXunjTDRL8kHWliXe56n1zpkShZtYQ8tZX7SO4ZlSkqEIA9o3d5hOSfgE",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDPyPsQ0pfG6eQvjB6o9d818EgZgY1e5mtNQAim_eGp5nRmzLpGU3VWz_oYLShAc4Y6DPqqC0whM_GLf34Uo35jL0wqjWOcivI4iFbKuVmIIqIZVVb9vmsxKqNZQVDsllWJGbkk0gli_zKdk4feubfe-WTBxhxe8hvnqERedjER5zMRIBdF8KWwdRtzKGrxryATQGDKQK694Gpit7ip_3O0HbDhXfWxjgHzSOczAcjrLUXyizq_wiRogHgHKX3q4LxFcWkcFp04trE",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3OTXVFTaepkOqm0PUkrrhWMs_LMqTGj9961dzg6C7FJklGy2pmS1K76g1egXg_hGSk9Q4Lz6JTMDbLtw2tdeJ9elxJ0nUEktiSo8rwMDdPU7eotFORIKLlok4jAn-RBpv7vzcGBwOBwa6v0q2ubR8OkiPU4_a0_nbOLWxrFilZk3qPCg5Xo7B-Brnhwt7-NG54mCzteUn0tVcIysIVrS-3Nq9XFUi8fq0ZsTDtOM7kViq4rqyJpdU072XXQh6wqYuhDFoErGyWUo",
                                ].map((src, i) => (
                                    <div key={i} className={`rounded-xl overflow-hidden ${i === 0 ? "border-2 border-primary" : "border border-white/10 hover:border-primary/50 transition-colors"} cursor-pointer h-20`}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img alt={`470 Ziegelmayer — foto ${i + 1}`} className="w-full h-full object-cover" src={src} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Specs & CTAs */}
                        <div className="lg:w-1/2 w-full flex flex-col">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">470 Ziegelmayer (2020)</h2>
                            <p className="text-gray-400 text-sm mb-6">Velero de clase olímpica en estado impecable. Ideal para entrenos de alto nivel y regatas competitivas.</p>

                            {/* Bullets */}
                            <div className="space-y-3 mb-8">
                                {[
                                    { icon: "sailing", title: "Clase 470", sub: "Doble trapecio — clase olímpica" },
                                    { icon: "calendar_today", title: "Año 2020", sub: "Ziegelmayer, fabricante de referencia" },
                                    { icon: "verified", title: "Estado impecable", sub: "Mantenimiento profesional continuo" },
                                    { icon: "inventory_2", title: "Equipo incluido", sub: "Velas, foques, spinnaker y trapecio completo" },
                                    { icon: "emoji_events", title: "Ideal para entreno y regata", sub: "Alto rendimiento en condiciones exigentes" },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-center gap-3 p-3 rounded-xl bg-card-dark border border-white/5">
                                        <span className="material-icons text-primary">{item.icon}</span>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{item.title}</p>
                                            <p className="text-gray-500 text-xs">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3">
                                <a href="/contacto" className="px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center gap-2">
                                    Solicitar disponibilidad <span className="material-icons text-lg">arrow_forward</span>
                                </a>
                                <a href="/barco/470-ziegelmayer" className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
                                    Ver ficha técnica
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ 6) COMPARACIÓN RÁPIDA ═══ */}
            <section className="max-w-[1280px] mx-auto w-full px-6 py-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Comparación rápida</h2>
                    <p className="text-gray-400 text-sm sm:text-base">Con un vistazo, entiende las diferencias</p>
                </div>
                <div className="overflow-x-auto hide-scrollbar rounded-2xl border border-white/5">
                    <table className="w-full text-sm min-w-[640px]">
                        <thead>
                            <tr className="bg-surface-dark border-b border-white/10">
                                <th className="text-left py-4 px-5 text-gray-400 font-bold text-xs uppercase tracking-wider">Modelo</th>
                                <th className="text-left py-4 px-4 text-gray-400 font-bold text-xs uppercase tracking-wider">Tipo</th>
                                <th className="text-center py-4 px-4 text-gray-400 font-bold text-xs uppercase tracking-wider">Plazas</th>
                                <th className="text-center py-4 px-4 text-gray-400 font-bold text-xs uppercase tracking-wider">Eslora</th>
                                <th className="text-center py-4 px-4 text-gray-400 font-bold text-xs uppercase tracking-wider">Velocidad</th>
                                <th className="text-left py-4 px-4 text-gray-400 font-bold text-xs uppercase tracking-wider">Ideal para</th>
                                <th className="text-center py-4 px-4 text-gray-400 font-bold text-xs uppercase tracking-wider">Precio</th>
                                <th className="py-4 px-4" />
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { model: "Vorteq 5.2m", type: "Coaching", typeColor: "bg-primary/10 text-primary", seats: "6", length: "5.2 m", speed: "25 kn", ideal: "470 / ILCA", price: "€170/día", href: "/barco/vorteq-5-2m" },
                                { model: "Tornado 6.0m", type: "Coaching", typeColor: "bg-primary/10 text-primary", seats: "8", length: "6.0 m", speed: "42 kn", ideal: "Flota / jornada larga", price: "€200/día", href: "/barco/tornado-coach-6m" },
                                { model: "AVA 6.3m", type: "Support", typeColor: "bg-sky-500/10 text-sky-400", seats: "10", length: "6.3 m", speed: "38 kn", ideal: "Soporte técnico", price: "€220/día", href: "/barco/ava-6-3m" },
                                { model: "VSR 6.5m", type: "High-Speed", typeColor: "bg-orange-500/10 text-orange-400", seats: "8", length: "6.5 m", speed: "42 kn", ideal: "Desplazamiento rápido", price: "€240/día", href: "/barco/vsr-6-5m" },
                            ].map((row) => (
                                <tr key={row.model} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 px-5 font-bold text-white">{row.model}</td>
                                    <td className="py-4 px-4"><span className={`px-2.5 py-1 rounded-lg ${row.typeColor} text-xs font-bold`}>{row.type}</span></td>
                                    <td className="py-4 px-4 text-center text-gray-300">{row.seats}</td>
                                    <td className="py-4 px-4 text-center text-gray-300">{row.length}</td>
                                    <td className="py-4 px-4 text-center text-gray-300">{row.speed}</td>
                                    <td className="py-4 px-4"><span className="text-xs text-gray-400">{row.ideal}</span></td>
                                    <td className="py-4 px-4 text-center text-primary font-bold">{row.price}</td>
                                    <td className="py-4 px-4"><a href={row.href} className="text-primary text-xs font-bold hover:underline">Ver →</a></td>
                                </tr>
                            ))}
                            {/* 470 row */}
                            <tr className="hover:bg-white/[0.02] transition-colors bg-primary/[0.03]">
                                <td className="py-4 px-5 font-bold text-white flex items-center gap-2">470 Ziegelmayer <span className="material-icons text-emerald-400 text-sm">verified</span></td>
                                <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold">Velero</span></td>
                                <td className="py-4 px-4 text-center text-gray-300">2</td>
                                <td className="py-4 px-4 text-center text-gray-300">4.7 m</td>
                                <td className="py-4 px-4 text-center text-gray-300">—</td>
                                <td className="py-4 px-4"><span className="text-xs text-gray-400">Entreno / regata</span></td>
                                <td className="py-4 px-4 text-center text-primary font-bold">Consultar</td>
                                <td className="py-4 px-4"><a href="#seccion-470" className="text-primary text-xs font-bold hover:underline">Ver →</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ═══ 7) CTA FINAL ═══ */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-dark to-background-dark" />
                <div className="max-w-[1280px] mx-auto w-full px-6 py-20 relative z-10 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">¿No sabes cuál elegir?</h2>
                    <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto mb-8">
                        Dinos evento, fechas y necesidades y te recomendamos la mejor opción para tu equipo.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a href="/contacto" className="px-7 py-3.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center gap-2">
                            Solicitar recomendación <span className="material-icons text-lg">arrow_forward</span>
                        </a>
                        <a href="/contacto" className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                            Contactar <span className="material-icons text-lg">mail_outline</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
