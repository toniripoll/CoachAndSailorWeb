import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-surface-dark border-t border-white/5 py-8 px-6 mt-auto">
            <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
                        <span className="material-icons text-white text-sm transform -rotate-45">sailing</span>
                    </div>
                    <span className="font-bold text-sm text-white">
                        Coach<span className="text-primary">&amp;</span>Sailor
                    </span>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                    <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                    <Link href="/flota" className="hover:text-white transition-colors">Flota</Link>
                    <Link href="/cobertura" className="hover:text-white transition-colors">Cobertura</Link>
                    <Link href="/eventos" className="hover:text-white transition-colors">Eventos</Link>
                    <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
                </div>
                <p className="text-xs text-gray-600">© 2024 Coach&amp;Sailor</p>
            </div>
        </footer>
    );
}
