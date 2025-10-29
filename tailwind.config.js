/** @type {import('tailwindcss').Config} */
export default {
  // 🌙 Permite alternar modo oscuro agregando la clase 'dark' en el HTML
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* 🌞 MODO CLARO (Predeterminado) */
        primary: "#0284C7",     // Azul petróleo elegante
        bg: "#F8FAFC",          // Fondo principal claro
        bgSoft: "#FFFFFF",      // Tarjetas y paneles
        border: "#E2E8F0",      // Bordes suaves
        text: "#1E293B",        // Texto principal oscuro
        textDim: "#64748B",     // Texto secundario gris azulado

        /* 🌙 MODO OSCURO */
        dark_primary: "#38BDF8", // Azul cian profesional
        dark_bg: "#0F172A",      // Fondo oscuro navy
        dark_bgSoft: "#1E293B",  // Paneles y tarjetas
        dark_border: "#334155",  // Bordes azul grisáceo
        dark_text: "#E2E8F0",    // Texto principal claro
        dark_textDim: "#94A3B8", // Texto secundario gris azulado
      },

      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.1)",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },

  plugins: [],
};
