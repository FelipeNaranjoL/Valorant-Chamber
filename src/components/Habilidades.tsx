import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

// Íconos
import Q from "../assets/Habilidades/Q.avif";
import W from "../assets/Habilidades/W.avif";
import E from "../assets/Habilidades/E.avif";
import R from "../assets/Habilidades/R.avif";

// Videos
import videoQ from "../assets/video/Q.mp4";
import videoW from "../assets/video/W.mp4";
import videoE from "../assets/video/E.mp4";
import videoR from "../assets/video/R.mp4";

const Habilidades: React.FC = () => {
  const [habilidadActiva, setHabilidadActiva] = useState<"Q" | "W" | "E" | "R">("Q");

  const icons = useMemo(() => ({ Q, W, E, R }), []);
  const videos: Record<"Q" | "W" | "E" | "R", string> = { Q: videoQ, W: videoW, E: videoE, R: videoR };

  const descripciones: Record<"Q" | "W" | "E" | "R", { titulo: string; texto: string }> = {
    Q: {
      titulo: "CAZADOR DE CABEZAS",
      texto:
        "ACTÍVALA para equipar una pistola pesada. Presiona DISPARO SECUNDARIO con la pistola equipada para usar la mira.",
    },
    W: {
      titulo: "RENDEZVOUS",
      texto:
        "Lanza un ancla que puedes usar para teleportarte entre dos posiciones. Útil para reposicionamiento rápido y escapatoria táctica.",
    },
    E: {
      titulo: "MARCA REGISTRADA",
      texto:
        "Coloca una trampa que revela la posición de los enemigos en un área específica. Perfecta para controlar entradas y puntos de paso.",
    },
    R: {
      titulo: "TOUR DE FORCE",
      texto:
        "ACTIVA para invocar un poderoso rifle de francotirador personalizado que mata a un enemigo con cualquier impacto directo en la parte superior del cuerpo. Usa el DISPARO SECUNDARIO para apuntar con la mira. Matar a un enemigo crea un área que ralentiza a los jugadores que queden dentro de ella.",
    },
  };

  return (
    <section className="habilidades grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-1 py-8 md:py-12 items-start">
      {/* Columna izquierda: título + botones */}
      <div className="left-col w-full text-center md:text-left flex flex-col items-center md:items-start self-start">
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase">Habilidades</h1>

        <div className="flex gap-6 mt-8">
          {(["Q", "W", "E", "R"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setHabilidadActiva(key)}
              className={`ability-btn relative flex items-center justify-center rounded-lg overflow-hidden
              w-16 h-16 md:w-20 md:h-20 cursor-pointer
              border-2 transition-transform duration-200 focus:outline-none
              hover:scale-105 hover:animate-breathe
              ${habilidadActiva === key ? "border-red-600 ring-2 ring-red-500" : "border-transparent"}`}
              aria-pressed={habilidadActiva === key}
              aria-label={`Seleccionar habilidad ${key}`}
            >
              <img src={icons[key]} alt={`Habilidad ${key}`} className="w-full h-full object-cover" />
              <span className="sr-only">{key}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Columna derecha: contenedor que agrupa video + descripción (misma columna) */}
      <div className="right-col w-full flex flex-col items-center md:items-start">
        {/* Video */}
        <div className="player w-full md:w-11/12 rounded-lg shadow-xl border-2 border-gray-700 overflow-hidden aspect-video">
          <motion.video
            key={habilidadActiva}
            src={videos[habilidadActiva]}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            // @ts-ignore
            disablePictureInPicture
            controls={false}
            controlsList="nodownload noplaybackrate noremoteplayback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Título + descripción: debajo del video, alineados al mismo inicio */}
        <div className="desc w-full md:w-11/12 mt-6">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-wide">
            {descripciones[habilidadActiva].titulo}
          </h3>
          <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
            {descripciones[habilidadActiva].texto}
          </p>
        </div>
      </div>

      {/* Landscape con poca altura: separar más columnas y forzar que desc vaya bajo el video en la MISMA columna */}
    </section>
  );
};

export default Habilidades;
