/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat"],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                blue01: "#007AFF",
                blue02: "#012D56",
                purple01: "#716BC2",
                purple02: "#4733B7",
                orange01: "#E29272",
                black01: "#1D2027",
                gray01: "#363636",
            },
            screens: {
                sm: "320px",
                lg: "768px",
                xl: "1024px",
                "2xl": "1440px",
            },
            container: {},
            backgroundImage: {},
        },
    },
    plugins: [],
};
