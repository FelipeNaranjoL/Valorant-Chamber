import React from "react";
import forest from "../assets/react.svg";

const Hero = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url('${forest}')` }} // cambia por tu imagen
        >
            {/* Capa de oscurecimiento sutil */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Contenedor del contenido */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-20 text-white">

                {/* Texto y descripción */}
                <div className="max-w-lg">
                    <h1 className="text-8xl font-extrabold tracking-tight text-white/80 leading-none">
                        Chamber
                    </h1>
                    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                        Chamber é um aventureiro lendário conhecido por seu domínio da magia e sua
                        jornada em busca do equilíbrio entre o poder e a humanidade. Suas histórias
                        ecoam nas florestas e reinos distantes.
                    </p>
                </div>

                {/* Imagen del personaje */}
                <div className="mt-10 md:mt-0">
                    <img
                        src={forest} // cambia por tu imagen del personaje
                        alt="Chamber"
                        className="max-h-[500px] drop-shadow-2xl object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
