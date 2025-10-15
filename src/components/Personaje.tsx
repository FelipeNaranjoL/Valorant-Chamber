import React from "react";
import Foto from "../assets/Chamber.png";
import Centinela from "../assets/Logo/logoCentinela.webp";

const Personaje: React.FC = () => {
  return (
    <section className="personaje grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 px-4 md:px-6 py-8 md:py-2 text-white relative">
      {/* Columna izquierda */}
      <div className="order-2 md:order-1 flex flex-col justify-center items-center md:items-start md:space-y-6">
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase">CHAMBER</h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed max-w-prose">
          Bien vestido y bien armado, el diseñador de armas francés Chamber repele agresores con una precisión mortal.
          Aprovecha su arsenal personalizado para mantener a los enemigos a raya y eliminarlos desde lejos.
          Siempre cuenta con la contingencia perfecta para cada plan.
        </p>

        <div className="mt-6 md:mt-10 w-full md:w-auto">
          <button className="flex items-center justify-center gap-3 w-2/3 sm:w-1/2 md:w-full border-2 border-red-700 bg-[#171f25] text-white px-5 py-2 rounded-full font-bold hover:bg-red-900 transition">
            <img src={Centinela} alt="Logo Centinela" className="w-6 h-6 object-contain" />
            <span>Centinela</span>
          </button>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="order-1 md:order-2 flex justify-center items-end">
        <img
          src={Foto}
          alt="Chamber"
          className="w-4/5 md:w-3/4 object-contain object-bottom max-h-[80vh]"
        />
      </div>

      {/* Ajustes específicos para móvil en horizontal */}

    </section>
  );
};

export default Personaje;
