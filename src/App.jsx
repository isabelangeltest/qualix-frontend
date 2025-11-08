import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Normas from "./pages/Normas";
import Modelos from "./pages/Modelos";
import Estandares from "./pages/Estandares";
import Codigo from "./pages/Codigo";
import Pruebas from "./pages/Pruebas";
import EvaluacionWeb from "./pages/EvaluacionWeb";
import Conclusiones from "./pages/Conclusiones";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // 🔹 1. Estado para modo oscuro/claro
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🔹 2. Función para alternar el tema
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // 🔹 3. Efecto para aplicar la clase "dark" al HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-bg text-text font-inter min-h-screen flex flex-col transition-colors duration-300">
      <Router>
        {/* 🔹 Barra de navegación */}
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        {/* 🔹 Contenido principal */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/normas" element={<Normas />} />
            <Route path="/modelos" element={<Modelos />} />
            <Route path="/estandares" element={<Estandares />} />
            <Route path="/codigo" element={<Codigo />} />
            <Route path="/pruebas" element={<Pruebas />} />
            <Route path="/evaluacionweb" element={<EvaluacionWeb />} />
            <Route path="/conclusiones" element={<Conclusiones />} />
          </Routes>
        </main>

        {/* 🔹 Pie de página */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
