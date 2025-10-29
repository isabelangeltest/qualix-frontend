import { useState } from "react";
import { Link } from "react-router-dom";

export default function Modelos() {
    const [open, setOpen] = useState(null);
    const toggle = (index) => setOpen(open === index ? null : index);

    return (
        <div className="p-8 bg-bg dark:bg-dark_bg min-h-screen text-text dark:text-dark_text transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-playfair font-bold text-primary dark:text-dark_primary mb-6">
                    Modelos de Calidad del Software
                </h1>

                <p className="mb-8 text-lg text-textDim dark:text-dark_textDim">
                    Los modelos de calidad del software son marcos de referencia que
                    establecen criterios, procesos y niveles de madurez para medir y
                    mejorar la calidad del producto o del proceso de desarrollo. A
                    continuación, se presentan los modelos más importantes reconocidos a
                    nivel internacional, junto con sus características, ventajas y
                    aplicaciones prácticas.
                </p>

                {/* === BLOQUES DE MODELOS === */}
                {[
                    {
                        id: 1,
                        title: "📘 ISO/IEC 25010 — Modelo de Calidad del Producto",
                        link: "https://iso25000.com/index.php/en/iso-25000-standards/iso-25010",
                        content: (
                            <>
                                <p>
                                    La norma <strong>ISO/IEC 25010</strong> define un modelo de
                                    calidad que evalúa el software desde dos perspectivas:{" "}
                                    <em>calidad interna</em> y <em>calidad externa</em>. Este
                                    modelo reemplazó a la norma ISO/IEC 9126 y es la referencia más
                                    utilizada a nivel mundial.
                                </p>

                                <p className="font-medium mt-3">🔹 Atributos principales:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Funcionalidad</li>
                                    <li>Fiabilidad</li>
                                    <li>Usabilidad</li>
                                    <li>Eficiencia</li>
                                    <li>Mantenibilidad</li>
                                    <li>Portabilidad</li>
                                    <li>Compatibilidad</li>
                                    <li>Seguridad</li>
                                </ul>

                                <p className="font-medium mt-3">💡 Ejemplo:</p>
                                <p>
                                    Evaluar una aplicación web verificando si cumple sus funciones,
                                    mantiene estabilidad y puede adaptarse a distintos entornos.
                                </p>

                                <p className="font-medium mt-3">✅ Ventajas:</p>
                                <ul className="list-disc pl-6">
                                    <li>Modelo integral y actualizado.</li>
                                    <li>Permite definir métricas y comparar productos.</li>
                                    <li>Complementa la serie ISO/IEC 25000 (SQuaRE).</li>
                                </ul>

                                <p className="font-medium mt-3">⚠️ Limitaciones:</p>
                                <ul className="list-disc pl-6">
                                    <li>No define métodos de medición específicos.</li>
                                    <li>Requiere experiencia para su aplicación.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 2,
                        title: "⚙️ ISO/IEC 12207 — Procesos del Ciclo de Vida del Software",
                        link: "https://www.iso.org/standard/63712.html",
                        content: (
                            <>
                                <p>
                                    La norma <strong>ISO/IEC 12207</strong> define un marco para la{" "}
                                    <strong>gestión integral del ciclo de vida del software</strong>,
                                    desde su concepción hasta el retiro del sistema. Incluye
                                    procesos de desarrollo, mantenimiento y soporte.
                                </p>

                                <p className="font-medium mt-3">🔹 Categorías:</p>
                                <ul className="list-disc pl-6">
                                    <li>Procesos primarios (desarrollo, mantenimiento, operación).</li>
                                    <li>Procesos de apoyo (verificación, validación, documentación).</li>
                                    <li>Procesos organizacionales (gestión de calidad y mejora).</li>
                                </ul>

                                <p className="font-medium mt-3">💡 Ejemplo:</p>
                                <p>
                                    Aplicar ISO/IEC 12207 en una empresa de software permite
                                    documentar y estandarizar las actividades de desarrollo.
                                </p>

                                <p className="font-medium mt-3">✅ Ventajas:</p>
                                <ul className="list-disc pl-6">
                                    <li>Facilita la trazabilidad y mejora continua.</li>
                                    <li>Compatible con CMMI y SPICE.</li>
                                </ul>

                                <p className="font-medium mt-3">⚠️ Limitaciones:</p>
                                <ul className="list-disc pl-6">
                                    <li>Complejo para pequeñas organizaciones.</li>
                                    <li>Requiere una gestión rigurosa.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 3,
                        title: "🏗️ CMMI — Capability Maturity Model Integration",
                        link: "https://cmmiinstitute.com/",
                        content: (
                            <>
                                <p>
                                    El modelo <strong>CMMI</strong> evalúa la{" "}
                                    <strong>madurez de los procesos organizacionales</strong> a
                                    través de cinco niveles progresivos que reflejan el grado de
                                    control y optimización de los mismos.
                                </p>

                                <ul className="list-decimal pl-6">
                                    <li><strong>Nivel 1:</strong> Inicial — procesos impredecibles.</li>
                                    <li><strong>Nivel 2:</strong> Gestionado — planificados.</li>
                                    <li><strong>Nivel 3:</strong> Definido — estandarizados.</li>
                                    <li><strong>Nivel 4:</strong> Cuantitativamente gestionado.</li>
                                    <li><strong>Nivel 5:</strong> Optimizado — mejora continua.</li>
                                </ul>

                                <p className="font-medium mt-3">💡 Ejemplo:</p>
                                <p>
                                    Una organización que busca certificarse en CMMI implementa
                                    controles de calidad y revisiones sistemáticas.
                                </p>

                                <p className="font-medium mt-3">✅ Ventajas:</p>
                                <ul className="list-disc pl-6">
                                    <li>Ruta clara hacia la madurez organizacional.</li>
                                    <li>Compatible con ISO 9001 e ISO/IEC 12207.</li>
                                </ul>

                                <p className="font-medium mt-3">⚠️ Limitaciones:</p>
                                <ul className="list-disc pl-6">
                                    <li>Elevado costo de implementación.</li>
                                    <li>Más aplicable a grandes empresas.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        id: 4,
                        title: "🔧 SPICE / ISO 15504 — Evaluación y Mejora de Procesos",
                        link: "https://www.iso.org/standard/21633.html",
                        content: (
                            <>
                                <p>
                                    El modelo <strong>SPICE</strong> mide la{" "}
                                    <strong>madurez y capacidad de los procesos</strong> de
                                    desarrollo y mantenimiento, utilizando escalas de desempeño
                                    desde “no realizado” hasta “optimizado”.
                                </p>

                                <p className="font-medium mt-3">🔹 Propósito:</p>
                                <p>
                                    Determinar el grado de cumplimiento de los objetivos del
                                    proceso y fomentar la mejora continua mediante auditorías.
                                </p>

                                <p className="font-medium mt-3">✅ Ventajas:</p>
                                <ul className="list-disc pl-6">
                                    <li>Evaluación cuantitativa y comparativa.</li>
                                    <li>Compatible con CMMI y normas ISO.</li>
                                </ul>

                                <p className="font-medium mt-3">⚠️ Limitaciones:</p>
                                <ul className="list-disc pl-6">
                                    <li>Requiere formación técnica especializada.</li>
                                    <li>Complejidad en auditorías iniciales.</li>
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
                        📊 Comparativa entre los Modelos de Calidad
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm text-left text-textDim dark:text-dark_textDim">
                            <thead>
                                <tr className="bg-primary/20 dark:bg-dark_primary/20 text-primary dark:text-dark_primary">
                                    <th className="border p-2">Modelo</th>
                                    <th className="border p-2">Propósito</th>
                                    <th className="border p-2">Tipo</th>
                                    <th className="border p-2">Nivel de aplicación</th>
                                    <th className="border p-2">Orientación</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        ISO/IEC 25010
                                    </td>
                                    <td className="border p-2">
                                        Evaluar la calidad del producto software.
                                    </td>
                                    <td className="border p-2">Producto</td>
                                    <td className="border p-2">Proyecto</td>
                                    <td className="border p-2">Evaluación técnica</td>
                                </tr>
                                <tr className="bg-bg dark:bg-dark_bg">
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        ISO/IEC 12207
                                    </td>
                                    <td className="border p-2">
                                        Estandarizar procesos del ciclo de vida del software.
                                    </td>
                                    <td className="border p-2">Proceso</td>
                                    <td className="border p-2">Organizacional</td>
                                    <td className="border p-2">Gestión de procesos</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        CMMI
                                    </td>
                                    <td className="border p-2">
                                        Medir la madurez y capacidad organizacional.
                                    </td>
                                    <td className="border p-2">Madurez</td>
                                    <td className="border p-2">Organizacional</td>
                                    <td className="border p-2">Mejora continua</td>
                                </tr>
                                <tr className="bg-bg dark:bg-dark_bg">
                                    <td className="border p-2 font-medium text-text dark:text-dark_text">
                                        SPICE / ISO 15504
                                    </td>
                                    <td className="border p-2">
                                        Evaluar y mejorar la capacidad de los procesos.
                                    </td>
                                    <td className="border p-2">Madurez</td>
                                    <td className="border p-2">Organizacional</td>
                                    <td className="border p-2">Auditorías y métricas</td>
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
