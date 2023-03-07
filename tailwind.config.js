/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                heroBg: "url('/hero-bg.jpg')"
            }),
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
                Sora: ["Sora", "sans-serif"]
            },
            colors: {
                primary: "#0B8E00"
            }
        }
    },
    plugins: []
};
