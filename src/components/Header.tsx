import React, { useState } from "react";
import Logo from "../assets/Logo/logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="flex items-center justify-between px-6 md:px-8 py-4 relative ">
            {/* Logo */}
            <div className="text-xl font-bold">
                <img src={Logo} alt="Logo" className="w-20" />
            </div>

            {/* Menú en pantallas grandes */}
            <nav className="hidden md:flex space-x-20 text-gray-300 uppercase">
                <a href="#" className="hover:text-white">Personaje</a>
                <a href="#" className="hover:text-white">Habilidades</a>
                <a href="#" className="hover:text-white">Mejores Jugadores</a>
            </nav>

            {/* Botón menú hamburguesa */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    className="text-gray-300 hover:text-white focus:outline-none"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú móvil animado */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-16 left-0 w-full  text-gray-300 flex flex-col items-center space-y-6 py-6 z-10 md:hidden overflow-hidden"
                    >
                        <motion.a
                            href="#"
                            className="hover:text-white"
                            onClick={toggleMenu}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            Habilidades
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-white"
                            onClick={toggleMenu}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Mejores Jugadores
                        </motion.a>
                                                <motion.a
                            href="#"
                            className="hover:text-white"
                            onClick={toggleMenu}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Personaje
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
