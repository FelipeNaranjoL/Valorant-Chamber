import React, { useMemo, useState } from "react";
import Header from "./Header";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import FlipContainer from "./FlipContainer";
import type { Tab } from "./types";

import Personaje from "./Personaje";
import Habilidades from "./Habilidades";
import MejoresJugadores from "./MejoresJugadores";

const Hero: React.FC = () => {
    const [active, setActive] = useState<Tab>("Personaje");

    const renderers = useMemo(
        () => ({
            "Personaje": <Personaje />,
            "Habilidades": <Habilidades />,
            "Mejores Jugadores": <MejoresJugadores />,
        }),
        []
    );

    return (
        <div className="text-white font-sans w-full min-h-screen bg-rayas-rojas">
            <div className="relative overflow-hidden w-full h-full p-4 md:px-20">
                <div className="absolute inset-0 bg-[#1b252d] opacity-10" />
                <div className="relative z-10">
                    <Header active={active} onChange={setActive} />

                    <section className="relative px-2 md:px-6 py-6 md:py-3">
                        {/* Contenedor con flip */}
                        <FlipContainer active={active} renderers={renderers} minHeightClass="min-h-[420px] md:min-h-[720px]" />

                        {/* Redes (como en tu versión) */}
                        <div className="hidden md:fixed md:right-6 md:top-1/2 md:-translate-y-1/2 md:flex md:flex-col md:gap-6 md:text-gray-400">
                            <FaFacebookSquare className="w-6 h-6 hover:text-white transition" />
                            <FaInstagramSquare className="w-6 h-6 hover:text-white transition" />
                            <FaSquareXTwitter className="w-6 h-6 hover:text-white transition" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Hero;
