// src/components/Header.tsx
import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo/logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Tab } from "./types";

interface HeaderProps {
    active: Tab;
    onChange: (tab: Tab) => void;
}

const Header: React.FC<HeaderProps> = ({ active, onChange }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((v) => !v);
    const closeMenu = () => setMenuOpen(false);

    // Bloquea el scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = menuOpen ? "hidden" : original || "";
        return () => {
            document.body.style.overflow = original || "";
        };
    }, [menuOpen]);

    const linkBase =
        "relative inline-block uppercase tracking-wide transition-colors hover:text-white";
    const linkActive =
        "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-red-600";
    const linkMuted = "text-gray-300";

    const NavLink = ({ label }: { label: Tab }) => (
        <button
            onClick={() => onChange(label)}
            className={`${linkBase} ${active === label ? linkActive : linkMuted}`}
            aria-current={active === label ? "page" : undefined}
        >
            {label}
        </button>
    );

    return (
        <header
            className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 backdrop-blur-md transition-colors duration-300
       md:bg-transparent`}
        >
            {/* Logo */}
            <div className="text-xl font-bold">
                <img src={Logo} alt="Logo" className="w-20 select-none" draggable={false} />
            </div>

            {/* Menú desktop */}
            <nav className="hidden md:flex items-center gap-12">
                <NavLink label="Personaje" />
                <NavLink label="Habilidades" />
                <NavLink label="Mejores Jugadores" />
            </nav>

            {/* Botón hamburguesa */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    className="text-gray-300 hover:text-white focus:outline-none p-2"
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú móvil */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Fondo oscuro con blur */}
                        <motion.button
                            type="button"
                            onClick={closeMenu}
                            className="fixed inset-0  backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            aria-hidden="true"
                        />
                        {/* Panel móvil */}
                        <motion.div
                            id="mobile-menu"
                            initial={{ y: -16, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -12, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="fixed left-0 right-0 top-[72px] md:hidden z-50"
                        >
                            <div className="mx-4 rounded-xl bg-[#0b0f14]/95 border border-white/10 shadow-xl">
                                <nav className="flex flex-col items-stretch py-2">
                                    {(["Personaje", "Habilidades", "Mejores Jugadores"] as Tab[]).map((t, i) => (
                                        <motion.button
                                            key={t}
                                            onClick={() => {
                                                onChange(t);
                                                closeMenu();
                                            }}
                                            className={`px-6 py-4 text-left uppercase tracking-wide text-sm ${active === t ? "text-white" : "text-gray-300"
                                                } hover:text-white hover:bg-white/5`}
                                            initial={{ x: -8, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.04 * (i + 1) }}
                                        >
                                            {t}
                                        </motion.button>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
