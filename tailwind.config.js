export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'middle': '#343541',
                'black': '#2E3339',
                'blacksite': '#202123'
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [],
}