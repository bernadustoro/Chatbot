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
                'middle': '#343541'
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [],
}