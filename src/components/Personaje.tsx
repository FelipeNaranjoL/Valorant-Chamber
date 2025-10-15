import React from "react";
import Foto from "../assets/Chamber.png";
import Centinela from "../assets/Logo/logoCentinela.webp";

const Personaje: React.FC = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-6 py-8 md:py-6">
            {/* Columna izquierda */}
            <div className="md:w-1/2 md:space-y-6 text-center md:text-left relative z-20 flex flex-col justify-center md:-translate-y-42">
                <h1 className="text-4xl md:text-7xl font-extrabold">CHAMBER</h1>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Bien vestido y bien armado, el diseñador de armas francés Chamber repele agresores con una precisión mortal.
                    Aprovecha su arsenal personalizado para mantener a los enemigos a raya y eliminarlos desde lejos.
                    Siempre cuenta con la contingencia perfecta para cada plan.
                </p>

                <div className="mt-8 md:mt-10">
                    {/* Botón con logo dentro */}
                    <button className="mt-4 flex items-center justify-center gap-3 w-full md:w-1/3 border-2 border-red-700 bg-[#171f25] text-white px-5 py-2 rounded-full font-bold hover:bg-red-900 transition duration-300 ease-in-out">
                        <img
                            src={Centinela}
                            alt="Logo Centinela"
                            className="w-6 h-6 object-contain"
                        />
                        <span>Centinela</span>
                    </button>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="md:w-1/3 flex justify-center items-center overflow-hidden h-[400px] md:h-[690px]">
                <img
                    src={Foto}
                    alt="Chamber"
                    className="w-4/5 md:w-3/4 object-cover object-top"
                />
            </div>
        </section>
    );
};

export default Personaje;
