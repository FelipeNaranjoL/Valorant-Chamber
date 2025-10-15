// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#0b0f14] text-gray-400 py-6 px-4 border-t border-white/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3">
                {/* Derechos de autor */}
                <p className="text-sm">
                    © {currentYear} <span className="text-white font-semibold">Felipe Naranjo</span>. Todos los derechos reservados.
                </p>

                {/* Disclaimer */}
                <p className="text-xs md:text-sm max-w-lg leading-relaxed text-gray-400">
                    Esta página es un proyecto personal sin fines de lucro. No busca generar ingresos ni engañar a los usuarios;
                    su único propósito es educativo y demostrativo.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
