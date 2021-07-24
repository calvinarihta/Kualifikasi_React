const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                normal: "#dfdfcd",
                "normal-text": "#6a6a44",
                fighting: "#81201b",
                "fighting-text": "#e58883",
                rock: "#e2d59f",
                "rock-text": "#817027",
                bug: "#e3ed95",
                "bug-text": "#788417",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
