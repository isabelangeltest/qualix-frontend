import { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export default function SimuladorMetricas() {
    const [defectos, setDefectos] = useState("");
    const [lineas, setLineas] = useState("");
    const [casos, setCasos] = useState("");
    const [casosExitosos, setCasosExitosos] = useState("");
    const [resultados, setResultados] = useState(null);
    const [mensaje, setMensaje] = useState("");

    const calcular = () => {
        const densidad =
            defectos && lineas ? (defectos / (lineas / 1000)).toFixed(2) : null;
        const cobertura =
            casos && casosExitosos
                ? ((casosExitosos / casos) * 100).toFixed(1)
                : null;

        let indiceGlobal = null;
        if (densidad && cobertura) {
            const calidadDefectos =
                densidad < 5 ? 5 : densidad < 10 ? 3.5 : 1.5;
            const calidadCobertura =
                cobertura > 80 ? 5 : cobertura > 50 ? 3.5 : 1.5;
            indiceGlobal = ((calidadDefectos + calidadCobertura) / 2).toFixed(1);
        }

        const fecha = new Date().toLocaleString("es-CO", {
            dateStyle: "full",
            timeStyle: "short",
        });

        const data = { densidad, cobertura, indiceGlobal, fecha };
        setResultados(data);
        localStorage.setItem("resultadoCalidad", JSON.stringify(data));

        setMensaje("✅ Resultado actualizado correctamente");
        setTimeout(() => setMensaje(""), 3000);
    };

    const color = (valor) => {
        if (valor === null) return "";
        if (valor < 2) return "bg-red-100 border-red-400 text-red-700";
        if (valor < 3.5) return "bg-yellow-100 border-yellow-400 text-yellow-700";
        return "bg-green-100 border-green-400 text-green-700";
    };

    useEffect(() => {
        const guardado = localStorage.getItem("resultadoCalidad");
        if (guardado) setResultados(JSON.parse(guardado));
    }, []);

    // Datos para el gráfico
    const chartData = resultados
        ? [
            {
                name: "Densidad de Defectos",
                valor: resultados.densidad ? parseFloat(resultados.densidad) : 0,
            },
            {
                name: "Cobertura (%)",
                valor: resultados.cobertura ? parseFloat(resultados.cobertura) : 0,
            },
            {
                name: "Índice Global (0-5)",
                valor: resultados.indiceGlobal
                    ? parseFloat(resultados.indiceGlobal)
                    : 0,
            },
        ]
        : [];

    return (
        <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        Defectos encontrados
                    </label>
                    <input
                        type="number"
                        min="0"
                        value={defectos}
                        onChange={(e) => setDefectos(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        Líneas de código (LOC)
                    </label>
                    <input
                        type="number"
                        min="1"
                        value={lineas}
                        onChange={(e) => setLineas(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        Casos de prueba totales
                    </label>
                    <input
                        type="number"
                        min="1"
                        value={casos}
                        onChange={(e) => setCasos(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        Casos de prueba exitosos
                    </label>
                    <input
                        type="number"
                        min="0"
                        value={casosExitosos}
                        onChange={(e) => setCasosExitosos(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
            </div>

            <button
                onClick={calcular}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Calcular métricas
            </button>
            {/* Fórmulas visibles en formato matemático */}
            <div className="mt-6 bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">📘 Fórmulas utilizadas</h3>

                <div className="space-y-4 text-gray-800">
                    <div>
                        <p className="font-medium">Densidad de defectos (DD):</p>
                        <BlockMath math="DD = \dfrac{\text{Defectos}}{\text{Líneas de código} / 1000}" />
                    </div>

                    <div>
                        <p className="font-medium">Cobertura de pruebas (CP):</p>
                        <BlockMath math="CP = \left( \dfrac{\text{Casos exitosos}}{\text{Casos totales}} \right) \times 100" />
                    </div>

                    <div>
                        <p className="font-medium">Índice Global de Calidad (IGC):</p>
                        <BlockMath math="IGC = \dfrac{\text{Calidad}_{DD} + \text{Calidad}_{CP}}{2}" />
                    </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 italic">
                    Las fórmulas permiten representar de forma cuantitativa la calidad del software
                    en función de la cantidad de defectos detectados y la cobertura de pruebas realizada.
                </p>
            </div>


            {mensaje && (
                <p className="mt-4 text-green-700 font-medium animate-fade">
                    {mensaje}
                </p>
            )}

            {resultados && (
                <div className="mt-6 space-y-4">
                    <div
                        className={`p-4 border rounded-lg text-center ${color(
                            parseFloat(resultados.indiceGlobal)
                        )}`}
                    >
                        <p className="text-lg font-semibold">
                            Índice Global de Calidad (IGC):{" "}
                            <span className="text-blue-700">
                                {resultados.indiceGlobal} / 5
                            </span>
                        </p>
                        <p className="text-sm text-gray-700 mt-1 italic">
                            Fecha de evaluación: {resultados.fecha}
                        </p>
                        <p className="mt-1">
                            {resultados.indiceGlobal < 2
                                ? "❌ Calidad insuficiente. Se requiere mejora integral."
                                : resultados.indiceGlobal < 3.5
                                    ? "⚠️ Calidad media. Aplicar acciones correctivas."
                                    : "🏆 Alta calidad. Cumple con los estándares esperados."}
                        </p>
                    </div>

                    {/* 📊 Gráfico de barras */}
                    <div className="bg-white p-4 border rounded-lg shadow-sm">
                        <h3 className="text-center text-lg font-semibold text-blue-700 mb-3">
                            Visualización de Métricas
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="valor" fill="#2563eb" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
    );
}
