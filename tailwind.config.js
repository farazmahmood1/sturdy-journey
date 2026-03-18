/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./constants.tsx",
    ],
    theme: {
        extend: {
            colors: {
                'khidmaat-red': '#f02327',
                'khidmaat-bg': '#fafbfc',
            }
        },
    },
    plugins: [],
}
