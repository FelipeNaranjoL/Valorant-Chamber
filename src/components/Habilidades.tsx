// Habilidades.tsx
import React from "react";

const Habilidades: React.FC = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold">Habilidades</h2>
            <ul className="grid md:grid-cols-2 gap-6">
                <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold">C — Marca registrada</h3>
                    <p className="text-gray-300">Coloca una trampa que escanea...</p>
                </li>
                <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold">Q — Cazador de cabezas</h3>
                    <p className="text-gray-300">Un potente revólver...</p>
                </li>
                <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold">E — Rendezvous</h3>
                    <p className="text-gray-300">Se teletransporta entre anclajes...</p>
                </li>
                <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold">X — Tour de force</h3>
                    <p className="text-gray-300">Un rifle de precisión personalizado...</p>
                </li>
            </ul>
        </div>
    );
};

export default Habilidades;