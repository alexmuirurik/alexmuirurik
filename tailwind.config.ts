import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['selector', '[data-theme="dark"]'],
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                'ghost-white': '#f8f9fa',
                'rich-black': '#040b14',
                'gun-metal': '#2c2f3f',
                'platinum-light': '#e7e7e7',
                'card-dark': '#212529',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                pacifico: "'Pacifico'",
                nunito: "'Nunito'"
            },
        },
    },
    plugins: [],
}
export default config
