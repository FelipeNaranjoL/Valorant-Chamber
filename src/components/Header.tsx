import React, { useState } from "react";
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

    const linkBase =
        "relative inline-block uppercase tracking-wide transition-colors hover:text-white";
    const linkActive =
        "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-red-600";
    const linkMuted = "text-gray-300";

    const NavLink = ({
        label,
    }: {
        label: Tab;
    }) => (
        <button
            onClick={() => onChange(label)}
            className={`${linkBase} ${active === label ? linkActive : linkMuted}`}
            aria-current={active === label ? "page" : undefined}
        >
            {label}
        </button>
    );

    return (
        <header className="flex items-center justify-between px-6 md:px-8 py-4 relative">
            {/* Logo */}
            <div className="text-xl font-bold">
                <img src={Logo} alt="Logo" className="w-20" />
            </div>

            {/* Menú desktop */}
            <nav className="hidden md:flex items-center gap-12">
                <NavLink label="Personaje" />
                <NavLink label="Habilidades" />
                <NavLink label="Mejores Jugadores" />
            </nav>

            {/* Menú hamburguesa */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    className="text-gray-300 hover:text-white focus:outline-none"
                    aria-label="Abrir menú"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú móvil */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="absolute top-16 left-0 w-full text-gray-300 flex flex-col items-center gap-6 py-6 z-10 md:hidden bg-black/40 backdrop-blur-sm"
                    >
                        {(["Personaje", "Habilidades", "Mejores Jugadores"] as Tab[]).map(
                            (t, i) => (
                                <motion.button
                                    key={t}
                                    onClick={() => {
                                        onChange(t);
                                        toggleMenu();
                                    }}
                                    className={`uppercase ${active === t ? "text-white" : "text-gray-300"}`}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.05 * (i + 1) }}
                                >
                                    {t}
                                </motion.button>
                            )
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
