// src/components/MejoresJugadores.tsx
import React from "react";
import Horcus from "../assets/Jugadores/Horcus.jpg"
import Fyrr from "../assets/Jugadores/fyrr.png"
import Ñorcus from "../assets/Jugadores/Ñorcus.png"

type CardProps = {
    image: string;
    title: string;
    description: string;
    Rango:string;
    buttonText?: string;
    href?: string;
};

const Card: React.FC<CardProps> = ({ image, title, description, Rango, buttonText, href }) => {
    return (
        <div className="group rounded-xl overflow-hidden bg-[#171f25] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-gray-700">
            <img src={image} alt={title} className="w-full h-auto object-cover group-hover:opacity-90 transition" />
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">{description}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">{Rango}</p>
                {buttonText && (
                    <a
                        href={href ?? "#"}
                        className="inline-block rounded-full border border-red-600 px-6 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-all duration-300"
                    >
                        {buttonText}
                    </a>
                )}
            </div>
        </div>
    );
};

const MejoresJugadores: React.FC = () => {
    const jugadores = [
        {
            image: Horcus,
            title: "Horcus",
            description:
                "Servidor:EU.",
            buttonText: "Ver Perfil",
            Rango: "Rango: Radiante"
        },
        {
            image: Fyrr,
            title: "Fyrr",
            description:
                "Servidor: NA.",
            buttonText: "Ver Perfil",
            Rango: "Rango: Radiante"
        },
        {
            image: Ñorcus,
            title: "Ñorcus",
            description:
                "Servidor:LATAM.",
            buttonText: "Ver Perfil",
            Rango: "Rango: Radiante"
        },
    ];

    return (
        <section className="mejores-jugadores bg-[#101820] text-white py-16 md:py-24 px-4 md:px-10">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide">
                    Mejores Jugadores con Chamber
                </h2>
                <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
                    Los jugadores más destacados que han demostrado su dominio con Chamber en el competitivo.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {jugadores.map((jugador) => (
                    <Card key={jugador.title} {...jugador} />
                ))}
            </div>
        </section>
    );
};

export default MejoresJugadores;
