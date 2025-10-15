// MejoresJugadores.tsx
import React from "react";

const MejoresJugadores: React.FC = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold">Mejores Jugadores con Chamber</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {["Jugador 1", "Jugador 2", "Jugador 3"].map((n) => (
                    <div key={n} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <h3 className="font-semibold">{n}</h3>
                        <p className="text-gray-300 text-sm">K/D, %HS, mapas destacados...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MejoresJugadores;