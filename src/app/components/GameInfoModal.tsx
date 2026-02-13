'use client';

import { Suspense } from 'react';

interface GameInfoModalProps {
    onClose: () => void;
}

export default function GameInfoModal({ onClose }: GameInfoModalProps) {
    return (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-[#f8f8f8] p-8 rounded-xl max-w-md w-full relative border-2 border-dashed border-[#FF2D55] shadow-2xl animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-[#FF2D55] mb-6 text-center uppercase tracking-widest">Cómo Jugar</h2>

                <div className="space-y-4 text-gray-700 font-medium">
                    <div className="flex gap-3 items-start">
                        <span className="bg-[#FF2D55] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
                        <p>Ingresa el nombre de tu San Valentín.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <span className="bg-[#FF2D55] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
                        <p>Dibuja algo especial para ellos usando solo <strong>5 trazos</strong>.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <span className="bg-[#FF2D55] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
                        <p>Comparte el enlace mágico con tu persona especial.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <span className="bg-[#FF2D55] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</span>
                        <p>Ellos responderán algunas preguntas, verán la tarjeta sorpresa y responderán.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <span className="bg-[#FF2D55] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">5</span>
                        <p>¡Cruza los dedos y espera! 🤞</p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-[#FF2D55] text-sm underline underline-offset-4 transition-colors"
                    >
                        ¡Entendido, a jugar!
                    </button>
                </div>
            </div>
        </div>
    );
}
