import { useState } from "react";
import { Link } from "react-router-dom";
import {
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

export default function Pruebas() {
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen(open === i ? null : i);

    // ---- Evaluador de atributos (ISO/IEC 25010) ----
    const [attrs, setAttrs] = useState({
        funcionalidad: 3.0,
        fiabilidad: 3.0,
        usabilidad: 3.0,
        eficiencia: 3.0,
        mantenibilidad: 3.0,
        portabilidad: 3.0,
    });

    const clamp05 = (v) => {
        const n = Number(v);
        if (Number.isNaN(n)) return 0;
        if (n < 0) return 0;
        if (n > 5) return 5;
        return Math.round(n * 10) / 10;
    };

    const updateAttr = (key, val) =>
        setAttrs((prev) => ({ ...prev, [key]: clamp05(val) }));

    const attrArray = Object.entries(attrs).map(([k, v]) => ({
        name:
            k.charAt(0).toUpperCase() +
            k.slice(1).replace("fiabilidad", "Fiabilidad").replace("usabilidad", "Usabilidad"),
        valor: v,
    }));

    const promedioGlobal =
        Math.round(
            (Object.values(attrs).reduce((a, b) => a + b, 0) / Object.values(attrs).length) * 10
        ) / 10;

    const colorGlobal =
        promedioGlobal < 2
            ? "bg-red-100 border-red-400 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300"
            : promedioGlobal < 3.5
                ? "bg-yellow-100 border-yellow-400 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300"
                : "bg-green-100 border-green-400 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300";

    // ---- Simulador de métricas técnicas ----
    const [defectos, setDefectos] = useState("");
    const [kloc, setKloc] = useState("");
    const [cobertura, setCobertura] = useState("");
    const [complejidad, setComplejidad] = useState("");
    const [resultado, setResultado] = useState(null);
    const [detalles, setDetalles] = useState(null);

    const calcularCalidad = () => {
        const d = parseFloat(defectos);
        const k = parseFloat(kloc);
        const c = parseFloat(cobertura);
        const x = parseFloat(complejidad);

        if ([d, k, c, x].some((v) => Number.isNaN(v))) {
            setResultado({ texto: "Completa todos los campos numéricos", color: "bg-gray-200 dark:bg-dark_bgSoft" });
            setDetalles(null);
            return;
        }

        const densidad = d / k;
        let punt = 5;
        if (densidad > 5) punt -= 1;
        if (x > 15) punt -= 1;
        if (c < 70) punt -= 1;

        let color = "bg-green-100 border-green-400 text-green-800 dark:bg-green-900/30 dark:text-green-300";
        if (punt <= 2)
            color = "bg-red-100 border-red-400 text-red-800 dark:bg-red-900/30 dark:text-red-300";
        else if (punt <= 3.5)
            color = "bg-yellow-100 border-yellow-400 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";

        setResultado({
            texto: `Calificación técnica (métricas): ${punt.toFixed(1)} / 5`,
            color,
        });

        setDetalles({
            densidad: densidad.toFixed(2),
            cobertura: clamp05(c).toFixed(1),
            complejidad: clamp05(x).toFixed(1),
        });
    };

    return (
        <div className="p-8 bg-bg dark:bg-dark_bg min-h-screen text-text dark:text-dark_text transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-playfair font-bold text-primary dark:text-dark_primary mb-6">
                    Pruebas y Evaluación de la Calidad del Software
                </h1>

                <p className="mb-8 text-lg text-textDim dark:text-dark_textDim">
                    Este módulo integra teoría y práctica:{" "}
                    <strong>pruebas de software</strong>, <strong>métricas técnicas</strong> y{" "}
                    <strong>evaluación por atributos ISO/IEC 25010</strong> para una valoración
                    profesional y cuantitativa de la calidad.
                </p>

                {/* === Acordeones === */}
                {[
                    {
                        title: "🧩 Tipos de Pruebas de Software",
                        content: (
                            <>
                                <p className="mb-2">Las pruebas verifican funcionalidad y reducen riesgo:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><strong>Unitarias:</strong> funciones/métodos individuales.</li>
                                    <li><strong>Integración:</strong> interacción entre módulos.</li>
                                    <li><strong>Sistema:</strong> comportamiento extremo a extremo.</li>
                                    <li><strong>Aceptación:</strong> validación con el usuario/cliente.</li>
                                    <li><strong>Regresión:</strong> evita reintroducir defectos tras cambios.</li>
                                </ul>
                                <p className="text-sm text-textDim mt-2">
                                    Herramientas: JUnit, Jest, Cypress, Selenium, Postman.
                                </p>
                            </>
                        ),
                    },
                    {
                        title: "📚 Atributos ISO/IEC 25010 y métricas típicas",
                        content: (
                            <div className="space-y-3">
                                <p>El modelo ISO/IEC 25010 define características de calidad del producto:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><strong>Funcionalidad:</strong> adecuación y exactitud.</li>
                                    <li><strong>Fiabilidad:</strong> madurez y tolerancia a fallos.</li>
                                    <li><strong>Usabilidad:</strong> comprensibilidad y operabilidad.</li>
                                    <li><strong>Eficiencia:</strong> rendimiento y recursos.</li>
                                    <li><strong>Mantenibilidad:</strong> analizabilidad y modificabilidad.</li>
                                    <li><strong>Portabilidad:</strong> adaptabilidad e instalabilidad.</li>
                                </ul>
                            </div>
                        ),
                    },
                ].map((item, i) => (
                    <div key={i} className="card mb-3 overflow-hidden">
                        <button
                            onClick={() => toggle(i)}
                            className="w-full text-left bg-primary/10 dark:bg-dark_primary/10 hover:bg-primary/20 dark:hover:bg-dark_primary/20 text-primary dark:text-dark_primary font-semibold px-4 py-3 flex justify-between items-center"
                        >
                            <span>{item.title}</span>
                            <span>{open === i ? "▲" : "▼"}</span>
                        </button>
                        {open === i && (
                            <div className="p-5 bg-bgSoft dark:bg-dark_bgSoft text-textDim dark:text-dark_textDim animate-fadeIn">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}

                {/* === Evaluador === */}
                <div className="mt-10 bg-bgSoft dark:bg-dark_bgSoft p-6 rounded-lg border border-border dark:border-dark_border">
                    <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-4 text-center">
                        ⭐ Evaluador de Atributos (ISO/IEC 25010)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.keys(attrs).map((k) => (
                            <div key={k} className="border border-border dark:border-dark_border rounded p-3">
                                <label className="block text-sm font-medium mb-1 capitalize">{k}</label>
                                <div className="flex items-center gap-2">
                                    <input type="range" min="0" max="5" step="0.1" value={attrs[k]} onChange={(e) => updateAttr(k, e.target.value)} className="w-full accent-primary dark:accent-dark_primary" />
                                    <input type="number" min="0" max="5" step="0.1" value={attrs[k]} onChange={(e) => updateAttr(k, e.target.value)} className="w-20 border border-border dark:border-dark_border rounded px-2 py-1 bg-bg dark:bg-dark_bg text-text dark:text-dark_text" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Radar chart */}
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <div className="h-64 bg-bg dark:bg-dark_bgSoft border border-border dark:border-dark_border rounded p-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart data={attrArray}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="name" />
                                    <PolarRadiusAxis angle={30} domain={[0, 5]} />
                                    <Tooltip />
                                    <Legend />
                                    <Radar name="Calidad" dataKey="valor" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.35} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className={`p-4 border rounded ${colorGlobal}`}>
                            <p className="text-lg font-semibold">Índice de Calidad: {promedioGlobal} / 5</p>
                            <p className="text-sm mt-1">
                                {promedioGlobal < 2
                                    ? "❌ Calidad insuficiente"
                                    : promedioGlobal < 3.5
                                        ? "⚠️ Calidad media"
                                        : "🏆 Buena calidad"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* === Simulador === */}
                <div className="mt-10 bg-bgSoft dark:bg-dark_bgSoft p-6 rounded-lg border border-border dark:border-dark_border">
                    <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-4 text-center">
                        🧮 Simulador de Métricas Técnicas
                    </h2>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {[["Número de defectos", defectos, setDefectos],
                        ["KLOC (miles de líneas de código)", kloc, setKloc],
                        ["Cobertura de pruebas (%)", cobertura, setCobertura],
                        ["Complejidad ciclomática", complejidad, setComplejidad],
                        ].map(([label, val, setter]) => (
                            <div key={label}>
                                <label className="block text-sm font-medium mb-1">{label}</label>
                                <input type="number" value={val} onChange={(e) => setter(e.target.value)} className="w-full border border-border dark:border-dark_border rounded px-2 py-1 bg-bg dark:bg-dark_bg text-text dark:text-dark_text" />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={calcularCalidad}
                            className="btn-primary text-white px-4 py-2 rounded-lg shadow-soft"
                        >
                            Calcular calidad (métricas)
                        </button>
                    </div>

                    {resultado && (
                        <div className={`mt-4 p-3 border rounded text-center font-semibold ${resultado.color}`}>
                            {resultado.texto}
                        </div>
                    )}

                    {/* Tabla de detalles */}
                    {detalles && (
                        <div className="mt-6 overflow-x-auto">
                            <table className="w-full border-collapse text-sm text-left text-textDim dark:text-dark_textDim">
                                <thead>
                                    <tr className="bg-primary/20 dark:bg-dark_primary/20 text-primary dark:text-dark_primary">
                                        <th className="border p-2">Métrica</th>
                                        <th className="border p-2">Valor</th>
                                        <th className="border p-2">Interpretación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-2 font-medium text-text dark:text-dark_text">
                                            Densidad de defectos (def/KLOC)
                                        </td>
                                        <td className="border p-2">{detalles.densidad}</td>
                                        <td className="border p-2">
                                            {parseFloat(detalles.densidad) <= 5
                                                ? "Buena (baja densidad)"
                                                : "Alta (revisar causas/prevención)"}
                                        </td>
                                    </tr>
                                    <tr className="bg-bg dark:bg-dark_bgSoft">
                                        <td className="border p-2 font-medium text-text dark:text-dark_text">
                                            Cobertura de pruebas (%)
                                        </td>
                                        <td className="border p-2">{detalles.cobertura}%</td>
                                        <td className="border p-2">
                                            {parseFloat(detalles.cobertura) >= 80
                                                ? "Excelente"
                                                : parseFloat(detalles.cobertura) >= 60
                                                    ? "Aceptable"
                                                    : "Insuficiente"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border p-2 font-medium text-text dark:text-dark_text">
                                            Complejidad ciclomática
                                        </td>
                                        <td className="border p-2">{detalles.complejidad}</td>
                                        <td className="border p-2">
                                            {parseFloat(detalles.complejidad) <= 10
                                                ? "Baja"
                                                : parseFloat(detalles.complejidad) <= 15
                                                    ? "Media"
                                                    : "Alta (refactorizar)"}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Fórmulas */}
                    <div className="mt-6 bg-bgSoft dark:bg-dark_bgSoft border border-border dark:border-dark_border rounded-lg p-4 text-sm">
                        <h3 className="font-semibold text-primary dark:text-dark_primary mb-2">
                            📘 Fórmulas
                        </h3>
                        <ul className="space-y-1 text-textDim dark:text-dark_textDim">
                            <li>
                                <strong>Densidad de defectos:</strong> D = Defectos / KLOC
                            </li>
                            <li>
                                <strong>Cobertura:</strong> C = (Líneas probadas / Totales) × 100
                            </li>
                            <li>
                                <strong>Complejidad ciclomática (McCabe):</strong> V(G) = E − N + 2P
                                <span className="ml-2 text-xs">
                                    (≤10 baja, 11–20 media, &gt;20 alta)
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* === Conclusión === */}
                <div className="mt-10 bg-bgSoft dark:bg-dark_bgSoft p-6 rounded-lg border border-border dark:border-dark_border">
                    <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-4 text-center">
                        🧩 Conclusión
                    </h2>
                    <p className="text-textDim dark:text-dark_textDim">
                        Evalúa con <strong>dos lentes complementarios</strong>: atributos ISO/IEC 25010
                        (visión del producto) y métricas técnicas (visión interna). La combinación
                        ofrece una base sólida para priorizar mejoras y sustentar resultados.
                    </p>
                </div>

                {/* Botón volver */}
                <div className="mt-8 flex justify-end">
                    <Link to="/" className="btn-ghost px-4 py-2 rounded-lg">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
