"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface StaticParticlesProps {
    className?: string;
    quantity?: number;
    size?: number;
    color?: string;
}

function hexToRgb(hex: string): number[] {
    hex = hex.replace("#", "");

    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }

    const hexInt = parseInt(hex, 16);
    const red = (hexInt >> 16) & 255;
    const green = (hexInt >> 8) & 255;
    const blue = hexInt & 255;
    return [red, green, blue];
}

export const StaticParticles = ({
    className = "",
    quantity = 100,
    size = 0.4,
    color = "#ffffff",
}: StaticParticlesProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const rgb = hexToRgb(color);

    useEffect(() => {
        if (!canvasRef.current || !canvasContainerRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        const container = canvasContainerRef.current;
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.scale(dpr, dpr);

        context.clearRect(0, 0, width, height);

        const gridCells = Math.ceil(Math.sqrt(quantity));
        const cellWidth = width / gridCells;
        const cellHeight = height / gridCells;

        let particlesDrawn = 0;

        for (let i = 0; i < gridCells && particlesDrawn < quantity; i++) {
            for (let j = 0; j < gridCells && particlesDrawn < quantity; j++) {
                const x = cellWidth * i + Math.random() * cellWidth;
                const y = cellHeight * j + Math.random() * cellHeight;
                const particleSize = Math.random() * 1.5 + size;
                const alpha = Math.random() * 0.6 + 0.1;

                context.beginPath();
                context.arc(x, y, particleSize, 0, Math.PI * 2);
                context.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
                context.fill();

                particlesDrawn++;
            }
        }

        while (particlesDrawn < quantity) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const particleSize = Math.random() * 1.5 + size;
            const alpha = Math.random() * 0.6 + 0.1;

            context.beginPath();
            context.arc(x, y, particleSize, 0, Math.PI * 2);
            context.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
            context.fill();

            particlesDrawn++;
        }

        const largeParticleCount = Math.min(Math.floor(quantity * 0.1), 15);
        for (let i = 0; i < largeParticleCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const particleSize = Math.random() * 2 + size + 0.5;
            const alpha = Math.random() * 0.5 + 0.15;

            context.beginPath();
            context.arc(x, y, particleSize, 0, Math.PI * 2);
            context.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
            context.fill();
        }
    }, [quantity, size, color, rgb]);

    return (
        <div
            className={cn("pointer-events-none fixed inset-0", className)}
            ref={canvasContainerRef}
            aria-hidden="true"
            style={{ backgroundColor: "rgba(1, 6, 18, 0.97)" }}
        >
            <canvas ref={canvasRef} className="size-full" />
        </div>
    );
};