// src/components/FlipContainer.tsx
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import type { Tab } from "./types";

interface FlipContainerProps {
    active: Tab;
    renderers: Record<Tab, React.ReactNode>;
    /** Clase de altura mínima para el primer render */
    minHeightClass?: string; // ej: "min-h-[420px] md:min-h-[520px]"
    /** Bloquear la altura al máximo(front/back) durante el giro */
    lockDuringFlip?: boolean;
    /** Duración del flip */
    durationMs?: number;
}

const FlipContainer: React.FC<FlipContainerProps> = ({
    active,
    renderers,
    minHeightClass = "min-h-[340px] md:min-h-[420px]",
    lockDuringFlip = true,
    durationMs = 550,
}) => {
    const controls = useAnimation();
    const [isFlipping, setIsFlipping] = useState(false);

    const [frontTab, setFrontTab] = useState<Tab>(active);
    const [backTab, setBackTab] = useState<Tab | null>(null);

    const frontRef = useRef<HTMLDivElement | null>(null);
    const backRef = useRef<HTMLDivElement | null>(null);
    const [frontH, setFrontH] = useState(0);
    const [backH, setBackH] = useState(0);
    const [containerH, setContainerH] = useState<number | "auto">("auto");

    const frontFace = useMemo(() => renderers[frontTab] ?? null, [frontTab, renderers]);
    const backFace = useMemo(() => (backTab ? renderers[backTab] ?? null : null), [backTab, renderers]);

    // Observa la altura del frontal en tiempo real
    useEffect(() => {
        const node = frontRef.current;
        if (!node) return;
        const ro = new ResizeObserver(() => {
            const h = node.scrollHeight;
            setFrontH(h);
            if (!isFlipping && !backTab) setContainerH(h);
        });
        ro.observe(node);
        return () => ro.disconnect();
    }, [isFlipping, backTab]);

    // Observa la altura del back en tiempo real
    useEffect(() => {
        const node = backRef.current;
        if (!node) return;
        const ro = new ResizeObserver(() => {
            const h = node.scrollHeight;
            setBackH(h);
        });
        ro.observe(node);
        return () => ro.disconnect();
    }, [backTab]);

    // Altura inicial (primer render)
    useLayoutEffect(() => {
        const h = frontRef.current?.scrollHeight ?? 0;
        setFrontH(h);
        setContainerH(h);
    }, []);

    // Gestiona el flip
    useEffect(() => {
        if (active === frontTab) return;

        setBackTab(active);

        const run = async () => {
            // da un frame para montar back y medirlo
            await new Promise(requestAnimationFrame);

            const fH = frontRef.current?.scrollHeight ?? frontH;
            const bH = backRef.current?.scrollHeight ?? backH;
            const maxH = Math.max(fH, bH, 1);

            if (lockDuringFlip) setContainerH(maxH);
            setIsFlipping(true);

            await controls.start({
                rotateY: 180,
                transition: { duration: durationMs / 1000, ease: [0.22, 1, 0.36, 1] },
            });

            setFrontTab(active);
            setBackTab(null);

            await controls.set({ rotateY: 0 });

            // Ajusta a la altura del nuevo frontal (puede haber cambiado)
            const newH = frontRef.current?.scrollHeight ?? bH;
            setContainerH(newH);
            setIsFlipping(false);
        };

        void run();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    return (
        <div className={`relative w-full ${minHeightClass} [perspective:1200px]`}>
            <motion.div
                animate={controls}
                initial={{ rotateY: 0 }}
                style={{ height: containerH === "auto" ? undefined : containerH }}
                className="relative w-full [transform-style:preserve-3d] will-change-transform"
            >
                {/* FRONT */}
                <div className="absolute inset-0 px-4 md:px-6 py-6 [backface-visibility:hidden] overflow-visible">
                    <div ref={frontRef}>{frontFace}</div>
                </div>

                {/* BACK */}
                <div
                    className="absolute inset-0 px-4 md:px-6 py-6 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-visible"
                    aria-hidden={backFace == null}
                >
                    <div ref={backRef}>{backFace}</div>
                </div>
            </motion.div>
        </div>
    );
};

export default FlipContainer;
