/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/app/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
            },
            lineHeight: {
                relaxed: '2',
            },
            colors: {
                oldMoneyGreen: '#fbd512',
                oldMoneyYellowHover: '#f9c31a',
                backgroundGray: '#403F45'
            },
        },
    },
    plugins: []
};