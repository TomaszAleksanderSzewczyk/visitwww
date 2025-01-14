/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/app/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
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