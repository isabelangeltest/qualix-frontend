import { useState } from "react";
import { Link } from "react-router-dom";

export default function Normas() {
    const [open, setOpen] = useState(null);
    const toggle = (index) => setOpen(open === index ? null : index);

    return (
        <div className="p-8 bg-bg dark:bg-dark_bg min-h-screen text-text dark:text-dark_text transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-playfair font-bold text-primary dark:text-dark_primary mb-6">
                    Normas de Calidad del Software
                </h1>

                <p className="mb-8 text-lg text-textDim dark:text-dark_textDim">
                    Las normas de calidad del software establecen principios y
                    lineamientos que permiten garantizar la excelencia en los procesos de
                    desarrollo, mantenimiento y gestión de sistemas informáticos. A través
                    de estas normas se busca estandarizar las prácticas, asegurar la
                    satisfacción del cliente y promover la mejora continua en la
                    ingeniería del software.
                </p>

                {/* === BLOQUES DE NORMAS === */}
                {[
                    {
                        id: 1,
                        title: "🏢 ISO 9001 — Gestión de la Calidad",
                        link: "https://www.iso.org/iso-9001-quality-management.html",
                        content: (
                            <>
                                <p>
                                    La norma <strong>ISO 9001</strong> define los requisitos para
                                    un <strong>sistema de gestión de calidad (SGC)</strong>{" "}
                                    aplicable a cualquier organización. En el contexto del
                                    software, garantiza que los procesos de desarrollo estén
                                    orientados a la mejora continua y la satisfacción del cliente.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    🔹 Principios clave:
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Enfoque al cliente.</li>
                                    <li>Liderazgo y compromiso organizacional.</li>
                                    <li>Enfoque basado en procesos.</li>
                                    <li>Mejora continua.</li>
                                </ul>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    💡 Ejemplo:
                                </p>
                                <p>
                                    Una empresa de software implementa ISO 9001 para documentar y
                                    controlar su proceso de desarrollo, asegurando que todos los
                                    proyectos sigan los mismos estándares de calidad.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    ✅ Ventajas:
                                </p>
                                <ul className="list-disc pl-6">
                                    <li>Mejora la satisfacción del cliente.</li>
                                    <li>Establece procesos reproducibles y controlados.</li>
                                    <li>Reconocimiento internacional.</li>
                                </ul>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    ⚠️ Limitaciones:
                                </p>
                                <ul className="list-disc pl-6">
                                    <li>No se centra específicamente en el software.</li>
                                    <li>
                                        Requiere auditorías periódicas y mantenimiento documental.
                                    </li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 2,
                        title: "💻 ISO/IEC 25000 — Serie SQuaRE",
                        link: "https://iso25000.com/",
                        content: (
                            <>
                                <p>
                                    La serie <strong>ISO/IEC 25000 (SQuaRE)</strong> establece
                                    normas para definir y evaluar la calidad del software en todas
                                    sus fases. Su núcleo es el modelo ISO/IEC 25010.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    🔹 Objetivo:
                                </p>
                                <p>
                                    Proporcionar una estructura común para describir, medir y
                                    evaluar la calidad de productos de software y datos.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    💡 Ejemplo:
                                </p>
                                <p>
                                    Evaluar la usabilidad y seguridad de una aplicación mediante
                                    métricas definidas en la familia ISO/IEC 2502n.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    ✅ Ventajas:
                                </p>
                                <ul className="list-disc pl-6">
                                    <li>Define métricas precisas de evaluación de calidad.</li>
                                    <li>Aplicable tanto a productos como a procesos.</li>
                                </ul>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    ⚠️ Limitaciones:
                                </p>
                                <ul className="list-disc pl-6">
                                    <li>
                                        Implementación compleja si no se cuenta con especialistas.
                                    </li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 3,
                        title: "⚙️ ISO/IEC 12207 — Ciclo de Vida del Software",
                        link: "https://www.iso.org/standard/63712.html",
                        content: (
                            <>
                                <p>
                                    La norma <strong>ISO/IEC 12207</strong> define los procesos
                                    del ciclo de vida del software, desde su concepción hasta la
                                    finalización del soporte.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    💡 Ejemplo:
                                </p>
                                <p>
                                    Una compañía usa ISO/IEC 12207 para documentar roles, entradas
                                    y salidas en cada fase de desarrollo.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    ✅ Ventajas:
                                </p>
                                <ul className="list-disc pl-6">
                                    <li>Estandariza la gestión del ciclo de vida.</li>
                                    <li>Compatible con CMMI y SPICE.</li>
                                </ul>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    ⚠️ Limitaciones:
                                </p>
                                <ul className="list-disc pl-6">
                                    <li>Exige documentación extensa.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 4,
                        title: "📊 ISO/IEC 15504 — SPICE (Evaluación de Procesos)",
                        link: "https://www.iso.org/standard/21633.html",
                        content: (
                            <>
                                <p>
                                    El modelo <strong>SPICE</strong> evalúa la madurez y capacidad
                                    de los procesos de software, sirviendo como base para
                                    auditorías y certificaciones.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    💡 Ejemplo:
                                </p>
                                <p>
                                    Una auditoría basada en ISO/IEC 15504 permite medir la
                                    capacidad de los procesos y definir planes de mejora.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    ✅ Ventajas:
                                </p>
                                <ul className="list-disc pl-6">
                                    <li>Permite diagnóstico y mejora continua.</li>
                                    <li>Usado en certificaciones internacionales.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 5,
                        title: "🧩 IEEE 730 — Norma de Aseguramiento de Calidad",
                        link: "https://standards.ieee.org/standard/730-2014.html",
                        content: (
                            <>
                                <p>
                                    La norma <strong>IEEE 730</strong> define los requisitos para
                                    un <strong>plan de aseguramiento de la calidad del software</strong> (SQAP),
                                    estableciendo prácticas que garantizan estándares técnicos y
                                    de gestión.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    💡 Ejemplo:
                                </p>
                                <p>
                                    Un equipo QA usa IEEE 730 para planificar revisiones de código
                                    y pruebas de validación sistemáticas.
                                </p>

                                <p className="font-medium text-text dark:text-dark_text mt-3">
                                    ✅ Ventajas:
                                </p>
                                <ul className="list-disc pl-6">
                                    <li>Define responsabilidades del equipo de calidad.</li>
                                    <li>Complementa normas como ISO/IEC 12207.</li>
                                </ul>
                            </>
                        ),
                    },
                ].map(({ id, title, link, content }) => (
                    <div key={id} className="card mb-4 overflow-hidden">
                        <button
                            onClick={() => toggle(id)}
                            className="w-full text-left bg-primary/10 dark:bg-dark_primary/10 hover:bg-primary/20 dark:hover:bg-dark_primary/20 text-primary dark:text-dark_primary font-semibold px-4 py-3 flex justify-between items-center transition"
                        >
                            <span>{title}</span>
                            <span>{open === id ? "▲" : "▼"}</span>
                        </button>

                        {open === id && (
                            <div className="p-5 bg-bgSoft dark:bg-dark_bgSoft text-textDim dark:text-dark_textDim space-y-3 animate-fadeIn">
                                {content}
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary dark:text-dark_primary hover:underline"
                                >
                                    🌐 Ver más información
                                </a>
                            </div>
                        )}
                    </div>
                ))}

                {/* === TABLA COMPARATIVA === */}
                <div className="mt-10 bg-bgSoft dark:bg-dark_bgSoft p-6 rounded-lg shadow-soft border border-border dark:border-dark_border">
                    <h2 className="text-2xl font-playfair font-semibold text-primary dark:text-dark_primary mb-4 text-center">
                        📊 Comparativa entre Normas de Calidad
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm text-left text-textDim dark:text-dark_textDim">
                            <thead>
                                <tr className="bg-primary/20 dark:bg-dark_primary/20 text-primary dark:text-dark_primary">
                                    <th className="border border-border dark:border-dark_border p-2">
                                        Norma
                                    </th>
                                    <th className="border border-border dark:border-dark_border p-2">
                                        Propósito
                                    </th>
                                    <th className="border border-border dark:border-dark_border p-2">
                                        Aplicación
                                    </th>
                                    <th className="border border-border dark:border-dark_border p-2">
                                        Tipo
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        ISO 9001
                                    </td>
                                    <td className="border p-2">
                                        Sistema de gestión de calidad.
                                    </td>
                                    <td className="border p-2">Organizacional</td>
                                    <td className="border p-2">General</td>
                                </tr>
                                <tr className="bg-bg dark:bg-dark_bg">
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        ISO/IEC 25000
                                    </td>
                                    <td className="border p-2">
                                        Evaluación de la calidad del software.
                                    </td>
                                    <td className="border p-2">Producto</td>
                                    <td className="border p-2">Técnica</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        ISO/IEC 12207
                                    </td>
                                    <td className="border p-2">
                                        Procesos del ciclo de vida del software.
                                    </td>
                                    <td className="border p-2">Proceso</td>
                                    <td className="border p-2">Gestión</td>
                                </tr>
                                <tr className="bg-bg dark:bg-dark_bg">
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        ISO/IEC 15504
                                    </td>
                                    <td className="border p-2">
                                        Evaluación y mejora de procesos.
                                    </td>
                                    <td className="border p-2">Proceso</td>
                                    <td className="border p-2">Auditoría</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        IEEE 730
                                    </td>
                                    <td className="border p-2">
                                        Aseguramiento de la calidad del software.
                                    </td>
                                    <td className="border p-2">Proyecto</td>
                                    <td className="border p-2">Operativa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* === BOTÓN DE RETORNO === */}
                <div className="mt-8 flex justify-end">
                    <Link to="/" className="btn-ghost px-4 py-2 rounded-lg">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
