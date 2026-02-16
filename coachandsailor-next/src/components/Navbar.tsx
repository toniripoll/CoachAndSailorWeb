import Link from "next/link";

const NAV_LINKS = [
    { href: "/", label: "Inicio" },
    { href: "/flota", label: "Flota" },
    { href: "/cobertura", label: "Cobertura" },
    { href: "/eventos", label: "Eventos" },
    { href: "/contacto", label: "Contacto" },
];

export default function Navbar({ active }: { active?: string }) {
    return (
        <nav className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="material-icons text-white text-lg transform -rotate-45">sailing</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white">
                            Coach<span className="text-primary">&amp;</span>Sailor
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden sm:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    active === link.href
                                        ? "px-3 py-2 rounded-lg text-sm font-semibold text-white bg-white/10"
                                        : "px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile icons */}
                    <div className="sm:hidden flex items-center gap-2">
                        <Link
                            href="/"
                            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                        >
                            <span className="material-icons text-[20px]">home</span>
                        </Link>
                        <Link
                            href="/flota"
                            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                        >
                            <span className="material-icons text-[20px]">directions_boat</span>
                        </Link>
                        <Link
                            href="/eventos"
                            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                        >
                            <span className="material-icons text-[20px]">event</span>
                        </Link>
                        <Link
                            href="/contacto"
                            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                        >
                            <span className="material-icons text-[20px]">mail</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
