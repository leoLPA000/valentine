import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: '¿Quieres Ser Mi San Valentín?',
        short_name: 'San Valentín',
        description: 'La forma más única de hacer la gran pregunta. 💌',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#FF2D55',
        icons: [
            {
                src: '/willyoubemyvalentine.webp',
                sizes: '512x512',
                type: 'image/webp',
            },
        ],
    };
}
