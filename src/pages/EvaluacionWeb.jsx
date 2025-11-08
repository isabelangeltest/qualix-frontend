import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaTrashAlt, FaDownload, FaHistory } from "react-icons/fa";

export default function EvaluacionWeb() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [evaluaciones, setEvaluaciones] = useState([]);

  // Evaluación manual
  const [usabilidad, setUsabilidad] = useState(3);
  const [interactividad, setInteractividad] = useState(3);
  const [contenido, setContenido] = useState(3);
  const [diseno, setDiseno] = useState(3);
  const [observaciones, setObservaciones] = useState("");
  const [observacionesMetricas, setObservacionesMetricas] = useState({
    usabilidad: "",
    interactividad: "",
    contenido: "",
    diseno: "",
  });


  // 🔹 Nueva función: normalizar 0–100 a 1–5
  const normalizar = (valor) => (valor ? (valor / 20).toFixed(1) : 0);

  // --- Cálculos ---
  const promedioPedagogico = ((usabilidad + interactividad + contenido + diseno) / 4).toFixed(1);

  const promedioAutomatico = metrics
    ? (
      (normalizar(metrics.performance) * 1 +
        normalizar(metrics.accessibility) * 1 +
        normalizar(metrics.bestPractices) * 1 +
        normalizar(metrics.seo) * 1) /
      4
    ).toFixed(1)
    : 0;

  const calificacionGlobal = (promedioAutomatico * 0.6 + promedioPedagogico * 0.4).toFixed(1);

  // --- Local storage ---
  useEffect(() => {
    const data = localStorage.getItem("evaluacionesWeb");
    if (data) setEvaluaciones(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("evaluacionesWeb", JSON.stringify(evaluaciones));
  }, [evaluaciones]);

  // --- Análisis automático ---
  const analizarSitio = async () => {
    if (!url.trim()) {
      toast.error("⚠️ Ingresa una URL válida antes de analizar.");
      return;
    }

    setLoading(true);
    setMetrics(null);

    try {
      const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";
      const response = await fetch(`${API_BASE}/api/auditar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (data.error) {
        toast.error("❌ No se pudieron obtener métricas.");
        setLoading(false);
        return;
      }

      setMetrics(data);
      toast.success("✅ Análisis completado correctamente.");
    } catch {
      toast.error("🚫 Error al conectar con el servidor local.");
    } finally {
      setLoading(false);
    }
  };

  // --- Guardar evaluación ---
  const guardarEvaluacion = () => {
    if (!url || !metrics) {
      toast.error("⚠️ Debes analizar una página antes de guardar.");
      return;
    }

    const nueva = {
      id: Date.now(),
      url,
      fecha: new Date().toLocaleString(),
      automatico: promedioAutomatico,
      pedagogico: promedioPedagogico,
      global: calificacionGlobal,
      observaciones, // observaciones generales
      observacionesMetricas, // 👈 nuevo: observaciones por cada métrica
    };

    setEvaluaciones((prev) => [...prev, nueva]);

    // Limpieza de campos después de guardar
    setObservaciones("");
    setObservacionesMetricas({
      usabilidad: "",
      interactividad: "",
      contenido: "",
      diseno: "",
    });

    toast.success("💾 Evaluación guardada correctamente.");
  };

  // --- Exportar PDF ---
  const exportarPDF = () => {
    if (evaluaciones.length === 0) {
      toast.error("⚠️ No hay evaluaciones para exportar.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Informe de Evaluaciones de Calidad de Software", 14, 15);

    // 📋 Tabla principal (resumen general)
    autoTable(doc, {
      startY: 25,
      head: [["Fecha", "URL", "Automático (1–5)", "Manual (1–5)", "Global (1–5)", "Observaciones generales"]],
      body: evaluaciones.map((e) => [
        e.fecha,
        e.url,
        e.automatico,
        e.pedagogico,
        e.global,
        e.observaciones || "—",
      ]),
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [37, 99, 235], textColor: 255 },
    });

    // 🧩 Observaciones detalladas por métrica (una tabla debajo por evaluación)
    evaluaciones.forEach((e) => {
      if (e.observacionesMetricas) {
        const startY = doc.lastAutoTable.finalY + 8;

        doc.setFontSize(12);
        doc.setTextColor(37, 99, 235);
        doc.text("Observaciones por Métrica", 14, startY - 2);
        doc.setTextColor(0, 0, 0);

        autoTable(doc, {
          startY,
          head: [["Usabilidad", "Interactividad", "Contenido", "Diseño"]],
          body: [
            [
              e.observacionesMetricas.usabilidad || "—",
              e.observacionesMetricas.interactividad || "—",
              e.observacionesMetricas.contenido || "—",
              e.observacionesMetricas.diseno || "—",
            ],
          ],
          theme: "grid",
          styles: { fontSize: 9 },
          headStyles: { fillColor: [59, 130, 246], textColor: 255 },
        });
      }
    });

    // 💾 Guardar el PDF
    doc.save("Informe_Evaluaciones.pdf");
    toast.success("📄 Informe PDF generado correctamente.");
  };


  // --- Eliminar y limpiar ---
  const eliminarEvaluacion = (id) => {
    setEvaluaciones(evaluaciones.filter((e) => e.id !== id));
    toast("🗑️ Evaluación eliminada.");
  };

  const limpiarTodo = () => {
    if (evaluaciones.length === 0) {
      toast.error("⚠️ No hay evaluaciones para limpiar.");
      return;
    }
    setEvaluaciones([]);
    localStorage.removeItem("evaluacionesWeb");
    toast("🧹 Historial limpiado con éxito.");
  };

  return (
    <div className="w-full p-[45px] bg-bg dark:bg-dark_bg text-text dark:text-dark_text transition-colors duration-300">
      {/* INTRODUCCIÓN */}
      <section className="mb-10 bg-bgSoft dark:bg-dark_bgSoft border-l-4 border-primary dark:border-dark_primary p-6 rounded-lg shadow-soft">
        <h1 className="text-3xl font-playfair font-bold text-primary dark:text-dark_primary mb-4">
          Evaluación de la Calidad del Software
        </h1>
        <p className="text-textDim dark:text-dark_textDim mb-3">
          La evaluación de calidad en el software mide el cumplimiento de los estándares técnicos,
          de proceso y de producto. Este módulo combina <strong>análisis automáticos</strong> y{" "}
          <strong>evaluaciones manuales</strong> para obtener una visión integral del rendimiento
          y la experiencia del usuario.
        </p>
        <p className="text-textDim dark:text-dark_textDim">
          <strong>Calificación Global = (0.6 × Automático) + (0.4 × Manual)</strong>
        </p>
      </section>

      {/* ANÁLISIS AUTOMÁTICO */}
      <div className="card mb-8">
        <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-3">
          1. Análisis Automático
        </h2>
        <p className="text-textDim dark:text-dark_textDim mb-4">
          Audita el sitio con <strong>Lighthouse</strong> midiendo rendimiento, accesibilidad,
          SEO y buenas prácticas. Estas son <strong>métricas de producto</strong> que reflejan
          la calidad técnica del software.
        </p>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://ejemplo.com"
          className="border border-border dark:border-dark_border rounded w-full p-2 mb-4 bg-bg dark:bg-dark_bg text-text dark:text-dark_text"
        />

        <button
          onClick={analizarSitio}
          disabled={loading}
          className={`btn-primary px-4 py-2 rounded-lg shadow-soft flex items-center justify-center gap-2 ${loading ? "opacity-90 cursor-not-allowed" : ""
            }`}
        >
          {loading && <span className="qx-spinner"></span>}
          {loading ? "Analizando..." : "Analizar automáticamente"}
        </button>



        {metrics && (
          <div className="mt-6 space-y-2">
            <p><strong>Rendimiento:</strong> {normalizar(metrics.performance)} / 5 ({metrics.performance}%)</p>
            <p><strong>Accesibilidad:</strong> {normalizar(metrics.accessibility)} / 5 ({metrics.accessibility}%)</p>
            <p><strong>Buenas prácticas:</strong> {normalizar(metrics.bestPractices)} / 5 ({metrics.bestPractices}%)</p>
            <p><strong>SEO:</strong> {normalizar(metrics.seo)} / 5 ({metrics.seo}%)</p>
            <p className="font-semibold text-lg text-primary dark:text-dark_primary mt-4">
              Promedio automático: {promedioAutomatico} / 5
            </p>
          </div>
        )}
      </div>

      {/* EVALUACIÓN MANUAL */}
      <div className="card mb-8">
        <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-3">
          2. Evaluación Manual
        </h2>
        <p className="text-textDim dark:text-dark_textDim mb-4">
          Evalúa la experiencia percibida: usabilidad, interactividad, contenido y diseño.
          Corresponde a las <strong>métricas de proceso</strong>, centradas en el usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["Usabilidad", usabilidad, setUsabilidad, "usabilidad"],
            ["Interactividad", interactividad, setInteractividad, "interactividad"],
            ["Contenido", contenido, setContenido, "contenido"],
            ["Diseño", diseno, setDiseno, "diseno"],
          ].map(([label, value, setter, key]) => (
            <div key={label} className="space-y-2">
              <label className="font-medium">{label}</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={value}
                  onChange={(e) => setter(parseFloat(e.target.value))}
                  className="w-full accent-primary dark:accent-dark_primary"
                />
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={value}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (val >= 0 && val <= 5) setter(val);
                  }}
                  onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                  className="w-20 border border-border dark:border-dark_border rounded px-2 py-1 bg-bg dark:bg-dark_bg text-center"
                />
              </div>
              <p className="text-sm text-textDim dark:text-dark_textDim">Valor: {value}</p>

              {/* 📝 Observaciones individuales por métrica */}
              <textarea
                placeholder={`Observaciones sobre ${label.toLowerCase()}... (opcional)`}
                value={observacionesMetricas[key]}
                onChange={(e) =>
                  setObservacionesMetricas({
                    ...observacionesMetricas,
                    [key]: e.target.value,
                  })
                }
                className="w-full border border-border dark:border-dark_border rounded p-2 bg-bg dark:bg-dark_bg text-sm text-text dark:text-dark_text"
                rows="2"
              />
            </div>
          ))}
        </div>

        {/* Observaciones generales (ya existente) */}
        <textarea
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
          placeholder="Observaciones o comentarios generales..."
          className="w-full border border-border dark:border-dark_border rounded mt-4 p-2 bg-bg dark:bg-dark_bg text-text dark:text-dark_text text-sm"
          rows="3"
        ></textarea>

        <p className="font-semibold text-lg text-primary dark:text-dark_primary mt-6">
          Promedio manual: {promedioPedagogico} / 5
        </p>
      </div>


      {/* CALIFICACIÓN GLOBAL */}
      <div className="bg-primary/10 dark:bg-dark_primary/10 border border-primary/30 dark:border-dark_primary/30 p-6 rounded-lg shadow-soft mb-8">
        <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-2">
          3. Calificación Global
        </h2>
        <p className="text-textDim dark:text-dark_textDim mb-3">
          Combina los resultados automáticos y manuales para reflejar la calidad integral.
        </p>
        <p className="text-3xl font-bold text-primary dark:text-dark_primary">
          {calificacionGlobal} / 5
        </p>
        <button
          onClick={guardarEvaluacion}
          className="btn-primary mt-4 px-6 py-2 rounded-lg"
        >
          Guardar Evaluación
        </button>
      </div>


      {/* HISTORIAL */}
      {evaluaciones.length > 0 && (
        <div className="card p-6 rounded-lg border border-border dark:border-dark_border bg-bgSoft dark:bg-dark_bgSoft shadow-soft mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-playfair font-semibold text-primary dark:text-dark_primary flex items-center gap-2">
              <FaHistory className="text-primary dark:text-dark_primary" />
              Historial de Evaluaciones
            </h2>

            <div className="space-x-2 flex items-center">
              <button
                onClick={exportarPDF}
                className="flex items-center gap-2 bg-primary hover:bg-[#1E3A8A] text-white px-3 py-1 rounded-lg shadow-soft transition"
              >
                <FaDownload />
                Descargar PDF
              </button>
              <button
                onClick={limpiarTodo}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg shadow-soft transition"
              >
                <FaTrashAlt />
                Limpiar Todo
              </button>
            </div>
          </div>

          <table className="w-full text-sm border border-border dark:border-dark_border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-primary/20 dark:bg-dark_primary/20 text-primary dark:text-dark_primary">
                <th className="px-4 py-2 border">Fecha</th>
                <th className="px-4 py-2 border">URL</th>
                <th className="px-4 py-2 border">Automático</th>
                <th className="px-4 py-2 border">Manual</th>
                <th className="px-4 py-2 border">Global</th>
                <th className="px-4 py-2 border">Observaciones</th>
                <th className="px-4 py-2 border">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {evaluaciones.map((e) => (
                <tr
                  key={e.id}
                  className="text-center border-t border-border dark:border-dark_border hover:bg-primary/5 dark:hover:bg-dark_primary/10 transition"
                >
                  <td className="px-4 py-2 border">{e.fecha}</td>
                  <td className="px-4 py-2 border text-primary dark:text-dark_primary underline">
                    <a href={e.url} target="_blank" rel="noreferrer">
                      {e.url}
                    </a>
                  </td>
                  <td className="px-4 py-2 border">{e.automatico}</td>
                  <td className="px-4 py-2 border">{e.pedagogico}</td>
                  <td className="px-4 py-2 border font-semibold text-primary dark:text-dark_primary">
                    {e.global}
                  </td>
                  <td className="px-4 py-2 border text-left">{e.observaciones || "—"}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => eliminarEvaluacion(e.id)}
                      className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-lg shadow-soft transition"
                    >
                      <FaTrashAlt />
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}


      {/* BOTÓN VOLVER */}
      <div className="mt-8 text-center">
        <Link to="/" className="btn-ghost px-4 py-2 rounded-lg">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}