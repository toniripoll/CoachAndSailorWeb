import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar active="/" />

      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="RIB profesional navegando a alta velocidad"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASvBIyab4P6El96-LwnokyJ5H9wX-ROQB6KxJAYVPefX-56NSG4qB1wYFxegIveiaemyJxBRG8FrgZJTnhuD2P0WEuXTgHxSTuCy4BUu1dac62-_2IsMeuClHtkej1jYz4tU9j7WdIanK_bhUaYTRVOuAIGiKTpFcq5493x43QC1VBkJd91QZ8mOWyAJE1SyP0Bc4xOpu1nY1Z6cENITTZktrCvGTPFiasOuAhyht-kPdbR_Ty1LOjGHMqmqkaDyIBm11WTFfQgak"
          />
          {/* Left-to-center gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/40" />
        </div>

        {/* Hero content — LEFT ALIGNED */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 w-full">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/25 backdrop-blur-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Disponible en toda Europa
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4">
              Neumáticas para<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                vela ligera
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
              Logística integral para regatas y entrenamientos en Europa. Flota profesional, entrega puerta a puerta.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="/flota"
                className="inline-flex items-center gap-2 py-3.5 px-7 rounded-xl bg-primary hover:bg-blue-600 active:bg-blue-700 text-white font-bold shadow-xl shadow-primary/25 transition-all transform active:scale-[0.97]"
              >
                <span>Ver flota</span>
                <span className="material-icons text-lg">arrow_forward</span>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 py-3.5 px-7 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                <span>Solicitar presupuesto</span>
              </a>
            </div>

            {/* Trust chips — 4 chips */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="material-icons text-primary text-xl">speed</span>
                <div className="leading-tight">
                  <span className="text-xs text-gray-400 block">Motores</span>
                  <span className="text-sm font-bold text-white">Yamaha / Suzuki</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="material-icons text-primary text-xl">straighten</span>
                <div className="leading-tight">
                  <span className="text-xs text-gray-400 block">Eslora</span>
                  <span className="text-sm font-bold text-white">5.2 – 6.5 m</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="material-icons text-primary text-xl">local_shipping</span>
                <div className="leading-tight">
                  <span className="text-xs text-gray-400 block">Logística</span>
                  <span className="text-sm font-bold text-white">Entrega en Europa</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="material-icons text-primary text-xl">support_agent</span>
                <div className="leading-tight">
                  <span className="text-xs text-gray-400 block">Soporte</span>
                  <span className="text-sm font-bold text-white">24 / 7 en regata</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — SOCIAL PROOF STRIP ═══ */}
      <section className="relative z-10 bg-surface-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold text-white">120<span className="text-primary">+</span></p>
              <p className="text-sm text-gray-400 mt-1">Eventos cubiertos</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">8</p>
              <p className="text-sm text-gray-400 mt-1">Años de experiencia</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">15</p>
              <p className="text-sm text-gray-400 mt-1">Países de operación</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">50<span className="text-primary">+</span></p>
              <p className="text-sm text-gray-400 mt-1">Clubes confían en nosotros</p>
            </div>
          </div>
          {/* Testimonial */}
          <div className="mt-8 pt-7 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="material-icons text-primary text-2xl">format_quote</span>
            </div>
            <div>
              <p className="text-gray-300 italic text-sm leading-relaxed">
                &quot;Coach&amp;Sailor nos ofreció un servicio impecable en la Princesa Sofía. Neumáticas siempre listas, logística sin fallos.&quot;
              </p>
              <p className="text-xs text-gray-500 mt-2 font-semibold">— Director deportivo, Club Nàutic S&apos;Arenal</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — SERVICIOS ═══ */}
      <section className="py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header — left aligned */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Servicios</h2>
            <p className="text-gray-400 max-w-lg">
              Todo lo que necesitas para tu evento de vela: desde la embarcación hasta la logística completa.
            </p>
          </div>
          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Coach Boats */}
            <a
              href="/flota"
              className="group relative rounded-2xl bg-surface-dark border border-white/5 p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-icons text-primary text-2xl">sailing</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">Coach Boats</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  RIBs profesionales para entrenadores. Motores fiables, estabilidad máxima y capacidad para equipos de hasta 10 personas.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-auto group-hover:gap-2 transition-all">
                Ver embarcaciones <span className="material-icons text-base">arrow_forward</span>
              </span>
            </a>
            {/* Eventos */}
            <a
              href="/eventos"
              className="group relative rounded-2xl bg-surface-dark border border-white/5 p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-icons text-primary text-2xl">flag</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">Soporte de Regatas</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Servicio integral para regatas y campeonatos. Soporte técnico, patrón disponible y cobertura 24/7 durante el evento.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-auto group-hover:gap-2 transition-all">
                Ver calendario <span className="material-icons text-base">arrow_forward</span>
              </span>
            </a>
            {/* Transporte */}
            <a
              href="/cobertura"
              className="group relative rounded-2xl bg-surface-dark border border-white/5 p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-icons text-primary text-2xl">local_shipping</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">Logística Europea</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Transporte puerta a puerta en toda Europa. Entrega, varada, mantenimiento y recogida incluidos en el servicio.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-auto group-hover:gap-2 transition-all">
                Ver cobertura <span className="material-icons text-base">arrow_forward</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — FLEET PREVIEW ═══ */}
      <section className="py-20 px-6 sm:px-10 bg-surface-dark/50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Nuestra Flota</h2>
              <p className="text-gray-400">Embarcaciones profesionales listas para tu próximo evento.</p>
            </div>
            <a
              href="/flota"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-blue-300 transition-colors"
            >
              Ver flota completa <span className="material-icons text-base">arrow_forward</span>
            </a>
          </div>
          {/* Boat cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Boat 1 — Vorteq 5.2m */}
            <a
              href="/barco/vorteq-5-2m"
              className="group flex flex-col bg-background-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <span className="absolute top-3 left-3 z-10 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                  Popular
                </span>
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCm6HGrRiIv7gAikvGOmXLSC0GZkan-75Fh3Cfj3bNJyZF4huMnCC6K22cNPhHb87udoQdIo1GqnQsh2WoOp2eGHksBHpOo0R2N3cnz2u2zLxFXGZQLucOo7nQsS8Wr38kLRPwPiyRu7XX9mSSPQjKw8DxBrFu5DLpBHyOaSCaJmbFPkiLyuBHXM7kFNjSCuqzBIFB5Xg0SOynEyE7lpQI5HlMMwaIuhiJ2L1PRc585Gp6ClBlEMFknE0ZJo-FrPPHPjBGSWtPExSc")' }}
                />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">Vorteq 5.2m</h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <span className="material-icons text-sm">star</span>
                    <span className="text-xs font-bold">4.9</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 mb-5">
                  <span className="flex items-center gap-1"><span className="material-icons text-base text-gray-500">straighten</span> 5.2 m</span>
                  <span className="flex items-center gap-1"><span className="material-icons text-base text-gray-500">speed</span> Yamaha 50 hp</span>
                  <span className="flex items-center gap-1"><span className="material-icons text-base text-gray-500">group</span> 6 pers</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Desde</p>
                    <p className="text-xl font-extrabold text-primary">€170<span className="text-sm font-normal text-gray-500">/día</span></p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Ver <span className="material-icons text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Boat 2 — Tornado Coach 6.0m */}
            <a
              href="/barco/tornado-coach-6m"
              className="group flex flex-col bg-background-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <span className="absolute top-3 left-3 z-10 bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                  Disponible
                </span>
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpYXBNrygjGNeOaDA83DzdrYP9s8oc8lcq1U_O42wJ7-T4qIqayrUglp6l2GNNMGnyMxlIFoseaq9FswR3IRwhLBK3FOFL5j262R8PpFtgRcU6y1SxrVoV7B_JfITfm1NlbVVWkXnoJwwl7CITrKRbXj2CdjxicoxazoFnoPrbxAt8cRMohsnssfFMxOd_qqyr8B_oz-LOySmE5rCqL1syCOVsFzC3b5AS92NGuqDFuC2O_fRLfXMAsvJ4kM979V8FDH92EFucmCs")' }}
                />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">Tornado Coach 6.0m</h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <span className="material-icons text-sm">star</span>
                    <span className="text-xs font-bold">5.0</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 mb-5">
                  <span className="flex items-center gap-1"><span className="material-icons text-base text-gray-500">straighten</span> 6.0 m</span>
                  <span className="flex items-center gap-1"><span className="material-icons text-base text-gray-500">speed</span> Yamaha 100 hp</span>
                  <span className="flex items-center gap-1"><span className="material-icons text-base text-gray-500">group</span> 8 pers</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Desde</p>
                    <p className="text-xl font-extrabold text-primary">€200<span className="text-sm font-normal text-gray-500">/día</span></p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Ver <span className="material-icons text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Boat 3 — AVA 6.3m */}
            <a
              href="/barco/ava-6-3m"
              className="group flex flex-col bg-background-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <span className="absolute top-3 left-3 z-10 bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                  Disponible
                </span>
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2WYsF15sIN7Z7_HUF0kpeUBCiRGR5lwM9yI_8uNOEP4vj883unYw0BZKLf_NIe4eplf9fB-2EbNEAijpF26ti5WA0EeIyzg-zOmgNoJvXCSsfpq3wwxZZR4eHirzyYKVgMv2EZT-vdTXLnzsgx-efcvl4n8rbYk7rGubVgFlgg4UCdBRdlTpRR8aI9Wa2xdl863Maif0ShGeHvuf1eAdgFZ1G9K7yHc31mGI_THzrx_51I8aMYa741ZKVqwynQXNQb5JSV3J1css")' }}
                />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">AVA 6.3m</h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <span className="material-icons text-sm">star</span>
                    <span className="text-xs font-bold">4.8</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 mb-5">
                  <span className="flex items-center gap-1"><span className="material-icons text-base text-gray-500">straighten</span> 6.3 m</span>
                  <span className="flex items-center gap-1"><span className="material-icons text-base text-gray-500">speed</span> Yamaha 115 hp</span>
                  <span className="flex items-center gap-1"><span className="material-icons text-base text-gray-500">group</span> 10 pers</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Desde</p>
                    <p className="text-xl font-extrabold text-primary">€220<span className="text-sm font-normal text-gray-500">/día</span></p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Ver <span className="material-icons text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* Mobile CTA */}
          <div className="mt-8 text-center sm:hidden">
            <a
              href="/flota"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold transition-colors"
            >
              Ver flota completa <span className="material-icons text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — CONTACTO RÁPIDO ═══ */}
      <section id="contacto" className="py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Solicita disponibilidad</h2>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Cuéntanos tu evento y te preparamos un presupuesto sin compromiso en menos de 24 h.
              </p>
              {/* Contact info */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <span className="material-icons text-green-400 text-xl">chat</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="font-semibold text-white">+34 600 000 000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="material-icons text-primary text-xl">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-semibold text-white">info@coachandsailor.com</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right — quick form */}
            <div className="rounded-2xl bg-surface-dark border border-white/5 p-8">
              <form className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5" htmlFor="fecha">
                    Fecha del evento
                  </label>
                  <input
                    id="fecha"
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5" htmlFor="ubicacion">
                    Ubicación / Evento
                  </label>
                  <input
                    id="ubicacion"
                    type="text"
                    placeholder="p.ej. Trofeo Princesa Sofía, Palma"
                    className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5" htmlFor="cantidad">
                    Nº de embarcaciones
                  </label>
                  <select
                    id="cantidad"
                    className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option value="">Seleccionar…</option>
                    <option value="1">1 embarcación</option>
                    <option value="2-3">2 – 3 embarcaciones</option>
                    <option value="4-6">4 – 6 embarcaciones</option>
                    <option value="7+">7 o más</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-blue-600 active:bg-blue-700 text-white font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Solicitar presupuesto</span>
                  <span className="material-icons text-lg">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
