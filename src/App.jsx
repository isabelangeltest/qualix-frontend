import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importación de páginas
import Inicio from "./pages/Inicio";
import Normas from "./pages/Normas";
import Modelos from "./pages/Modelos";
import Estandares from "./pages/Estandares";
import Codigo from "./pages/Codigo";
import Pruebas from "./pages/Pruebas";
import EvaluacionWeb from "./pages/EvaluacionWeb";
import Conclusiones from "./pages/Conclusiones";

// Componentes globales
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-bg text-text font-inter min-h-screen flex flex-col">
      <Router>
        {/* Barra de navegación */}
        <Navbar />

        {/* Contenido principal */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/normas" element={<Normas />} />
            <Route path="/modelos" element={<Modelos />} />
            <Route path="/estandares" element={<Estandares />} />
            <Route path="/codigo" element={<Codigo />} />
            <Route path="/pruebas" element={<Pruebas />} />
            <Route path="/evaluacionWeb" element={<EvaluacionWeb />} />
            <Route path="/conclusiones" element={<Conclusiones />} />
          </Routes>
        </main>

        {/* Pie de página */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
