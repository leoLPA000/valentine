import LZString from 'lz-string';

export interface Stroke {
    color: string;
    path: Array<{ x: number, y: number }>;
}

export interface TextElement {
    id: string;
    text: string;
    x: number;
    y: number;
}

export const ROMANTIC_QUOTES = [
    "Todas las historias de amor son hermosas, pero la nuestra es mi favorita.",
    "Eres mi sol, mi luna y todas mis estrellas.",
    "Te amo más de lo que las palabras pueden expresar, más que la vista, el espacio y la libertad.",
    "Si tuviera una flor por cada vez que pienso en ti... podría caminar por mi jardín para siempre.",
    "Eres la persona más maravillosa, encantadora, tierna y hermosa que he conocido.",
    "Mi corazón es y siempre será tuyo.",
    "Para el mundo puedes ser una persona, pero para una persona tú eres el mundo.",
    "Vi que eras perfecto/a, y por eso te amé. Luego vi que no eras perfecto/a y te amé aún más.",
    "Eres mi corazón, mi vida, mi único pensamiento.",
    "Juro que no podría amarte más de lo que te amo ahora, pero sé que mañana lo haré."
];

export interface ShareData {
    s: string; // sender name
    r?: string; // receiver name (optional for backward compatibility)
    d: Stroke[]; // drawing data
    q?: number; // quote index
    t?: TextElement[]; // text elements (optional)
}

export const encodeData = (data: ShareData): string => {
    const json = JSON.stringify(data);
    return LZString.compressToEncodedURIComponent(json);
};

export const decodeData = (encoded: string): ShareData | null => {
    try {
        const json = LZString.decompressFromEncodedURIComponent(encoded);
        if (!json) return null;
        return JSON.parse(json);
    } catch (e) {
        console.error("Failed to decode URL data", e);
        return null;
    }
};
