import Link from "next/link";
import type { Boat } from "@/types";

export default function BoatCard({ boat }: { boat: Boat }) {
    return (
        <div className="group bg-card-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={boat.image_url}
                    alt={boat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
                <p className="text-gray-400 text-xs mb-1 capitalize">{boat.category === "470" ? "Clase Olímpica" : boat.category === "coaching" ? "Coaching" : "High-Speed / Support"}</p>
                <h3 className="text-lg font-bold text-white mb-2">{boat.name}</h3>
                {boat.tagline && (
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{boat.tagline}</p>
                )}

                {/* Specs row */}
                <div className="flex flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-gray-300">
                        <span className="material-icons text-primary text-sm">straighten</span>
                        <span className="text-xs font-bold">{boat.length_m} m</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-300">
                        <span className="material-icons text-primary text-sm">group</span>
                        <span className="text-xs font-bold">{boat.capacity} pers.</span>
                    </div>
                    {boat.max_speed_kn > 0 && (
                        <div className="flex items-center gap-1.5 text-gray-300">
                            <span className="material-icons text-primary text-sm">speed</span>
                            <span className="text-xs font-bold">{boat.max_speed_kn} kn</span>
                        </div>
                    )}
                </div>

                {/* Price */}
                {boat.price_from && (
                    <p className="text-xs text-primary font-bold mb-3 flex items-center gap-1">
                        <span className="material-icons text-xs">check_circle</span> Desde {boat.price_from}
                    </p>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-2">
                    <Link
                        href="/contacto"
                        className="px-4 py-2 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
                    >
                        Solicitar disponibilidad <span className="material-icons text-sm">arrow_forward</span>
                    </Link>
                    <Link
                        href={`/barco/${boat.slug}`}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold text-xs hover:bg-white/10 transition-colors"
                    >
                        Ver detalles
                    </Link>
                </div>
            </div>
        </div>
    );
}
